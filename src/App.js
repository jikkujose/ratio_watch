import React from "react"
import styled from "styled-components"
import RatePanel from "./components/RatePanel.js"
import AddForm from "./components/AddForm"
import { ShapeShift, CryptoCompare } from "./utils"
import { useLocalStorage } from "./components/useLocalStorage"

import { pairs as sampleData } from "./data"

export function App() {
  const [viewMode, setViewMode] = useLocalStorage("viewMode", true)
  const [pairs, setPairs] = useLocalStorage("pairs", sampleData)
  const [editMode, setEditMode] = useLocalStorage("editMode", false)

  const addPair = (from, to) => {
    setPairs([...pairs, { from: from, to: to, api: "cc" }])
    setViewMode(!viewMode)
  }

  const removePair = index => {
    console.log("remove", index)
    setPairs(pairs.filter((pair, _index) => _index != index))
  }

  let APIs = { ss: ShapeShift, cc: CryptoCompare }
  let showControls = true

  return (
    <Wrapper>
      <Container>
        {viewMode ? (
          pairs.map((pair, i) => (
            <RatePanel
              key={i}
              handleRemove={() => removePair(i)}
              {...pair}
              API={APIs[pair.api]}
              editMode={editMode}
            />
          ))
        ) : (
          <AddForm handleSubmit={addPair} />
        )}
        <Footer>
          {showControls && (
            <div className="f">
              <Link onClick={() => setViewMode(!viewMode)}>
                {viewMode ? "Add" : "Cancel Add"}
              </Link>
              <Link onClick={() => setEditMode(!editMode)}>
                {viewMode ? "Remove" : "Cancel Remove"}
              </Link>
            </div>
          )}
        </Footer>
      </Container>
    </Wrapper>
  )
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
  className: "link b pointer mr2",
})``

const Footer = styled.div.attrs({
  className: "f6 code pa3 ph0-ns flex justify-between",
})``
