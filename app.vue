<template>
  <div>
    Test: {{ config.testy }}
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
</script>