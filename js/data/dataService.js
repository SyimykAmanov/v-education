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

export async function getSubject(subjectId) {
  try {
    const subjectsURL = "http://127.0.0.1:3658/m1/1236529-1233135-default/subjects";
    const response = await fetch(subjectsURL);
    if (response.ok) {
      const result = await response.json();
      const subjects = result.subjects;
      const subject = subjects.find(subject => subject.id === subjectId);
      return subject;
    }
  } catch (error) {
    console.error(`The error: ${error}`)
  }
}

export async function getSubjects() {
  try {
    const subjectsURL = "http://127.0.0.1:3658/m1/1236529-1233135-default/subjects";
    const response = await fetch(subjectsURL);
    if (response.ok) {
      const result = await response.json();
      return result.subjects;
    }
  } catch (error) {
    console.error(`The error: ${error}`)
  }
}

export async function getLesson(subjectId, lessonId) {
  try {
    const lessonsURL = "http://127.0.0.1:3658/m1/1236529-1233135-default/lessons";
    const response = await fetch(lessonsURL);
    const result = await response.json();
    const lessons = result.lessons;
    const lesson = lessons.find(lesson => {
      if (lesson.subjectId === subjectId && lesson.id == lessonId) {
        return lesson;
      }
    })
    if (response.ok) {
      return lesson
    }
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}


export async function getSubjectLessons(subjectId) {
  try {
    const lessonsURL = "http://127.0.0.1:3658/m1/1236529-1233135-default/lessons";
    const response = await fetch(lessonsURL);
    if (response.ok) {
      const result = await response.json();
      const lessons = result.lessons;
      const subjectLessons = lessons.filter(lesson => lesson.subjectId === subjectId)
      return subjectLessons
    }
  } catch (error) {
    console.error(`Error: ${error}`)
  }
}

export async function getFaq () {
  const URL = "http://127.0.0.1:3658/m1/1236529-1233135-default/faq";
  const response = await fetch(URL);
  const result = await response.json();

  return result;
};

