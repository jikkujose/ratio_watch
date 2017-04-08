import React from 'react';
import {Graph} from './Layout.js'

export default class GoogleSpreadSheetGraph extends React.Component {
  render() {
    return(
      <Graph
        width={this.props.width || 600}
        height={this.props.height || 380}
        src={this.props.link}/>
    );
  }
}
