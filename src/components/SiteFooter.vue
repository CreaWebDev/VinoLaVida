<template>
  <footer class="footer">
    <div class="wrapper">
        <article class="footer-nav" v-for="text in footernav" :key="text.id">
          <ul class="footer-nav__list">
            <h4 class="footer-nav__title">{{ text.headline }}</h4>
            <li class="footer-nav__item" v-for="link in text.links" :key="link">
              <a class="footer-nav__link" href="#footer">{{ link }}</a>
            </li>
          </ul>
        </article>
    </div>
    <div class="wrapper">
      <div class="bottom-boxes">
        <section class="banner-left">
          <div class="content">
            <img src="../assets/logo.png" class="mini-logo">
            <p class="banner-left__text">Design &amp; Coding by CreaWebDev.dk</p>
          </div>
        </section>

        <section class="banner-right">
          <div class="content">
            <a href="#">
              <i class="fab fa-facebook-f size:7x"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-pinterest-p"></i>
            </a>
          </div>
        </section>
      </div>
    </div>
  </footer>
</template>

<script>
import axios from "axios";

export default {
  name: "siteFooter",

  data() {
    return {
      footernav: null
    };
  },

  created() {
    this.getData();
  },
  
  methods: {
    getData() {
      axios
        .get("footernav.json")
        .then(response => (this.footernav = response.data));
    }
  }
};
</script>

<style lang="scss">
@import "../styles/main";

.footer {
    display: block;
    width: 100%;
    background-color: $light-bg;
    margin-top: 50px;

    .wrapper {
        @include flexRow(flex-start, space-evenly);
        padding: 50px 0 20px 0;

        // .footer-nav {
        //   @include flexRow(flex-start, space-between);
        // }

        ul {
          padding-inline-start: 0px;
        }

        li a {
          padding: 5px 0;
          text-transform: none;
          font-family: $primary-font;
          font-size: 16px;
        }
    }
      
    .bottom-boxes {
        text-align: center;
        display: grid;
        grid-gap: 50px;
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas: "left""right";
        width: 1024px;

        .banner-left {
            background-color: $primary-color;
            @include flexColumn(center, center);
            margin: 0;

            .content {
              @include flexRow(center, center);
                grid-area: left;
                color: white;

                img.mini-logo  {
                  padding: 10px;
                  width: 15%;
                  height: auto;
                }
            }
        }

        .banner-right {
            background-color: $active-color;
            margin: 0;

            .content {
                grid-area: right;
                display: flex;
                justify-content: center;
                padding: 50px;
            }
        }

        i {
            font-size: 36px;
            color: #fff;
            padding: 20px;
        }
    }
}

/* small screens */
@media (max-width: $sm) {
    .footer {
      display: block;

      .wrapper {
        display: flex;
        flex-direction: column;
        
        .footer-nav {
        padding: 20px;
          margin-left: 30px;
        }
        .bottom-boxes {
          width: 100%;
          display: flex;
          flex-direction: column;
      }
    }

    i {
      font-size: 22px;
      padding: 10px;
    }
  }
}

</style>
