import { ref } from "vue";
import { defineStore } from "pinia";

export const useRouteStore = defineStore("route", () => {
  const splash = ref(true);
  const messageState = ref(false);

  const removeSplash = () => {
    splash.value = false;
  };

  const setMessagePage = () => {
    messageState.value = true;
  };

  return { splash, removeSplash, setMessagePage, messageState };
});
