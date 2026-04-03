import { subjectCard } from "../components/subjectCard.js";
import { getFaq, getRandomQuote, getSubjects } from "../data/dataService.js";
import { faqItem } from "../components/FaqItem.js";
import { state } from "../core/state.js";
import { Quote } from "../components/quote.js";
import { Button } from "../components/button.js";
import { CategoryFilter } from "../components/categoryFilter.js";

export const homePage = {
    render() {
    
    const subjects = state.subjects;
    const searchTerm = state.searchQuery.toLowerCase() || "";
    const activeCategory = state.activeCategory;

    const filteredSubjects = subjects.filter(subject => {
        const matchesSearch = subject.title.toLowerCase().includes(searchTerm);
        const matchesCategory = activeCategory === "All" || subject.category === activeCategory;

        return matchesSearch && matchesCategory;
    });
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
                ${CategoryFilter(state.categories, state.activeCategory)}
                <p class="hero__subtitle">Lerne bequem von zu Hause mit Videos – effektiv, einfach und schnell zum Prüfungserfolg.</p>
                <div id="quote-container" class="hero__quote-placeholder quote-placeholder">
                    <p>wird geladen</p>         
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
  },
async afterRender() {
    const container = document.getElementById("quote-container");
    if (!container) return;

    const quoteData = await getRandomQuote();

    container.innerHTML = Quote(quoteData);
}
};
