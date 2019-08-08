---
date: "2019-03-04T01:00:00.000Z"
template: "diary"
---

요즘 고민중인거. 다수의 telegraf 를 관리하기 위한 방안으로 원래는 커스텀 input plugin 을 짜는 방향을 생각했었는데 telegraf  메인 소스에 내 코드를 추가하는 건 아무래도 관리부담이 있으므로 별도로 에이전트를 짜고 이를 exec input plugin 으로 구동시키는 방향으로 고민중
