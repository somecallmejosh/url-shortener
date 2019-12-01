<template>
  <div>
    <div class="teaser" v-for="(item, index) in cardData" :key="index">
      <div class="teaser-image">
        <client-only>
          <VImg :src="require(`../assets/shortly/images/${item.image}`)" alt="" />
        </client-only>
      </div>
      <h3>{{item.header}}</h3>
      <p>{{item.text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardData: {
      type: Array
    }
  }
};
</script>

<style>
.teaser {
  background-color: #fff;
  border-radius: var(--border-radius);
  margin-bottom: 91px;
  padding: 84px 36px 48px;
  position: relative;
  text-align: center;
  z-index: 1;
}
.teaser-image {
  align-items: center;
  background-color: var(--dark-violet);
  border-radius: 100%;
  display: inline-flex;
  height: 88px;
  justify-content: center;
  left: 50%;
  position: absolute;
  top: 0;
  transform: translateX(-50%) translateY(-50%);
  width: 88px;
}

.teaser-image > * {
  display: inline-block;
  text-align: center;
}

.teaser h3 {
  margin-bottom: 20px;
}

@media (min-width: 1024px) {
  .teaser {
    text-align: left;
  }

  .teaser-image {
    left: 36px;
    transform: translateX(0) translateY(-50%);
  }
}
</style>