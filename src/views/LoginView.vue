<script setup>
import { useAuthStore } from "@/stores/auth";
import { useRouteStore } from "@/stores/route";
import { ref } from "vue";

const authStore = useAuthStore();
const routeStore = useRouteStore();
const name = ref("");
const error = ref("");

const getUser = () => {
  if (name.value != "") {
    // window.location.href = "../views/MessageView.vue";
    authStore.setUsername(name.value);
    routeStore.setMessagePage();
  } else {
    error.value = "Write a username dummy";
  }
};
</script>
<template>
  <div class="login-c">
    <form @click.prevent class="login-w">
      <input
        type="text"
        v-model="name"
        placeholder="Type your username"
        class="login-u"
      />
      <button type="submit" @click="getUser" class="login-btn">
        Talk To Santa
      </button>
    </form>
    <span>{{ error }}</span>
  </div>
</template>
<style>
@import "@/style/login.css";
</style>
