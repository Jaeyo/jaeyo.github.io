

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
]
