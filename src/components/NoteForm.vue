<template>
  <form class="note-form">
    <div class="note-form__item" v-show="show">
      <label for="" class="item__label"></label>
      <input-keep
      v-model="note.title"
      placeholder="Введите заголовок"
      type="text"
      class="title"
      />
    </div>
    <div class="note-form__item">
      <label for="" class="item__label"></label>
      <input-keep
      v-model="note.body"
      placeholder="Заметка..."
      type="textarea"
      @focus="show = true"
      class="body"
      />
    </div>
  </form>
  <div class="bg" v-show="show" @click="createNote"></div>
</template>

<script>
import ButtonKeep from "@/components/UI/ButtonKeep";
export default {
  name: "NoteForm",
  emits: ['create'],
  components: {ButtonKeep},
  data(){
    return {
      note: {
        title: '',
        body: ''
      },
      show: false
    }
  },
  methods: {
    createNote(){
      if(this.note.title.trim() || this.note.body.trim()){
        this.note.id = Date.now();
        this.$emit('create', this.note)
        this.note = {
          title: '',
          body: ''
        }
      }
      this.show = false;
    }
  }
}
</script>

<style scoped lang="scss">
.note-form{
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 500px;
  margin: 50px auto;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
  z-index: 2;
  background: #fff;
}
.title{
  font-size: 20px;
  font-weight: 500;
}
.body{
  word-break: normal;
}
.bg{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>