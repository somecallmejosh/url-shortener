<template>
  <div @click="copyToggle()">
    <v-button v-if="!copiedText" layout="inline" v-copy="text">Copy</v-button>
    <v-button v-else layout="alt" v-copy="text">Copied</v-button>
  </div>
</template>

<script>
import VButton from "~/components/VButton.vue";
export default {
  components: { VButton },
  data() {
    return {
      copiedText: false
    };
  },
  methods: {
    copyToggle() {
      console.log("I was toggled!");
      this.copiedText = true;
    }
  },
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
</style>