import React from "react";

export default function Home() {
  return (
    <div className="home-page" style={{ padding: "20px", textAlign: "center" }}>
      <h1>Exton</h1>
      <div style={{ padding: "20px", textAlign: "center", fontFamily: "Arial, sans-serif" }}>
        <p>Explore Exton's rich history</p>
        <div style={{ marginTop: "30px" }}>
          <h2>Fun Facts About Exton:</h2>
          <p>Exton was named after the X that formed on the map in the intersection between Route 30 and Route 100</p>
          <p>Exton was home to the Newcomen society in the 1940s which built a campus with offices, a library, and a museum.</p>
          <p>The Exton Mall had the first Chick-Fil-A in all of Pennsylvania.</p>
        </div>
      </div>
    </div>
  );
}