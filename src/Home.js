import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { siteData } from "./data";

export default function Home() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [cookieOpen, setCookieOpen] = useState(false);
  const [activeTown, setActiveTown] = useState(null);
  const eventsRef = useRef(null);
  const streetsRef = useRef(null);

  useEffect(() => {
    // Cookie banner
    const saved = localStorage.getItem("exton_cookie_choice");
    if (!saved) setCookieOpen(true);

    // Reveal on scroll
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    // back to top visibility
    const btn = document.getElementById("backToTop");
    const onScroll = () => {
      if (!btn) return;
      btn.hidden = window.scrollY < 600;
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const town = useMemo(() => {
    if (!activeTown) return null;
    return siteData.neighborhoods.find((n) => n.name === activeTown) || null;
  }, [activeTown]);

  const scrollCarousel = (ref, dir) => {
    if (!ref?.current) return;
    ref.current.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  const acceptCookies = (choice) => {
    localStorage.setItem("exton_cookie_choice", choice);
    setCookieOpen(false);
  };

  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div>
      {/* Header */}
      <header className="site-header">
        <div className="header-inner">
          <button
            className="icon-btn hamburger"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>

          <Link className="brand" to="/" aria-label="Discover Exton home">
            <img className="brand-logo" src="/assets/logo-exton.svg" alt="Discover Exton" />
          </Link>

          <nav className="nav-desktop" aria-label="Primary">
            <a href="#things">Things to do</a>
            <a href="#events">Events</a>
            <a href="#itineraries">Itineraries</a>
            <a href="#neighborhoods">Neighborhoods</a>
            <a href="#food">Eat & Drink</a>
          </nav>

          <button className="icon-btn" aria-label="Search" onClick={() => navigate("/search")}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M10 18a8 8 0 1 1 5.3-14 8 8 0 0 1-5.3 14Zm11 3-6.2-6.2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu" id="mobileMenu">
            <nav aria-label="Mobile">
              <a href="#things" onClick={() => setMenuOpen(false)}>Things to do</a>
              <a href="#events" onClick={() => setMenuOpen(false)}>Events</a>
              <a href="#itineraries" onClick={() => setMenuOpen(false)}>Itineraries</a>
              <a href="#neighborhoods" onClick={() => setMenuOpen(false)}>Neighborhoods</a>
              <a href="#food" onClick={() => setMenuOpen(false)}>Eat & Drink</a>
              <hr />
              <Link to="/events" onClick={() => setMenuOpen(false)}>All Events</Link>
              <Link to="/neighborhoods" onClick={() => setMenuOpen(false)}>All Neighborhoods</Link>
              <Link to="/people" onClick={() => setMenuOpen(false)}>People</Link>
            </nav>
          </div>
        )}
      </header>

      <main id="main">
        {/* HERO */}
        <section className="hero" aria-label="Hero">
          <div className="hero-bg" aria-hidden="true" />
          <div className="hero-content container">
            <div className="hero-left reveal">
              <p className="eyebrow">Chester County, Pennsylvania</p>
              <h1 className="hero-title">WE LOVE EXTON</h1>
              <p className="hero-subtitle">
                Trails, town centers, local eats, and day trips—your curated guide to discovering Exton.
              </p>
              <div className="hero-cta">
                <a className="btn primary" href="#things">Explore highlights</a>
                <Link className="btn ghost" to="/events">See events</Link>
              </div>
            </div>

            <div className="hero-right reveal">
              <div className="video-frame" aria-label="Featured video: We Love Exton">
                <iframe
                  title="We Love Exton"
                  loading="lazy"
                  src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <a className="scroll-hint" href="#quote" aria-label="Scroll">
            <span />
          </a>
        </section>

        {/* QUOTE */}
        <section id="quote" className="quote-section">
          <div className="container reveal">
            <div className="quote-card">
              <div className="quote-mark" aria-hidden="true">“</div>
              <p className="quote-text">
                I arrived in Exton in the evening—then the next morning the light hit the trees, trails, and town center…
                and it genuinely <span className="gradient-text">thrilled my soul</span>.
              </p>
              <p className="quote-attrib">— A first-time visitor</p>
            </div>
          </div>
        </section>

        {/* FEATURED */}
        <section id="things" className="section">
          <div className="container">
            <div className="section-head reveal">
              <h2>Featured</h2>
              <p>Quick picks to start planning—updated seasonally with local favorites.</p>
            </div>

            <div className="featured-grid">
              {siteData.featured.map((c) => (
                <Link key={c.title} to={c.href} className="card reveal">
                  <div className="card-media">
                    <img src={c.image} alt={c.title} loading="lazy" />
                    <div className="card-overlay" />
                  </div>
                  <div className="card-body">
                    <div className="chip-row">
                      {c.tags.map((t) => (
                        <span className="chip" key={t}>{t}</span>
                      ))}
                    </div>
                    <h3>{c.title}</h3>
                    <p className="muted">{c.subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* EVENTS CAROUSEL */}
        <section id="events" className="section">
          <div className="container">
            <div className="section-head reveal">
              <h2>Upcoming Events</h2>
              <div className="section-actions">
                <Link className="text-link" to="/events">View all events</Link>
              </div>
            </div>

            <div className="carousel-shell reveal" aria-label="Upcoming events carousel">
              <button className="carousel-btn" onClick={() => scrollCarousel(eventsRef, -1)} aria-label="Scroll left">‹</button>
              <div className="carousel" ref={eventsRef} tabIndex="0">
                {siteData.events.map((e) => (
                  <article key={e.id} className="event-card">
                    <div className="event-media">
                      <img src={e.image} alt={e.title} loading="lazy" />
                      <div className="card-overlay" />
                    </div>
                    <div className="event-body">
                      <div className="chip-row">
                        {e.categories.slice(0, 2).map((c) => (
                          <span className="chip" key={c}>{c}</span>
                        ))}
                      </div>
                      <h3 className="event-title">{e.title}</h3>
                      <p className="muted">{e.date} • {e.time}</p>
                      <p className="muted">{e.location}</p>
                    </div>
                  </article>
                ))}
              </div>
              <button className="carousel-btn" onClick={() => scrollCarousel(eventsRef, 1)} aria-label="Scroll right">›</button>
            </div>
          </div>
        </section>

        {/* PROMO */}
        <section className="promo-banner" aria-label="Major event promotion">
          <div className="container reveal">
            <div className="promo-card">
              <img className="promo-image" src="/assets/promo-banner.jpg" alt="Exton Summer Days Festival banner" loading="lazy" />
              <div className="promo-overlay">
                <p className="promo-eyebrow">Major Event</p>
                <h3 className="promo-title">Exton Summer Days Festival</h3>
                <p className="promo-copy">
                  Live music, local vendors, family activities, and food trucks—right in the heart of Chester County.
                </p>
                <Link className="btn primary" to="/events">Explore festival events</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ITINERARIES */}
        <section id="itineraries" className="section">
          <div className="container">
            <div className="section-head reveal">
              <h2>Find Your Perfect Itinerary</h2>
              <div className="section-actions">
                <a className="text-link" href="#itineraries">Browse</a>
              </div>
            </div>

            <div className="itinerary-grid reveal">
              {siteData.itineraries.map((i) => (
                <div key={i.id} className="it-card">
                  <div className="it-media">
                    <img src={i.image} alt={i.title} loading="lazy" />
                    <div className="card-overlay" />
                  </div>
                  <div className="it-body">
                    <h3>{i.title}</h3>
                    <p className="muted">{i.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ARTICLES */}
        <section id="food" className="section">
          <div className="container">
            <div className="section-head reveal">
              <h2>Featured Articles</h2>
              <p>Stories and guides for food, outdoors, and what’s happening next.</p>
            </div>

            <div className="article-grid reveal">
              {siteData.featuredArticles.map((a) => (
                <article key={a.id} className="article-card">
                  <div className="article-media">
                    <img src={a.image} alt={a.title} loading="lazy" />
                    <div className="card-overlay strong" />
                  </div>
                  <div className="article-body">
                    <div className="chip-row">
                      {a.categories.slice(0, 2).map((c) => (
                        <span className="chip" key={c}>{c}</span>
                      ))}
                    </div>
                    <h3>{a.title}</h3>
                    <p className="muted">by {a.author}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* LOVELY STREETS */}
        <section className="section">
          <div className="container">
            <div className="section-head reveal">
              <h2>These Lovely Streets</h2>
              <p>Meet the people and places shaping Exton’s vibe.</p>
            </div>

            <div className="streets-carousel reveal">
              <button className="carousel-btn" onClick={() => scrollCarousel(streetsRef, -1)} aria-label="Scroll left">‹</button>
              <div className="carousel" ref={streetsRef} tabIndex="0">
                {siteData.streets.map((s) => (
                  <div key={s.id} className="street-card">
                    <div className="street-thumb">
                      <img src={s.thumb} alt={s.name} loading="lazy" />
                      <div className="card-overlay strong" />
                      <button
                        className="play-btn"
                        aria-label={`Play video: ${s.name}`}
                        onClick={() => window.open(s.video, "_blank", "noopener,noreferrer")}
                      >
                        ▶
                      </button>
                    </div>
                    <div className="street-body">
                      <h3>{s.name}</h3>
                      <p className="muted">{s.tagline}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="carousel-btn" onClick={() => scrollCarousel(streetsRef, 1)} aria-label="Scroll right">›</button>
            </div>
          </div>
        </section>

        {/* ABOUT TOWN MAP */}
        <section id="neighborhoods" className="section about-town">
          <div className="container">
            <div className="section-head reveal">
              <h2>About Town</h2>
              <p>Explore Exton and nearby communities—tap a region to learn more.</p>
            </div>

            <div className="town-layout reveal">
              <div className="town-map" role="application" aria-label="Interactive neighborhood map">
                <svg viewBox="0 0 860 460" aria-label="Map of Exton area">
                  <rect x="0" y="0" width="860" height="460" rx="18" fill="rgba(255,255,255,0.03)" />
                  <g className="map-regions">
                    {["Exton", "West Whiteland", "East Whiteland", "Downingtown"].map((name, idx) => {
                      const paths = {
                        Exton: "M120,120 h240 v140 h-240 z",
                        "West Whiteland": "M380,90 h300 v160 h-300 z",
                        "East Whiteland": "M150,280 h260 v120 h-260 z",
                        Downingtown: "M450,280 h260 v120 h-260 z",
                      };
                      return (
                        <path
                          key={name}
                          className={`region ${activeTown === name ? "active" : ""}`}
                          d={paths[name]}
                          onClick={() => setActiveTown(name)}
                          role="button"
                          tabIndex="0"
                          aria-label={`Select ${name}`}
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
                <div className="map-help" aria-hidden="true">Click a region to view details.</div>
              </div>

              <aside className="town-panel" aria-label="Neighborhood details">
                <div className="town-panel-head">
                  <h3>{town ? town.name : "Select an area"}</h3>
                  {town && (
                    <a
                      className="text-link"
                      href={`https://www.google.com/maps?q=${town.coordinates.lat},${town.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get directions
                    </a>
                  )}
                </div>

                <p className="town-desc">
                  {town
                    ? town.description
                    : "Tap Exton, West Whiteland, East Whiteland, or Downingtown to see highlights and quick tips."}
                </p>

                <div className="chip-row" aria-label="Neighborhood tags">
                  {town?.chips?.map((c) => (
                    <span className="chip" key={c}>{c}</span>
                  ))}
                </div>

                <div className="town-actions">
                  <Link className="btn ghost" to="/neighborhoods">Browse all neighborhoods</Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="site-footer">
          <div className="container footer-inner">
            <div>
              <Link className="brand footer-brand" to="/">
                <img className="brand-logo" src="/assets/logo-exton.svg" alt="" />
              </Link>
              <p className="muted">Static-friendly React site powered by `src/data.js`.</p>
            </div>
            <div className="footer-links" aria-label="Footer links">
              <Link to="/events">Events</Link>
              <Link to="/neighborhoods">Neighborhoods</Link>
              <Link to="/people">People</Link>
              <a href="#main">Back to top</a>
            </div>
          </div>
          <div className="container footer-bottom">
            <p className="muted">© {new Date().getFullYear()} Discover Exton • Chester County, PA</p>
          </div>
        </footer>
      </main>

      {/* Back to top */}
      <button id="backToTop" className="back-to-top" aria-label="Back to top" hidden onClick={toTop}>
        ↑
      </button>

      {/* Cookie banner */}
      {cookieOpen && (
        <section className="cookie-banner" aria-label="Cookie consent">
          <div className="cookie-inner">
            <div>
              <strong>We value your privacy</strong>
              <p className="muted">
                This site uses cookies/analytics to improve your experience. You can manage preferences anytime.
              </p>
            </div>
            <div className="cookie-actions">
              <button className="btn primary" onClick={() => acceptCookies("accepted")}>Agree & proceed</button>
              <button className="btn ghost" onClick={() => acceptCookies("managed")}>Manage choices</button>
              <button className="btn subtle" onClick={() => acceptCookies("rejected")}>Reject all</button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
