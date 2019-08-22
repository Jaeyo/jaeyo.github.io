

export interface PostLink {
  title: string
  url: string
  tags: string[]
}

export const postLinks: PostLink[] = [
    {
        title: 'New multi-tenant patterns for building SaaS applications on SQL Database',
        url: 'https://azure.microsoft.com/ko-kr/blog/new-multi-tenant-patterns-for-building-saas-applications-on-sql-database/',
        tags: ['SaaS', 'Multi Tenancy'],
    },
    {
        title: 'Go 언어의 GC에 대해',
        url: 'https://engineering.linecorp.com/ko/blog/go-gc/',
        tags: ['Go'],
    },
    {
        title: '의지력은 있는 것일까?',
        url: 'https://medium.com/@flsqja12_33844/의지력의-재발견-14a5580389ed',
        tags: ['General'],
    },
    {
        title: 'Go 언어에서의 동시성 모델',
        url: 'http://hamait.tistory.com/934',
        tags: ['Go'],
    },
    {
        title: 'CockroachDB blog / 고가용성의 역사',
        url: 'https://marsettler.com/2019/01/04/brief-history-high-availability.html?fbclid=IwAR0u3JexNgreX-fupWLzKwBZKQNRbhoDe4v_sA1_lfxVCr9TghCoxMl94DU',
        tags: ['CockroachDB'],
    },
    {
        title: '2018년, 내가 모르는 기술들',
        url: 'https://overreacted.io/ko/things-i-dont-know-as-of-2018/',
        tags: ['Self Improvement'],
    },
    {
        title: '타다 시스템 아키텍처',
        url: 'http://engineering.vcnc.co.kr/2019/01/tada-system-architecture/',
        tags: ['Architecture'],
    },
    {
        title: '사장이 되면 좋을 것 같아?',
        url: 'https://greypencil.tistory.com/62?category=742519',
        tags: ['Business'],
    },
    {
        title: '프로그래머 열정을 말하다.',
        url: 'http://jehyunpark.github.io/book/2017/02/12/the-passionate-programmer.html',
        tags: ['Self Improvement'],
    },
    {
        title: '왜 Go가 CockroachDB에 올바른 선택인가',
        url: 'https://hueypark.gitlab.io/post/2018-10-21-why-go-was-the-right-choice-for-cockroachdb/',
        tags: ['CockroachDB', 'Go'],
    },
    {
        title: 'CockroachDB / Raft를 스케일링하기',
        url: 'https://hueypark.gitlab.io/post/2018-10-16-cockroachdb-blog-scaling-raft/',
        tags: ['CockroachDB', 'Go'],
    },
    {
        title: '40대 후반 개발자의 고민에 대하여',
        url: 'https://brunch.co.kr/@nashorn74/18',
        tags: ['Self Improvement', 'Career'],
    },
    {
        title: 'Golang - Some useful patterns',
        url: 'https://blogtitle.github.io/some-useful-patterns/',
        tags: ['Go'],
    },
    {
        title: '(번역) 기술자의 히포크라테스 선서',
        url: 'https://blog.fupfin.com/?p=188&utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+fupfin%2Fblog+%28%EC%83%9D%EA%B0%81%ED%95%98%EA%B3%A0+%EB%82%98%EB%88%84%EA%B3%A0+%EA%B3%B5%EA%B0%90%ED%95%98%EA%B8%B0...%29',
        tags: ['Developer'],
    },
    {
        title: '인턴 지원서',
        url: 'https://sungmooncho.com/2019/03/02/internship/',
        tags: ['Resume'],
    },
    {
        title: 'golang - 성능 튜닝하기',
        url: 'https://jacking75.github.io/go_PerformanceTuning/',
        tags: ['Go'],
    },
    {
        title: '발표의 정석',
        url: 'https://drive.google.com/file/d/1uQ5VOXBNk_Nf6V5JUXhKl2pHZY5N1wA4/view?fbclid=IwAR0sEKNnsHnqrtQvbKuDq3LnSeLm6ARClXoWdm02VLrmaJat5rPqz4jDZF4',
        tags: ['Presentation'],
    },
    {
        title: 'Distributed architecture concepts I learned while building a large payments system',
        url: 'https://blog.pragmaticengineer.com/distributed-architecture-concepts-i-have-learned-while-building-payments-systems/',
        tags: ['Architecture'],
    },
    {
        title: '[번역] 웹 아키텍쳐 입문',
        url: 'https://rhostem.github.io/posts/2018-07-22-web-architecture-101/?fbclid=IwAR3VU3zYhzUllW3VnTew6vj9OD3KSzAPW2E4grasw6ANNHx06_vC9VPjOPg',
        tags: ['Architecture'],
    },
    {
        title: '확장 가능하지 않은 일을 하라 (Do things that don’t scale)',
        url: 'https://medium.com/@Jaemyung/do-things-that-dont-scale-6876c5682a75',
        tags: ['Business'],
    },
    {
        title: 'Software disenchantment',
        url: 'http://tonsky.me/blog/disenchantment/',
        tags: ['Developer'],
    },
    {
        title: '사업이 뭘까?',
        url: 'https://brunch.co.kr/@lkim/137',
        tags: ['Business'],
    },
    {
        title: '성공하고 싶다면 포기해야 할 13가지',
        url: 'https://www.vobour.com/%EC%84%B1%EA%B3%B5%ED%95%98%EA%B3%A0-%EC%8B%B6%EB%8B%A4%EB%A9%B4-%ED%8F%AC%EA%B8%B0%ED%95%B4%EC%95%BC-%ED%95%A0-13%EA%B0%80%EC%A7%80-13-things-you-shou',
        tags: ['Self Improvement'],
    },
    {
        title: '흔한 프로그래머의 작명에 대한 사뭇 진지한 이야기',
        url: 'https://www.vobour.com/%ED%9D%94%ED%95%9C-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%9D%98-%EC%9E%91%EB%AA%85%EC%97%90-%EB%8C%80%ED%95%9C-%EC%82%AC%EB%AD%87-%EC%A7%84%EC%A7%80%ED%95%9C-%EC%9D%B4%EC%95%BC%EA%B8%B0-hkfgq9xqm',
        tags: ['Clean Code'],
    },
    {
        title: '회사에서 인정받는 8가지 방법',
        url: 'https://medium.com/@kinghong/%ED%9A%8C%EC%82%AC%EC%97%90%EC%84%9C-%EC%9D%B8%EC%A0%95%EB%B0%9B%EB%8A%94-8%EA%B0%80%EC%A7%80-%EB%B0%A9%EB%B2%95-fca247e2e0c1',
        tags: ['Self Improvement'],
    },
    {
        title: '500 마일 이메일 문제',
        url: 'https://edykim.com/ko/post/500-mile-email-problem/',
        tags: ['Trouble Shooting'],
    },
    {
        title: 'Cache 를 다룰 때 알아야할 몇가지 Cache Flush 전략',
        url: 'https://jins-dev.tistory.com/entry/Cache-%EB%A5%BC-%EB%8B%A4%EB%A3%B0-%EB%95%8C-%EC%95%8C%EC%95%84%EC%95%BC%ED%95%A0-%EB%AA%87%EA%B0%80%EC%A7%80-Cache-Flush-%EC%A0%84%EB%9E%B5',
        tags: ['Cache'],
    },
    {
        title: '파일(file)에 대한 토막글',
        url: 'https://sunyzero.tistory.com/260',
        tags: ['Infra'],
    },
    {
        title: '스터디 모임 방법 몇 가지',
        url: 'http://agile.egloos.com/m/5830026',
        tags: ['Study'],
    },
    {
        title: '서비스에 인터페이스를 사용해야 하나?',
        url: 'https://blog.fupfin.com/?p=81',
        tags: ['Clean Code', 'OOP'],
    },
    {
        title: '좋은 동료란... (1)',
        url: 'https://brunch.co.kr/@supims/503',
        tags: ['Self Improvement']
    },
    {
        title: '좋은 동료란... (2)',
        url: 'https://brunch.co.kr/@supims/507',
        tags: ['Self Improvement']
    },
    {
        title: '사람들 앞에만 서면 떨리는 이유',
        url: 'https://blog.naver.com/delmadang/221486396759',
        tags: ['Self Improvement']
    },
    {
        title: '흔한 개발자가 두서 없이 쓰는 글 #1',
        url: 'https://luckyyowu.tistory.com/393',
        tags: ['Developer']
    },
    {
        title: '나는 그동안 무엇으로 성장했을까?',
        url: 'http://huns.me/development/2281',
        tags: ['Developer']
    },
    {
        title: '경력직 채용, 그 태도에 관하여',
        url: 'https://ppss.kr/archives/141428',
        tags: ['Etc']
    },
    {
        title: '어두운 추상화의 위기 (The Looming Abstraction Crisis) 번역글',
        url: 'https://blog.pigno.se/post/183565621043/%EC%96%B4%EB%91%90%EC%9A%B4-%EC%B6%94%EC%83%81%ED%99%94%EC%9D%98-%EC%9C%84%EA%B8%B0-the-looming-abstraction-crisis-%EB%B2%88%EC%97%AD%EA%B8%80',
        tags: ['Computer Science']
    },
    {
        title: '쿠버네티스 pod 구성 패턴',
        url: 'https://arisu1000.tistory.com/27863',
        tags: ['Kubernetes']
    },
    {
        title: '신규 Web 서비스시 고려해 볼 사항',
        url: 'http://kwonnam.pe.kr/wiki/web/%EC%8B%A0%EA%B7%9C%EC%84%9C%EB%B9%84%EC%8A%A4',
        tags: ['Architecture']
    },
    {
        title: '바이트 순서와 BOM이 이렇게 복잡해진 이유',
        url: 'http://www.allofsoftware.net/2015/06/bom-11.html',
        tags: ['Computer Science']
    },
    {
        title: 'Tumblr에서는 MySQL로 어떻게 대용량 데이터를 관리하였을까?',
        url: 'http://gywn.net/2012/05/how_to_shard_big_data_in_tumblr/',
        tags: ['Database', 'Sharding']
    },
    {
        title: '어쩌다 DDD 공부를 시작했다',
        url: 'https://millenial-dev.tistory.com/11',
        tags: ['DDD']
    },
    {
        title: 'Go API에서 메모리 누수 예방하기',
        url: 'https://mingrammer.com/translation-avoiding-memory-leak-in-golang-api/',
        tags: ['Go']
    },
    {
        title: '유한 상태 기계를 Django에 적용하여 상태 변경을 관리하기',
        url: 'https://tech.peoplefund.co.kr/2019/03/26/managing-state-using-finite-state-machine.html',
        tags: ['Finite State Machine']
    },
    {
        title: 'Go My Way #2 - 데이터베이스, 로깅',
        url: 'https://jaehue.github.io/post/go-my-way-2-database-and-logging/',
        tags: ['Go']
    },
    {
        title: '리눅스의 페이지 캐시와 버퍼 캐시',
        url: 'https://brunch.co.kr/@alden/25',
        tags: ['Linux', 'Computer Science']
    },
    {
        title: '확장하기 쉬운 코드가 아니라 삭제하기 쉬운 코드를 작성하자',
        url: 'https://harfangk.github.io/2016/10/30/write-code-that-is-easy-to-delete-not-easy-to-extend-ko.html?fbclid=IwAR2QqMQtI8ZBXB56RmahovnGBgNY-SHiw0lMoRfhGxJDfpkClOe9W30iYAc',
        tags: ['Clean Code']
    },
    {
        title: '후배 개발자에게 - 2019년',
        url: 'https://brunch.co.kr/@javajigi/4',
        tags: ['Developer']
    },
    {
        title: '능력 있는 개발자는 어떻게 알아볼 수 있나?',
        url: 'https://okky.kr/article/370719',
        tags: ['Developer']
    },
    {
        title: 'Armeria 오픈소스화 이야기',
        url: 'https://engineering.linecorp.com/ko/blog/open-sourcing-armeria/',
        tags: ['Open Source']
    },
    {
        title: 'Kubernetes Ingress 개념 및 사용 방법, 온-프레미스 환경에서 Ingress 구축하기',
        url: 'https://blog.naver.com/alice_k106/221502890249',
        tags: ['Kubernetes']
    },
    {
        title: 'Kubernetes Ingress 의 ClusterIP Bypass, Annotation, SSL/TLS 를 위한 인증서 적용',
        url: 'https://blog.naver.com/alice_k106/221503924911',
        tags: ['Kubernetes']
    },
    {
        title: 'Edge Computing 의 의미와 필요성',
        url: 'https://blog.naver.com/alice_k106/221300292775',
        tags: ['Edge Computing']
    },
    {
        title: 'IBM의 Docker 파일 시스템 성능 논문 리뷰',
        url: 'https://blog.naver.com/alice_k106/220973165893',
        tags: ['Docker', 'Performance']
    },
    {
        title: 'Docker Container 와 Performance Interference 이야기',
        url: 'https://blog.naver.com/alice_k106/221088381471',
        tags: ['Docker', 'Performance']
    },
    {
        title: '쿠버네티스 모니터링 : metrics-server (kubernetes monitoring : metrics-server)',
        url: 'https://arisu1000.tistory.com/27856',
        tags: ['Kubernetes']
    },
    {
        title: '쿠버네티스를 이용해 테스팅 환경 구현해보기',
        url: 'http://woowabros.github.io/experience/2018/03/13/k8s-test.html',
        tags: ['Kubernetes']
    },
    {
        title: '쿠버네티스 인그레스(kubernetes ingress)',
        url: 'https://arisu1000.tistory.com/27840',
        tags: ['Kubernetes']
    },
    {
        title: 'You Are Not Google',
        url: 'https://blog.bradfieldcs.com/you-are-not-google-84912cf44afb',
        tags: ['Etc']
    },
    {
        title: 'Running VSCode in Docker',
        url: 'https://binal.pub/2019/04/running-vscode-in-docker/',
        tags: ['Docker', 'Etc']
    },
    {
        title: '모니터링은 경보가 아니라 해석',
        url: 'https://www.sauru.so/blog/monitoring-is-not-alert-but-analytics/',
        tags: ['Monitoring']
    },



    {
        title: 'Uber의 Base Web 사용기',
        url: 'https://choyongjoon.com/base-web/',
        tags: ['React']
    },
    {
        title: '1주일간의 리모트워크는',
        url: 'https://blog.remotemonster.com/1주일간의-리모트워크는-8277114a567c',
        tags: ['Remote Work']
    },
    {
        title: 'GitLab Team HandBook',
        url: 'https://about.gitlab.com/handbook/',
        tags: ['Company Culture', 'Remote Work']
    },
    {
        title: 'Remote Work Toolkit',
        url: 'https://nohq.co/tools/',
        tags: ['Remote Work']
    },
    {
        title: '어려움 중독',
        url: 'https://item4.github.io/2018-08-17/The-Difficult-Addiction/',
        tags: ['Developer', 'Self Improvement']
    },
    {
        title: 'Consistent Hashing 에 대한 기초',
        url: 'https://charsyam.wordpress.com/2016/10/02/입-개발-consistent-hashing-에-대한-기초/',
        tags: ['Consistent Hashing']
    },
]
