import React from "react"
import styled from "styled-components"

import withFetch from "./withFetch.js"
import { color } from "utils"

const theme = color(255, 212, 0)
const red = color(255, 153, 153)

export const Panel = styled.div.attrs({
  className: "code f5 b black-60 pa3 pointer bb b--black-10",
})`
  background: ${props => (props.isError ? red(10) : theme(10))};

  &:hover {
    background: ${props => (props.isError ? red(15) : theme(15))};
  }
`

function RatePanel({ from, to, rate, error, handleClick, API }) {
  const isLoading = !!rate
  let message = isLoading ? `1 ${from} = ${rate} ${to}` : "Loading rate.."

  if (!!error) {
    message = `Error: ${error}`
  }

  return (
    <Panel onClick={handleClick} isError={!!error}>
      {message}
    </Panel>
  )
}

export default withFetch(RatePanel)
