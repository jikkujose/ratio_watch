import React from "react"
import styled from "styled-components"
import RatePanel from "./components/RatePanel.js"
import AddForm from "./components/AddForm"
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
    pairs,
    viewMode: true,
    APIs: [ShapeShift, CryptoCompare],
    selectedAPIIndex: 1,
  }

  switchAPIs = () => {
    const { APIs, selectedAPIIndex } = this.state
    const count = APIs.length

    const nextIndex = (selectedAPIIndex + 1) % count

    this.setState(s => ({ selectedAPIIndex: nextIndex }))
  }

  toggleMode = () => this.setState(s => ({ viewMode: !s.viewMode }))

  addPair = (from, to) => {
    this.setState(s => ({
      pairs: s.pairs.concat({ from, to }),
      viewMode: true,
    }))
  }

  render() {
    const { APIs, selectedAPIIndex, pairs, viewMode } = this.state
    const API = APIs[selectedAPIIndex]
    const showControls = true
    console.log(API.name)

    return (
      <Wrapper>
        <Container>
          <Header>Rate Watch</Header>
          {viewMode
            ? pairs.map((pair, i) => <RatePanel key={i} {...pair} API={API} />)
            : <AddForm handleSubmit={this.addPair} />}
          <Footer>
            <div>
              <Link href={twitterProfile}>BIGOrg</Link> | API: {API.name}
            </div>
            {showControls &&
              <div>
                {false && <Link onClick={this.switchAPIs}>Switch API</Link>}
                <Link onClick={this.toggleMode}>
                  {viewMode ? "Add" : "Cancel"}
                </Link>
              </div>}
          </Footer>
        </Container>
      </Wrapper>
    )
  }
}
