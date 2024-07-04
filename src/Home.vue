<template>
  <div>
    <Appstatus/>
    <h1>{{ homeTitle }}</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        homeTitle: "홈입니당."
      }
    }
  }
</script>