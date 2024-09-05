<script setup lang="ts">
import { extend, useTresContext } from '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos';

extend({ OrbitControls })

const { camera, renderer } = useTresContext()

// Disable zooming and panning in the OrbitControls
const controlsOptions = {
  enableZoom: false,   // Disable zooming
  enablePan: false,    // Disable panning (optional)
}
</script>

<template>
  <TresOrbitControls
    v-if="renderer"
    :args="[camera, renderer?.domElement]"
    v-bind="controlsOptions"
  />
</template>
