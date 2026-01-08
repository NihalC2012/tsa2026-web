import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { siteData } from "./data";

export default function Timeline() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(() => {
    if (filter === "all") return siteData.events;
    return siteData.events.filter((e) => e.categories.includes(filter));
  }, [filter]);

  return (
    <div>
      <header className="site-header">
        <div className="header-inner">
          <button className="icon-btn hamburger" aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}>
            <span /><span /><span />
          </button>
          <Link className="brand" to="/" aria-label="Discover Exton home">
            <img className="brand-logo" src="/assets/logo-exton.svg" alt="Discover Exton" />
          </Link>
          <nav className="nav-desktop" aria-label="Primary">
            <Link to="/">Home</Link>
            <Link to="/events" aria-current="page">Events</Link>
            <Link to="/neighborhoods">Neighborhoods</Link>
            <Link to="/people">People</Link>
          </nav>
          <button className="icon-btn" aria-label="Search" onClick={() => navigate("/search")}>
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
            <h1 className="reveal in">Events in Exton</h1>
            <p className="muted">Browse what’s happening across Exton and nearby Chester County communities.</p>

            <div className="filters" aria-label="Event filters">
              {["all", "Things to Do", "Sports & Events", "Eat & Drink", "Arts & Culture", "Family", "Outdoors & Wellness"].map((f) => (
                <button
                  key={f}
                  className={`chip ${filter === f ? "is-active" : ""}`}
                  onClick={() => setFilter(f)}
                >
                  {f === "all" ? "All" : f}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="card-grid">
              {filtered.map((e) => (
                <article key={e.id} className="event-card wide">
                  <div className="event-media">
                    <img src={e.image} alt={e.title} loading="lazy" />
                    <div className="card-overlay" />
                  </div>
                  <div className="event-body">
                    <div className="chip-row">
                      {e.categories.map((c) => <span className="chip" key={c}>{c}</span>)}
                    </div>
                    <h3 className="event-title">{e.title}</h3>
                    <p className="muted">{e.date} • {e.time}</p>
                    <p className="muted">{e.location}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <div className="container footer-inner">
            <div>
              <Link className="brand footer-brand" to="/">
                <img className="brand-logo" src="/assets/logo-exton.svg" alt="" />
              </Link>
              <p className="muted">Powered by `src/data.js`</p>
            </div>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/neighborhoods">Neighborhoods</Link>
              <Link to="/search">Search</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
