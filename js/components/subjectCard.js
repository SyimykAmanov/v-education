import { state } from "../core/state.js";

export const subjectCard = (subject) => {
    const isFav = state.isFavorite(subject.id);
    
    return `
        <li class="subjects-preview__item">
            <article class="card subject-card">
                <h3 class="card__title subject-card__title">${subject.title}</h3>
                <p class="card__description subject-card__description">${subject.subtitle}</p>
                <button class="favorite-btn ${isFav ? 'active' : ''}" data-id="${subject.id}">
                    ${isFav ? '★' : '☆'}
                </button>
                <a href="/subject/${subject.id}" class="card__link">Zu den Lektionen</a>
            </article>
        </li>
    `;
};