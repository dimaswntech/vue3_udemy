<template>
  <Header></Header>
  <router-view v-slot="{Component}">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
  <Player></Player>
  <Auth></Auth>
</template>
<script>
import Header from "@/components/Header.vue";
import Auth from "@/components/Auth.vue";
import {mapWritableState} from "pinia";
import useUserStore from "@/stores/user.js"
import {auth} from "@/includes/firebase.js";
import Player from "@/components/Player.vue";

export default {
  name: 'App',
  components: {Player, Auth, Header},
  computed: {
    ...mapWritableState(useUserStore, ["userLoggedIn"])
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true
    }
  }
}
</script>

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s linear;
}

.fade-leave-to {
  transition: all 0s linear;
  opacity: 0;
}
</style>