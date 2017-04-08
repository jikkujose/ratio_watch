import React, { Component } from 'react';
import GoogleSpreadSheetGraph from './GoogleSpreadSheetGraph.js'

class App extends Component {
  render() {
    return (
      <GoogleSpreadSheetGraph
        link="https://docs.google.com/spreadsheets/d/1pv2IaWoxyPc3YIy073OGoQDuSLl9x1pGUFyEF0i2L0U/pubchart?oid=987902501&amp;format=interactive" />
    );
  }
}

export default App;
