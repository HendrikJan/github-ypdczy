<template>
  <div>
    <DefaultContainer>
      Test: {{ config.testy }}<br />
      Blah: {{ config.blahy }}<br />
      <h1>{{ $t('hello', { name: 'There' }) }}</h1>
    </DefaultContainer>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
</script>
