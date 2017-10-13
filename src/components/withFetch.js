import React from "react"

export default function withFetch(Component) {
  return class WrappedComponent extends React.Component {
    state = {
      rate: null,
      error: null,
    }

    fetchRate = () => {
      const isLoading = !this.state.rate

      if (!isLoading) {
        this.setState(s => ({ rate: null }))
      }

      const { from, to } = this.props
      const url = `https://shapeshift.io/rate/${from}_${to}`

      fetch(url).then(r =>
        r
          .json()
          .then(j =>
            this.setState(s => ({ rate: j["rate"], error: j["error"] }))
          )
      )
    }

    componentDidMount() {
      this.fetchRate()
    }

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          handleClick={this.fetchRate}
        />
      )
    }
  }
}
