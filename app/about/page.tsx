import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über Regelwiki",
  description: "Was Regelwiki ist, warum es existiert, und was es nicht ist.",
};

const FAQ = [
  {
    q: "Ist Regelwiki gegen Regulierung?",
    a: "Nein. Wir sind froh, dass unser Essen kontrolliert wird, Gebäude nicht einstürzen und Industrieabwässer nicht in Flüsse geleitet werden. Regulierung ist kein Feind — sie ist ein Werkzeug. Werkzeuge müssen gewartet werden. Regelwiki dokumentiert Fälle, in denen das Werkzeug stumpf geworden ist, seinen ursprünglichen Zweck verloren hat oder für eine Welt entworfen wurde, die es nicht mehr gibt.",
  },
  {
    q: "Was ist der Zweck dieser Seite?",
    a: "Im politischen Diskurs wird oft abstrakt gefordert, \"Bürokratie abzubauen\" oder \"Regulierung zu reduzieren\". Regelwiki gibt diesen Forderungen konkreten Inhalt: Welches Gesetz? Was tut es? Warum wurde es eingeführt? Welchen Kompromiss stellt es dar? Wie lösen andere Länder dasselbe Problem? Wer profitiert von der bestehenden Regelung, und wer trägt die Kosten?",
  },
  {
    q: "Wie wurden die Karten erstellt?",
    a: "Regelwiki wurde mit KI-Unterstützung aufgebaut. Alle Karten basieren auf primären Rechtsquellen — Gesetzestexten, Gerichtsurteilen, EU-Richtlinien — und werden mit direkten Quellenangaben versehen. Ein Mensch geht die Karten einzeln durch und prüft sie. KI kann halluzinieren: Trotz der Anweisung, mit spezifischen Rechtsquellen zu arbeiten, können Fehler enthalten sein. Alle Quellen sind in jeder Karte verlinkt, damit du selbst prüfen kannst.",
  },
  {
    q: "Sind die Inhalte rechtlich verlässlich?",
    a: "Nein — und das ist wichtig. Wir sind keine Juristen. Das ist keine Rechtsberatungsseite. Triff keine rechtlichen Entscheidungen auf Basis dieser Inhalte. Der Text eines Gesetzes ist nur ein Teil der Realität: Gerichtsurteile definieren, wie Gesetze in der Praxis ausgelegt werden — diese Interpretationsebene ist hier unterrepräsentiert. Wir übernehmen keine Haftung für die Richtigkeit der Inhalte.",
  },
  {
    q: "Vertretet ihr eine politische Partei oder Richtung?",
    a: "Nein. Reformvorschläge werden aus dem gesamten politischen Spektrum zitiert — FDP, Grüne, SPD, CDU, und andere. Unser Maßstab ist nicht Parteizugehörigkeit, sondern eine einzige Frage: Löst die Maßnahme das beschriebene Problem, ohne unnötige neue Regulierung hinzuzufügen?",
  },
  {
    q: "Was bedeuten die Kartentypen?",
    a: "Interessenkonflikt: Eine Gruppe profitiert strukturell davon, dass eine Regelung komplex bleibt — oft nicht die Gruppe, für die sie ursprünglich gedacht war. Flickenteppich: Mehrere Regelwerke mit überlappenden Zuständigkeiten, unterschiedlichen Standards und keiner einheitlichen Anlaufstelle. Zeitgeist-Problem: Eine Regelung, die für eine andere Welt entworfen wurde und heute nicht mehr auf die Realität passt.",
  },
  {
    q: "Kann ich Fehler melden oder Themen vorschlagen?",
    a: "Ja — und wir bitten darum. Wenn du einen sachlichen Fehler findest, eine Quellenangabe anzweifelst oder ein Thema vermisst, melde dich unter hallo@regelwiki.de. Wir nehmen inhaltliche Korrekturen ernst.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-stone-900 mb-4">Über Regelwiki</h1>
        <p className="text-xl text-stone-500 leading-relaxed">
          Regelwiki ist kein Angriff auf den Staat. Es ist der Versuch, ehrlich zu benennen,
          was in deutschen Regelwerken funktioniert, was nicht mehr funktioniert —
          und was andere Länder inzwischen besser machen.
        </p>
      </div>

      {/* Pillars */}
      <div className="space-y-10 mb-16">

        {/* Pillar 1 */}
        <div className="border-l-2 border-stone-300 pl-6">
          <h2 className="text-xl font-bold text-stone-900 mb-3">
            Regelungen müssen ihren Job machen
          </h2>
          <div className="space-y-3 text-stone-700 leading-relaxed">
            <p>
              Regulierung ist ein Werkzeug. Und wie jedes Werkzeug muss sie gewartet werden —
              angepasst, wenn sich die Welt ändert; abgeschafft, wenn sie ihren Zweck
              nicht mehr erfüllt; reformiert, wenn sie mehr schadet als nützt.
            </p>
            <p>
              Im Jahr 2022 beschloss Deutschland, schwimmende Flüssiggasterminals
              zu bauen. Das erste Terminal in Wilhelmshaven wurde in etwa sieben Monaten
              genehmigt und in Betrieb genommen — ein Vorhaben, für das unter normalen
              Bedingungen ein Jahrzehnt Planungsrecht veranschlagt worden wäre.
              Es war möglich, weil der politische Wille da war, es als Notfall zu behandeln.
            </p>
            <p>
              Solaranlagen auf städtischen Dächern warten unterdessen auf
              Netzanschlüsse, Genehmigungen und Einspeiseverträge.
              Die Klimakrise gilt offenbar nicht als Notfall der gleichen Kategorie.
            </p>
            <p>
              Besonders auffällig: Politiker sagen regelmäßig „das Gesetz schreibt vor" —
              als wäre das Gesetz eine Naturgewalt, auf die sie keinen Einfluss haben.
              Das Gesetz wurde von Menschen geschrieben. Es kann von Menschen geändert werden.
              Das ist keine radikale Forderung. Es ist die Grundlage demokratischer Gesetzgebung.
            </p>
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="border-l-2 border-stone-300 pl-6">
          <h2 className="text-xl font-bold text-stone-900 mb-3">
            Regulierung ersetzt kein Miteinander
          </h2>
          <div className="space-y-3 text-stone-700 leading-relaxed">
            <p>
              Eine Gesellschaft braucht mehr als Vorschriften. Sie braucht soziale Normen —
              geteilte Erwartungen darüber, wie Menschen miteinander umgehen.
              Wenn ein Nachbar zu laut ist, kann man klingeln und es ansprechen.
              Oder man kann die Polizei rufen und auf die Lärmschutzverordnung verweisen.
              Beides löst das Problem formal. Nur eines davon baut Nachbarschaft.
            </p>
            <p>
              Das ist kein Einzelbeispiel. Überall dort, wo Regulierung soziale
              Aushandlungsprozesse ersetzt statt ergänzt, entstehen Gesellschaften,
              die nebeneinander statt miteinander leben. Das ist kein Versagen
              einzelner Bürger — es ist ein Strukturproblem.
            </p>
          </div>
        </div>

        {/* Pillar 3 */}
        <div className="border-l-2 border-stone-300 pl-6">
          <h2 className="text-xl font-bold text-stone-900 mb-3">
            Modernisierung ist keine Option mehr
          </h2>
          <div className="space-y-3 text-stone-700 leading-relaxed">
            <p>
              Während der Corona-Pandemie übermittelten deutsche Gesundheitsämter
              Fallzahlen an das Robert-Koch-Institut per Fax. Das war kein
              Ausnahmezustand — es war der Normalzustand. In einer
              Gesundheitskrise, in der Stunden zählten, wartete das System
              auf Papier und Faxgeräte.
            </p>
            <p>
              Das wäre fast komisch, wenn die geopolitische Lage anders wäre.
              Europa wird heute von Osten, Westen und Osten gleichzeitig unter
              Druck gesetzt. Deutschland kann in dieser Welt nur dann eine
              unabhängige Rolle spielen, wenn es wirtschaftlich und institutionell
              wettbewerbsfähig bleibt. Ein Staat, der seine Bürger noch mit
              dem Fax verwaltet, ist es nicht.
            </p>
            <p>
              Digitalisierung ist kein Komfortmerkmal. Es ist eine Frage
              der Handlungsfähigkeit.
            </p>
          </div>
        </div>

        {/* Pillar 4 */}
        <div className="border-l-2 border-stone-300 pl-6">
          <h2 className="text-xl font-bold text-stone-900 mb-3">
            Heute ist ein Notfall
          </h2>
          <div className="space-y-3 text-stone-700 leading-relaxed">
            <p>
              Deutschland steht vor konkreten, messbaren Problemen: Wohnraum,
              den sich Normalverdiener in Großstädten nicht mehr leisten können.
              Qualifizierte Einwanderer, die Jahre brauchen, um ihre Abschlüsse
              anerkennen zu lassen — und in der Zwischenzeit unter ihrer Qualifikation
              arbeiten oder gar nicht. Ein industrieller Kern, der unter
              Kostendruck schrumpft. Regionen, die vom wirtschaftlichen Wandel
              abgehängt werden, ohne einen erkennbaren Plan B.
            </p>
            <p>
              Deutschland hat gelernt, im Notfall schnell zu handeln —
              bei COVID, bei der Energiekrise nach dem Angriff auf die Ukraine.
              Die regulatorische Lähmung, die zu diesen strukturellen Problemen
              beigetragen hat, verdient dieselbe Dringlichkeit.
            </p>
            <p>
              Das ist keine Aufforderung, alle Regelungen abzuschaffen.
              Es ist eine Aufforderung, Prioritäten zu setzen. Nicht jede
              Regulierung ist gleich wichtig. Nicht jeder bürokratische
              Prozess schützt etwas Wertvolles. Manche Regelungen wurden für
              eine Welt geschrieben, die es nicht mehr gibt. Manche schützen
              Partikularinteressen auf Kosten der Allgemeinheit. Manche sind
              einfach nie überarbeitet worden.
            </p>
            <p>
              Regelwiki ist der Versuch, diese Unterschiede sichtbar zu machen —
              Karte für Karte, Regelung für Regelung. Damit die Debatte
              konkret wird. Damit Bürger, Journalisten und Politiker
              nicht mehr über abstrakte Bürokratie reden, sondern über
              spezifische Gesetze, ihre tatsächlichen Auswirkungen und
              realistische Alternativen.
            </p>
          </div>
        </div>

      </div>

      {/* FAQ */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-stone-900 mb-6">Häufige Fragen</h2>
        <div className="space-y-2">
          {FAQ.map((item, i) => (
            <details
              key={i}
              className="group border border-stone-200 rounded-lg bg-white overflow-hidden"
            >
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none select-none hover:bg-stone-50 transition-colors">
                <span className="font-medium text-stone-900 pr-4">{item.q}</span>
                <span className="text-stone-400 shrink-0 transition-transform group-open:rotate-45 text-xl leading-none">+</span>
              </summary>
              <div className="px-5 pb-5 pt-1 text-stone-600 leading-relaxed text-sm border-t border-stone-100">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Disclaimer box */}
      <div className="rounded-xl border border-amber-200 bg-amber-50 px-6 py-5 text-sm text-amber-900 leading-relaxed">
        <p className="font-semibold mb-1">Haftungsausschluss</p>
        <p>
          Regelwiki ist keine Rechtsberatung. Die Inhalte dienen ausschließlich
          der allgemeinen Information und Orientierung. Wir sind keine Juristen.
          Für rechtliche Entscheidungen wende dich an qualifizierte Rechtsberatung.
          Wir übernehmen keine Haftung für die Vollständigkeit, Richtigkeit oder
          Aktualität der Inhalte.
        </p>
      </div>
    </div>
  );
}
