export default {
  listCategory ({ commit }) {
    try {
      const response = require('@/static/json/category.json')
      commit('SET_LIST_CATEGORY', response.data)
      return {
        success: true,
        message: 'Success fetch model'
      }
    } catch (err) {
      console.log(err)
      return {
        success: false,
        message: err.message
      }
    }
  },
  listSize ({ commit }) {
    try {
      const response = require('@/static/json/size.json')
      commit('SET_LIST_SIZE', response.data)
      return {
        success: true,
        message: 'Success fetch model'
      }
    } catch (err) {
      console.log(err)
      return {
        success: false,
        message: err.message
      }
    }
  },
  listSort ({ commit }) {
    try {
      const response = require('@/static/json/sort.json')
      commit('SET_LIST_SORT', response.data)
      return {
        success: true,
        message: 'Success fetch model'
      }
    } catch (err) {
      console.log(err)
      return {
        success: false,
        message: err.message
      }
    }
  }
}
