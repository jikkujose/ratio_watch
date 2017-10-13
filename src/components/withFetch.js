import React from "react"

export default function withFetch(Component) {
  return class WrappedComponent extends React.Component {
    state = {
      rate: null,
      error: null,
    }

    fetchRate = () => {
      const { API } = this.props
      const { from, to } = this.props
      const api = new API(from, to)

      const isLoading = !this.state.rate

      if (!isLoading) {
        this.setState(s => ({ rate: null, error: null }))
      }

      const url = api.url(from, to)

      fetch(url).then(r => r.json().then(json => api.extract(json, this)))
    }

    componentWillReceiveProps(nextProps) {
      this.setState(s => ({ rate: null, error: null }))
      this.fetchRate()
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
