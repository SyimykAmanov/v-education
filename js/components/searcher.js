export const Search = (idName, className, value) => {
    return `
        <div class="search-container">
            <input type="text" id="${idName}" class="${className}" placeholder="Fachsuche..." value="${value}">
        </div>
    `
}