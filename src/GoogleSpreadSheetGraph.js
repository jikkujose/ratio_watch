import React from 'react';

export default class GoogleSpreadSheetGraph extends React.Component {
  render() {
    return(
      <iframe
        width={this.props.width || 620}
        height={this.props.height || 400}
        src={this.props.link}/>
    );
  }
}
