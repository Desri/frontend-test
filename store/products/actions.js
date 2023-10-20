export default {
  listProduct ({ commit }) {
    try {
      const response = require('@/static/json/products.json')
      commit('SET_LIST_PRODUCT', response.data)
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
