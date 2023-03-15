<template>
<header class="header-keep">
  <button-keep>
    <svg focusable="false" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="#5f6368"></path></svg>
  </button-keep>
  <div class="header-keep__label">
    <div class="logo-keep">
      <img src="@/assets/logo.png" alt="Google Keep logo">
      <label class="label-keep">Keep</label>
    </div>
  </div>
  <div class="header-keep__searchbar">
    <search-keep/>
  </div>
  <button-keep @click="deleteSelectedNotes">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"></path><path d="M9 8h2v9H9zm4 0h2v9h-2z"></path></svg>
  </button-keep>
</header>
</template>

<script>
import SearchKeep from "@/components/SearchKeep";
export default {
  name: "HeaderKeep",
  components: {
    SearchKeep
  },
  methods: {
    deleteSelectedNotes(){
      this.$emit('delete')
    }
  }
}
</script>

<style scoped lang="scss">
.header-keep{
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: inset 0 -1px 0 0 #dadce0;
  background-color: rgba(255,255,255,1);
  &__label{
    display: flex;
    align-items: center;
    gap: 10px;
  }
  &__searchbar{
    width: 70vw;
  }
}
.logo-keep{
  display: flex;
  align-items: center;
  gap: 8px;
}
.label-keep{
  font-size: 22px;
  line-height: 24px;
  color: #5f6368;
}
</style>