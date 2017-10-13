import React from "react"
import styled from "styled-components"

import withFetch from "./withFetch.js"

export const Panel = styled.div.attrs({
  className: "code f4 pa3 bg-black-30 hover-bg-black-20 pointer",
})``

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
