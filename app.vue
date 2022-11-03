<template>
  <div>
    <DefaultContainer></DefaultContainer>
    Test: {{ config.testy }}<br />
    Blah: {{ config.blahy }}
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
</script>
