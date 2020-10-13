import React from "react"
import Main from "./pages/Main"
import Layer from "./pages/Layer"
import {HashRouter as Router, Route} from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Layer>
          <Route path="/" component={Main} exact></Route>
        </Layer>
      </Router>
    )
  }
}
