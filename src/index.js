import React from "react"
import ReactDOM from "react-dom"
import { App } from "./App"
import "tachyons"
import registerServiceWorker from "./registerServiceWorker"

console.log("v0.25")

ReactDOM.render(<App />, document.getElementById("root"))
registerServiceWorker()
