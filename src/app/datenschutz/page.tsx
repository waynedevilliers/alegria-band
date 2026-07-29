import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutz | Alegría!',
  description: 'Datenschutzerklärung von Alegría!',
};

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-cream px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-semibold text-ink">Datenschutzerklärung</h1>

        <div className="mt-12 space-y-8 text-ink/80">
          <section>
            <h2 className="text-xl font-semibold text-ink">1. Allgemeine Informationen</h2>
            <div className="mt-4 space-y-2">
              <p>
                Ihre Privatsphäre ist uns wichtig. Diese Datenschutzerklärung informiert Sie darüber, wie
                Ihre Daten auf dieser Website behandelt werden.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink">2. Datenerfassung und Verarbeitung</h2>
            <div className="mt-4 space-y-2">
              <p>
                <strong>Keine aktive Datenerfassung durch Formulare:</strong>
              </p>
              <p>
                Diese Website enthält keine Kontaktformulare, die Ihre persönlichen Daten erfassen oder
                speichern. Die Kontaktaufnahme erfolgt ausschließlich über E-Mail (mailto-Links) und
                Telefon.
              </p>

              <p className="mt-4">
                <strong>Server-Log-Daten:</strong>
              </p>
              <p>
                Der Webserver erfasst automatisch Informationen wie Ihre IP-Adresse, Browsertyp und Zeitstempel
                von Seitenzugriffen. Diese Daten werden zur Sicherheit und zur Optimierung der Website-Leistung
                verwendet und nicht an Dritte weitergegeben.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink">
              3. Eingebettete Inhalte: YouTube-Videos
            </h2>
            <div className="mt-4 space-y-2">
              <p>
                <strong>YouTube-nocookie.com Embed:</strong>
              </p>
              <p>
                Diese Website verwendet die datenschutzfreundliche YouTube-Embed-Variante (youtube-nocookie.com).
                Dies bedeutet:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-2 ml-2">
                <li>
                  <strong>Keine Cookies oder Tracker werden geladen,</strong> bis Sie explizit auf einen
                  Video-Play-Button klicken.
                </li>
                <li>
                  <strong>Click-to-Play Facade:</strong> Videos werden zunächst als statische Thumbnail-Bilder
                  angezeigt. Erst beim Anklicken wird die tatsächliche Video-Komponente nachgeladen.
                </li>
                <li>
                  <strong>Keine Cookies für Besucher, die nicht auf Videos klicken.</strong>
                </li>
              </ul>
              <p className="mt-4">
                Wenn Sie ein Video abspielen, gelten YouTubes Datenschutzrichtlinien:{' '}
                <a
                  href="https://www.youtube.com/static?template=terms"
                  className="text-sangria hover:underline"
                >
                  YouTube Datenschutz
                </a>
                .
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink">4. Kein Cookie-Consent nötig</h2>
            <div className="mt-4 space-y-2">
              <p>
                Da diese Website keine Cookies oder Tracking-Scripts ladet (bis auf die lazy-loading
                YouTube-Embeds nach explizitem Nutzer-Klick), ist ein Cookie-Consent-Banner nicht erforderlich.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink">5. Ihre Rechte</h2>
            <div className="mt-4 space-y-2">
              <p>
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Datenportabilität Ihrer
                persönlichen Daten. Wenn Sie möchten, dass wir Ihre Daten löschen oder Sie weitere Fragen
                haben, kontaktieren Sie uns unter{' '}
                <a href="mailto:benno-hofmann@t-online.de" className="text-sangria hover:underline">
                  benno-hofmann@t-online.de
                </a>
                .
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink">6. Änderungen dieser Datenschutzerklärung</h2>
            <div className="mt-4 space-y-2">
              <p>
                Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit zu aktualisieren. Die
                neueste Version wird immer auf dieser Seite verfügbar sein.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 border-t border-sand/50 pt-8">
          <a href="/" className="inline-flex items-center gap-2 text-sangria hover:underline">
            ← Zur Startseite
          </a>
        </div>
      </div>
    </main>
  );
}
