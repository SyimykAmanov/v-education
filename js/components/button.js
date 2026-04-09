export const Button = ({text, className = "", id = "", dataId = "", icon = ""}) => {
    return `
        <button class="${className}" id="${id}" data-id="${dataId}">
            ${icon ? `<span class="button__icon">${icon}</span>` : ""}
            <span class="button__text">${text}</span>
        </button>
    `
}