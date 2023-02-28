<template>
<aside>
  <section>
    This is a sidebar section.
  </section>
  <section>
    This is a another sidebar section.
  </section>
</aside>
</template>

<script setup>
  import { ref, onMounted } from 'vue'

  const props = defineProps({
  
  });

  const some_num = ref(0);

  onMounted(() => {
  // TODO: do something
  })
</script>

<style scoped>

</style>
