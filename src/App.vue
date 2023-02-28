<script setup>
import { RouterView } from 'vue-router'

import { useMeta } from 'vue-meta'

useMeta({
  titleTemplate: '%s | CAMERA UoBath',
})

</script>

<template>
<RouterView />
<metainfo>
  <template v-slot:title="{ content }">
    {{ content }} | CAMERA @ UoBath
  </template>
</metainfo>
</template>

<style scoped>
</style>
