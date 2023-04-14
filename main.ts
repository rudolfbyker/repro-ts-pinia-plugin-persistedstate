import {createPinia, PiniaVuePlugin } from "pinia";
import Vue from "vue";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";

Vue.use(PiniaVuePlugin);
const pinia = createPinia();
pinia.use(piniaPluginPersistedState);
