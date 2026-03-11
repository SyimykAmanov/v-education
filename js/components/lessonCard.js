import { state } from "../core/state.js"

export const lessonCard = (lesson) => {
    if (!lesson) return ""; 

    const isCompl = state.isComplated(String(lesson.id));

    return `
        <li class="card lesson-preview">
            <h3 class="card__title">${lesson.title} ${isCompl ? '✅' : ''}</h3>
            <p class="card__description">${lesson.description}</p>
            <a class="card__link" href="/subject/${lesson.subjectId}/lesson/${lesson.id}">Lektion öffnen</a>
        </li>
    `;
}