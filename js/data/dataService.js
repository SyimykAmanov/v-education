import { subjects, lessons, faqData} from "./content.js";

export async function getRandomQuote() {
    try {
        const quoteRes = await fetch("https://dummyjson.com/quotes/random");
        if (!quoteRes.ok) {
          throw new Error ("Fehler beim laden der Zitate");
        }
        const quoteData = await quoteRes.json();
        const englishText = quoteData.quote;
        const author = quoteData.author;

        //sending to translate
        const translateURL = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(englishText)}&langpair=en|de`;
        const translateRes = await fetch(translateURL);
        if (!translateRes.ok) {
          throw new Error("Fehler bei der Übersetzung");
        }

        const translatedData = await translateRes.json();
        return {
          quote: translatedData.responseData.translatedText,
          author: author
        }

    } catch (error) {
        console.warn("API Error, Fallback genutzt:", error);
        return { 
            quote: "Lernen ist wie das Rudern gegen den Strom. Sobald man aufhört, treibt man zurück.", 
            author: "Laozi" 
        };
    }
}

export async function getSubjectById(subjectId) {
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (Math.random() < 0.2) {
    throw new Error("Server-Fehler: Daten konnten nicht geladen werden.")
  }
  return subjects.find(s => s.id === subjectId) ?? null;
}


export async function getLessonsBySubjectId(subjectId) {
  await new Promise(resolve => setTimeout(resolve, 500));

  return lessons
    .filter(lesson => lesson.subjectId === subjectId)
    .slice()
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}


export async function getLesson(subjectId, lessonId) {
  await new Promise(resolve => setTimeout(resolve, 500));

  return lessons.find(lesson => lesson.subjectId === subjectId && String(lesson.id) == String(lessonId))
}

export const getFaq = () => faqData;