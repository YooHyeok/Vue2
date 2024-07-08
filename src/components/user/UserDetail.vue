<template>
  <!-- <div class="red lighten-3 pa-3">
    <h3>자세한 회원 정보를 확인합니다.</h3>
    <p>{{ nameOfChild }}</p>
    <p>{{ sayHello }}</p>
    <v-btn @click="switchName()">이름 변경</v-btn>
  </div> -->
  <div class="red lighten-3 pa-3">
    <h3>자세한 회원 정보를 확인합니다.</h3>
    <p>상세사항</p>
<!--     <p>{{ nameOfChild }}</p>
    <p>{{ sayHello }}</p>
    <v-btn @click="switchName()">이름 변경</v-btn> -->
    <v-list >
      <v-list-item>
        <v-list-item-content>이름 : </v-list-item-content>
        <v-list-item-content class="d-inline text-end">{{ name }}</v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>주소 : </v-list-item-content>
        <v-list-item-content class="d-inline text-right">{{ address }}</v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>전화번호 : </v-list-item-content>
        <v-list-item-content class="d-inline text-end">{{ phone }}</v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>반려견유무 : </v-list-item-content>
        <v-list-item-content class="d-inline text-right">{{ hasDogKr }}</v-list-item-content>
      </v-list-item>

    </v-list>
  </div>
</template>

<script>

export default {
  props: ['nameOfChild', 'name', 'address', 'phone', 'hasDog'],
 /*  props: {
    // nameOfChild: String
    nameOfChild: {
      type: String,
      required: true // 필수 값 여부
    },
  }, */
  computed: { // 자식 컴포넌트에서 props값 활용하기.
    sayHello () {
      return this.nameOfChild + `하이!`
    },
    hasDogKr() {
      return this.hasDog === true ? '있음' : '없음'
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