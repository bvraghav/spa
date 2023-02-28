<template>
<footer class="mx-auto mb-12 !px-10 !pt-1 border-t border-gray-400 font-light">
  <span class="text-[0.95rem]"
        >Copyright &copy; CAMERA, University of Bath 2023.</span>
</footer>
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
footer {
  @apply flex flex-row flex-nowrap justify-center gap-2
}
</style>

