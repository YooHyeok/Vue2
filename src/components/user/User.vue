<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12>

        <div class="blue lighten-3 pa-5">
          <h1>User 컴포넌트</h1>
          <p>이름: {{ name }}</p>
          <v-btn @click="changeName()">이름 변경</v-btn>
          <hr>
          <v-layout wrap>
            <v-flex xs12 sm6>
              <UserDetail v-bind:nameOfChild="name"></UserDetail>
            </v-flex>
            <v-flex xs12 sm6>
              <UserEdit></UserEdit>
            </v-flex>
          </v-layout>
        </div>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import UserDetail from "./UserDetail.vue"
import UserEdit from "./UserEdit.vue"

export default {
  components: {
    UserDetail,
    UserEdit
  },
  data () {
    return {
      name: '뷰제이에스'
    }
  },
  methods: {
    changeName () { // changeName = function () {} 과 동일한 표현?
      this.name = "Hoza"
    }
  }
}
</script>