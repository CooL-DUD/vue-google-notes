<template>
<div class="note-list" v-if="notes.length > 0">
  <note-item
      v-for="note in notes"
      :key="note.id"
      :note="note"
      @select="selectNote"
      @edit="editNote"
  />
</div>
  <div class="empty" v-else >
    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1qxuxwg-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LightbulbOutlinedIcon"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></svg>
    <p>Заметок нет</p>
  </div>
</template>

<script>
import NoteItem from "@/components/NoteItem";
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';
import store from "@/store";
export default {
  name: "NoteList",
  emits: ['select', 'edit'],
  components: {
    NoteItem
  },
  props: {
    notes: {
      type: Array,
      required: true
    }
  },
  methods: {
    selectNote(note, checked) {
      this.$emit('select', note, checked)
    },
    editNote(note) {
      this.$emit('edit', note)
    }
  }

}
</script>

<style scoped lang="scss">
.note-list{
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 50px;
}
.empty{
  height: 300px;
  width: 300px;
  margin: auto;
  svg{
    height: 100%;
    width: 100%;
    fill: #ede9e9;
  }
  p{
    color: #ede9e9;
    font-size: 30px;
    font-weight: 700;
  }
}
</style>