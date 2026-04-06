// home page module

import { state } from "../core/state.js";
import { subjectCard } from "../components/subjectCard.js";
import { Quote } from "../components/quote.js";
import { CategoryFilter } from "../components/categoryFilter.js";
import { Search } from "../components/searcher.js";
import { Faq } from "../components/faq.js";
import { filterService } from "../data/filterService.js";

// home page object
export const homePage = {

    // render HTML for the home page based on the current state
    render() {
    
    // get data from global state
    const subjects = state.subjects;
    const searchTerm = state.searchQuery.toLowerCase() || "";
    const activeCategory = state.activeCategory;
    
    const filteredSubjects = filterService.filterSubjects(subjects, searchTerm, activeCategory);

    let subjectsHTML;
    let searchEmptyHTML;

    if (filteredSubjects.length > 0) {
        // subjects are available: render lesson cards
        subjectsHTML = filteredSubjects.map(subjectCard).join("");
        searchEmptyHTML = "";
    } else {
        // no subjects: show massage and a reset button
        searchEmptyHTML = `
            <div class="search-emty">
                <p class="search-emty__title">Nach der Suche von "${searchTerm}" wurde nichts gefunden</p>
                <button id="resetSearch" class="button search-emty__button">Zurücksetzten</button>
            </div>
        `;
        subjectsHTML = "";
    }

    // return the complete page markup
    return `
            <section class="hero">
                <h1 class="hero__title">Bereite dich effektiv auf die Prüfung vor.</h1>
                ${Search("subjectSearch", "search-input", searchTerm)}
                ${CategoryFilter(state.categories, state.activeCategory)}
                <p class="hero__subtitle">Lerne bequem von zu Hause mit Videos – effektiv, einfach und schnell zum Prüfungserfolg.</p>
                <div id="quote-container" class="hero__quote-placeholder quote-placeholder">
                    <p>wird geladen</p>         
                </div>
            </section>

             <section class="subjects-preview">
                <h2 class="subjects-preview__title">Alle Lernfächer</h2>
                ${searchEmptyHTML}
                <ul class="subjects-preview__list">
                    ${subjectsHTML}
                </ul>
            </section>
            ${Faq(state.faqData)}`
    },

    // random Quote: call after the HTML page has been inserted into the DOM
    async afterRender() {
        const container = document.getElementById("quote-container");
        if (!container) return;
        
        // call HTML for random quote
        container.innerHTML = Quote();
    }
}