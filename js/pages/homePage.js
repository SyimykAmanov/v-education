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
                <h1 class="hero__title">Подготовься дома к экзамену</h1>
                <p class="hero__subtitle">Не выходя из дома, просто смотря видео, подготовься к главному экзамену эффективно, просто и быстро</p>
            </section>


             <section class="sections-preview">
                <h2 class="sections-preview__title">Разделы видео уроков</h2>
                <ul class="sections-preview__list">
                    ${subjectsHTML}
                </ul>
            </section>

            <section class="faq">
                <h3 class="faq__title">Часто задаваемые вопросы</h3>
                ${faqHTML}
            </section>`;
  }
};