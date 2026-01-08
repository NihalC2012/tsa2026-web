import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { siteData } from "./data";

export default function Maps() {
  const history = useHistory();
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState(siteData.neighborhoods[0]);

  return (
    <div>
      <header className="site-header">
        <div className="header-inner">
          <button className="icon-btn hamburger" aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}>
            <span /><span /><span />
          </button>
          <Link className="brand" to="/">
            <img className="brand-logo" src="/assets/logo-exton.svg" alt="Discover Exton" />
          </Link>
          <nav className="nav-desktop">
            <Link to="/">Home</Link>
            <Link to="/events">Events</Link>
            <Link to="/neighborhoods" aria-current="page">Neighborhoods</Link>
            <Link to="/people">People</Link>
          </nav>
          <button className="icon-btn" aria-label="Search" onClick={() => history.push("/search")}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 18a8 8 0 1 1 5.3-14 8 8 0 0 1-5.3 14Zm11 3-6.2-6.2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            <nav>
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link>
              <Link to="/neighborhoods" onClick={() => setMenuOpen(false)}>Neighborhoods</Link>
              <Link to="/people" onClick={() => setMenuOpen(false)}>People</Link>
            </nav>
          </div>
        )}
      </header>

      <main className="page">
        <section className="page-hero">
          <div className="container">
            <h1>Neighborhoods</h1>
            <p className="muted">Explore Exton, West Whiteland, East Whiteland, and nearby Downingtown.</p>
          </div>
        </section>

        <section className="section">
          <div className="container town-layout">
            <div className="town-map">
              <svg viewBox="0 0 860 460" aria-label="Neighborhood map">
                <rect x="0" y="0" width="860" height="460" rx="18" fill="rgba(255,255,255,0.03)" />
                <g className="map-regions">
                  {siteData.neighborhoods.map((n) => {
                    const paths = {
                      Exton: "M120,120 h240 v140 h-240 z",
                      "West Whiteland": "M380,90 h300 v160 h-300 z",
                      "East Whiteland": "M150,280 h260 v120 h-260 z",
                      Downingtown: "M450,280 h260 v120 h-260 z",
                    };
                    return (
                      <path
                        key={n.name}
                        className={`region ${selected?.name === n.name ? "active" : ""}`}
                        d={paths[n.name]}
                        onClick={() => setSelected(n)}
                        role="button"
                        tabIndex="0"
                        aria-label={`Select ${n.name}`}
                      />
                    );
                  })}
                </g>
                <g className="map-labels" aria-hidden="true">
                  <text x="140" y="200">Exton</text>
                  <text x="400" y="175">West Whiteland</text>
                  <text x="170" y="350">East Whiteland</text>
                  <text x="470" y="350">Downingtown</text>
                </g>
              </svg>
            </div>

            <aside className="town-panel">
              <div className="town-panel-head">
                <h3>{selected?.name}</h3>
                <a
                  className="text-link"
                  href={`https://www.google.com/maps?q=${selected.coordinates.lat},${selected.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get directions
                </a>
              </div>

              <p className="town-desc">{selected?.description}</p>

              <div className="chip-row">
                {selected?.chips?.map((c) => <span className="chip" key={c}>{c}</span>)}
              </div>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}
