<template>
  <div class="todos">
    <button type="button" name="button" @click="signout()">logout</button>
    <input type="text" name="" value="" v-model="description">
    <button type="button" name="button" @click="addTodo(description)">add</button>
    <ul>
      <li v-for="todo in todos" :key="todo['.key']">{{todo.description}}</li>
    </ul>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'todos',
  data () {
    return {
      description: ''
    }
  },
  computed: {
    ...mapGetters(['todos'])
  },
  methods: {
    ...mapActions(['setTodosRef', 'signout', 'addTodo'])
  },
  mounted () {
    this.setTodosRef()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
