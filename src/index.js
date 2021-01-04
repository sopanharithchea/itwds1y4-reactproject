import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

import Landing from "views/Lading.js";
import Profile from "views/Profile.js";
import Login from "views/Login.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/landing" component={Landing} />
      <Route path="/profile" component={Profile} />
      <Route path="/Login" component={Login} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
