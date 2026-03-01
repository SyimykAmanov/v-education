import { getLesson } from "../data/dataService.js";

export const lessonPage = {
  render({ subjectId, lessonId }) {
    const lesson = getLesson(subjectId, lessonId);
    if (!lesson) return `<h1>Урок не найден</h1>`;

    const homework = lesson.homework ?? [];
    const homeWorkList = homework.length
      ? homework.map(hW => `<li>${hW.task}</li>`).join("")
      : `<li>Нет домашнего задания</li>`;

    return `
      <article class="lesson">
        <h1 class="lesson__title" id="lessonTitle">${lesson.order}. ${lesson.title}</h1>

        <div class="lesson__video" id="lessonVideo">
          <iframe class="lesson__iframe"
            src="${lesson.videoUrl}"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>

        <div class="lesson__description">
          <h2 class="lesson__subtitle">Описание урока</h2>
          <p class="lesson__text" id="lessonText">${lesson.description}</p>
        </div>

        <div class="lesson__homework">
          <h3 class="lesson__homework-title">Практическое задание:</h3>
          <ul class="lesson__homework-list" id="lessonHomework">${homeWorkList}</ul>
        </div>
      </article>
    `;
  }
};