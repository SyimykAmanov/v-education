import { state } from "../core/state";
import { subjectCard } from "./subjectCard";
import { filterService } from "../data/filterService";

//get HTML from filtered subjects
export function FilteredSubjects () {
    // get data from global state
    const subjects = state.subjects;
    const searchTerm = state.searchQuery.toLowerCase() || "";
    const activeCategory = state.activeCategory;
    
    const filteredSubjects = filterService.filterSubjects(subjects, searchTerm, activeCategory);


    if (filteredSubjects.length > 0) {
        // subjects are available: render lesson cards
        let subjectsHTML;
        subjectsHTML = filteredSubjects.map(subjectCard).join("");
        return subjectsHTML
    } else {
        // no subjects: show massage and a reset button
        let searchEmptyHTML;
        searchEmptyHTML = `
            <div class="search-emty">
                <p class="search-emty__title">Nach der Suche von "${searchTerm}" wurde nichts gefunden</p>
                <button id="resetSearch" class="button search-emty__button">Zurücksetzten</button>
            </div>
        `;
        return searchEmptyHTML;
    }
}