import Header from "./Header"
import React from "react"

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
      </div>
    )
  }
}
