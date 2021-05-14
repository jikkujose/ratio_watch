import React from "react"
import styled from "styled-components"
import { lighten } from "polished"

import withFetch from "./withFetch.js"
import { color } from "../utils"

const red = color(255, 153, 153)

const theme = {
  ss: lighten(0.3, "#5A739C"),
  cc: lighten(0.3, "#58CA71"),
}

function RatePanel({
  from,
  to,
  rate,
  precision = 2,
  error,
  editMode,
  handleClick,
  handleRemove = () => console.log("will remove!"),
  api,
  API,
}) {
  const isLoading = !!rate
  const roundedRate = rate && parseFloat(rate).toFixed(precision)

  let message = isLoading
    ? `1 ${from} = ${roundedRate} ${to}`
    : "Loading rate.."

  if (!!error) {
    message = `Error: ${error}`
  }

  return (
    <div className="flex">
      {editMode && <RemoveButton onClick={handleRemove}>x</RemoveButton>}
      <Panel onClick={handleClick} isError={!!error} color={theme[api]}>
        {message}
      </Panel>
    </div>
  )
}

export default withFetch(RatePanel)

const RemoveButton = styled.div.attrs({
  className: `bg-red code f4 f3-l black-60 pv2 pv3-m pv3-m pv3-l ph3 pointer bb-black-10 mr1 mb1`,
})``

export const Panel = styled.div.attrs({
  className:
    "code f4 f3-l b black-60 pv2 pv3-m pv3-l ph3 pointer bb b--black-10 w-100 mb1",
})`
  background: ${props => (props.isError ? red(10) : props.color)};

  &:hover {
    background: ${props => (props.isError ? red(15) : props.color)};
  }
`
