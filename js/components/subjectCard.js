import { state } from "../core/state.js";

export const subjectCard = (subject) => {
    const isFav = state.isFavorite(subject.id);
    
    return `
        <li class="sections-preview__item">
            <article class="card section-card">
                <button class="card__fav-btn ${isFav ? 'active' : ''}" data-id="${subject.id}">
                    ${isFav ? '★' : '☆'}
                </button>
                <h3 class="card__title">${subject.title}</h3>
                <p class="card__description">${subject.subtitle}</p>
                <a href="/subject/${subject.id}" class="card__link">Уроки</a>
            </article>
        </li>
    `;
};