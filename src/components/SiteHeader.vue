<template>
  <header class="site-header">
    <top-bar/>
    <figure class="logo">
        <router-link to="/">
          <img src="../assets/logo.png" />
        </router-link>
    </figure>
    <div class="site-header__text">
      <h1>Vino la vida</h1>
      <p>- Klog på druerne, klog på livet</p>
    </div>
      <div class="site-header__subpagebanner">
        <subpage-banner/>    
      </div>
  </header>
</template>

<script>
import axios from "axios";
import topBar from "@/components/TopBar.vue";
import subpageBanner from "@/components/SubpageBanner.vue";

export default {
  name: "siteHeader",

  components: {
    topBar,
    subpageBanner
  }

};
</script>

<style lang="scss">
@import "../styles/main";

.site-header {
  background-image: url("/img/topbanner-img.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 600px;

  .logo {
    img {
      max-width: 100px;
      height: auto;
      position: absolute;
      top: 10px;
      left: 15%;
    }
  }
    &__text {
      position: absolute;
      top: 230px;
      left: 5%;

      h1 {
        font-size: 36px;
      }

      @media only screen and (min-width: $sm) {
        top: 200px;

        h1 {
        font-size: 72px;
       }
      }

      p {
        margin-left: 30px;
        font-style: italic;
      }
    }    

    &__subpagebanner {
      position: absolute;
      top: 50%;
    }
}
</style>
