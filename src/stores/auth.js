import { ref } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const isAuth = ref(false);
  const username = ref(null);

  // if (username.value != null) {
  //   isAuth.value = false;
  // }

  const setUsername = (name) => {
    username.value = name;
    isAuth.value = true;
  };

  return { isAuth, username, setUsername };
});
