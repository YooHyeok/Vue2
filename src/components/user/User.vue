<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12>

        <div class="blue lighten-3 pa-5">
          <h1>User 컴포넌트</h1>
          <p>이름: {{ name }}</p>
          <p>{{ getDateAndTime(createdAt) }}</p>
          <p>{{ this.mixinData }}</p>
          <v-btn @click="changeName()">이름 변경</v-btn>
          <hr>
          <v-layout wrap>
            <v-flex xs12 sm6>

              <!-- props 예제 -->
              <!-- <UserDetail v-bind:nameOfChild="nameOfChild"/> -->
              <!-- <UserDetail></UserDetail> --> <!-- props를 넘기지 않는 경우 (default 예시) -->

               <!-- emit 예제 -->
              <UserDetail
              :name="name"
              :address="address"
              :phone="phone"
              :hasDog="hasDog"
              />

            </v-flex>
            <v-flex xs12 sm6>
              <UserEdit
                :name="name"
                :address="address"
                :phone="phone"
                :hasDog="hasDog"
                @child="parents"
              />
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
import { dateFormat } from "../../mixins/dateFormat"
export default {
  components: {
    UserDetail,
    UserEdit
  },
  data() {
    return {
      nameOfChild: 'YooHyeok',
      name: 'School',
      address: 'Seoul',
      phone: '1234-5678',
      hasDog: true,
      createdAt: null,
    }
  },
  created() { // 라이프사이클 훅(컴포넌트가 생성될 때) 
    this.createdAt = new Date()
  },
  methods: {
    changeName() { // changeName = function () {} 과 동일한 표현?
      this.nameOfChild = "스쿨"
    },
    parents(user) { // emit 즉 @child로 받은 value를 매개변수로 받는다.
      this.name = user.name
      this.address = user.address
      this.phone = user.phone
      this.hasDog = user.hasDog
      console.log("부모가 받았어!")
    },
  },
  mixins: [dateFormat]
}
</script>