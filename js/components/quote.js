import { getRandomQuote } from "../data/dataService";

const randomQuote = await getRandomQuote();

export const Quote = () => {
    if (!randomQuote) return `<p> Zitat wird geladen </p>`;

    return `
        <div class="quote-box">
            <p class="quote-text">"${randomQuote.quote}"</p>
            <cite class="quote-author">- ${randomQuote.author}</cite>
        </div>  
    `;
};