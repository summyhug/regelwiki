import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Regelwiki",
  description: "Eine Enzyklopädie deutscher Vorschriften — für Bürger, nicht für Juristen.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="bg-stone-50 text-stone-900 antialiased">
        <header className="border-b border-stone-200 bg-white">
          <div className="mx-auto max-w-5xl px-6 py-4 flex items-baseline gap-6">
            <a href="/" className="text-xl font-bold tracking-tight text-stone-900">
              Regelwiki
            </a>
            <span className="text-sm text-stone-400 hidden sm:block">
              Deutsches Vorschriftenwesen — verständlich erklärt
            </span>
            <div className="ml-auto flex items-baseline gap-5">
              <a href="/about" className="text-sm text-stone-500 hover:text-stone-900 transition-colors">
                Über
              </a>
            </div>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
        <footer className="border-t border-stone-200 mt-16">
          <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-stone-400">
            Regelwiki — Informativ, direkt, überparteilich.
          </div>
        </footer>
      </body>
    </html>
  );
}
