import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page" style={{ padding: "20px" }}>
      <h1>Home</h1>
      <div style={{ padding: "20px" }}>
        <p>Welcome to the application!</p>
        <p>Navigate to different sections using the menu above.</p>
        <div style={{ marginTop: "30px" }}>
          <h2>Available Pages:</h2>
          <ul style={{ fontSize: "18px", lineHeight: "2" }}>
            <li><Link to="/timeline">Timeline</Link> - View the timeline of events</li>
            <li><Link to="/maps">Maps</Link> - Explore maps</li>
            <li><Link to="/search">Search</Link> - Search functionality</li>
            <li><Link to="/people">People</Link> - View people directory</li>
          </ul>
        </div>
      </div>
    </div>
  );
}