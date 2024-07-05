<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ count }}</p>
    <button v-on:click="count ++">추가</button>
    <button @click="count --">감소</button>
    <Home/>
    <Appstatus/>
  </div>
  
</template>

<script>

import User from "../components/user/User.vue";
import Home from "../Home.vue"

export default {
  components : {
    Home,
    User
  },
  data () {
    return {
      title: "안녕하세요.",
      count: 1
    }
  }
}
</script>
