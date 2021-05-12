import React from "react"
import ReactDOM from "react-dom"
// import App from "./App"
import { HookedApp } from "./HookedApp"
import "tachyons"
import registerServiceWorker from "./registerServiceWorker"

ReactDOM.render(<HookedApp />, document.getElementById("root"))
registerServiceWorker()
