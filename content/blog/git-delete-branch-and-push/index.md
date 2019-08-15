---
title: "Git - branch 삭제 후 push"
date: "2019-08-14T00:00:00.000Z"
template: "blog"
tags: ["tech", "git"]
---

git에서 브랜치를 따서 작업을 하고 머지된 이후에는 자연스레 작업 브랜치는 날리게 된다. Github 의 풀 리퀘스트 같은 수단을 이용하게 되면 머지 이후에 `Delete Branch` 버튼을 통해 쉽게 remote 상의 브랜치를 제거할 수 있으나 로컬에서 바로 머지한 경우에는 로컬의 브랜치와 remote 의 브랜치를 모두 제거해주어야 한다. 헌데 로컬 브랜치 제거는 괜찮은데 remote 브랜치 제거 명령어를 항상 까먹는다.

명령어는 아래와 같다.

```bash
git branch -D branch-name  # local branch 제거
git push origin :branch-name # remote branch 제거
```

remote 브랜치 제거 명령어를 매번 까먹어서 매번 찾아서 하다가 이걸 그냥 alias 를 걸어놔야 되겠다고 생각했다. 기왕 alias 거는거 local + remote 둘 다 한 번에 제거하게끔 계획했다. 이 과정에서 제거할 브랜치 이름을 argument 로 받아야 하는데 문제는 git alias 에서는 argument 를 지원하고 있지 않다는 것이다. 이 부분을 해결하기 위해 구글링을 해봤지만 뭔가 elegant 한 방법은 찾지 못했고 아래와 같이 구성하였다.

```bash
[alias]
  dd = "!f() {  git branch -D $1 && git push origin :$1; }; f"
```



