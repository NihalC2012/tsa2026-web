import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Timeline from "./Timeline";
import Maps from "./Maps";
import People from "./People";
import Search from "./Search";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/events" component={Timeline} />
      <Route path="/neighborhoods" component={Maps} />
      <Route path="/people" component={People} />
      <Route path="/search" component={Search} />
      <Route component={Home} />
    </Switch>
  );
}
