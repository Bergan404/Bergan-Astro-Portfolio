<script setup lang="ts">
import { shallowRef } from 'vue';
import { useLoop } from '@tresjs/core';
import { Stars } from '@tresjs/cientos';

const rotation = shallowRef(0);
const { onBeforeRender } = useLoop();
onBeforeRender(({ delta }) => {
  rotation.value += delta * 0.02;
});
</script>

<template>
  <Stars
    :rotation="[0, rotation, 0]"
    :radius="80"
    :depth="60"
    :count="3500"
    :size="0.6"
    :size-attenuation="true"
  />
</template>
