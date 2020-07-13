<template>
  <div class="product-info">
    <div class="wrapper">
      <img :src="product.img_url" :class="product.color">
      <article class="product-info__content">
        <h2 class="product-info__title">{{ product.title }}</h2>
        <p class="review">{{ product.info }}</p>
        <h3 class="keywords">{{ product.tags }}</h3>
      </article>
    </div>

    <nav class="prod-tabs">
      <span class="tab"
        :class="{ activeTab: selectedTab === tab.tabName}"
        v-for="(tab, index) in tabs"
        :key="index"
        @click="selectedTab = tab.tabName"
      ><p>{{ tab.tabName }}</p>
      </span>
        <div v-if="selectedTab === 'Kendetegn'" class="tab--no">
          <ul v-for="key in 1" :key="key">
            <li>
              <h4>{{ tabs[0].tabHeadline }}</h4>
              <p>{{ product.tabFeatures }}</p>
            </li>
          </ul>
        
        </div>
        <div v-if="selectedTab === 'Historie'" class="tab--no">
          <ul v-for="key in 1" :key="key">
            <li>
              <h4>{{ tabs[1].tabHeadline }}</h4>
              <p>{{ product.tabHistory }}</p>
            </li>
          </ul>
        </div>
        <div v-if="selectedTab === 'Smagstips'" class="tab--no">
          <ul v-for="key in 1" :key="key">
            <li>
              <h4>{{ tabs[2].tabHeadline }}</h4>
              <p>{{ product.tabTasting }}</p>
            </li>
          </ul>
        </div>
    </nav>
  </div>

</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      product: [],
      tabs: ['tabHeadline: null', 'tabText: null'],
      selectedTab: "Kendetegn",
    };
  },

  created() {
    this.getProductById();
    this.getData();
  },

  methods: {
    getProductById() {
      let productId = this.$route.params.id;
      axios
        .get("/products.json")
        .then(response => {
          this.product = response.data.find(r => r.id === productId);
        })
        .catch(error => console.log(error));
    },

    getData() {
        axios
          .get("/tabs.json")
          .then(response => (this.tabs = response.data))
          .catch(error => console.log(error));
      }
    },

};
</script>

<style lang="scss">
@import "../styles/main";

.product-info {

  .wrapper {
    display: block;
    margin: 40px;

    @media only screen and (min-width: $sm) {
      @include flexRow(space-between, flex-start);
      text-align: left;
      margin: 80px 0 30px 50px;
    }

    img {
      // border-radius: 25px;
      height: 250px;
      width: auto;
      background-color: $light-bg;
      border-bottom-left-radius: 150px;
      border-bottom-right-radius: 150px;

     &.Røde {
        border: 4px solid #eddbb9;
      }

      &.Hvide {
        border: 4px solid #e7f9a5;
      }
    }

    .keywords {
      padding-top: 20px;
      color: $active-color;
      font-weight: bold;
    }
  }

    &__content {

    @media only screen and (min-width: $sm) {
        padding-left: 50px;
      }
    }
    
    h2.product-info__title {
      text-align: left;
      font-size: 24px;
      line-height: 1.5;

      @media only screen and (min-width: $sm) {
        text-align: left;
        font-size: 48px;
        line-height: 1.5;
      }
    }

    p.review {
      text-align: left;
      font-size: 14px;
      line-height: 1.5;
      padding-top: 10px;
    }

    h3.keywords {
      text-align: left;

       @media only screen and (min-width: $sm) {

       }
    }

    .prod-tabs {
      margin-top: 20px;
      // max-width: 1024px;
      min-height: 200px;
      margin-left: 40px;

      .tab {
        color: $primary-color;
        border: 1px solid $active-color;
        background-color: $light-bg;
        width: 185px;
        height: 50px;
        border-radius: 20px;
        cursor: pointer;
        margin-top: 10px;
        padding: 15px;
        font-size: 14px;
        text-align: center;

        @media only screen and (min-width: $sm) {
          width: 180px;
          margin-left: 15px;
        }

        p {
          font-family: $primary-font;
          font-size: 16px;
          font-style: capitalize;
          letter-spacing: 2px;
        }
      }
      @media only screen and (min-width: $md) {
        max-width: 90%;
        @include flexRow(flex-start, flex-start);
        flex-wrap: wrap;
      }

      @media only screen and (min-width: $lg) {
        max-width: 60%;
        @include flexRow(flex-start, flex-start);
        flex-wrap: wrap;
      }
        ul li {
          margin: 10px;
          
          @media only screen and (min-width: $sm) {
            margin-left: 40px;
          }

          h4 {
            font-size: 20px;
            color: $active-color;
            padding: 0 15px 15px 0;
          } 
          p {
            padding-right: 30px;
          }
      }

      .activeTab {
        color: white;
        background-color: $primary-color;
      }
    
    }

}


</style>