---
title: "mariadb multi source replication"
date: "2017-04-28T17:51:00.000Z"
layout: post
draft: false
path: "/posts/mariadb-multi-source-replication/"
category: "tech"
description: "slave가 될 mysql 인스턴스의 설정에 아래의 부분을 추가한다..."
tags:
  - "mariadb"
  - "replication"
---
## multi source replication 절차
slave가 될 mysql 인스턴스의 설정에 아래의 부분을 추가한다.

```bash
# /etc/mysql/maridb.conf.d/50-server.cnf
[mysqld]
server_id=19823759 # master와 겹치지 않게
replicate-ignore-db=mysql # mysql 데이터베이스는 복제하지 않음
```

master 데이터베이스에서 replication 용 계정 생성 후 권한을 부여한다
```bash
grant replication slave on *.* to ‘repl’@‘%’ identified by ‘!repl123’;
```

mysqldump 를 이용해서 master가 될 데이터베이스에서 덤프를 받는다.
```bash
mysqldump --databases database_1 database_2 --single_transaction --master-data=1 -h host_path -u account -p > dump.sql
```

락이 걸리는 걸 방지하기 위해 `—single-transaction` 옵션 추가해야 하며, 덤프를 받은 시점의 binlog 파일과 포지션을 확인하기 위해 `—master-data=1` 옵션 추가한다. 그러면 덤프 파일 상단에 `change master … ` 구문이 생성되는데 multi source 로부터 replication 을 받아야 하기 때문에 아래와 같이 수정해준다.

```bash
CHANGE MASTER 'master_name' TO
master_host='host_path',
master_user='account',
master_password='password',
master_port=3306,
MASTER_LOG_FILE='mysql-bin-changelog.052616', MASTER_LOG_POS=886626; # dump에 기록된 그대로 유지
```

만약 덤프 파일이 너무 커서 수정하기가 힘든 경우 아래와 같이 파일을 잘라서 수정한 후에 합치는 방법을 사용할 수 있다.

```bash
head -n 30 dump.sql > new_dump.sql
vim new_dump.sql
tail -n +30 dump.sql >> new_dump.sql
```

slave가 될 데이터베이스에 덤프를 밀어넣는다.

```bash
mysql -h hostpath -u account -p database_name < dump.sql
```

여기서 database_name은 덤프 내 여러개의 데이터베이스가 담겨 있다고 해도 그 중 하나만 지정해도 되지만 지정된 데이터베이스는 미리 생성되어 있어야 한다.

replication 스레드를 시작시킨다: 

```sql
start slave 'master_name'
```


## 기타 유의사항
* replication 설정을 위해서는 super previleges가 필요한데 aws rds를 이용하면 일반 사용자가 super previleges를 가질 수 없다.
* binary log가 너무 빨리 rotate 되는 경우에는 아래와 같이 retention 값을 확인 및 조정할 수 있다.
  * `call mysql.rds_show_configuration()` 으로 `binlog retention hours` 값 확인
    * `call mysql.rds_set_configuration(‘binlog retention hours’, 1);`
