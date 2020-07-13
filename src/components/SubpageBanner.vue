<template>
   <article class="subpageBanner">
    <section class="container">
      <h2 class="subpageBanner__title">" Wine is constant proof that God loves us and wants to see us happy "</h2>
      <p class="subpageBanner__text">- Benjamin Franklin</p>
    </section>
  </article>
</template>

<script>
import axios from "axios";

export default {
  name: "subpageBanner",
  
  props: {
      
      bannerTitle: {
          type: String
      },
      bannerSubtitle: {
          type: String
      }
  }
};
</script>

<style lang="scss">
@import "../styles/main";

.subpageBanner {
  display: flex;
  justify-content: center;
  margin: 50px 20px;
  
  @media only screen and (min-width: $md) {
    margin: 50px 0;
  }

    .container {
      background-color: $primary-color;
      border-radius: 20px;
      padding: 10px 30px;
      color: $active-color;
      font-style: italic;

        @media only screen and (min-width: $md) {
          width: 100%;
          margin: 0 80px;
          padding: 20px 50px;
        }

       p {
         font-style: normal;
         text-align: right;
       }
    }
}
</style>
