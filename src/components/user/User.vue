<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <div class="blue lighten-3 pa-8">
          <h1>User 컴포넌트</h1>
          <p>이름: 뷰제이에스</p>
          <hr>
          <v-layout row wrap>
            <v-flex xs12 sm6>
              <UserDetail></UserDetail>
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
  }
}
</script>