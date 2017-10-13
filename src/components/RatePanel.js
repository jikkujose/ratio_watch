import React from "react"
import styled from "styled-components"

import withFetch from "./withFetch.js"
import { color } from "utils"

const theme = color(255, 212, 0)

export const Panel = styled.div.attrs({
  className: "code f4 pa3 pointer bb b--black-10",
})`
  background: ${theme(10)};

  &:hover {
    background: ${theme(15)};
  }
`

function RatePanel({ from, to, rate, handleClick }) {
  const isLoading = !!rate
  const message = isLoading ? `1 ${from} = ${rate} ${to}` : "Loading rate.."

  return (
    <Panel onClick={handleClick}>
      {message}
    </Panel>
  )
}

export default withFetch(RatePanel)
