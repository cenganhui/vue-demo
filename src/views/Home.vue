<template>
  <div class="home">
    <div class="wrapper">
      <slide-bar icon-id="icon-yonghu2" icon-color="text-warning" icon-size="45">Welcome to here</slide-bar>

      <div class="w-100">
        <content-head>
          <template #title>{{title}}</template>
          <template #desc>{{desc}}</template>
          <template #calc>你已被赞300次</template>
        </content-head>

        <!-- <transition enter-active-class="animate__animated animate__zoomIn">
          <router-view></router-view>
        </transition>-->

        <router-view v-slot="{ Component }">
          <transition enter-active-class="animate__animated animate__zoomIn">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>

      <user-profile :src="require('../assets/img/test.jpg')" />
    </div>
  </div>
</template>

<script>
import { pathToSign } from "../lib/router-lib.js";
import userProfile from "@/components/user-profile/user-profile.vue";
import slideBar from "@/components/slide-bar/slide-bar.vue";
import contentHead from "@/components/content-head/content-head.vue";
export default {
  name: "Home",
  components: {
    userProfile,
    slideBar,
    contentHead,
  },
  setup() {
    const { title, desc } = pathToSign();

    return {
      title,
      desc,
    };
  },
  // Vue2
  // watch: {
  //   $route(newVal) {

  //   }
  // }
};
</script>

<style>
.home {
  height: 100vh;
  background: url("../assets/img/test.jpg") no-repeat center;
  background-size: cover;
}

.wrapper {
  width: 95vw;
  height: 90vh;
  background-color: rgb(44, 48, 80);
  position: absolute;
  left: calc(50% - 95vw / 2);
  top: calc(50% - 90vh / 2);
  display: flex;
  justify-content: space-between;
}
</style>
