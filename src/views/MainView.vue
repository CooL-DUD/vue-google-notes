<template>
  <header-keep @delete="deleteSelectedNotes"/>
  <note-form @create="createNote"/>
  <note-list
      :notes="searchNotes"
      @select="selectNote"
      @edit="returnNote"
  />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
svg{
  fill: #5f6368;
}
</style>
<script>
import HeaderKeep from "@/components/HeaderKeep";
import NoteItem from "@/components/NoteItem";
import NoteList from "@/components/NoteList";
import NoteForm from "@/components/NoteForm";
import EditNote from "@/components/EditNote";
import {mapGetters, mapMutations, mapState} from "vuex";
import store from "@/store";
export default {
  name: 'MainView',
  components: {
    HeaderKeep,
    NoteItem,
    NoteList,
    NoteForm,
    EditNote
  },
  data(){
    return {
      note: '',
    }
  },
  methods: {
    createNote(note){
      store.commit('note/addNote', note)
    },
    selectNote(note, checked){
      if(checked){
        store.commit('note/addSelectedNote', note)
      } else {
        store.commit('note/removeSelectedNote', note)
      }
    },
    deleteSelectedNotes(){
      store.commit('note/removeNotes', store.state.note.selectedNotes)
    },
    returnNote(note){
      this.note = note
    },
    ...mapMutations({
      setNotes: 'note/setNotes',
      addNote: 'note/addNote',
      setSearchQuery: 'note/setSearchQuery',
      setSelectedNotes: 'note/setSelectedNotes',
      addSelectedNote: 'note/addSelectedNote',
      removeSelectedNote: 'note/removeSelectedNote',
      removeNotes: 'note/removeNotes',
    })
  },
  computed: {
    ...mapGetters({searchNotes: 'note/searchNotes'}),
    ...mapState({notes: state => state.notes, selectedNotes: state => state.selectedNotes, openModal: state => state.openModal})
  }
}
</script>