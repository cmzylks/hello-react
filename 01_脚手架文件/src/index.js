/* 引入React核心库 */
import React from "react";
/* 引入React-Dom */
import ReactDOM from "react-dom";
/* 引入样式 */
import "./index.css";
/* 引入App组件 */
import App from "./App";
/* reportWebVitals用于网页性能分析 */
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  /* React.StrictMod 开启严格模式 */
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
