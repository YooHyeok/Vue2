<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ count }}</p>
    <button v-on:click="count ++">추가</button>
    <button @click="count --">감소</button>
    <Home/>
  </div>
</template>

<script>

import Home from "./Home.vue"

export default {
  components : {
    Home
  },
  data () {
    return {
      title: "안녕하세요.",
      count: 1
    }
  }
}
</script>
