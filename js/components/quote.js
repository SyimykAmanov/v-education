export const Quote = (quoteData) => {
    if (!quoteData) return `<p> Zitat wird geladen </p>`;

    return `
        <div class="quote-box">
            <p class="quote-text">"${quoteData.quote}"</p>
            <cite class="quote-author">- ${quoteData.author}</cite>
        </div>  
    `;
};