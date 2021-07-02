import React from "react";
import { Switch, Route } from "react-router-dom";


import Home from "../pages/home/index"
import Hoteis from "../pages/hoteis/index"

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/hoteis" component={Hoteis} />
    </Switch>
  );
}