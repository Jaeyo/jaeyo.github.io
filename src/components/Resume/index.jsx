/* eslint quotes:0, max-len:0 */
import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../Layout'
import Sidebar from '../Sidebar'
import Content from '../common/content'


const Resume = props => (
  <Layout>
    <div>
      <Helmet>
        <title>Resume</title>
      </Helmet>
      <Sidebar {...props} />
      <Content>
        <Intro />
        <StrongPoint />
        <PowerOfPositiveThinking />
        <Buzzword />
      </Content>
    </div>
  </Layout>
)

const Intro = () => (
  <>
    <h2>Introduction & Background</h2>
    <p>2013년도부터 2106년까지 이글루시큐리티에서 Java로 통합보안솔루션을 개발했고, 2016년부터 2018년 까지는 리디북스에서 Python 으로 웹 개발을 했습니다. 새로운 기술에 대한 학습을 즐겨하며 요즘에는 초심으로 돌아가 Clean Code, Domain Driven Design 같은 분야를 공부하면서 우아한 코드, 우아한 구조에 대해 고민하고 있습니다. 재미있는 기술 관련 난제를 해결하는 기쁨을 맛보기를 기대하고 있습니다.</p>
    <p>개발자 생활을 시작하고 4년 가까이를 솔루션 개발을 할 땐 장애 대응에 대한 경험을 많이 쌓았습니다. 다양한 OS들(CentOS, Ubuntu, Solaris, HP-UX, IBM AIX..)과 다양한 데이터베이스들(Oracle, MySQL, DB2…) 위에서 돌아가는 자바 어플리케이션을 만들면서 안정성에 우선 순위를 두고 시큐어 코딩에 신경을 많이 썼으며 다양한 장애를 만나 원인 확인 및 해결책 도출에 많은 시간을 쏟았습니다. 또한 8년넘게 유지되고 있던 레거시 코드를 테스트 가능하도록 리팩토링하여 제품 안정성을 높이는 경험도 할 수 있었습니다.</p>
    <p>그러다 B2C 개발에 대한 욕심이 커져 리디북스로 이직하게 되었습니다. 리디북스에서는 운좋게 신규 서비스 초기 멤버로 차출되어 웹서비스를 만드는 데 필요한 A부터 Z를 맨 땅에 헤딩해가면서 배워갈 수 있었습니다. 인프라, 백엔드, 프론트엔드 전반에 거쳐 다양한 경험을 쌓았으며 특히 기술 스택 의사 결정에 참여하고 다양한 기술들을 새롭게 경험할 수 있었습니다.</p>
    <p>좋아하는 일이라면 무엇이던간에 깊이 빠져드는 덕후 기질이 있습니다. 그 대상 중 하나인 개발을 업으로 삼을 수 있다는 것이 다행이라고 생각합니다.</p>
  </>
)

const StrongPoint = () => (
  <>
    <h3>Strong Point</h3>
    <p>무언가를 항상 더 나아지게 만드는 것에 관심이 많습니다. 어제 했던 일을 오늘 똑같이 하는 것은 쉽습니다. 하지만 개인과 개인이 속한 조직이 계속해서 성장해 나가려면, 어제보다 더 효율적으로, 더 편하게, 더 크고 어렵다고 여겨지는 일들을 해결하는 방법을 계속해서 고민하고 찾아 나가야 합니다. </p>
    <p>이전에 재직했던 이글루시큐리티에서 있었던 일입니다. 새로운 로그 수집 엔진을 설계하고 프로토타이핑을 하던 중이었습니다. 단위시간 내에 받아야 하는 이벤트 건수가 당초 목표했던 건수에 못미치는 문제 때문에 팀원 모두가 고민을 하고 있었습니다. 여러가지 가설을 세워서 병목 포인트를 찾아본 결과 내부에서 사용하는 file 기반의 큐가 병목이 되고 있다는 점을 발견했습니다. 하지만 엔진 특성상 memory를 이용한 큐를 사용할 수 없었습니다. 이에 memory mapped file 기반의 큐 구조를 제안했고 실제 구현하여 목표했던 성능 수치를 얻어내는 데 성공했습니다.</p>
    <p>또한 로그 수집 agent도 개선시킨 경험이 있습니다. 기존의 로그 수집 agent는 C언어 기반으로 다양한 로그들을 수집하려면 매번 agent 로그를 수정하고 다시 컴파일해야 한다는 문제가 있었습니다. 따라서 다양한 보안 제품의 로그들을 연동하다보면 연동에 소요되는 시간이 오래 걸렸고 전부 개발팀의 손을 타야 했기 떄문에 개발팀에 걸리는 부하도 컸습니다. 이러한 문제를 해결해보고자 매번 새롭게 작성되는 로그 연동 로직을 agent 외부의 스크립트로 분리하는 형태의 새로운 agent 설계를 팀 내에 제안하였고 개발을 전적으로 담당했습니다. 이렇게 만들어진 새로운 agent로 인해 다양한 로그 수집 이슈에 유연하게 대응하고 연동 시간을 최소화 시키는 데에 기여할 수 있었습니다. 이후 스크립트 작성에 익숙치 않은 엔지니어들을 위해 agent 자체에 웹 UI를 붙이고 스크립트 자동 생성 기능을 지원하기도 했습니다. 제가 퇴사한 현재에도 성능 문제가 있는 일부 제품을 제외한 대부분의 보안 제품들은 전부 새로운 agent를 이용해 연동되고 있습니다.</p>
  </>
)

const PowerOfPositiveThinking = () => (
  <div>
    <h3>Power of Positive Thinking</h3>
    <p>취준생의 하루는 어둡습니다. 초조함으로 하루를 시작해서 불안함과 함께 잠듭니다. 저의 대학교 졸업반 시절도 그러했던 것 같습니다. 이십 여년을 쌓아온 나 자신에 대한 자신감은 온데간데 없이 사라지고 그처럼 제가 작아보였던 때가 또 없었던 것 같습니다. 대학생이라는 길의 끝에서 나는 무사히 한 걸음을 더 디딜 수 있을까 하는 답도 없는 고민이 머리를 쳐들때면, 그 날은 커피 없이도 밤을 지새웠습니다. 그 때 마법처럼 만난 책이 "내 인생을 바꾼 마법 노트" 였습니다. 가벼운 소설로 읽기 시작한 이 책에서 저는 "불안이란 실체가 없는 두려움으로, 직접 맞닥뜨려 보면 겁먹었던 것 보다 별 것 아니라는 것"을 배웠습니다. 일생을 지고 갈 업보처럼 등에 지고 살았던 수많은 걱정들은, 실은 미리부터 걱정할 필요가 전혀 없는, 걱정해봐야 답을 낼 수도 없는 것들이란 것을 깨달았습니다. 게다가 그 걱정들로 인해 받았던 부정적인 에너지들을 생각하면 정말이지 억울할 지경입니다. 덕분에 저는 등에 지고 있던 걱정들을 내려 놓고, 긍정의 힘으로 한 걸음씩 내딛어 오늘 여기까지 왔습니다.</p>
  </div>
)

const Buzzword = () => (
  <>
    <h2>Buzzword</h2>
    <p>Java, Python, Javascript, Golang, Kotlin, React.js, Redux, Django, AWS, Oracle, MySQL, Redis</p>
  </>
)

export const pageQuery = graphql`
  query ResumeQuery {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        menu {
          label
          path
        }
        author {
          name
          email
          telegram
          twitter
          github
          rss
          vk
        }
      }
    }
  }
`


export default Resume
