import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./styles.css";
import Home from "./Home";
import Timeline from "./Timeline";
import Maps from "./Maps";
import Search from "./Search";
import People from "./People";

export default function App() {
  return (
    <Router>
      <div className="App">
        <nav className="nav-container">
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/maps" className="nav-link">
                Maps
              </Link>
            </li>
            <li>
              <Link to="/search" className="nav-link">
                Search
              </Link>
            </li>
            <li>
              <Link to="/people" className="nav-link">
                People
              </Link>
            </li>
            <li>
              <Link to="/timeline" className="nav-link">
                Timeline
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/timeline" component={Timeline} />
          <Route path="/maps" component={Maps} />
          <Route path="/search" component={Search} />
          <Route path="/people" component={People} />
        </Switch>
      </div>
    </Router>
  );
}