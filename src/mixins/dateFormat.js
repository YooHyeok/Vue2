/**
 * Mixin 예제를 위한 날짜 형식 포맷 공통 모듈
 */
export const dateFormat = {
  data() {
    return {
      mixinData: '나는 믹스인이다!'
    }
  },
  methods: {
    getDateAndTime(date) {
      if(!date) return
      let hour = date.getHours()
      let minutes = date.getMinutes()
      let fullDate = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`
      return `${fullDate} ${hour}:${minutes}`
    }
  }
}
