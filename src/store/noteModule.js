
export const noteModule = {
    state: () => ({
        notes: [
            {title: 'Title 1', body: 'Body 1', id: 1},
            {title: 'Title 2', body: 'Body 2', id: 2},
            {title: 'Title 3', body: 'Body 3', id: 3},
            {title: 'Title 4', body: 'Body 4', id: 4},
            {title: 'Title 5', body: 'Body 5', id: 5},
        ],
        searchQuery: '',
        selectedNotes: [],
    }),
    getters: {
        searchNotes(state) {
            return state.notes.filter(note => note.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },
    mutations: {
        setNotes(state, notes) {
            state.notes = notes
        },
        addNote(state, note) {
            state.notes.push(note)
        },
        setSelectedNotes(state, selectedNotes) {
            state.selectedNotes = selectedNotes
        },
        addSelectedNote(state, selectedNote) {
            state.selectedNotes.push(selectedNote)
        },
        removeSelectedNote(state, selectedNote) {
            state.selectedNotes = state.selectedNotes.filter(note => note.id !== selectedNote.id)
        },
        removeNotes(state,selectedNotes) {
            state.notes = state.notes.filter(note => !selectedNotes.includes(note))
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        }
    },
    namespaced: true
}