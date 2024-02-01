<template>
<h1>Home Page</h1>
</template>
<script >
export default {
  name:'Home',
  unmounted() {
    console.log('Home component unmounted')
  },
  activated() {
    console.log('Home activeted')
  },
  deactivated() {
    console.log('Home deactiveted')
  }
}

</script>


<style scoped lang="scss">

</style>