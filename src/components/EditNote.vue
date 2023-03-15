<template>
  <div class="edit-note" v-show="show">
    <h4>Редактирование заметки</h4>
    <input-keep
      v-model="note.title"
      type="text"
      placeholder="Название"
    />
    <input-keep
      v-model="note.body"
      type="textarea"
      placeholder="Описание"
    />
  </div>
  <div
      class="bg"
      @click="editNote"
      v-show="show"
  ></div>
</template>

<script>
import {mapMutations} from "vuex";
import store from "@/store";

export default {
  name: "editNote",
  emits: ['edit'],
  props: {
    note: {
      type: Object,
      required: true,
    },
    show: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    editNote() {
      store.commit('note/removeNotes', [this.note])
      store.commit('note/addNote', this.note)
      this.$emit('edit')
    },
    ...mapMutations({
      addNote: 'note/addNote',
      removeNotes: 'note/removeNotes',
    })
  },
}
</script>

<style scoped>
.edit-note{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);
  min-width: 300px;
  z-index: 3;
}
.bg{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #111;
  opacity: 0.4;
  z-index: 2;
}
</style>