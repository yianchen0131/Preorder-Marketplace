import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterUser from "./anotherpage/RegisterUser";
import Home from "./anotherpage/Home";
import Newin from "./anotherpage/Newin";
import MemberCheckout from "./anotherpage/MemberCheckout";
import AllView from "./anotherpage/AllView";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/RegisterUser" element={<RegisterUser />}></Route>
        <Route path="/" element={<AllView />}></Route>
        <Route path="/Newin" element={<Home />}></Route>
        <Route path="/MemberCheckout" element={<MemberCheckout />}></Route>
        <Route path="/All" element={<Newin />}></Route>
        <Route path="/Join" element={<RegisterUser />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
