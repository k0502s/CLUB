import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import loadUser from "./components/auth/loadUser";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/custom.scss';
loadUser();
ReactDOM.render(<App />, document.getElementById("root"));
