import React from "react"
import styled from "styled-components"
import { range, lighten } from "../../utils/utils"


/*
period:
    2013: 0 - 3
    2014: 4 - 7
    2015: 8 - 11
    2016: 12 - 15
    2017: 16 - 19
    2018: 20 - 23
    2019: 24 - 27
*/

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 60px;
`

const Title = styled.h3`
  text-align: right;
`

const DateHeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 25px;
`

interface DateHeaderFieldProps { width: number }

const DateHeaderField = styled.div`
  width: ${(props: DateHeaderFieldProps) => props.width}%;
  font-size: 12px;
`

const DateHeader = () => (
  <DateHeaderWrapper>
    <DateHeaderField width={20} />
    { range(13, 19 + 1).map(year => <DateHeaderField width={(100-20) / 7}>{'`' + year}</DateHeaderField>) }
  </DateHeaderWrapper>
)

const RowWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  border-bottom: 1px dashed rgb(202, 202, 202);
  padding: 2px 0;
`

interface FieldProps {
  width: number
  bgColor: string
}

const Field = styled.div`
  width: ${(props: FieldProps) => props.width}%;
  background-color: ${(props: FieldProps) => props.bgColor};
  font-size: 11px;
  border-radius: 7px;
`

const Companies = () => (
  <Wrapper>
    <Title>Company</Title>
    <DateHeader />
    <RowWrapper>
      <Field width={20} bgColor="none">Igloosec</Field>
      <Field width={((100-20) / 28) * 15} bgColor={lighten('3958d8', 1)} />
    </RowWrapper>
    <RowWrapper>
      <Field width={20} bgColor="none">RIDI</Field>
      <Field width={((100-20) / 28) * 15} bgColor="none" />
      <Field width={((100-20) / 28) * 8} bgColor={lighten('3958d8', 20)} />
    </RowWrapper>
    <RowWrapper>
      <Field width={20} bgColor="none">SK C&C</Field>
      <Field width={((100-20) / 28) * 23} bgColor="none" />
      <Field width={((100-20) / 28) * 5} bgColor={lighten('3958d8', 35)} />
    </RowWrapper>
  </Wrapper>
)

const Language = () => (
  <Wrapper>
    <Title>Language</Title>
    <DateHeader />
    <RowWrapper>
      <Field width={20} bgColor="none">Java</Field>
      <Field width={((100-20) / 28) * 15} bgColor={lighten('29b0c3', -20)} />
    </RowWrapper>
    <RowWrapper>
      <Field width={20} bgColor="none">Javascript</Field>
      <Field width={((100-20) / 28) * 28} bgColor={lighten('29b0c3', -5)} />
    </RowWrapper>
    <RowWrapper>
      <Field width={20} bgColor="none">Scala</Field>
      <Field width={((100-20) / 28) * 8} bgColor="none" />
      <Field width={((100-20) / 28) * 3} bgColor={lighten('29b0c3', 5)} />
    </RowWrapper>
    <RowWrapper>
      <Field width={20} bgColor="none">Go</Field>
      <Field width={((100-20) / 28) * 12} bgColor="none" />
      <Field width={((100-20) / 28) * 3} bgColor={lighten('29b0c3', 10)} />
      <Field width={((100-20) / 28) * 8} bgColor="none" />
      <Field width={((100-20) / 28) * 5} bgColor={lighten('29b0c3', 10)} />
    </RowWrapper>
    <RowWrapper>
      <Field width={20} bgColor="none">Python</Field>
      <Field width={((100-20) / 28) * 15} bgColor="none" />
      <Field width={((100-20) / 28) * 8} bgColor={lighten('29b0c3', 15)} />
    </RowWrapper>
    <RowWrapper>
      <Field width={20} bgColor="none">Kotlin</Field>
      <Field width={((100-20) / 28) * 19} bgColor="none" />
      <Field width={((100-20) / 28) * 1} bgColor={lighten('29b0c3', 20)} />
    </RowWrapper>
    <RowWrapper>
      <Field width={20} bgColor="none">Typescript</Field>
      <Field width={((100-20) / 28) * 25} bgColor="none" />
      <Field width={((100-20) / 28) * 3} bgColor={lighten('29b0c3', 23)} />
    </RowWrapper>
  </Wrapper>
)

const FrameworkAndEtc = () => (
  <Wrapper>
    <Title>Framework & Etc</Title>
    <DateHeader />
    <RowWrapper>
      <Field width={20} bgColor="none">Oracle</Field>
      <Field width={((100-20) / 28) * 15} bgColor={lighten('3fa211', -20)} />
    </RowWrapper>
    <RowWrapper>
      <Field width={20} bgColor="none">Jetty</Field>
      <Field width={((100-20) / 28) * 11} bgColor="none" />
      <Field width={((100-20) / 28) * 4} bgColor={lighten('3fa211', -10)} />
    </RowWrapper>
    <RowWrapper>
      <Field width={20} bgColor="none">MySQL</Field>
      <Field width={((100-20) / 28) * 15} bgColor="none" />
      <Field width={((100-20) / 28) * 13} bgColor={lighten('3fa211', -3)} />
    </RowWrapper>
    <RowWrapper>
      <Field width={20} bgColor="none">Django</Field>
      <Field width={((100-20) / 28) * 15} bgColor="none" />
      <Field width={((100-20) / 28) * 8} bgColor={lighten('3fa211', 3)} />
    </RowWrapper>
    <RowWrapper>
      <Field width={20} bgColor="none">React.js</Field>
      <Field width={((100-20) / 28) * 13} bgColor="none" />
      <Field width={((100-20) / 28) * 15} bgColor={lighten('3fa211', 8)} />
    </RowWrapper>
    <RowWrapper>
      <Field width={20} bgColor="none">AWS</Field>
      <Field width={((100-20) / 28) * 15} bgColor="none" />
      <Field width={((100-20) / 28) * 8} bgColor={lighten('3fa211', 12)} />
      <Field width={((100-20) / 28) * 1} bgColor="none" />
      <Field width={((100-20) / 28) * 4} bgColor={lighten('3fa211', 12)} />
    </RowWrapper>
    <RowWrapper>
      <Field width={20} bgColor="none">Redis</Field>
      <Field width={((100-20) / 28) * 15} bgColor="none" />
      <Field width={((100-20) / 28) * 8} bgColor={lighten('3fa211', 18)} />
    </RowWrapper>
    <RowWrapper>
      <Field width={20} bgColor="none">Spring</Field>
      <Field width={((100-20) / 28) * 19} bgColor="none" />
      <Field width={((100-20) / 28) * 1} bgColor={lighten('3fa211', 22)} />
    </RowWrapper>
    <RowWrapper>
      <Field width={20} bgColor="none">Kafka</Field>
      <Field width={((100-20) / 28) * 23} bgColor="none" />
      <Field width={((100-20) / 28) * 5} bgColor={lighten('3fa211', 24)} />
    </RowWrapper>
    <RowWrapper>
      <Field width={20} bgColor="none">InfluxDB</Field>
      <Field width={((100-20) / 28) * 23} bgColor="none" />
      <Field width={((100-20) / 28) * 5} bgColor={lighten('3fa211', 28)} />
    </RowWrapper>
    <RowWrapper>
      <Field width={20} bgColor="none">IBMCloud</Field>
      <Field width={((100-20) / 28) * 23} bgColor="none" />
      <Field width={((100-20) / 28) * 5} bgColor={lighten('3fa211', 32)} />
    </RowWrapper>
    <RowWrapper>
      <Field width={20} bgColor="none">Koa</Field>
      <Field width={((100-20) / 28) * 23} bgColor="none" />
      <Field width={((100-20) / 28) * 5} bgColor={lighten('3fa211', 36)} />
    </RowWrapper>
  </Wrapper>
)


const TechHistoryGanttChart = () => {
  return (
    <>
      <Companies />
      <Language />
      <FrameworkAndEtc />
    </>
  )
}

export default TechHistoryGanttChart
