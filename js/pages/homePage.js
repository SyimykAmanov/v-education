import { subjectCard } from "../components/subjectCard.js";
import { subjects } from "../data/content.js";
import { getFaq, getRandomQuote } from "../data/dataService.js";
import { faqItem } from "../components/FaqItem.js";
import { state } from "../core/state.js";

export const homePage = {
  async render() {
    const quote = await getRandomQuote();

    const searchTerm = state.searchQuery || "";

    const filteredSubjects = subjects.filter(subject => subject.title.toLowerCase().includes(searchTerm.toLowerCase()));
    let subjectsHTML;
    let searchEmtyHTML;

    if (filteredSubjects.length > 0) {
        subjectsHTML = filteredSubjects.map(subjectCard).join("");
        searchEmtyHTML = "";
    } else {
        searchEmtyHTML = `
            <div class="search-emty">
                <p class="search-emty__title">Nach der Suche von "${searchTerm}" wurde nichts gefunden</p>
                <button id="resetSearch" class="button search-emty__button">Zurücksetzten</button>
            </div>
        `;
        subjectsHTML = "";
    }
    const faqHTML = getFaq().map(faqItem).join("");

    return `
            <section class="hero">
                <h1 class="hero__title">Bereite dich effektiv auf die Prüfung vor.</h1>
                <div class="search-container">
                    <input type="text" id="subjectSearch" class="search-input" placeholder="Fachsuche..." value="${searchTerm}">
                </div>
                <p class="hero__subtitle">Lerne bequem von zu Hause mit Videos – effektiv, einfach und schnell zum Prüfungserfolg.</p>
                <div class="hero__quote-box quote-box">
                    <p class="hero__quote-text quote-text">"${quote.quote}"</p>
                    <cite class="hero__quote-author quote-author">- ${quote.author}</cite>
                </div>

            </section>


             <section class="subjects-preview">
                <h2 class="subjects-preview__title">Alle Lernfächer</h2>
                ${searchEmtyHTML}
                <ul class="subjects-preview__list">
                    ${subjectsHTML}
                </ul>
            </section>

            <section class="faq">
                <h3 class="faq__title">Häufig gestellte Fragen</h3>
                ${faqHTML}
            </section>`;
  }
};