<template>
  <button type="button" @click="onClickAge">Update Age</button>
  <button
      type="button"
      @click="ageChangeFunc(2)">Update Age CB</button>
  <p>User age is {{ageUser}}</p>
  <p>{{ageDoubled}}</p>
</template>

<script>
export default {
  name: 'User',
  props: {
    ageUser:{
      type: Number,
      // required:true
      validator(val){
        return val <60
      }
    },
    ageChangeFunc:Function
  },
  emits:['age-change'],
  computed:{
    ageDoubled(){
      return this.ageUser*2
    }
  },
  methods:{
    onClickAge(){
      this.$emit('age-change', 3)
    }
  }
}
</script>



<style scoped lang="scss">

</style>