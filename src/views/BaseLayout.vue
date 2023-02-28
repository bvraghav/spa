<template>
<div id="base-layout">
  <RouterView name="header"
              class="header"
              :showAside="showAside"
              @barsClicked="toggleAside" />
  <div id="page-container">
    <RouterView v-if="showAside" name="sidebar" class="sidebar" />
    <RouterView class="main" />
  </div>
  <RouterView name="footer" class="footer" />
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  
});

const showAside = ref(false);

function toggleAside() {
  showAside.value = !showAside.value
}

onMounted(() => {
  // TODO: do something
})
</script>

<style scoped>
#base-layout {
  @apply flex flex-col min-h-[100vh] min-w-[100vw]
}

#base-layout .header {
  @apply flex-none p-2 md:p-3
}

#base-layout .footer {
  @apply flex-none p-2 md:p-3
}

#page-container {
  @apply  flex-auto flex flex-row flex-nowrap p-2 md:p-3
}

#base-layout .sidebar {
  @apply flex-none w-[15rem]
}

#base-layout .main {
  @apply flex-auto
}





</style>
