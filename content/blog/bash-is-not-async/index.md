---
title: "오늘의 삽질 - 괜히 Bash 만 의심했다."
date: "2019-08-13T01:00:00.000Z"
template: "blog"
tags: ["tech", "trouble shooting"]
---

회사에서 만들어놓은 쉘 스크립트가 있었다. 필요한 패키지를 다운로드받아 설치하고 설정파일을 고치고 systemctl 로 띄우는 내용의 스크립트로 대략적인 모양새는 아래와 같다.

```bash
install_blabla() {
	dest=$(mktemp /tmp/blabla_XXXX.deb)
	curl -fsSL http://blabla.com/blabla.deb -o $dest
	dpkg -i $dest
	rm -f $dest
}

install_conf() {
	curl -fsSL http://blabla.com/blabla.conf -o /etc/blabla/blabla.conf
	sed -i -e "..." /etc/blabla/blabla.conf
}

start_blabla() {
	systemctl start blabla
}

do_install() {
	install_blabla
	install_conf
	start_blabla
}

do_install
```

위의 스크립트에 따르면 아래의 로직을 타게 된다.

1. curl 로 blabla.deb 다운로드
2. dpkg 로 blabla.deb 설치
3. curl 로 blabla.conf 다운로드
4. sed 로 blabla.conf 내용 수정
5. systemctl 로 blabla 시작

이 로직대로 정상 작동 한다면 blabla는 수정된 설정파일을 정상적으로 물고 떠야한다. 하지만 blabla가 이상 동작을 한다는 이슈가 리포팅되었고, 확인 결과 수정된 설정파일이 아니라 기본 설정 파일을 물고 뜨는 것으로 의심이 되는 상황이었다.

하지만 아무리 확인을 해봐도 설정파일은 정상적으로 수정되어 있었고, 그렇다고 다른 path의 설정 파일을 물고 있는 상황도 아니었다.

순간 머리속을 스치는 의심 하나,

"모종의 알 수 없는 이유로 blabla.conf 파일 다운로드가 채 끝나기 전에 다음 구문이 실행되었다면?"

그래서 blabla를 재기동해보았고 정상적으로 수정된 설정 파일을 잘 물고 뜨는 걸 확인할 수 있었다. 갑작스레 혼란이 밀려왔다.

"아니, 무슨 bash가 node.js 도 아니고 상황에 따라서 curl 명령이 끝나기 전에 다음 구문으로 넘어갈 수가 있나? 무슨 bash가 async야?"

혹시나 싶어서 구글링을 해봤지만 걸리는 건 없었고 사건이 터진 이유를 알 수 없어 혼란스러워 하던 즈음, 옆 동료 분이 원인을 정확하게 짚어주셨다.

"이거 dpkg 로 설치하고 바로 뜨는 것 같은데요."

문제는 당연히 bash 가 async 로 동작했다거나 그런게 아니었고 ubuntu 기준으로 dpkg로 설치되는 패키지는 서비스가 포함되어 있으면 자동으로 enabled && started 되는 현상이었다.

괜히 의심했던 것 같아 bash 에게 사과를...
