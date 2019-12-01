<template>
  <nav class="header-nav">
    <ul class="site-nav">
      <li v-for="(link, index) in siteNav" :key="index">
        <nuxt-link :to="link.route">{{ link.text }}</nuxt-link>
      </li>
    </ul>
    <ul class="admin-nav">
      <li v-for="(link, index) in adminNav" :key="index">
        <nuxt-link v-if="link.class != 'button'" :to="link.route">
          {{link.text}}
        </nuxt-link>
        <v-button v-else :url="link.route">{{ link.text }}</v-button>
      </li>
    </ul>
  </nav>
</template>
<script>
import VButton from "~/components/VButton.vue";
export default {
  data() {
    return {
      adminNav: [
        {
          route: "#",
          text: "Login"
        },
        {
          class: "button",
          route: "#",
          text: "Sign Up"
        }
      ],
      siteNav: [
        {
          route: "#",
          text: "Features"
        },
        {
          route: "#",
          text: "Pricing"
        },
        {
          route: "#",
          text: "Resources"
        }
      ]
    };
  },
  components: { VButton }
};
</script>
<style>
.header-nav {
  background-color: var(--dark-violet);
  border-radius: var(--border-radius);
  left: 0.55rem;
  padding: 2.2rem 1.3rem;
  position: absolute;
  text-align: center;
  top: 100%;
  width: calc(100% - 1.1rem);
  z-index: 10;
}

.header-nav a {
  color: #fff;
  /* font-weight: bold; */
}

.header-nav ul {
  list-style: none;
}

.header-nav li {
  line-height: 3;
}

.site-nav {
  margin-bottom: 1.1rem;
}

.admin-nav {
  border-top: #544a6d 1px solid;
  padding-top: 1.1rem;
}

@media (min-width: 1024px) {
  .admin-nav {
    border-top: none;
    padding-top: initial;
    margin-left: auto;
  }

  .header-nav {
    background-color: initial;
    flex-grow: 1;
    padding: initial;
    position: initial;
    width: initial;
  }

  .header-nav a {
    color: var(--grayish);
    font-size: 1rem;
  }

  .header-nav a:hover {
    color: var(--very-dark-violet);
  }

  .header-nav li {
    margin-left: 1.3rem;
    line-height: initial;
  }

  .header-nav,
  .header-nav ul {
    align-items: center;
    display: flex;
  }

  .site-nav {
    margin-bottom: initial;
  }
}
</style>
