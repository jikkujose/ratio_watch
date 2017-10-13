import React from "react"
import styled from "styled-components"
import RatePanel from "./components/RatePanel.js"

const Wrapper = styled.div.attrs({
  className: "flex justify-center",
})``

const Container = styled.div.attrs({
  className: "w-100",
})`
  max-width: 960px;
`

const pairs = [
  { from: "BTC", to: "ETH" },
  { from: "BTC", to: "DOGE" },
  { from: "BTC", to: "LTC" },
  { from: "BTC", to: "ETC" },
  { from: "BTC", to: "BCH" },
  { from: "ETH", to: "ETC" },
]

export default function App() {
  return (
    <Wrapper>
      <Container>
        {pairs.map((pair, i) => <RatePanel key={i} {...pair} />)}
      </Container>
    </Wrapper>
  )
}
