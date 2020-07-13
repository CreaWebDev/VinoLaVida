<template>
  <div class="view maps">
      <h2 class="maps__headline">En verden af vin</h2>
      <section class="maps__countries">
        <figure class="maps__countries--france">
            <h3>Frankrigs Vindistrikter</h3><br>
            <img src="../assets/img/france.png">
        </figure>
        <figure class="maps__countries--cali">
            <h3>Californiens Vindistrikter</h3><br>
            <img src="../assets/img/california.png">
        </figure>
        <figure class="maps__countries--spain">
            <h3>Spaniens Vindistrikter</h3><br>
            <img src="../assets/img/spain.png">
        </figure>
        <figure class="maps__countries--germany">
            <h3>Tysklands Vindistrikter</h3><br>
            <img src="../assets/img/germany.png">
        </figure>
      </section>
  </div>
</template>

<script>
export default {
    name: "maps"
}
</script>

<style lang="scss">
@import "../styles/main";

.maps {
    display: flex;
    // flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    margin: 50px 20px;

    @media only screen and (min-width: $sm) {
        margin: 50px 80px;
        justify-content: center;
    }

    &__headline {
        margin-bottom: 50px;
    }

    &__countries {
        display: block;
        text-align: center;

        @media only screen and (min-width: $sm) {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }
                            
        img {
            width: 90%;
            height: auto;
            margin-bottom: 50px;

            @media only screen and (min-width: $sm) {
                width: 300px;
                padding: 20px;
            }
        }

    }

}
</style>