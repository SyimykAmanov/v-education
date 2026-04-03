import { getLesson } from "../data/dataService.js";
import { state } from "../core/state.js";
import { Homework } from "../components/homework.js";
import { StatusButton } from "../components/statusButton.js";
import { VideoPlayer } from "../components/videoplayer.js";

export const lessonPage = {
  async render({ subjectId, lessonId }) {
    const lesson = await getLesson(subjectId, lessonId);
    if (!lesson) return `<h1>Keine Lektion gefunden</h1>`;

    const isCompl = state.isCompleted(lessonId);
    return `
      <article class="lesson">
        <div class="lesson__header">
          <h1 class="lesson__title" id="lessonTitle">${lesson.order}. ${lesson.title}</h1>
          ${StatusButton({isCompleted: isCompl, dataId: lesson.id})}
        </div>

        ${VideoPlayer({className: "lesson__video", id: "lessonVideo", url: lesson.videoUrl})};

        <div class="lesson__description">
          <h2 class="lesson__subtitle">Lektionbeschreibung</h2>
          <p class="lesson__text" id="lessonText">${lesson.description}</p>
        </div>

        ${Homework({tasks: lesson.homework})}
      </article>
    `;
  }
};