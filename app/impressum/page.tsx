import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum — House of Hesha',
  description: 'Impressum von House of Hesha in München.',
};

export default function Impressum() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <a href="./" aria-label="Zurück zur Startseite"><img src="./house-of-hesha-logo.svg" alt="House of Hesha" /></a>
        <a href="./">← Zurück zur Website</a>
      </header>
      <div className="legal-content">
        <div>
          <p className="section-no">Rechtliches</p>
          <h1>Impressum<br /><i>Entwurf.</i></h1>
        </div>
        <div className="legal-copy">
          <section>
            <h2>Angaben zum Unternehmen</h2>
            <p>House of Hesha<br />Falak Ibrahim Abdi<br />Arthur-Kutscher-Platz 3<br />80802 München</p>
          </section>
          <section>
            <h2>Kontakt</h2>
            <p>E-Mail: <a href="mailto:kontakt@houseofhesha.de">kontakt@houseofhesha.de</a><br />Telefon: wird ergänzt</p>
          </section>
          <section>
            <h2>Website</h2>
            <p>Konzeption, Gestaltung und technische Betreuung:<br /><a href="https://artivum.de" target="_blank" rel="noreferrer">Artivum</a></p>
          </section>
          <section className="legal-note">
            <h2>Hinweis zum Entwurfsstand</h2>
            <p>Dieses Impressum ist noch nicht vollständig. Weitere gesetzlich erforderliche Unternehmensangaben werden ergänzt, sobald sie vom Betreiber übermittelt wurden.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
