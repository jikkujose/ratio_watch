import React from "react"
import { ytd } from "../data"

const ytdAPI = (from, to) =>
  `https://0524-52-137-121-69.ngrok.io/ytd?token_id1=${from}&token_id2=${to}`

export default function withHistoryFetch(Component) {
  return class WrappedComponent extends React.Component {
    state = {
      ratios: [],
    }

    fetchRate = () => {
      // TODO: Remove hard coding data
      // this.setState({ ratios: ytd["payload"]["ratios"] })

      const { from, to } = this.props

      const isLoading = false

      if (!isLoading) {
        this.setState(s => ({ rate: null, error: null }))
      }

      const url = ytdAPI(from, to)
      console.log(url)

      fetch(url).then(r =>
        r
          .json()
          .then(json => this.setState({ ratios: json["payload"]["ratios"] }))
      )
    }

    componentWillReceiveProps(nextProps) {
      this.fetchRate()
    }

    componentDidMount() {
      this.fetchRate()
    }

    render() {
      return <Component {...this.props} {...this.state} />
    }
  }
}
