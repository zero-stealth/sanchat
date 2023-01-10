<script setup>
import SendIcon from "@/components/icons/SendIcon.vue";
import { useAuthStore } from "@/stores/auth";
// import { io } from "socket.io-client";
import { ref, computed } from "vue";

// const socket = io("http://localhost:3000/");
const authStore = useAuthStore();
const msg = ref("");

const timeStamp = computed(() => {
  return Math.floor(Date.now() / 1000);
});
</script>
<template>
  <div class="msg-c app-d">
    <div class="msg-w">
      <div class="msg-area">
        <div class="msg-con">
          <div class="msg">
            <h1>{{ msg }}</h1>
            <span>{{ timeStamp }}</span>
          </div>
          <span>{{ authStore.username }}</span>
        </div>
      </div>
      <div class="msg-i">
        <form>
          <input
            type="txt"
            placeholder="say something, don't be shy..."
            v-model="sendMessage"
          />
          <button type="submit">
            <SendIcon class="icon icon-send" />
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style></style>
