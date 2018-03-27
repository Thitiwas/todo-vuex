import Vue from 'vue'
import Vuex from 'vuex'
import {firebaseMutations, firebaseAction} from 'vuexfire'
import firebase from 'firebase'
import router from '../router'

Vue.use(Vuex)
Vue.config.productionTip = false
// /////////////Firebase////////////// //
var config = {
  apiKey: 'AIzaSyB9K-i0ZiFB7HISJtGFVadC9pdO9nc5qX8',
  authDomain: 'todo-list-e337a.firebaseapp.com',
  databaseURL: 'https://todo-list-e337a.firebaseio.com',
  projectId: 'todo-list-e337a',
  storageBucket: 'todo-list-e337a.appspot.com',
  messagingSenderId: '78015838709'
}
firebase.initializeApp(config)

let db = firebase.database()
let Todos = db.ref('todos')

// //////////process store//////////// //
const store = new Vuex.Store({
  strict: true,
  state: {
    user: {},
    todos: []
  },
  getters: {
    todos: state => state.todos
  },
  mutations: {
    ...firebaseMutations,
    setUser (state, user) {
      state.user = user
      console.log(user)
    },
    ADDTODO (state, description) {
      Todos.push({
        description: description,
        success: false
      })
    }
  },
  actions: {
    setTodosRef: firebaseAction(({ bindFirebaseRef, unbindFirebaseRef }) => {
      bindFirebaseRef('todos', Todos)
    }),
    init ({ commit }) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user && user.uid) {
          let { displayName, uid } = user
          let profile = {
            displayName,
            uid,
            fb: user.providerData[0]
          }
          commit('setUser', profile)
          router.push('/todos')
        } else {
          commit('setUser', null)
          router.push('/')
        }
      })
    },
    signin () {
      let provider = new firebase.auth.FacebookAuthProvider()
      provider.setCustomParameters({
        'display': 'popup'
      })
      firebase.auth().signInWithPopup(provider)
    },
    signout ({commit}) {
      firebase.auth().signOut()
      router.push('/')
    },
    addTodo ({commit}, description) {
      commit('ADDTODO', description)
    }
  }
})

export default store
