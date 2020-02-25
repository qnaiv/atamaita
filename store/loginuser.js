export const state = () => ({
    name: ""
  })
  
export const mutations = {
    updateName(state, name) {
      state.name = name
    }
  }
  