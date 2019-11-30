<template>
  <section>
    <div class="container-max">
      <h2>Boost your links today</h2>
      <v-button url="/" :layout="'inline'">Get Started</v-button>
    </div>
  </section>
</template>

<script>
import VButton from "~/components/VButton.vue";
export default {
  components: { VButton }
};
</script>

<style scoped>
h2 {
  margin-bottom: 1rem;
}
section {
  text-align: center;
  background: var(--very-dark-blue) url(/images/bg-boost-mobile.svg) top right
    no-repeat;
  padding: 5.4rem 0 4.5rem;
  color: #fff;
  width: 100%;
}

@media (min-width: 1024px) {
  section {
    background: var(--very-dark-blue) url(/images/bg-boost-desktop.svg) top
      right no-repeat;
    padding: 3.8rem 0 3.3rem;
  }
}
</style>