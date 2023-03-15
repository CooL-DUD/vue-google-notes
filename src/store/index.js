import { createStore } from 'vuex'
import { noteModule } from '@/store/noteModule'

export default createStore({
  state: {
    searchQuery: '',
  },
  modules: {
    note: noteModule
  }
})
