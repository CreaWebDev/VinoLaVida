<template>
  <section class="top-bar">
      <div class="topnav">
      <a href="javascript:void(0);" class="icon" @click="menuFunction()">
        <i id="burger" class="fa fa-bars"></i>
      </a>
      <div class="topnav__menu" id="burger-menu">
        <router-link :to="'/world'" class="link">En verden af vin</router-link>
        <a href="#Siden er under udarbejdelse">Faq</a>
        <a href="#Siden er under udarbejdelse">Idéen bag</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "topBar",

  methods: {
      menuFunction: function () {
        var brg = document.getElementById("burger-menu");
        if (brg.className === "topnav__menu") {
          brg.className += " responsive";
        } else {
          brg.className = "topnav__menu";
        }
      }
    }
};

</script>

<style lang="scss">
@import "../styles/main";

.top-bar {
  width: 100%;
  height: 40px;
  background-color: $primary-color;
    @include flexRow(center, flex-end);

  .topnav {
    @include flexRow(center, flex-end);
    margin-right: 20px;
           
    a, .link {
      float: left;
      text-align: center;
      color: $active-color;
      font-family: $primary-font;
      text-transform: capitalize;
      padding-right: 20px;
    }

    a:hover {
      color: white;
    }

    a.icon {
      display: none;
    }
   
    &__menu {
      overflow: hidden;

      .sub {
        display: none;
      }
    }

    &__menu.responsive {
      position: relative;
      margin-top: 150px;
    }
  
    &__menu.responsive a {
      float: none;
      display: flex;
      flex-direction: column;
      text-align: right;
      padding-bottom: 10px;
    }

    &__menu.responsive a:hover {
      color: $active-color;
    }

    @media only screen and (max-width: $sm) {

      &__menu a {
        display: none;
      }
    }

    @media only screen and (max-width: $sm) {
      & a.icon {
        display: block;
        position: absolute;
        right: 0px;
        top: 10px;
      }
    }
  }
}

</style>
