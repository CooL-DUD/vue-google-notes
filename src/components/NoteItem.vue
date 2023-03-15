<template>
<div class="note-item" @click="editNote">
  <div class="checkmark">
    <input type="checkbox" class="checkbox" @click="selectNote">
    <span class="checkmark__box"></span>
  </div>
  <p class="note-item__title">{{ note.title }}</p>
  <div class="note-item__list">
    <p class="note-item__body">{{ note.body }}</p>
  </div>
</div>
  <edit-note
      :show="show"
      :note="note"
      @edit="editNote"
  />
</template>

<script>
import EditNote from "@/components/EditNote";
export default {
  name: "NoteItem",
  emits: ['select', 'edit'],
  components: {
    EditNote
  },
  data() {
    return {
      show: false
    }
  },
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  methods: {
    selectNote() {
      this.$emit('select', this.note, event.target.checked)
      event.target.parentElement.querySelector('.checkmark__box').classList.toggle('--active')
      event.target.parentElement.parentElement.classList.toggle('--active')
      event.stopPropagation()
    },
    editNote() {
      this.show = !this.show
    }
  }
}
</script>

<style scoped lang="scss">
.note-item{
  position: relative;
  border-radius: 16px;
  border: solid 1px #dadce0;
  width: fit-content;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 240px;
  transition: all 1s ease;

  &__title{
    font-size: 16px;
    font-weight: 700;
   }

  &__body{
    font-size: 14px;
  }

  &:hover{
    .checkmark__box{
      opacity: 1;
      transition: inherit;
    }
  }
  &.--active{
    border: solid 2px #111;
  }
}
.checkbox{
  border-radius: 50px;
  opacity: 0;
  width: 20px;
  height: 20px;
}
.checkmark{
  position: absolute;
  top: -5px;
  left: -5px;

  &__box{
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: #111;
    display: flex;
    opacity: 0;
    transition: inherit;
    pointer-events: none;

    &:before{
      content: '';
      position: absolute;
      left: 4px;
      width: 5px;
      height: 2px;
      background: #fff;
      border: none;
      transform: rotate(45deg);
    }
    &:after{
      content: '';
      position: absolute;
      top: 8.7px;
      left: 6.45px;
      width: 10px;
      height: 2px;
      background: #fff;
      border: none;
      transform: rotate(-45deg);
    }
    &.--active{
      opacity: 1;
    }
  }
}
</style>