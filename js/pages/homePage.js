import { subjectCard } from "../components/subjectCard.js";
import { subjects } from "../data/content.js";
import { getFaq } from "../data/dataService.js";
import { faqItem } from "../components/FaqItem.js";

export const homePage = {
  render() {
    const subjectsHTML = subjects.map(subjectCard).join("");
    const faqHTML = getFaq().map(faqItem).join("");

    return `
            <section class="hero">
                <h1 class="hero__title">Bereite dich effektiv auf die Prüfung vor.</h1>
                <p class="hero__subtitle">Lerne bequem von zu Hause mit Videos – effektiv, einfach und schnell zum Prüfungserfolg.</p>
            </section>


             <section class="subjects-preview">
                <h2 class="subjects-preview__title">Alle Lernfächer</h2>
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