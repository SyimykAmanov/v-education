export const faqItem = (item) => {
    if (!item) return "";

    return `
        <details class="faq__item">
            <summary class="faq__question">${item.question}</summary>
            <p class="faq__answer">${item.answer}</p>
        </details>
    `;
};