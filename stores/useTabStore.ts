import { defineStore } from 'pinia'
interface Tab {
  [key: string]: string
}
export const useTabStore = defineStore('tab', {
  state: () => {
    return {
      // for initially empty lists
      tabObj: {} as Tab
    }
  },
  actions: {
    setActiveTabForContext(context, value) {
      this.tabObj[context] = value
      return this.tabObj[context]
    },
    getActiveTabForContext(context) {
      return this.tabObj[context]
    }
  }
})
