import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutz — House of Hesha',
  description: 'Datenschutzhinweise von House of Hesha in München.',
};

export default function Datenschutz() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <a href="/" aria-label="Zurück zur Startseite"><img src="/house-of-hesha-logo.svg" alt="House of Hesha" /></a>
        <a href="/">← Zurück zur Website</a>
      </header>
      <div className="legal-content">
        <div>
          <p className="section-no">Rechtliches</p>
          <h1>Datenschutz<br /><i>Entwurf.</i></h1>
        </div>
        <div className="legal-copy">
          <section>
            <h2>1. Verantwortliche Stelle</h2>
            <p>House of Hesha<br />Falak Ibrahim Abdi<br />Arthur-Kutscher-Platz 3<br />80802 München<br />E-Mail: <a href="mailto:kontakt@houseofhesha.de">kontakt@houseofhesha.de</a></p>
          </section>
          <section>
            <h2>2. Allgemeine Hinweise</h2>
            <p>Beim Aufruf dieser Website können technisch erforderliche Daten verarbeitet werden, insbesondere IP-Adresse, Zeitpunkt des Zugriffs, aufgerufene Seite, Browser- und Geräteinformationen. Diese Verarbeitung dient der sicheren und technisch zuverlässigen Bereitstellung der Website.</p>
          </section>
          <section>
            <h2>3. Kontaktaufnahme</h2>
            <p>Wenn du per E-Mail oder künftig über das Kontaktformular Kontakt aufnimmst, werden die von dir übermittelten Angaben zur Bearbeitung deiner Anfrage verarbeitet. Das Formular dieser Designvorschau versendet derzeit noch keine Daten.</p>
          </section>
          <section>
            <h2>4. Einwilligung und Cookies</h2>
            <p>Optionale Dienste werden erst geladen, nachdem du ihnen zugestimmt hast. Eine erteilte Einwilligung soll in der finalen Website jederzeit über die Cookie-Einstellungen widerrufen oder geändert werden können. Technisch notwendige Funktionen bleiben davon unberührt.</p>
          </section>
          <section>
            <h2>5. Google Maps</h2>
            <p>Die Karte von Google Maps wird in dieser Vorschau erst nach deiner aktiven Zustimmung geladen. Beim Laden können Daten, insbesondere deine IP-Adresse, an Google übermittelt werden. Ohne Zustimmung wird lediglich ein lokaler Platzhalter angezeigt.</p>
          </section>
          <section>
            <h2>6. Instagram</h2>
            <p>Derzeit wird Instagram nur über externe Links geöffnet; es werden keine Beiträge direkt eingebettet. Bei einem Klick verlässt du diese Website. Eine spätere Einbettung von Instagram-Inhalten erfolgt ausschließlich nach entsprechender Einwilligung und wird in dieser Erklärung ergänzt.</p>
          </section>
          <section>
            <h2>7. Analyse, WhatsApp und Salonkee</h2>
            <p>Google Analytics, WhatsApp und Salonkee sind in der aktuellen Vorschau noch nicht technisch eingebunden. Vor ihrer Aktivierung werden Anbieter, Zweck, Rechtsgrundlage, Speicherdauer und mögliche Datenübermittlungen in der finalen Datenschutzerklärung konkret ergänzt.</p>
          </section>
          <section>
            <h2>8. Deine Rechte</h2>
            <p>Du hast im Rahmen der gesetzlichen Voraussetzungen insbesondere das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Eine erteilte Einwilligung kannst du mit Wirkung für die Zukunft widerrufen. Außerdem besteht ein Beschwerderecht bei einer zuständigen Datenschutzaufsichtsbehörde.</p>
          </section>
          <section className="legal-note">
            <h2>Hinweis zum Entwurfsstand</h2>
            <p>Diese Datenschutzerklärung beschreibt den aktuellen Stand der Designvorschau und ist noch kein finaler Rechtstext. Sie muss vor dem öffentlichen Launch anhand des tatsächlichen Hostings und aller final aktivierten Dienste vervollständigt und rechtlich geprüft werden.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
