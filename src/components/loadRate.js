import React from 'react';
import {Panel} from './Styles.js'

export default function loadRate() {
  return (Component) => {
    class WrappedComponent extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          from: 'BTC',
          to: 'ETH',
          rate: null,
          isLoading: true
        }
      }

      url() {
        let {from, to} = this.state

        return(
          `https://shapeshift.io/rate/${from}_${to}`
        )
      }

      componentDidMount() {
        fetch(this.url()).then(r => r.json().then(j =>
          this.setState(s => ({rate: j["rate"], isLoading: false}))
        ))
      }

      render() {
        if(this.state.isLoading) {
          return <Panel>Loading rate..</Panel>
        }

        return(
          <Component {...this.state} />
        )
      }
    }

    return(WrappedComponent)
  }
}
