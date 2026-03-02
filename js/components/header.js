import {state} from "../core/state.js";

export const header = () => {
    const count = state.favorites.length;
    return `
        <header class="header">
            <div class="header__container"> 

                <div class="header__info">
                    <a href="/" class="logo header__logo">
                        <img class="logo__img" src="./assets/img/logo.png" alt="logo">
                    </a>

                    <div class="header__favorites">
                        <span class="nav__fav-count">Избранное: ${count}</span>
                    </div>
                </div>

               <!-- header menu -->
                <nav class="header__nav">
                    <ul class="header__menu">
                        <li class="header__menu-item"> <!-- Математика -->
                            <a href="/subject/math" class="header__menu-link">Математика</a>
                        </li>
                        <li class="header__menu-item"> <!-- Грамматика -->
                            <a href="/subject/grammar" class="header__menu-link">Грамматика</a>
                        </li>
                        <li class="header__menu-item"> <!-- Чтение -->
                            <a href="/subject/reading" class="header__menu-link">Чтение</a>
                        </li>
                        <li class="header__menu-item"> <!-- Аналогия -->
                            <a href="/subject/analogies" class="header__menu-link">Аналогия</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

`};