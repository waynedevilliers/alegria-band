import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum | Alegría!',
  description: 'Impressum und Kontaktinformationen von Alegría!',
};

export default function Impressum() {
  return (
    <main className="min-h-screen bg-cream px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-semibold text-ink">Impressum</h1>

        <div className="mt-12 space-y-8 text-ink/80">
          <section>
            <h2 className="text-xl font-semibold text-ink">Angaben gemäß TMG (Telemediengesetz)</h2>
            <div className="mt-4 space-y-2">
              <p>
                <strong>Verantwortlich für den Inhalt:</strong>
              </p>
              <p>
                Gerd "Benno" Hofmann
                <br />
                [Adresse ergänzen]
                <br />
                [Postleitzahl und Stadt]
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink">Kontakt</h2>
            <div className="mt-4 space-y-2">
              <p>
                <strong>E-Mail:</strong>{' '}
                <a href="mailto:benno-hofmann@t-online.de" className="text-sangria hover:underline">
                  benno-hofmann@t-online.de
                </a>
              </p>
              <p>
                <strong>Telefon:</strong>{' '}
                <a href="tel:+491713175725" className="text-sangria hover:underline">
                  0171 / 31 75 72 5
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink">Haftungsausschluss (Disclaimer)</h2>
            <div className="mt-4 space-y-2">
              <p>
                <strong>Haftung für Inhalte:</strong>
              </p>
              <p>
                Die Inhalte dieser Website werden mit großer Sorgfalt erstellt. Der Anbieter übernimmt
                jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten
                Inhalte.
              </p>

              <p className="mt-4">
                <strong>Haftung für Links:</strong>
              </p>
              <p>
                Die Website enthält möglicherweise Links zu externen Websites Dritter. Der Anbieter ist
                nicht verantwortlich für den Inhalt dieser externen Websites. Die Verantwortung liegt beim
                jeweiligen Betreiber.
              </p>

              <p className="mt-4">
                <strong>Urheberrecht:</strong>
              </p>
              <p>
                Alle Inhalte auf dieser Website (Text, Bilder, Videos) sind urheberrechtlich geschützt. Eine
                Vervielfältigung oder Verbreitung ohne ausdrückliche schriftliche Genehmigung ist untersagt.
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
