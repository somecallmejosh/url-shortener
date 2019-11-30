<template>
  <div class="container-max shortly-urls">
    <div v-for="(url, index) in shortlyData" :key="index" class="shortly-url">
      <div class="original-url">{{url.url}}</div>
      <div class="response">
        <a
          :href="'https://rel.ink/' + url.hash"
          class="new-url"
          targe="_blank"
          rel="nofollow"
        >https://rel.ink/{{url.hash}}</a>
        <div class="copy">
          <no-ssr>
            <v-button layout="inline" v-copy="'https://rel.ink/' + url.hash">Copy</v-button>
          </no-ssr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from "~/components/VButton.vue";
export default {
  components: { VButton },
  props: {
    shortlyData: {
      type: Array,
      required: false
    }
  }
};
</script>

<style>
.shortly-urls {
  margin-bottom: 3rem;
}
.shortly-url {
  align-items: center;
  background-color: #fff;
  border-radius: var(--border-radius);
  margin: 0 auto 0.5rem;
  max-width: var(--container-max-width-desktop);
}

.shortly-url > div {
  padding: 0.66rem;
}

.shortly-url > div:first-child {
  border-bottom: #e6e6e6 1px solid;
}

.response a {
  color: var(--cyan);
  display: block;
  padding-bottom: 0.66rem;
}

.response button {
  width: 100%;
}

@media (min-width: 1024px) {
  .response {
    align-items: center;
    display: flex;
    margin-left: auto;
  }

  .response > div {
    color: var(--cyan);
    margin-left: 1rem;
  }

  .shortly-urls {
    padding: 0 0.5rem;
  }

  .shortly-url > div {
    padding: var(--container-wrapper-padding);
  }

  .shortly-url > div:first-child {
    border-bottom: none;
  }

  .response a {
    padding-bottom: initial;
  }

  .response button {
    width: 5.7rem;
  }

  .section-header {
    max-width: 28.8rem;
  }

  .shortly-url {
    display: flex;
  }
}
</style>