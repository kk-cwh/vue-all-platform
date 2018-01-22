import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {

  },
  mutations: {
  },
  actions: {
    ArticleList ({ commit }, data) {
      return new Promise((resolve, reject) => {
        axios({
          url: `http://47.100.113.214/api/_articles?page=${data.page}`,
          method: 'get'
        }).then(response => {
          if (response.data) {
            resolve(response.data)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    ArticleDetail ({ commit }, data) {
      return new Promise((resolve, reject) => {
        axios({
          url: `http://47.100.113.214/api/_articles/${data.id}`,
          method: 'get'
        }).then(response => {
          if (response.data) {
            resolve(response.data)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    AchivesList ({ commit }, data) {
      return new Promise((resolve, reject) => {
        axios({
          url: `http://47.100.113.214/api/_archives?page=${data.page}&tag_id=${data.tag_id}`,
          method: 'get'
        }).then(response => {
          if (response.data) {
            resolve(response.data)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    TagList ({ commit }, data) {
      return new Promise((resolve, reject) => {
        axios({
          url: 'http://47.100.113.214/api/_tags',
          method: 'get'
        }).then(response => {
          if (response.data) {
            resolve(response.data)
          }
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
})
export default store
