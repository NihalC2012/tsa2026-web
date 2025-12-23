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
        <nav style={{
          backgroundColor: "#333",
          padding: "15px",
          marginBottom: "20px"
        }}>
          <ul style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            gap: "20px"
          }}>
            <li>
              <Link to="/" style={{
                color: "white",
                textDecoration: "none",
                fontSize: "18px"
              }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/maps" style={{
                color: "white",
                textDecoration: "none",
                fontSize: "18px"
              }}>
                Maps
              </Link>
            </li>
            <li>
              <Link to="/search" style={{
                color: "white",
                textDecoration: "none",
                fontSize: "18px"
              }}>
                Search
              </Link>
            </li>
            <li>
              <Link to="/people" style={{
                color: "white",
                textDecoration: "none",
                fontSize: "18px"
              }}>
                People
              </Link>
            </li>
            <li>
              <Link to="/timeline" style={{
                color: "white",
                textDecoration: "none",
                fontSize: "18px"
              }}>
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