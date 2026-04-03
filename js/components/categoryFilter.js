import { state } from "../core/state";


export const CategoryFilter = (categories, activeCategory) => {

    return `
        <div class="categories">
            ${categories.map(category => `
                <button class="button category-btn ${category === state.activeCategory ? "active" : ""}" data-category="${category}">${category}</button>`).join("")
            }
        </div>
    `
}