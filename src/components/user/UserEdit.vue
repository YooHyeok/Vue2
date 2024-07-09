<template>
  <div class="yellow lighten-3 pa-3">
    <h3>회원 정보를 수정할 수 있습니다.</h3>
    <p>수정사항</p>
    <v-text-field
      label="Error 예시 name"
      v-model="name"
    />
    <v-text-field
      label="이름"
      v-model="user.name"
    />
    <v-text-field
      label="주소"
      v-model="user.address"
    />
    <v-text-field
      label="전화번호"
      v-model="user.phone"
    />
    <v-radio-group v-model="user.hasDog">
      <v-radio label="반려견 있음" :value="true"></v-radio>
      <v-radio label="반려견 없음" :value="false"></v-radio>
    </v-radio-group>
    <v-btn @click="changeUser">수정완료</v-btn>
  </div>
</template>

<script>
import { eventBus } from '../../main';

export default {
  props: [ 'name', 'address', 'phone', 'hasDog'],
  data () {
    return {
      user: {}
    }
  },
  created () { // 각 props 값 현재 컴포넌트의 data의 user Object에 재할당
    this.user.name = this.name
    this.user.address = this.address
    this.user.phone = this.phone
    this.user.hasDog = this.hasDog
  },
  methods: {
    /**
     * $emit()을 통해 부모 컴포넌트에게 신호와 데이터 전달  
     * 자식컴포넌트에서 부모 컴포넌트에게 `child` 라는 임의의 신호를 보낸다.  
     * 코드로 예를 들면 `child(this.user)` 의미와 같다.  
     * 예를들어 `this.$emit("child", this.user, 1, 2, 3, 4)` 와 같은형태로 Arguments가 구성된다면  
     * `child(this.user, 1, 2, 3, 4)` 형태와 같아진다.  
     * 받게 되는 컴포넌트(부모)에서 `@child:{메소드명}` 형태의 속성으로 받는다.  
     */
    changeUser () {
      this.$emit("child", this.user)
      /**
       * 2. eventBus에 $emit을 통해 신호를 송신
       * 즉, eventBus라는 새로운 vue인스턴스가 부모 역할을 한다는 것으로 추론 가능하다.
       * 해당 인스턴스를 구독하는 모든 컴포넌트에서는 해당 신호를 수신할 수 있게 된다.
       */
      eventBus.$emit('userWasEdited', new Date())
    }
  }
}
</script>
