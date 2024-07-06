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
  computed: { // 자식 컴포넌트에서 props값 활용하기.
    sayHello () {
      return this.nameOfChild + `하이!`
    }
  },
  data () {
    return {
    }
  } 
}
</script>