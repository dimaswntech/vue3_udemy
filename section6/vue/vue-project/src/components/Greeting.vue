<template>
  <p v-if="ageGreat > 25">{{ msg }}</p>
  <p v-else>You must be older</p>
</template>
<script>
export default {
  name: 'Greeting',
  props:['ageGreat'],
  data(){
    return{
      msg: 'Hewwo'
    }
  }
}
</script>
<style scoped lang="scss">
p:hover{
  color: darken(#cc4444, 15%);
}
</style>