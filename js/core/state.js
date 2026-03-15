const STORAGE_KEY = 'v_education_favorites';
const STORAGE_KEY_COMPL = "v_education_completed";

export const state = {
    favorites: JSON.parse(localStorage.getItem(STORAGE_KEY)) || [],
    completed: JSON.parse(localStorage.getItem(STORAGE_KEY_COMPL)) || [],

    toggleFavorite(id) {
        const index = this.favorites.indexOf(id);
        if (index === -1) {
            this.favorites.push(id);
        } else {
            this.favorites.splice(index, 1);
        }
        this.save();
    },
    toggleCompleted(id) {
        const index = this.completed.indexOf(id);
        if (index === -1) {
            this.completed.push(id);
        } else {
            this.completed.splice(index, 1);
        }
        this.save();
    },

    isFavorite(id) {
        return this.favorites.includes(id);
    },

    isCompleted(id) {
        return this.completed.includes(id);
    },

    save() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.favorites));
        localStorage.setItem(STORAGE_KEY_COMPL, JSON.stringify(this.completed))
    },

    searchQuery: "",
    
    setSearchQuery(query) {
        this.searchQuery = query;
    },
};