<template>
  <HomePage/>
</template>
<script>
import HomePage from "@/views/HomePage.vue";

export default {
  components: {HomePage}
}
const debounce = (fn, delay) => {
  let timer = null;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  }
}

const _ResizeObserver = window.ResizeObserver;
window.ResizeObserver = class ResizeObserver extends _ResizeObserver {
  constructor(callback) {
    callback = debounce(callback, 16);
    super(callback);
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  overflow: hidden;
}
</style>
