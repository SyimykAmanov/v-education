import { subjectCard } from "../components/subjectCard.js";
import { subjects } from "../data/content.js";
import { getFaq } from "../data/dataService.js";
import { faqItem } from "../components/FaqItem.js";
import { state } from "../core/state.js";

export const homePage = {
  render() {
    const searchTerm = state.searchQuery || "";

    const filteredSubjects = subjects.filter(subject => subject.title.toLowerCase().includes(searchTerm.toLowerCase()));
    const subjectsHTML = filteredSubjects.map(subjectCard).join("");
    const faqHTML = getFaq().map(faqItem).join("");

    return `
            <section class="hero">
                <h1 class="hero__title">Bereite dich effektiv auf die Prüfung vor.</h1>
                <div class="search-container">
                    <input type="text" id="subjectSearch" class="search-input" placeholder="Fachsuche..." value="${searchTerm}">
                </div>
                <p class="hero__subtitle">Lerne bequem von zu Hause mit Videos – effektiv, einfach und schnell zum Prüfungserfolg.</p>
            </section>


             <section class="subjects-preview">
                <h2 class="subjects-preview__title">Alle Lernfächer</h2>
                <ul class="subjects-preview__list">
                    ${subjectsHTML || "<p>Nichts gefunden</p>"}
                </ul>
            </section>

            <section class="faq">
                <h3 class="faq__title">Häufig gestellte Fragen</h3>
                ${faqHTML}
            </section>`;
  }
};