import React from "react"
import { ytd } from "../data"

const ytdAPI = (from, to) =>
  `https://jj-api.netlify.app/.netlify/functions/proxy?from=${from}&to=${to}`

export default function withHistoryFetch(Component) {
  return class WrappedComponent extends React.Component {
    state = {
      ratios: [],
      isLoading: true,
    }

    fetchRate = () => {
      // TODO: Remove hard coding data
      // this.setState({ ratios: ytd["payload"]["ratios"] })

      const { from, to } = this.props

      const url = ytdAPI(from, to)
      console.log(url)

      fetch(url).then(r =>
        r.json().then(json => {
          if (json) {
            this.setState({ ratios: json["payload"]["ratios"] })
            this.setState({ isLoading: false })
          }
        })
      )
    }

    componentWillReceiveProps(nextProps) {
      this.fetchRate()
    }

    componentDidMount() {
      this.fetchRate()
    }

    render() {
      return this.isLoading ? (
        <div>Loading!</div>
      ) : (
        <Component {...this.props} {...this.state} />
      )
    }
  }
}
