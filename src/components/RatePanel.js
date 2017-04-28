import React from 'react';
import {Panel} from './Styles.js'
import loadRate from './loadRate.js'

class RatePanel extends React.Component {
  render() {
    let { from, to, rate } = this.props

    return(
      <Panel>
        {`1 ${from} = ${rate} ${to}`}
      </Panel>
    );
  }
}

export default loadRate()(RatePanel)
