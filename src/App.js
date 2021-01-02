import React from "react"
import styled from "styled-components"
import RatePanel from "./components/RatePanel.js"
import AddForm from "./components/AddForm"
import { ShapeShift, CryptoCompare } from "./utils"

import { pairs } from "./data"

export default class App extends React.Component {
  state = {
    pairs,
    viewMode: true,
    APIs: { ss: ShapeShift, cc: CryptoCompare },
  }

  toggleMode = () => this.setState(s => ({ viewMode: !s.viewMode }))

  addPair = (from, to) => {
    this.setState(s => ({
      pairs: s.pairs.concat({ from, to, api: "cc" }),
      viewMode: true,
    }))
  }

  render() {
    const { APIs, pairs, viewMode } = this.state
    const showControls = true

    return (
      <Wrapper>
        <Container>
          {viewMode ? (
            pairs.map((pair, i) => (
              <RatePanel key={i} {...pair} API={APIs[pair.api]} />
            ))
          ) : (
            <AddForm handleSubmit={this.addPair} />
          )}
          <Footer>
            {showControls && (
              <Link onClick={this.toggleMode}>
                {viewMode ? "Add" : "Cancel"}
              </Link>
            )}
          </Footer>
        </Container>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div.attrs({
  className: "flex justify-center",
})``

const Container = styled.div.attrs({
  className: "w-100 flex flex-column mt4-ns",
})`
  max-width: 960px;
`

const Link = styled.a.attrs({
  className: "link b pointer",
})``

const Footer = styled.div.attrs({
  className: "f6 code pa3 ph0-ns flex justify-between",
})``
