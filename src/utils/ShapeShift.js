export default class ShapeShift {
  url(from, to) {
    return `https://shapeshift.io/rate/${from}_${to}`
  }

  extract(json, that) {
    that.setState(state => ({ rate: json["rate"], error: json["error"] }))
  }
}
