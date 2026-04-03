import { createRouter } from "./core/router.js";
import { homePage } from "./pages/homePage.js";
import { subjectPage } from "./pages/subjectPage.js";
import { lessonPage } from "./pages/lessonPage.js";
import { getSubjects } from "./data/dataService.js";
import { state } from "./core/state.js";

const routes = [
   {pattern: "/", page: homePage},
   {pattern: "/subject/:subjectId", page: subjectPage},
   {pattern: "/subject/:subjectId/lesson/:lessonId", page: lessonPage},
]      

async function startApp() {
    const subjects = await getSubjects();
    state.setSubjects(subjects);

    const categories = ["All", ...new Set(subjects.map(subject => subject.category))];
    state.setCategories(categories);

    const app = document.querySelector("#app");
    let router = createRouter({rootEl: app, routes: routes});
    router.init();
}

startApp();