<template>
  <div class="red lighten-3 pa-3">
    <h3>자세한 회원 정보를 확인합니다.</h3>
    <p>{{ nameOfChild }}</p>
    <p>{{ sayHello }}</p>
    <v-btn @click="switchName()">이름 변경</v-btn>

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
  methods: {
    switchName () { // 부모 컴포넌트의 props 값 수정.
      this.nameOfChild = '컴퓨터'
    }
  },
  data () {
    return {
    }
  } 
}
</script>