import React, { Component } from "react";
export default class Weather extends Component {
  state = { isHot: false };
  render() {
    return (
      <div>
        <h1>今天天气很{this.state.isHot ? "炎热" : "凉爽"}</h1>
        <button onClick={this.changeWeather}>切换</button>
      </div>
    );
  }
  changeWeather = () => {
    const { isHot } = this.state;
    this.setState({ isHot: !isHot });
  };
}
