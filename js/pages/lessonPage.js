import { getLesson } from "../data/dataService.js";
import { state } from "../core/state.js";

export const lessonPage = {
  render({ subjectId, lessonId }) {
    const lesson = getLesson(subjectId, lessonId);
    if (!lesson) return `<h1>Keine Lektion gefunden</h1>`;

    const homework = lesson.homework ?? [];
    const homeWorkList = homework.length
      ? homework.map(hW => `<li>${hW.task}</li>`).join("")
      : `<li>Keine Hausaufgaben</li>`;

    const isCompl = state.isComplated(lessonId);
    return `
      <article class="lesson">
        <div class="lesson__header">
          <h1 class="lesson__title" id="lessonTitle">${lesson.order}. ${lesson.title}</h1>
          <button class="button ${isCompl ? "active": ""} completed-button" data-id="${lessonId}" id="completed-btn"> ${isCompl ? "Lektion abgeschlossen": "als abgeschlossen markieren"}</button>
        </div>
        <div class="lesson__video" id="lessonVideo">
          <iframe class="lesson__iframe"
            src="${lesson.videoUrl}"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>

        <div class="lesson__description">
          <h2 class="lesson__subtitle">Lektionbeschreibung</h2>
          <p class="lesson__text" id="lessonText">${lesson.description}</p>
        </div>

        <div class="lesson__homework">
          <h3 class="lesson__homework-title">Hausaufgaben:</h3>
          <ul class="lesson__homework-list" id="lessonHomework">${homeWorkList}</ul>
        </div>
      </article>
    `;
  }
};