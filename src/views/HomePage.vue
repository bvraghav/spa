<template>
<main>
  <h2>Page Heading</h2>
  <p>This is the home page content</p>
</main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useMeta } from 'vue-meta'

const props = defineProps({
  
});

const some_num = ref(0);

onMounted(() => {
  // TODO: do something
})

useMeta ({ // <------------- Update Page Metadata Here!
  title: 'Home Page',
})
</script>

<style scoped>

</style>
