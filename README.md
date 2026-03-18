# V-Education – Modulare Lernplattform (SPA)

Ein eigenständig entwickeltes Web-Portal für Bildungsangebote, das als **Single Page Application (SPA)** ohne externe Frameworks (Vanilla JavaScript) realisiert wurde. Das Projekt dient dazu, tiefe Einblicke in Software-Architektur, Routing-Logik und asynchrones Datenmanagement zu gewinnen.

## 🚀 Key Features

* **Custom Router:** Ein selbst entwickelter SPA-Router, der dynamische URLs (z.B. `/subject/:id`) verarbeitet, ohne die Seite neu zu laden.
* **State Management:** Zentrale Verwaltung des Nutzerstatus (Favoriten, abgeschlossene Lektionen) inklusive Persistenz über den `LocalStorage`.
* **Asynchrone Datenverarbeitung:** Dynamisches Laden von Inhalten mittels `fetch` und `Async/Await` sowie Integration einer externen Übersetzungs-API.
* **Komponenten-Architektur:** Modulare Strukturierung der UI in wiederverwendbare JavaScript-Komponenten (Header, Footer, Cards).
* **Responsive Design:** Optimierte Darstellung für verschiedene Endgeräte mittels modernem CSS (Flexbox/Grid).

## 🛠️ Technologie-Stack

* **Sprache:** JavaScript (ES6+)
* **Markup/Styling:** HTML5, CSS3
* **Tools:** Git für Versionierung, GitHub Pages (optional für Deployment)
* **Konzepte:** DOM-Manipulation, REST-API Integration, Event-Handling, JSON-Verarbeitung.

## 📂 Projektstruktur

- `/components`: UI-Komponenten (z.B. `lessonCard.js`, `faqItem.js`)
- `/core`: Kernlogik wie `router.js` und `state.js`
- `/data`: Daten-Services und statische Inhalte (`dataService.js`)
- `/pages`: Seiten-Templates (`homePage.js`, `subjectPage.js`)
- `main.js`: Einstiegspunkt der Applikation

## 🔧 Installation & Start

1. Repository klonen:
   ```bash
   git clone [https://github.com/SyimykAmanov/v-education.git](https://github.com/SyimykAmanov/v-education.git)
