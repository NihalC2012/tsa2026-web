import React from "react";

export default function Home() {
  const funFacts = [
    {
      id: 1,
      title: "The X Marks the Spot",
      description: "Exton was named after the X that formed on the map at the intersection between Route 30 and Route 100"
    },
    {
      id: 2,
      title: "Newcomen Society",
      description: "Exton was home to the Newcomen Society in the 1940s which built a campus with offices, a library, and a museum."
    },
    {
      id: 3,
      title: "First Chick-fil-A",
      description: "The Exton Mall had the first Chick-fil-A in all of Pennsylvania."
    }
  ];

  return (
    <div className="home-page">
      <div className="page-container">
        <div style={{ textAlign: "center", marginBottom: "var(--space-3xl)" }}>
          <h1 style={{ fontSize: "var(--font-size-4xl)", marginBottom: "var(--space-md)" }}>
            Welcome to Exton
          </h1>
          <p style={{
            fontSize: "var(--font-size-xl)",
            color: "var(--color-text-secondary)",
            maxWidth: "700px",
            margin: "0 auto"
          }}>
            Explore the rich history and heritage of Exton, Pennsylvania
          </p>
        </div>

        <div className="section">
          <h2 style={{ textAlign: "center", marginBottom: "var(--space-xl)" }}>
            Fun Facts About Exton
          </h2>
          <div className="card-grid">
            {funFacts.map((fact) => (
              <div key={fact.id} className="card">
                <h3 className="card-title">{fact.title}</h3>
                <p className="card-text">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="section-light" style={{ textAlign: "center", marginTop: "var(--space-2xl)" }}>
          <h3 style={{ marginBottom: "var(--space-lg)" }}>Discover More</h3>
          <p style={{
            marginBottom: "var(--space-xl)",
            color: "var(--color-text-secondary)"
          }}>
            Navigate through our site to learn more about Exton's landmarks, notable people, and historical timeline
          </p>
          <div style={{
            display: "flex",
            gap: "var(--space-md)",
            justifyContent: "center",
            flexWrap: "wrap"
          }}>
            <a href="/maps" className="btn btn-primary">
              Explore Maps
            </a>
            <a href="/people" className="btn btn-secondary">
              Notable People
            </a>
            <a href="/timeline" className="btn btn-secondary">
              View Timeline
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}