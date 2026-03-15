import { subjects, lessons, faqData} from "./content.js";

export async function getSubjectById(subjectId) {
  await new Promise(resolve => setTimeout(resolve, 2000));

  return subjects.find(s => s.id === subjectId) ?? null;
}


export async function getLessonsBySubjectId(subjectId) {
  await new Promise(resolve => setTimeout(resolve, 2000));

  return lessons
    .filter(lesson => lesson.subjectId === subjectId)
    .slice()
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}


export async function getLesson(subjectId, lessonId) {
  await new Promise(resolve => setTimeout(resolve, 2000));

  return lessons.find(lesson => lesson.subjectId === subjectId && String(lesson.id) == String(lessonId))
}

export const getFaq = () => faqData;