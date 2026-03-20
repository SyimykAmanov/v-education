import {header} from "../components/header.js";
import {footer} from "../components/footer.js";
import { state } from "./state.js";

function parsePath (pattern, pathname) {
    let patternPart = pattern.split("/").filter(Boolean);
    let pathPart = pathname.split("/").filter(Boolean);

    if (pathPart.length !== patternPart.length) return null

    let params = {};

    for (let i = 0; i < patternPart.length; i++) {
        if (patternPart[i].startsWith(":")) {
            params[patternPart[i].slice(1)] = decodeURIComponent(pathPart[i]);
        } else if (patternPart[i] !== pathPart[i]) return null;
    }

    return params;
}

export function createRouter({rootEl, routes}) {
    
    function match (pathname) {
        for (let route of routes) {
            let params = parsePath(route.pattern, pathname);
            if (params) return {page: route.page, params: params}
        }
        return
    }

    async function render(pathname) {
        try {
            let matched = match(pathname);
            if (!matched) {
                contentEl.innerHTML = `404`;
                return
            }
            contentEl.innerHTML = `<div class="loader">Wird geladen...</div>`;
            const html = await matched.page.render(matched.params);
            contentEl.innerHTML = html;

            if (matched.page.afterRender) {
                matched.page.afterRender();
            }
        } catch(error) {
            console.error(error);
                return `
                    <div class=\"error-container\">
                        <h2>Opps! Etwas ist schief gelaufen.</h2>
                        <p>${error.message}</p>
                        <button class="button" onclick=\"window.location.reload()\">Erneut versuchen</button>
                    </div>
                `;
        }
    }

    function navigate(pathname) {
        history.pushState({}, "", pathname);
        render(pathname);
        window.scrollTo(0, 0);
    }

    function onLinkClick(event) {
        if(event.target.id === "resetSearch") {
            state.setSearchQuery("");
            render(window.location.pathname);
        }

        const comBtn = event.target.closest('#completed-btn');
        if (comBtn) {
            const id = comBtn.dataset.id;
            state.toggleCompleted(id);

            render(window.location.pathname);
        }

        const favBtn = event.target.closest('#favorite');
        if (favBtn) {
            const id = favBtn.dataset.id;
            state.toggleFavorite(id);
            
            render(window.location.pathname);

            const headerEl = rootEl.querySelector(".header");
            if (headerEl) {
                headerEl.outerHTML = header();
            }
        }

        let a = event.target.closest("a");
        if (!a) return
        
        const href = a.getAttribute("href");
        if (!href || href.startsWith('http') || href.startsWith('#') || a.target === '_blank') return
        if (!href.startsWith('/')) return

        event.preventDefault();
        navigate(href);
    }


    let contentEl;

    function onSearchInput(event) {
        if (event.target.id === "subjectSearch") {
            const query = event.target.value;
            state.setSearchQuery(query);

            render(window.location.pathname);
            const input = document.getElementById("subjectSearch");
            if (input) {
                input.focus();
                input.setSelectionRange(query.length, query.length);
            }
        }
    }

    function init() {
        window.addEventListener("popstate", () => render(window.location.pathname));
        document.addEventListener("input", onSearchInput)
        document.addEventListener("click", onLinkClick);
        rootEl.innerHTML = `
            ${header()} <main id="content"></main> ${footer()}
        `
        contentEl = rootEl.querySelector("#content");
        render(window.location.pathname);
    }

    return {init, navigate}
}