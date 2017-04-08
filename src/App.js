import React, { Component } from 'react';
import GoogleSpreadSheetGraph from './GoogleSpreadSheetGraph.js'
import {Container} from './Layout.js'

export default class App extends Component {
  render() {
    const btc_eth_url = "https://docs.google.com/spreadsheets/d/1pv2IaWoxyPc3YIy073OGoQDuSLl9x1pGUFyEF0i2L0U/pubchart?oid=987902501&amp;format=interactive"
    const eth_btc_url = "https://docs.google.com/spreadsheets/d/1pv2IaWoxyPc3YIy073OGoQDuSLl9x1pGUFyEF0i2L0U/pubchart?oid=1010490509&amp;format=interactive"

    return (
      <Container>
        <GoogleSpreadSheetGraph link={btc_eth_url} />
        <GoogleSpreadSheetGraph link={eth_btc_url} />
      </Container>
    );
  }
}
