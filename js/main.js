import { createRouter } from "./core/router.js";
import { homePage } from "./pages/homePage.js";
import { subjectPage } from "./pages/subjectPage.js";
import { lessonPage } from "./pages/lessonPage.js";

const routes = [
   {pattern: "/", page: homePage},
   {pattern: "/subject/:subjectId", page: subjectPage},
   {pattern: "/subject/:subjectId/lesson/:lessonId", page: lessonPage},
]      

const app = document.querySelector("#app");

let router = createRouter({rootEl: app, routes: routes});
router.init();