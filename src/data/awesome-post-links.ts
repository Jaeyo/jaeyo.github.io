

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
        tags: ['Etc'],
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
]
