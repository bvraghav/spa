<template>
<header class="mt-4">
  <a @click="$emit('barsClicked')"
     :class="`text-[1.4rem] border border-gray-300 pt-2
            pb-1 px-4 ${showAside ?
            'bg-gray-400 hover:bg-gray-300 text-gray-100'
            : 'bg-gray-100 hover:bg-gray-200 text-gray-500'}`"
     ><fa icon="fa-solid fa-bars"/></a>
  <h1 class="border-b border-gray-400"
      >Header</h1>
</header>
</template>

<script setup>
import { ref, watchEffect, onMounted } from 'vue'

const props = defineProps({
  showAside: Boolean,
});

const some_num = ref(0);

watchEffect(() => { console.log(
  `showAside: ${props.showAside}` 
) })

onMounted(() => {
  // TODO: do something
})
</script>

<style scoped>
header {
  @apply flex flex-row flex-nowrap gap-4
}

header>* {
  @apply flex-none block
}

header>h1 {
  @apply flex-auto
}

</style>
