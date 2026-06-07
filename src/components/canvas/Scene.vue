<script setup lang="ts">
import { onMounted } from 'vue';
import { TresCanvas } from '@tresjs/core';
import Starfield from './Starfield.vue';
import PlanetRig from './PlanetRig.vue';
import { startScrollTracking } from '../../composables/useScrollProgress';

onMounted(startScrollTracking);
</script>

<template>
  <div class="scene-fixed">
    <TresCanvas clear-color="#050510" :alpha="false" power-preference="high-performance">
      <TresPerspectiveCamera :position="[0, 0, 45]" :fov="45" :near="0.1" :far="1000" />

      <Starfield />

      <TresAmbientLight :intensity="0.35" />
      <TresDirectionalLight :position="[-6, 2, 4]" :intensity="1.4" color="#6ea8ff" />
      <TresDirectionalLight :position="[6, 6, 6]" :intensity="2.2" color="#ffffff" />
      <TresPointLight :position="[0, 0, 20]" :intensity="40" color="#8d6eff" />

      <PlanetRig />
    </TresCanvas>
  </div>
</template>

<style scoped>
.scene-fixed {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
}
canvas {
  width: 100% !important;
  height: 100% !important;
}
</style>
