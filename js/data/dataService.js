import { subjects, lessons, faqData} from "./content.js";

export function getSubjectById(subjectId) {
  return subjects.find(s => s.id === subjectId) ?? null;
}

export function getLessonsBySubjectId(subjectId) {
  return lessons
    .filter(l => l.subjectId === subjectId)
    .slice()
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export function getLesson(subjectId, lessonId) {
  return lessons.find(
    l => l.subjectId === subjectId && String(l.id) === String(lessonId)
  ) ?? null;
}

export const getFaq = () => faqData;