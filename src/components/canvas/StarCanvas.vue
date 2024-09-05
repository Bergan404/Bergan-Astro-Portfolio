<script setup lang="ts">
import { shallowRef } from 'vue';
import { TresCanvas, useRenderLoop } from '@tresjs/core';
import { Stars } from '@tresjs/cientos';

const yRotation = shallowRef(0)
useRenderLoop().onLoop(({ delta }) => {
  yRotation.value += 0.06 * delta
})
</script>

<template>
    <div class="tres-container-absolute d-lg-block d-none">
        <TresCanvas>
            <TresPerspectiveCamera :position="[0, 2, 5]" />
            <Stars
            :rotation="[0, yRotation, 0]"
            :radius="50"
            :depth="50"
            :count="5000"
            :size="0.5"
            :size-attenuation="true"
            />
        </TresCanvas>
    </div>
</template>

<style>
.tres-container-absolute {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    z-index: -1;
}

canvas {
    width: 100%;
    height: 100%;
}
</style>
