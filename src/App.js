import React from "react"
import styled from "styled-components"
import RatePanel from "./components/RatePanel.js"
import { ShapeShift, CryptoCompare } from "utils"

import { pairs } from "data"

const Wrapper = styled.div.attrs({
  className: "flex justify-center",
})``

const Container = styled.div.attrs({
  className: "w-100 flex flex-column mt4-ns",
})`
  max-width: 960px;
`

const Header = styled.div.attrs({
  className: "pa3 ph0-ns code f4",
})``

const Link = styled.a.attrs({
  className: "link b pointer",
})``

const Footer = styled.div.attrs({
  className: "f6 code pa3 ph0-ns flex justify-between",
})``

const twitterProfile = "https://twitter.com/big_org"

export default class App extends React.Component {
  state = {
    APIs: [ShapeShift, CryptoCompare],
    selectedAPIIndex: 0,
  }

  switchAPIs = () => {
    const { APIs, selectedAPIIndex } = this.state
    const count = APIs.length

    const nextIndex = (selectedAPIIndex + 1) % count

    this.setState(s => ({ selectedAPIIndex: nextIndex }))
  }

  render() {
    const { APIs, selectedAPIIndex } = this.state
    const API = APIs[selectedAPIIndex]

    return (
      <Wrapper>
        <Container>
          <Header>Rate Watch</Header>
          {pairs.map((pair, i) => <RatePanel key={i} {...pair} API={API} />)}
          <Footer>
            <div>
              <Link href={twitterProfile}>BIGOrg</Link> | API: {API.name}
            </div>
            <div>
              <Link onClick={this.switchAPIs}>Switch API</Link>
            </div>
          </Footer>
        </Container>
      </Wrapper>
    )
  }
}
