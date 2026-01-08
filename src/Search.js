import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { siteData } from "./data";

export default function Search() {
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return [];

    const pack = [];

    siteData.events.forEach((e) => {
      const hay = `${e.title} ${e.location} ${e.categories.join(" ")}`.toLowerCase();
      if (hay.includes(query)) pack.push({ type: "Event", title: e.title, meta: `${e.date} • ${e.time}`, href: "/events" });
    });

    siteData.itineraries.forEach((i) => {
      const hay = `${i.title} ${i.description}`.toLowerCase();
      if (hay.includes(query)) pack.push({ type: "Itinerary", title: i.title, meta: i.description, href: "/" });
    });

    siteData.featuredArticles.forEach((a) => {
      const hay = `${a.title} ${a.author} ${a.categories.join(" ")}`.toLowerCase();
      if (hay.includes(query)) pack.push({ type: "Article", title: a.title, meta: `by ${a.author}`, href: "/" });
    });

    siteData.neighborhoods.forEach((n) => {
      const hay = `${n.name} ${n.description} ${n.chips.join(" ")}`.toLowerCase();
      if (hay.includes(query)) pack.push({ type: "Neighborhood", title: n.name, meta: n.description, href: "/neighborhoods" });
    });

    return pack.slice(0, 20);
  }, [q]);

  return (
    <div>
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" to="/">
            <img className="brand-logo" src="/assets/logo-exton.svg" alt="Discover Exton" />
          </Link>
          <nav className="nav-desktop">
            <Link to="/">Home</Link>
            <Link to="/events">Events</Link>
            <Link to="/neighborhoods">Neighborhoods</Link>
            <Link to="/people">People</Link>
          </nav>
        </div>
      </header>

      <main className="page">
        <section className="page-hero">
          <div className="container">
            <h1>Search</h1>
            <p className="muted">Search events, itineraries, articles, and neighborhoods.</p>

            <input
              className="search-input"
              placeholder="Try: parks, trails, music, family..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />

            <div className="search-results">
              {!q.trim() && <p className="muted">Start typing to see results.</p>}
              {q.trim() && results.length === 0 && <p className="muted">No results found.</p>}

              {results.map((r, idx) => (
                <Link key={idx} className="search-item" to={r.href}>
                  <span className="pill">{r.type}</span>
                  <div>
                    <div className="search-title">{r.title}</div>
                    <div className="muted small">{r.meta}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
