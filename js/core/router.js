import {header} from "../components/header.js";
import {footer} from "../components/footer.js";
import { subjectCard } from "../components/subjectCard.js";
import { getSubjectById } from "../data/dataService.js";
import { FilteredSubjects } from "../components/filteredSubjects.js";

//parses a pathname against pattern and extracts dynamic parametrs
//Returns an object of param names to decoded values, or null if no match.
function parsePath (pattern, pathname) {
    // remove leading/trailing slashes and split by '/'
    let patternParts = pattern.split("/").filter(Boolean);
    let pathParts = pathname.split("/").filter(Boolean);

    // different number of segments -> no match
    if (pathParts.length !== patternParts.length) return null

    let params = {};

    for (let i = 0; i < patternParts.length; i++) {
        const patternSegment = patternParts[i];
        const pathSegment = pathParts[i];

        if (patternSegment.startsWith(":")) {

            //Dynamic parameter: extract name and decode the value
            const paramName = patternSegment.slice(1);
            params[paramName] = decodeURIComponent(pathSegment);

        } else if (patternSegment !== pathSegment) {
            // Static segment mismatch -> pattern doesn't match
            return null;
        }
    }

    return params;
}

//creates SPA-router: handles routes, navigation, link clicks, and custom events
export function createRouter({rootEl, routes, state}) {
    let contentEl;

    //helper function for matching a path a route
    function match (pathname) {
        for (let route of routes) {
            let params = parsePath(route.pattern, pathname);

            if (params) {
                return {page: route.page, params: params}
            }
        }
        return null;
    }

    //render the current path
    async function render(pathname) {
        try {
            const matched = match(pathname);
            if (!matched) {
                contentEl.innerHTML = '<div class="not-found">404 — die Seite nicht gefunden</div>';
                return;
            }

            //show the loader
            contentEl.innerHTML = `<div class="loader">Wird geladen...</div>`;

            //render the home page
            const html = await matched.page.render(matched.params);
            contentEl.innerHTML = html;

            //Call the afterRender hook, if it exists
            if (matched.page.afterRender) {
                matched.page.afterRender();
            }
        } catch(error) {
            console.error(error);
            contentEl.innerHTML = `
                <div class="error-container">
                    <h2>Oops! Etwas ist schief gelaufen.</h2>
                    <p>${escapeHtml(error.message)}</p>
                    <button class="button" onclick="window.location.reload()">Erneut versuchen</button>
                </div>`
        }
    }

    //navigation: changes the URL via history.pushState and renders a new page
    function navigate(pathname) {
        history.pushState({}, "", pathname);
        render(pathname);
        window.scrollTo(0, 0);
    }

    //global click handler: handles clicks on links, as well as clicks on category buttons, lesson completion, favorites and search reset.
    async function onLinkClick(event) {
        
        //1. Category selection button
        const categoryBtn = event.target.closest(".category-btn");
        if (categoryBtn) {
            const newCategory = categoryBtn.dataset.category;
            state.setActiveCategory(newCategory);
            
            //update categories
            updateActiveCategory(categoryBtn)
            return;
        }

        //2. Search reset button
        if(event.target.id === "resetSearch") {
            state.setSearchQuery("");
            updateSubjects()
            return;
        }

        //3. The 'complated' button
        const completedBtn = event.target.closest('#completed-btn');
        if (completedBtn) {
            const id = completedBtn.dataset.id;
            state.toggleCompleted(id);

            //update completed status button
            updateStatusButton(completedBtn);
            return;
        }

        //4. The 'favorite' button
        const favoriteBtn = event.target.closest('#favorite');
        if (favoriteBtn) {
            const id = favoriteBtn.dataset.id;
            state.toggleFavorite(id);

            //update favorite subject
            updateSubject(id)

            //update the header
            updateFavCounts()
        }

        //5. Regular links (navigation)
        let link = event.target.closest("a");
        if (!link) return;
        
        // Skip external links, anchors, and links with target="_blank"
        const href = link.getAttribute("href");
        if (!href || href.startsWith('http') || href.startsWith('#') || link.target === '_blank') return;
        if (!href.startsWith('/')) return;

        event.preventDefault();
        navigate(href);
    }

    //Input handler for the search field.
    function onSearchInput(event) {
        if (event.target.id === "subjectSearch") {
            const query = event.target.value;
            state.setSearchQuery(query);
            updateSubjects();
        }
    }

    //update subjects
    function updateSubjects() {
        let subjectsPreview = document.querySelector(".subjects-preview__list");
        subjectsPreview.innerHTML = FilteredSubjects();
    }

    //update active category button
    function updateActiveCategory(categoryBtn) {
        let oldActiveButton = document.querySelector(".category-btn.active");
        oldActiveButton?.classList.remove("active");
        categoryBtn.classList.add("active");

        let subjectsPreview = document.querySelector(".subjects-preview__list");
        subjectsPreview.innerHTML = FilteredSubjects();
    }


    //update complated status button
    function updateStatusButton(button) {
        let lessonId = button.dataset.id;
        let isComp = state.isCompleted(lessonId)
        
        button.textContent = isComp ? "Erledigt" : "als abgeschlossen markieren";
        button.className = `button completed-button ${isComp ? "active" : ""}`;
    }
    
    //update header 
    function updateFavCounts() {
        const favEl = rootEl.querySelector('.nav__fav-count');
        if (favEl) {
            favEl.innerHTML = `Lieblingsfächer: ${state.favorites.length}`
        }
    }

    //update favorite icon in the subject card
    function updateSubject(subjectId) {
        const subjectEl = document.querySelector(`[data-subject-id="${subjectId}"]`);
        const subject = getSubjectById(subjectId);

        if (subjectEl && typeof subjectCard === 'function') {
            subjectEl.outerHTML = subjectCard(subject);
        }   
    }

    //router initialization: adds listeners, draws the basic structure, starts rendering the current URL.
    function init() {
        window.addEventListener("popstate", () => render(window.location.pathname));
        document.addEventListener("input", onSearchInput)
        document.addEventListener("click", onLinkClick);

        //draw the framework (header, footer, content container)
        rootEl.innerHTML = `
            ${header(state.subjects)} <main id="content"></main> ${footer()}
        `
        contentEl = rootEl.querySelector("#content");
        render(window.location.pathname);
    }

    // Public API
    return {init, navigate}
}