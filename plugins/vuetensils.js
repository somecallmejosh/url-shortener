import Vue from "vue";
import { copy } from "vuetensils";
import { clickout } from "vuetensils";
import { VResize } from "vuetensils";
import { VImg } from "vuetensils";

Vue.directive("copy", copy);
Vue.directive("clickout", clickout);
Vue.component("VResize", VResize);
Vue.component("VImg", VImg);
