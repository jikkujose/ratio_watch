import React from "react"
import styled from "styled-components"
import RatePanel from "./components/RatePanel.js"

import { pairs } from "data"

const Wrapper = styled.div.attrs({
  className: "flex justify-center",
})``

const Container = styled.div.attrs({
  className: "w-100 flex flex-column",
})`
  max-width: 960px;
`

const Header = styled.div.attrs({
  className: "pa3 ph0-ns code f4",
})``

const Credits = styled.a.attrs({
  className: "pa3 ph0-ns code f6 link",
})``

const twitterProfile = "https://twitter.com/big_org"

export default function App() {
  return (
    <Wrapper>
      <Container>
        <Header>Rate Watch</Header>
        {pairs.map((pair, i) => <RatePanel key={i} {...pair} />)}
        <Credits href={twitterProfile}>BIGOrg</Credits>
      </Container>
    </Wrapper>
  )
}
