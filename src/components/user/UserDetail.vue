<template>
  <div class="red lighten-3 pa-3">
    <h3>자세한 회원 정보를 확인합니다.</h3>
    <p>{{ nameOfChild }}</p>
    <p>{{ sayHello }}</p>
  </div>
</template>

<script>
export default {
  // props: ['nameOfChild'],
  props: {
    // nameOfChild: String
    nameOfChild: {
      type: String,
      required: true // 필수 값 여부
    }
  },
  data () {
    return {
    }
  } 
}
</script>