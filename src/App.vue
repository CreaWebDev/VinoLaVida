<template>
  <div id="app">
    <router-view/>
    <site-footer />
  </div>
</template>

<script>
import siteFooter from "./components/SiteFooter";

export default {
  components: {
    siteFooter
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap');
@import "./styles/main";

</style>
