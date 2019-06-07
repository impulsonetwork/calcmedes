import React from "react"
import ReactDOM from "react-dom"

import App from "./App"

ReactDOM.render(<App />, document.getElementById("root"))

module.hot && module.hot.accept()

process.env.NODE_ENV === "production" && require("offline-plugin/runtime").install()