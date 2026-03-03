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

    function render(pathname) {
        let matched = match(pathname);
        if (!matched) {
            contentEl.innerHTML = `404`;
            return
        }
        contentEl.innerHTML = matched.page.render(matched.params);
    }

    function navigate(pathname) {
        history.pushState({}, "", pathname);
        render(pathname);
    }

    function onLinkClick(event) {
        const favBtn = event.target.closest('.favorite-btn');
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

    function init() {
        window.addEventListener("popstate", () => render(window.location.pathname));
        document.addEventListener("click", onLinkClick);
        rootEl.innerHTML = `
            ${header()} <main id="content"></main> ${footer()}
        `
        contentEl = rootEl.querySelector("#content");
        render(window.location.pathname);
    }

    return {init, navigate}
}