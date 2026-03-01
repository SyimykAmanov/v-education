export const lessonCard = (lesson) => {
    if (!lesson) return ""; // Проверяем конкретный объект урока

    return `
        <li class="card lesson-preview">
            <h3 class="card__title">${lesson.title}</h3>
            <p class="card__description">${lesson.description}</p>
            <a class="card__link" href="/subject/${lesson.subjectId}/lesson/${lesson.id}">Смотреть</a>
        </li>
    `;
}