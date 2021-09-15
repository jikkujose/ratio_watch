import React from "react"
import { ytd } from "../data"

const ytdAPI = (from, to) =>
  `https://api.ratiowatch.org/ytd?_from=${from}&_to=${to}`

export default function withHistoryFetch(Component) {
  return class WrappedComponent extends React.Component {
    state = {
      ratios: [],
      isLoading: true,
    }

    fetchRate = () => {
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
