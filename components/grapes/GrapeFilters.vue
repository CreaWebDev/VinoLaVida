<template>
  <div class="">
      <ul class="categories">
        <li class="flex flex-row flex-wrap justify-around m-4">
          <button
            class="text-xs text-white hover:text-golden capitalize py-2 px-8 bg-golden hover:bg-softPink rounded-lg"
            @click="props.filter = 'All'"
          >
            <p>Show all</p>
          </button>
          <button v-for="(p, index) in filterList"
            class="text-xs text-white hover:text-golden capitalize py-2 px-8 bg-golden hover:bg-softPink rounded-lg"
            :key="index"
            @click="filter = p"
            :class="{ active: p == filter }">
            {{ p }}
          </button>
          <button @click="toggleIsSeen" class="text-xs text-golden hover:text-white py-2 px-8 bg-softPink hover:bg-golden rounded-lg"><p>{{ props.button.text }}</p></button>
        </li>
      </ul>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
  isSeen: Boolean,
  sortBy: String,
  button: Object,
  filter: String
})

const fkey = ref("color")
const filterList = ref(["red", "white"])
const filter = ref("All")
const isVisible =  ref(false)

const isSeen = ref(false)

const toggleIsSeen = () => {
  isSeen.value = !isSeen.value
  button.text = isSeen.value ? 'Hide grape names' : 'Show grape names';
}

const sortBy = (a: any, b: any) => {
  if (a.name < b.name) {
    return -1
  }
  if (a.name > b.name) {
    return 1
  }
  return 0
}

</script>