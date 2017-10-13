import React from "react"
import styled from "styled-components"
import RatePanel from "./components/RatePanel.js"

const Container = styled.div.attrs({
  className: "",
})``

const pairs = [
  { from: "BTC", to: "ETH" },
  { from: "BTC", to: "DOGE" },
  { from: "BTC", to: "LTC" },
]

export default function App() {
  return (
    <Container>
      {pairs.map((pair, i) => <RatePanel key={i} {...pair} />)}
    </Container>
  )
}
