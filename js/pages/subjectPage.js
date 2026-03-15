import { getSubjectById, getLessonsBySubjectId } from "../data/dataService.js";
import { lessonCard } from "../components/lessonCard.js";

export const subjectPage = {
  async render({ subjectId }) {
    const subject = await getSubjectById(subjectId);
    if (!subject) return `<h1>Kein Fach gefunden</h1><p>${subjectId}</p>`;

    const subjectLessons = await getLessonsBySubjectId(subjectId);
    console.log(subjectLessons)
    const list = subjectLessons.length
      ? subjectLessons.map(lessonCard).join("")
      : `<li class="card lesson-preview"><p class="card__description">Keine Videos verfügbar</p></li>`;

    return `
      <section class="hero-sections">
        <h1 class="hero-sections__title">${subject.title}</h1>
        <p class="hero-sections__subtitle">${subject.subtitle ?? ""}</p>
      </section>

      <section class="lessons-preview">
        <h2 class="lessons-preview__title">Lektionsliste</h2>
        <ul class="lessons-preview__items">${list}</ul>
      </section>
    `;
  }
};