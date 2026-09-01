'use client';

import { useState } from 'react';

const services = [
  { title: 'Schnitt & Styling', text: 'Typgerechte Schnitte, die zu dir, deiner Haarstruktur und deinem Alltag passen.' },
  { title: 'Farbe & Veredelung', text: 'Individuelle Colorationen, Glossings und moderne Farbtechniken mit Gefühl für Nuancen.' },
  { title: 'Balayage & Blond', text: 'Softe Übergänge, leuchtende Blondtöne und natürliche Ergebnisse mit gesundem Glanz.' },
];

const priceGroups = ['Schnitt & Styling', 'Color Services', 'Treatments'];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openPrice, setOpenPrice] = useState<number | null>(null);
  const [review, setReview] = useState(0);
  const [consent, setConsent] = useState<'essential' | 'all' | null>(null);
  const reviews = [
    'Ein Salonbesuch, der sich wie eine echte Auszeit anfühlt. Beratung und Ergebnis waren außergewöhnlich.',
    'Vom ersten Gespräch bis zum Styling: aufmerksam, präzise und mit einem sicheren Gespür für Farbe.',
    'Mein neuer Lieblingssalon in München – elegant, herzlich und fachlich auf höchstem Niveau.',
  ];

  return (
    <main>
      <header className="header">
        <a href="#start" className="logo" aria-label="House of Hesha Startseite"><img src="/house-of-hesha-logo.svg" alt="House of Hesha" /></a>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          <a onClick={() => setMenuOpen(false)} href="#salon">Salon</a><a onClick={() => setMenuOpen(false)} href="#leistungen">Leistungen</a><a onClick={() => setMenuOpen(false)} href="#galerie">Galerie</a><a onClick={() => setMenuOpen(false)} href="#kontakt">Kontakt</a>
        </nav>
        <a className="book top-book" href="#preise">Termin buchen <span>↗</span></a>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menü öffnen">{menuOpen ? '×' : '☰'}</button>
      </header>

      <section className="hero" id="start">
        <div className="hero-copy"><p className="kicker">Hair Salon · Münchner Freiheit</p><h1>Dein Haar.<br /><span>Deine Handschrift.</span></h1><p>Präzise Schnitte, individuelle Farbe und ein Gespür für das, was dich ausmacht.</p><a href="#leistungen" className="outline-link">Salon entdecken <span>↓</span></a></div>
        <div className="hero-visual placeholder"><span>Salonfotografie<br />folgt nach dem Umbau</span></div>
        <div className="opening"><span>Di–Fr 09–18 Uhr</span><span>Sa 09–15 Uhr</span></div>
      </section>

      <section className="intro reveal" id="salon">
        <p className="section-no">01 / House of Hesha</p>
        <div><h2>Schönheit beginnt dort,<br />wo du <i>du selbst</i> bist.</h2><p className="intro-text">House of Hesha ist dein exklusiver Friseursalon nahe der Münchner Freiheit. Mit Erfahrung, Präzision und einem feinen Gespür für Persönlichkeit entstehen Schnitte und Farben, die nicht verkleiden – sondern unterstreichen.</p><p className="intro-text">In ruhiger, eleganter Atmosphäre nehmen wir uns Zeit für eine typgerechte Beratung und ein Ergebnis, das nicht nur heute, sondern auch morgen zu dir passt.</p></div>
      </section>

      <section className="services" id="leistungen">
        <div className="section-head"><p className="section-no">02 / Expertise</p><h2>Schnitt. Farbe.<br /><i>Persönlichkeit.</i></h2></div>
        <div className="service-list">{services.map((service, i) => <article key={service.title}><span>0{i + 1}</span><h3>{service.title}</h3><p>{service.text}</p><b>↗</b></article>)}</div>
        <p className="note">Die vollständige Leistungsübersicht wird ergänzt, sobald sie vom Salon vorliegt.</p>
      </section>

      <section className="gallery" id="galerie">
        <div className="section-head dark"><p className="section-no">03 / Galerie</p><h2>Looks, die<br /><i>bleiben.</i></h2></div>
        <div className="gallery-grid"><div className="photo-placeholder tall">01 <span>Vorher / Nachher</span></div><div className="photo-placeholder">02 <span>Coloration</span></div><div className="photo-placeholder">03 <span>Salon</span></div></div>
        <p className="gallery-note">Echte Salon- und Ergebnisfotos folgen nach dem Umbau.</p>
      </section>

      <section className="prices" id="preise">
        <p className="section-no">04 / Preise</p><div className="prices-wrap"><h2>Unsere<br /><i>Services.</i></h2><div className="accordions">{priceGroups.map((group, i) => <div className="accordion" key={group}><button onClick={() => setOpenPrice(openPrice === i ? null : i)}><span>0{i + 1}</span>{group}<b>{openPrice === i ? '−' : '+'}</b></button>{openPrice === i && <div className="price-content"><p>Leistungen und Preise werden ergänzt.</p><span>Preis folgt</span></div>}</div>)}<a className="book dark-book" href="mailto:kontakt@houseofhesha.de?subject=Terminanfrage">Termin anfragen <span>↗</span></a></div></div>
      </section>

      <section className="reviews"><p className="section-no">05 / Stimmen</p><blockquote>“{reviews[review]}”</blockquote><div className="review-controls"><button onClick={() => setReview((review + reviews.length - 1) % reviews.length)}>←</button><span>0{review + 1} / 03</span><button onClick={() => setReview((review + 1) % reviews.length)}>→</button></div><p className="note">Beispielbewertungen – werden durch echte Kundenstimmen ersetzt.</p></section>

      <section className="instagram"><div><p className="section-no">06 / Instagram</p><h2>Follow the<br /><i>transformation.</i></h2><a href="https://www.instagram.com/hairbyhesha?igsi=a25lYnR6cDZ4MDQ3" target="_blank" rel="noreferrer">@hairbyhesha ↗</a></div><div className="insta-grid">{[1,2,3].map(n => <a key={n} href="https://www.instagram.com/hairbyhesha?igsi=a25lYnR6cDZ4MDQ3" target="_blank" rel="noreferrer"><span>Instagram Post {n}</span></a>)}</div></section>

      <section className="contact" id="kontakt">
        <div className="contact-copy"><p className="section-no">07 / Besuch uns</p><h2>Wir freuen uns<br />auf <i>dich.</i></h2><address>Arthur-Kutscher-Platz 3<br />80802 München<br /><small>Nahe Münchner Freiheit</small></address><a href="mailto:kontakt@houseofhesha.de">kontakt@houseofhesha.de ↗</a><div className="hours"><span>Dienstag – Freitag</span><b>09.00 – 18.00 Uhr</b><span>Samstag</span><b>09.00 – 15.00 Uhr</b></div></div>
        <div className="map">{consent === 'all' ? <iframe title="Standort House of Hesha" loading="lazy" src="https://www.google.com/maps?q=Arthur-Kutscher-Platz%203%2C%2080802%20M%C3%BCnchen&output=embed" /> : <div className="map-consent"><span>Standort</span><b>Google Maps ist deaktiviert.</b><p>Mit dem Laden der Karte stimmst du der Übertragung von Daten an Google zu.</p><button onClick={() => setConsent('all')}>Karte laden</button></div>}</div>
      </section>

      <section className="form-section"><div><p className="section-no">Kontakt</p><h2>Was dürfen wir<br />für dich tun?</h2></div><form onSubmit={(e) => e.preventDefault()}><label>Name<input required placeholder="Dein Name" /></label><label>E-Mail<input type="email" required placeholder="deine@email.de" /></label><label>Nachricht<textarea required placeholder="Erzähl uns von deinem Wunsch" /></label><button className="book" type="submit">Anfrage senden <span>↗</span></button></form></section>

      <footer><img src="/house-of-hesha-logo.svg" alt="House of Hesha" /><div><a href="#start">Nach oben ↑</a><a href="mailto:kontakt@houseofhesha.de">Kontakt</a><a href="/impressum">Impressum</a><a href="/datenschutz">Datenschutz</a></div><p>© 2026 House of Hesha · Website by <a href="https://artivum.de" target="_blank" rel="noreferrer">Artivum</a></p></footer>
      <a className="floating-book" href="#preise">Jetzt buchen <span>↗</span></a><button className="whatsapp" onClick={() => alert('Die WhatsApp-Nummer wird ergänzt, sobald sie vorliegt.')} aria-label="WhatsApp öffnen">WA</button>
      {consent === null && <div className="cookie"><div><b>Deine Privatsphäre</b><p>Optionale Dienste wie Google Maps werden erst nach deiner Zustimmung geladen. Weitere Informationen findest du im <a href="/datenschutz">Datenschutz</a>.</p></div><button onClick={() => setConsent('essential')}>Nur notwendige</button><button className="accept" onClick={() => setConsent('all')}>Alle akzeptieren</button></div>}
    </main>
  );
}
