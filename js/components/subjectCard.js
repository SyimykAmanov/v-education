export const subjectCard = (subject) => {
    if (!subject) return "";

    return `
        <li class="sections-preview__item">
            <article class="card section-card">
                <h3 class="card__title">${subject.title}</h3>
                <p class="card__description">${subject.subtitle}</p>
                <a href="/subject/${subject.id}" class="card__link">Уроки</a>
            </article>
        </li>
    `
}