const STORAGE_KEY = 'v_education_favorites';

export const state = {
    favorites: JSON.parse(localStorage.getItem(STORAGE_KEY)) || [],

    toggleFavorite(id) {
        const index = this.favorites.indexOf(id);
        if (index === -1) {
            this.favorites.push(id);
        } else {
            this.favorites.splice(index, 1);
        }
        this.save();
    },

    isFavorite(id) {
        return this.favorites.includes(id);
    },

    save() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.favorites));
    }
};