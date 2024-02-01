<template>
  <AppForm>
    <template v-slot:help>
      <p>{{help}}</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="email"/>
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
    <p>Dummy text</p>
  </AppForm>
  <AppForm>
    <template v-slot:help>
      <p>Contact help text</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="email"/>
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
  </AppForm>
</template>
<script>
import AppForm from "@/components/Form.vue";
export default {
  name:'App',
  components: {AppForm},
  data(){
    return{
      help:'this is help text'
    }
  }
}
</script>
