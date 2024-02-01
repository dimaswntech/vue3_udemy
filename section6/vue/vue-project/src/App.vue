<template>
  <h3>Yeayy</h3>
  <Greeting :ageGreat = "age"></Greeting>
  <User
      :ageUser="age"
      @age-change="updateAge"
      :ageChangeFunc="updateAgeCB"
  ></User>
</template>
<script>
import Greeting from "@/components/Greeting.vue";
import User from "@/components/User.vue";
export default {
  name: 'App',
  components: {Greeting, User},
  data(){
    return{
      age:18
    }
  },
  methods:{
    updateAge(num){
      this.age +=num
    },
    updateAgeCB(num){
      this.age +=num
    }
  }
}
</script>