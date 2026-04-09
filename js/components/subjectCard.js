import { state } from "../core/state.js";
import { Button } from "./button.js";

//create subject card HTML
export const subjectCard = (subject) => {
    const isFav = state.isFavorite(subject.id);
    
    return `
        <li class="subjects-preview__item" data-subject-id="${subject.id}">
            <article class="card subject-card">
                <h3 class="card__title subject-card__title">${subject.title}</h3>
                <p class="card__description subject-card__description">${subject.subtitle}</p>
                ${Button({text: isFav ? '★' : '☆', className: `favorite__button button ${isFav ? 'active' : ''}`, dataId: subject.id, id: "favorite"})}
                <a href="/subject/${subject.id}" class="card__link">Zu den Lektionen</a>
            </article>
        </li>
    `;
};