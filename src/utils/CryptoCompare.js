export default class CryptoCompare {
  constructor(from, to) {
    this.from = from
    this.to = to
  }

  url() {
    const prefix =
      "https://min-api.cryptocompare.com/data/pricemultifull?fsyms="

    return `${prefix}${this.from}&tsyms=${this.to}`
  }

  extract(json, that) {
    const isError = !!json["Response"]
    let rate = null
    let error = null

    if (isError) {
      error = json["Message"]
    } else {
      rate = json["RAW"][this.from][this.to]["PRICE"]
    }

    that.setState(state => {
      return { rate, error }
    })
  }
}
