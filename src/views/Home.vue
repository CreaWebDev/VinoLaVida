<template>
  <div class="view home">
    <site-header/>
      <section class="gallery__sorting">
        <ul class="categories">
          <li>
            <button v-for="(p, index) in filterList"
                    :item="p"
                    :key="index"
                    @click="filter = p;"
                    :class="{ active: p == filter }">
                    {{ p }}
            </button>
          </li>
        </ul>
      </section>
      <section class="show-hide">
        <button @click="toggleIsSeen" class="show-hide__btn"><p>{{ button.text }}</p></button>
      </section>
      <section class="gallery">
        <main class="gallery__columns" 
              v-for="(p, index) in products"
              v-if="p[fkey] === filter || filter === 'Alle'"
              :item="p"
              :key="index"
              >
            <figure class="gallery__column">
                <h3 v-if="isSeen"> {{ p.title }} </h3>
              <router-link :to="`/product/${p.id}`">
                <img :src="p.img_url" :class="p.color">
              </router-link>
            </figure>
        </main>
      </section>
      
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import siteHeader from "@/components/SiteHeader.vue";

export default {
  name: 'home',
  
  components: {
    siteHeader,
  },
  data() {
    return {
      products: [],
      fkey: "color",
      filterList: ["Alle", "Røde", "Hvide", "Grønne"],
      filter: "Alle",
      isVisible: false,

      button: {
        text: 'Vis druenavne'
      },

      isSeen: false
    };
  },
  created() {
    this.getData();
  },
  // computed: {
  //   filteredProducts: function() {
  //     return this.products.filter(function(p) {
  //       return (p === active);
  //     }); 
  //    }
  //       // v-if="p[fkey] === filter || filter === 'All'"

  // },
  methods: {
    getData() {
      axios
        .get("/products.json")
        .then(response => (this.products = response.data))
        .catch(error => console.log(error));
    },

    getImgClass(item, index) {
      return {
        new: item.new,
        [this.rowClasses[index]]: true
      };
    },

    toggleIsSeen: function() {
      this.isSeen = !this.isSeen;
      this.button.text = this.isSeen ? 'Skjul druenavne' : 'Vis druenavne';
    },
  }
}
</script>

<style lang="scss">
@import "../styles/main";
.home {

  .gallery__sorting {

    .categories {
      @include flexRow(center, flex-start);
      flex-wrap: wrap;
      background-color: $light-bg;
      margin-top: 20px;

      @media only screen and (min-width: $sm) {
        justify-content: space-around;
        text-align: center;
        margin-bottom: 50px;
      }

      li button {
        font-family: $script-font;
        font-size: 16px;
        padding: 0 10px;
        // color: $primary-color;
        background: transparent;
        margin-bottom: 10px;

        @media only screen and (min-width: $sm) {
          padding: 0 60px;
          font-size: 24px;
        }
      }
    }
  }

  .gallery {
    display: flex;
    // flex-direction: column;
    flex-wrap: wrap;
    justify-content: left;
    margin: 0 20px;

    @media only screen and (min-width: $sm) {
      margin: 0 50px;
      justify-content: center;
    }
  
  .gallery__columns {
    @include flexRow(center, center);
    flex-wrap: wrap;
    padding: 20px;

    @media only screen and (min-width: $sm) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      grid-auto-rows: 250px;
      grid-auto-flow: dense;
      padding-bottom: 50px;
    }

    .gallery__column  {
      padding: 8px;

      h3 {
        padding-bottom: 10px;
      }

      @media only screen and (min-width: $lg) {
        padding: 20px;

        h3 {
          padding-bottom: 10px;
          text-align: center;
        }
      }

      img {
        width: 80%;
        height: 80%;
        background-color: $light-bg;
        border-bottom-left-radius: 150px;
        border-bottom-right-radius: 150px;
        display: flex;
        justify-content: center;
        transition: 0.5s;

        &.Røde {
          border: 4px solid #eddbb9;
        }

        &.Hvide {
          border: 4px solid #e7f9a5;
        }
        

        @media only screen and (min-width: $lg) {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      img:hover {
          transform: scale(1.1, 1.1);
        }
      }
    }
  }

  .show-hide {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    // margin: 0 20px 20px 0;
    
    @media only screen and (min-width: $sm) {
      margin: 0 220px 30px;
      justify-content: center;
    }

    button {
      background-color: $active-color;
      width: 280px;
    }
  }
}

</style>


