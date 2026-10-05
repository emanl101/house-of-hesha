'use client';

import { useState } from 'react';

const services = [
  { title: 'Damen', text: 'Schnitt, Styling, Farbe, Strähnen, Balayage und Pflege – individuell auf dich abgestimmt.', audience: 'damen' as const },
  { title: 'Herren', text: 'Waschen, Schneiden und Föhnen für einen präzisen, typgerechten Look.', audience: 'herren' as const },
];

const womenPriceGroups = [
  {
    title: 'Waschen, Schneiden & Föhnen',
    items: [
      ['S', '49,00 €'],
      ['M', '59,00 €'],
      ['L', '69,00 €'],
      ['XL', '79,00 €'],
    ],
  },
  {
    title: 'Waschen & Föhnen',
    items: [
      ['S', '26,00 €'],
      ['M', '36,00 €'],
      ['L', '46,00 €'],
      ['XL', '56,00 €'],
    ],
  },
  {
    title: 'Farbe',
    items: [
      ['Komplettfarbe', 'ab 79,00 €'],
      ['Ansatzfarbe', 'ab 49,00 €'],
      ['Glossing', 'ab 49,00 €'],
    ],
  },
  {
    title: 'Strähnen',
    items: [['Ganzer Kopf', 'ab 139,00 €']],
  },
  {
    title: 'Balayage',
    items: [
      ['S (bis Kinn)', '249,00 €'],
      ['M (bis Schulter)', '269,00 €'],
      ['L (ab Schulter)', '289,00 €'],
      ['XL (Überlänge)', '299,00 €'],
    ],
  },
  {
    title: 'Pflege',
    items: [['Maske', '11,00 €']],
  },
];
const menPriceGroups = [
  {
    title: 'Waschen, Schneiden & Föhnen',
    items: [['Herren', '35,00 €']],
  },
];
const salonkeeUrl = 'https://www.salonkee.de/salon/house-of-hesha?lang=de';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openPrice, setOpenPrice] = useState<number | null>(null);
  const [priceAudience, setPriceAudience] = useState<'damen' | 'herren'>('damen');
  const [review, setReview] = useState(0);
  const [consent, setConsent] = useState<'essential' | 'all' | null>(null);
  const reviews = [
    'Ein Salonbesuch, der sich wie eine echte Auszeit anfühlt. Beratung und Ergebnis waren außergewöhnlich.',
    'Vom ersten Gespräch bis zum Styling: aufmerksam, präzise und mit einem sicheren Gespür für Farbe.',
    'Mein neuer Lieblingssalon in München – elegant, herzlich und fachlich auf höchstem Niveau.',
  ];

  const showPrices = (audience: 'damen' | 'herren') => {
    setPriceAudience(audience);
    setOpenPrice(0);
    document.getElementById('preise')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const activePriceGroups = priceAudience === 'damen' ? womenPriceGroups : menPriceGroups;

  return (
    <main>
      <header className="header">
        <a href="#start" className="logo" aria-label="House of Hesha Startseite"><img src="./house-of-hesha-logo.svg" alt="House of Hesha" /></a>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          <a onClick={() => setMenuOpen(false)} href="#salon">Salon</a><a onClick={() => setMenuOpen(false)} href="#leistungen">Leistungen</a><a onClick={() => setMenuOpen(false)} href="#galerie">Galerie</a><a onClick={() => setMenuOpen(false)} href="#kontakt">Kontakt</a>
        </nav>
        <a className="book top-book" href={salonkeeUrl} target="_blank" rel="noreferrer">Termin buchen <span>↗</span></a>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menü öffnen">{menuOpen ? '×' : '☰'}</button>
      </header>

      <section className="hero" id="start">
        <div className="hero-copy"><p className="kicker">Hair Salon · Münchner Freiheit</p><h1>Your hair.<br /><span>Your style.<br />Your statement.</span></h1><p>Präzise Schnitte, individuelle Farbe und ein Gespür für das, was dich ausmacht.</p><a href="#leistungen" className="outline-link">Salon entdecken <span>↓</span></a></div>
        <div className="hero-visual placeholder"><span>Salonfotografie<br />folgt nach dem Umbau</span></div>
        <div className="opening"><span>Di–Fr 09–18 Uhr</span><span>Sa 09–15 Uhr</span></div>
      </section>

      <section className="intro reveal" id="salon">
        <p className="section-no">01 / House of Hesha</p>
        <div><h2>Schönheit beginnt dort,<br />wo du <i>du selbst</i> bist.</h2><p className="intro-text">House of Hesha ist dein exklusiver Friseursalon nahe der Münchner Freiheit. Mit Erfahrung, Präzision und einem feinen Gespür für Persönlichkeit entstehen Schnitte und Farben, die nicht verkleiden – sondern unterstreichen.</p><p className="intro-text">In ruhiger, eleganter Atmosphäre nehmen wir uns Zeit für eine typgerechte Beratung und ein Ergebnis, das nicht nur heute, sondern auch morgen zu dir passt.</p></div>
      </section>

      <section className="services" id="leistungen">
        <div className="section-head"><p className="section-no">02 / Leistungen</p><h2>Damen. Herren.<br /><i>Persönlichkeit.</i></h2></div>
        <div className="service-list">{services.map((service, i) => <button className="service-card" type="button" key={service.title} onClick={() => showPrices(service.audience)} aria-label={`${service.title}: Preise anzeigen`}><span>0{i + 1}</span><h3>{service.title}</h3><p>{service.text}</p><b>↘</b></button>)}</div>
      </section>

      <section className="gallery" id="galerie">
        <div className="section-head dark"><p className="section-no">03 / Galerie</p><h2>Looks, die<br /><i>bleiben.</i></h2></div>
        <div className="gallery-grid"><div className="photo-placeholder tall">01 <span>Vorher / Nachher</span></div><div className="photo-placeholder">02 <span>Coloration</span></div><div className="photo-placeholder">03 <span>Salon</span></div></div>
        <p className="gallery-note">Echte Salon- und Ergebnisfotos folgen nach dem Umbau.</p>
      </section>

      <section className="prices" id="preise">
        <p className="section-no">04 / Preise · {priceAudience === 'damen' ? 'Damen' : 'Herren'}</p><div className="prices-wrap"><h2>{priceAudience === 'damen' ? 'Damen-' : 'Herren-'}<br /><i>preise.</i></h2><div className="price-panel"><div className="price-tabs" aria-label="Preiskategorie"><button className={priceAudience === 'damen' ? 'active' : ''} type="button" onClick={() => { setPriceAudience('damen'); setOpenPrice(0); }}>Damen</button><button className={priceAudience === 'herren' ? 'active' : ''} type="button" onClick={() => { setPriceAudience('herren'); setOpenPrice(0); }}>Herren</button></div><div className="accordions">{activePriceGroups.map((group, i) => <div className="accordion" key={group.title}><button onClick={() => setOpenPrice(openPrice === i ? null : i)} aria-expanded={openPrice === i}><span>0{i + 1}</span>{group.title}<b>{openPrice === i ? '−' : '+'}</b></button>{openPrice === i && <div className="price-content">{group.items.map(([service, price]) => <div className="price-row" key={service}><span>{service}</span><strong>{price}</strong></div>)}</div>}</div>)}</div><a className="book dark-book" href={salonkeeUrl} target="_blank" rel="noreferrer">Termin buchen <span>↗</span></a></div></div>
      </section>

      <section className="reviews"><p className="section-no">05 / Stimmen</p><blockquote>“{reviews[review]}”</blockquote><div className="review-controls"><button onClick={() => setReview((review + reviews.length - 1) % reviews.length)}>←</button><span>0{review + 1} / 03</span><button onClick={() => setReview((review + 1) % reviews.length)}>→</button></div><p className="note">Beispielbewertungen – werden durch echte Kundenstimmen ersetzt.</p></section>

      <section className="instagram"><div><p className="section-no">06 / Instagram</p><h2>Follow the<br /><i>transformation.</i></h2><a href="https://www.instagram.com/hairbyhesha?igsi=a25lYnR6cDZ4MDQ3" target="_blank" rel="noreferrer">@hairbyhesha ↗</a></div><div className="insta-grid">{[1,2,3].map(n => <a key={n} href="https://www.instagram.com/hairbyhesha?igsi=a25lYnR6cDZ4MDQ3" target="_blank" rel="noreferrer"><span>Instagram Post {n}</span></a>)}</div></section>

      <section className="contact" id="kontakt">
        <div className="contact-copy"><p className="section-no">07 / Besuch uns</p><h2>Wir freuen uns<br />auf <i>dich.</i></h2><address>Arthur-Kutscher-Platz 3<br />80802 München<br /><small>Nahe Münchner Freiheit</small></address><a href="mailto:kontakt@houseofhesha.de">kontakt@houseofhesha.de ↗</a><div className="hours"><span>Dienstag – Freitag</span><b>09.00 – 18.00 Uhr</b><span>Samstag</span><b>09.00 – 15.00 Uhr</b></div></div>
        <div className="map">{consent === 'all' ? <iframe title="Standort House of Hesha" loading="lazy" src="https://www.google.com/maps?q=Arthur-Kutscher-Platz%203%2C%2080802%20M%C3%BCnchen&output=embed" /> : <div className="map-consent"><span>Standort</span><b>Google Maps ist deaktiviert.</b><p>Mit dem Laden der Karte stimmst du der Übertragung von Daten an Google zu.</p><button onClick={() => setConsent('all')}>Karte laden</button></div>}</div>
      </section>

      <section className="form-section"><div><p className="section-no">Kontakt</p><h2>Was dürfen wir<br />für dich tun?</h2></div><form onSubmit={(e) => e.preventDefault()}><label>Name<input required placeholder="Dein Name" /></label><label>E-Mail<input type="email" required placeholder="deine@email.de" /></label><label>Nachricht<textarea required placeholder="Erzähl uns von deinem Wunsch" /></label><button className="book" type="submit">Anfrage senden <span>↗</span></button></form></section>

      <footer><img src="./house-of-hesha-logo.svg" alt="House of Hesha" /><div><a href="#start">Nach oben ↑</a><a href="mailto:kontakt@houseofhesha.de">Kontakt</a><a href="./impressum">Impressum</a><a href="./datenschutz">Datenschutz</a></div><p>© 2026 House of Hesha · Website by <a href="https://artivum.de" target="_blank" rel="noreferrer">Artivum</a></p></footer>
      <a className="floating-book" href={salonkeeUrl} target="_blank" rel="noreferrer">Jetzt buchen <span>↗</span></a><button className="whatsapp" onClick={() => alert('Die WhatsApp-Nummer wird ergänzt, sobald sie vorliegt.')} aria-label="WhatsApp öffnen">WA</button>
      {consent === null && <div className="cookie"><div><b>Deine Privatsphäre</b><p>Optionale Dienste wie Google Maps werden erst nach deiner Zustimmung geladen. Weitere Informationen findest du im <a href="./datenschutz">Datenschutz</a>.</p></div><button onClick={() => setConsent('essential')}>Nur notwendige</button><button className="accept" onClick={() => setConsent('all')}>Alle akzeptieren</button></div>}
    </main>
  );
}
