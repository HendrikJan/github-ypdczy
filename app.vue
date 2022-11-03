<template>
  <div>
    <DefaultContainer>
      Test: {{ config.testy }}<br />
      Blah: {{ config.blahy }}
    </DefaultContainer>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
</script>
