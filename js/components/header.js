import {state} from "../core/state.js";
import { subjects } from "../data/content.js";

export const header = () => {
    const count = state.favorites.length;
    console.log(state.favorites)

    const subjectsList = subjects.map(s => `
                        <li class="header__menu-item">
                            <a href="/subject/${s.id}" class="header__menu-link">${s.title}</a>
                        </li>
    `).join("");
    return `
        <header class="header">
            <div class="header__container"> 

                <div class="header__info">
                    <a href="/" class="logo header__logo">
                        <img class="logo__img" src="./assets/img/logo.png" alt="logo">
                    </a>

                    <div class="header__favorites">
                        <span class="nav__fav-count">Lieblingsfächer: ${count}</span>
                    </div>
                </div>

               <!-- header menu -->
                <nav class="header__nav">
                    <ul class="header__menu">
                        ${subjectsList}
                    </ul>
                </nav>
            </div>
        </header>

`};