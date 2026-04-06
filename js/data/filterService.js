export const filterService = {
    // filter by search
    filterBySearch(subjects, searchTerm) {
        if(!searchTerm) return subjects;

        const term = searchTerm.toLowerCase();
        const filteredSubjects = subjects.filter(subject => subject.title.toLowerCase().includes(term));
        
        return filteredSubjects;
    },

    // filter by category
    filterByCategory(subjects, activeCategory) {
        if(activeCategory === "All") return subjects;

        const filteredSubjects = subjects.filter(subject => subject.category === activeCategory);

        return filteredSubjects;
    },

    //filter by search and category together
    filterSubjects(subjects, searchTerm, activeCategory) {
        let filtered = this.filterBySearch(subjects, searchTerm);
        filtered = this.filterByCategory(filtered, activeCategory);

        return filtered; 
    }

}