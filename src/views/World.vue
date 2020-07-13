<template>
    <div class="view world">
    <site-header/>
    <maps/>
    </div>
</template>

<script>
import siteHeader from "@/components/SiteHeader.vue";
import maps from "@/components/Maps.vue";

export default {
    name: "world",

    components: {
        siteHeader,
        maps
    }
}
</script>