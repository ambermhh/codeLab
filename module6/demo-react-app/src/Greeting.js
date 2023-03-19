import React, { Component } from 'react'

export default class Greeting extends Component {
  render() {
    const name = "Amber";
    return (
      <div><h1>hello, {name}!</h1></div>
    )
  }
}

