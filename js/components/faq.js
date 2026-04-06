import { getFaq } from "../data/dataService";

const faqItem = (item) => {
    if (!item) return "";

    return `
        <details class="faq__item">
            <summary class="faq__question">${item.question}</summary>
            <p class="faq__answer">${item.answer}</p>
        </details>
    `;
};


export const Faq = (faqData) => {
    const faqHTML = faqData.map(faqItem).join("");

    return `
        <section class="faq">
            <h3 class="faq__title">Häufig gestellte Fragen</h3>
            ${faqHTML}
        </section>`;
}