import React from "react"
import styled from "styled-components"
import { color } from "../utils"

const theme = color(255, 212, 0)

function Field({ placeholder, ...props }) {
  return (
    <InputWrapper>
      <Input placeholder={placeholder} {...props} />
    </InputWrapper>
  )
}

const InputWrapper = styled.div.attrs({
  className: "ba mb2 br2 b--black-10",
})``

const Input = styled.input.attrs({
  className: "w-100 br2 pa2 f3 code bn",
  type: "text",
})``

const Submit = styled.input.attrs({
  className: "w-100 br3 pa2 f3 code bn bg-black-10 pointer",
  type: "button",
})``

const FieldSet = styled.div.attrs({
  className: "flex flex-column w-100 ph3",
})`
  max-width: 500px;
`

const FieldWrapper = styled.div.attrs({
  className: "flex pa4-ns pv4 w-100 justify-center",
})`
  background: ${theme(9)};
`

export default class AddForm extends React.Component {
  state = {
    from: "",
    to: "",
  }

  handleChange = field => e => {
    e.persist()
    this.setState(s => ({ [field]: e.target.value.toUpperCase() }))
  }

  submit = () => this.props.handleSubmit(this.state.from, this.state.to)

  render() {
    const { from, to } = this.state

    return (
      <FieldWrapper>
        <FieldSet>
          <Field
            value={from}
            placeholder="From"
            onChange={this.handleChange("from")}
          />
          <Field
            value={to}
            placeholder="To"
            onChange={this.handleChange("to")}
          />
          <Submit value="Add Pair" onClick={this.submit} />
        </FieldSet>
      </FieldWrapper>
    )
  }
}
