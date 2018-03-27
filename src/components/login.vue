<template>
  <div class="login">
    <div class="columns">
      <div class="column is-9">
        <img src="../assets/todo.jpg" alt="">
      </div>
      <div class="column is-3" @click="signin()">
        <img src="../assets/logfb.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'login',
  data () {
    return {
    }
  },
  methods: {
    ...mapActions(['signin'])
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
  margin: 0;
}
a {
  color: #42b983;
}
</style>
