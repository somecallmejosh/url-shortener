<template>
  <div class="button-wrapper">
    <a v-if="url" class="button link inline" :href="url" :class="layout">
      <slot></slot>
    </a>
    <button v-else class="button submit" :class="layout">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    layout: {
      required: false,
      type: String
    },
    url: {
      required: false,
      type: String
    }
  }
};
</script>

<style scoped>
.button {
  align-items: center;
  background: var(--cyan);
  border: 0;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  font-weight: bold;
  height: 2.7rem;
  justify-content: center;
  text-align: center;
  transition: all 0.2s;
}

.button.link {
  border-radius: 1.7rem;
}

.button.submit {
  --webkit-appearance: none;
  appearance: none;
  border-radius: var(--border-radius);
}

.button.inline {
  display: inline-flex;
  padding: 0 1.3rem;
}

.button:hover {
  background: var(--button-hover);
  border-color: var(--button-hover);
  color: #fff;
}

.button.alt {
  background-color: var(--dark-violet);
}

@media (min-width: 1024) {
  .button {
    display: inline-flex;
    font-size: 0.7rem;
    height: 2.2rem;
    padding: 0 1.3rem;
  }
}
</style>
