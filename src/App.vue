<script setup>
import SplashScreen from "./components/splashComponent.vue";
import LoginScreen from "./views/LoginView.vue";
import MessageScreen from "./views/MessageView.vue";
import { useRouteStore } from "./stores/route";
import { useAuthStore } from "./stores/auth";

const authStore = useAuthStore();
const routeStore = useRouteStore();

//ensures that the splash is not show on reload after authentication
switch (authStore.isAuth) {
  case false:
    // show splash screen
    setTimeout(() => {
      routeStore.removeSplash();
    }, 2000);
    break;
  default:
    routeStore.removeSplash();
    routeStore.setMessagePage();
    break;
}

// show splash screen
setTimeout(() => {
  routeStore.removeSplash();
}, 3000);
</script>
<template>
  <div>
    <div v-if="routeStore.splash == true">
      <SplashScreen class="app-d" />
    </div>
    <div v-else-if="routeStore.messageState == true">
      <MessageScreen class="app-d" />
    </div>
    <div v-else>
      <LoginScreen class="app-d" />
    </div>
  </div>
</template>
