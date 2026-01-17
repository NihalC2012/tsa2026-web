import React from "react";

export default function App() {
  return (
    <div>
      <style>{css}</style>

      <header className="topbar">
        <button className="iconBtn" aria-label="Menu">☰</button>
        <div className="brand">YourCity</div>
        <button className="iconBtn" aria-label="Search">🔍</button>
      </header>

      <section className="hero" style={{ "--bg": `url(${images.hero})` }}>
        <div className="heroInner">
          <h1 className="heroTitle">WE LOVE YOUR CITY</h1>

          <div className="heroMedia">
            <iframe
              title="We Love LA"
              src="https://www.youtube.com/embed/ScMzIvxBSi4"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <main className="wrap">
        <h2 className="sectionTitle">FEATURED</h2>

        <div className="grid2">
          <MediaCard
            img={images.card1}
            chips={["THINGS TO DO", "ATTRACTIONS & TOURS"]}
            title="THE BEST OF 2026"
            byline="by Discover YourCity"
          />
          <MediaCard
            img={images.card2}
            chips={["THINGS TO DO", "ATTRACTIONS & TOURS"]}
            title="LEARN SOMETHING NEW"
            byline="by Discover YourCity"
          />
        </div>
      </main>

      <section className="wrap">
        <h2 className="sectionTitle">UPCOMING EVENTS</h2>

        <div className="carousel" aria-label="Upcoming events">
          <EventCard
            img={images.event1}
            title="CONCERT NIGHT"
            time="Jan 7, 2026 · 10:30AM – 3PM"
          />
          <EventCard
            img={images.event2}
            title="PHILHARMONIC"
            time="Jan 9, 2026 · 8PM – 10PM"
          />
          <EventCard
            img={images.event3}
            title="BENEFIT SHOW"
            time="Jan 14, 2026 · 11:30AM – 1:30PM"
          />
          <EventCard
            img={images.event4}
            title="CITY FEST"
            time="Jan 17, 2026 · 12PM – 3PM"
          />
        </div>

        <div className="center">
          <a className="btn" href="#events">VIEW ALL EVENTS</a>
        </div>
      </section>

      <section className="mapSection" style={{ "--map": `url(${images.map})` }}>
        <div className="mapOverlay" />
        <div className="mapInner">
          <div className="aboutBox">
            <h2 className="aboutTitle">ABOUT TOWN</h2>
            <p className="aboutText">
              YourCity is home to museums, unique hotels, diverse experiences,
              and miles of coastline. The best way to discover it is exploring
              neighborhoods and local stories.
            </p>
          </div>

          <div className="pinRow">
            <Pin label="Griffith Park" />
            <Pin label="Hollywood" />
            <Pin label="Universal City" />
            <Pin label="Brentwood" />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap footerInner">
          <div>
            <div className="footerBrand">YourCity</div>
            <div className="footerSmall">© {new Date().getFullYear()} YourCity Guides</div>
          </div>
          <div className="footerLinks">
            <a href="#things">Things to do</a>
            <a href="#events">Events</a>
            <a href="#guides">Guides</a>
            <a href="#about">About</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function MediaCard({ img, chips, title, byline }) {
  return (
    <a className="card" href="#read" style={{ "--img": `url(${img})` }}>
      <div className="cardMeta">
        {chips.map((c) => (
          <span key={c} className="chip">{c}</span>
        ))}
      </div>
      <h3 className="cardTitle">{title}</h3>
      <div className="cardByline">{byline}</div>
    </a>
  );
}

function EventCard({ img, title, time }) {
  return (
    <a className="event" href="#event" style={{ "--img": `url(${img})` }}>
      <h3 className="eventTitle">{title}</h3>
      <div className="eventTime">{time}</div>
    </a>
  );
}

function Pin({ label }) {
  return (
    <button className="pin" type="button" aria-label={label}>
      <span className="pinPlus">+</span>
      <span className="pinLabel">{label}</span>
    </button>
  );
}

/**
 * Replace these URLs with your own images.
 * Tip: put images in /public and use "/hero.jpg" etc.
 */
const images = {
  hero: "https://images.unsplash.com/photo-1520975958225-0f0b0b5f8d5a?q=80&w=1600&auto=format&fit=crop",
  card1: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1400&auto=format&fit=crop",
  card2: "https://images.unsplash.com/photo-1520975693411-6b5b7e1d7d92?q=80&w=1400&auto=format&fit=crop",
  event1: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1200&auto=format&fit=crop",
  event2: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1200&auto=format&fit=crop",
  event3: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1200&auto=format&fit=crop",
  event4: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop",
  map: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=1800&auto=format&fit=crop",
};

const css = `
  :root{
    --bg-dark:#2f2f2f;
    --white:#fff;
    --muted:rgba(255,255,255,.78);
    --overlay: linear-gradient(180deg, rgba(0,0,0,.10) 0%, rgba(0,0,0,.45) 55%, rgba(0,0,0,.70) 100%);
    --wrap: 1100px;
  }
  *{ box-sizing:border-box; }
  body{ margin:0; font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; }
  a{ text-decoration:none; color:inherit; }

  .wrap{ max-width:var(--wrap); margin:0 auto; padding:48px 18px; }
  .center{ display:flex; justify-content:center; margin-top:18px; }

  /* top bar */
  .topbar{
    position:sticky; top:0; z-index:50;
    height:72px;
    display:grid;
    grid-template-columns:72px 1fr 72px;
    align-items:center;
    background:var(--bg-dark);
    color:var(--white);
  }
  .iconBtn{
    height:72px; width:72px;
    background:transparent; border:0; color:inherit;
    font-size:22px; cursor:pointer;
  }
  .brand{
    text-align:center;
    font-weight:800;
    letter-spacing:.06em;
  }

  /* hero */
  .hero{
    min-height:62vh;
    background-image: var(--overlay), var(--bg);
    background-size:cover, cover;
    background-position:center, center;
    display:flex;
    align-items:stretch;
  }
  .heroInner{
    width:100%;
    max-width:var(--wrap);
    margin:0 auto;
    padding:26px 18px;
    display:grid;
    grid-template-columns: 1.25fr .9fr;
    gap:24px;
    align-items:center;
  }
  .heroTitle{
    margin:0;
    color:var(--white);
    font-weight:900;
    text-transform:uppercase;
    letter-spacing:.08em;
    line-height:.92;
    font-size: clamp(44px, 6vw, 96px);
  }
  .heroMedia{
    aspect-ratio:16/9;
    background:#000;
    overflow:hidden;
    box-shadow: 0 18px 40px rgba(0,0,0,.35);
  }
  .heroMedia iframe{
    width:100%;
    height:100%;
    border:0;
  }

  /* titles */
  .sectionTitle{
    margin:0 0 22px;
    font-size: clamp(28px, 3vw, 44px);
    letter-spacing:.06em;
    text-transform:uppercase;
  }

  /* cards */
  .grid2{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:18px;
  }
  .card{
    position:relative;
    min-height:340px;
    overflow:hidden;
    background-image: var(--overlay), var(--img);
    background-size:cover, cover;
    background-position:center, center;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    padding:18px;
  }
  .cardMeta{ display:flex; gap:10px; margin-bottom:10px; flex-wrap:wrap; }
  .chip{
    background: rgba(0,0,0,.55);
    color: var(--white);
    font-size: 12px;
    padding: 7px 10px;
    letter-spacing:.08em;
    text-transform:uppercase;
  }
  .cardTitle{
    margin:0;
    color:var(--white);
    font-size:28px;
    font-weight:900;
    letter-spacing:.04em;
    text-transform:uppercase;
  }
  .cardByline{ margin-top:6px; color:var(--muted); font-size:14px; }

  /* carousel */
  .carousel{
    display:flex;
    gap:14px;
    overflow:auto;
    padding:6px 4px 12px;
    scroll-snap-type: x mandatory;
  }
  .event{
    flex: 0 0 280px;
    height: 170px;
    overflow:hidden;
    background-image: var(--overlay), var(--img);
    background-size:cover, cover;
    background-position:center, center;
    padding:14px;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    scroll-snap-align:start;
  }
  .eventTitle{
    margin:0;
    color:var(--white);
    font-weight:900;
    text-transform:uppercase;
    letter-spacing:.04em;
    font-size:18px;
  }
  .eventTime{ margin-top:6px; color:var(--muted); font-size:13px; }

  /* map section */
  .mapSection{
    position:relative;
    min-height: 520px;
    background-image: var(--map);
    background-size: cover;
    background-position: center;
    overflow:hidden;
  }
  .mapOverlay{
    position:absolute;
    inset:0;
    background: rgba(0,0,0,.45);
  }
  .mapInner{
    position:relative;
    max-width:var(--wrap);
    margin:0 auto;
    padding:48px 18px;
    display:grid;
    gap:24px;
    align-content:space-between;
    height:100%;
  }
  .aboutBox{
    max-width: 360px;
    color: var(--white);
  }
  .aboutTitle{
    margin:0 0 10px;
    font-size: 38px;
    letter-spacing:.06em;
    text-transform:uppercase;
    font-weight:900;
  }
  .aboutText{ margin:0; color: var(--muted); line-height:1.6; }

  .pinRow{
    display:flex;
    gap:22px;
    flex-wrap:wrap;
    align-items:center;
  }
  .pin{
    background: rgba(255,255,255,.08);
    border: 1px solid rgba(255,255,255,.25);
    color: var(--white);
    padding: 10px 14px;
    display:flex;
    align-items:center;
    gap:10px;
    cursor:pointer;
  }
  .pinPlus{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    width:28px; height:28px;
    border:1px solid rgba(255,255,255,.35);
    border-radius: 50%;
    font-weight:900;
  }
  .pinLabel{
    font-weight:700;
    letter-spacing:.02em;
  }

  /* button */
  .btn{
    display:inline-block;
    background:#f04b5a;
    color:#fff;
    padding:14px 22px;
    font-weight:800;
    letter-spacing:.06em;
    text-transform:uppercase;
  }

  /* footer */
  .footer{
    background:#111;
    color:#fff;
  }
  .footerInner{
    display:flex;
    justify-content:space-between;
    gap:18px;
    align-items:center;
    padding:28px 18px;
  }
  .footerBrand{
    font-weight:900;
    letter-spacing:.06em;
    text-transform:uppercase;
  }
  .footerSmall{ color: rgba(255,255,255,.65); margin-top:6px; font-size: 13px; }
  .footerLinks{
    display:flex;
    gap:14px;
    flex-wrap:wrap;
    color: rgba(255,255,255,.75);
    font-weight:600;
  }
  .footerLinks a:hover{ color:#fff; }

  /* responsive */
  @media (max-width: 900px){
    .heroInner{ grid-template-columns:1fr; }
    .grid2{ grid-template-columns:1fr; }
  }
`;
