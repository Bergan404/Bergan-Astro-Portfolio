<script setup lang="ts">
import { TresCanvas } from '@tresjs/core';
import { extend } from '@tresjs/core';
import { OrbitControls, Levioso } from '@tresjs/cientos';
import Planet from './Planet.vue';

extend({ OrbitControls })

const controlsOptions = {
  enableZoom: false,
  enablePan: false,
}

</script>

<template>
    <div class="tres-container d-lg-block d-none">
        <TresCanvas>
            <TresPerspectiveCamera :position="[0, 0, 45]" :fov="45" :aspect="1" :near="0.1" :far="1000" />
            <Levioso>
                <Suspense>
                    <Planet :scale="[12, 12, 12]" :position="0" :rotate-x="0" />
                </Suspense>
            </Levioso>
            <OrbitControls v-bind="controlsOptions" />
            <TresDirectionalLight :position="[-4, -2, 2]" :intensity="1" cast-shadow color="#00f0ff" />
            <TresDirectionalLight :position="[4, 6, 4]" :intensity="2" cast-shadow color="white" />
        </TresCanvas>
    </div>
</template>

<style>
.tres-container {
    width: 100%;
    height: 100vh;
}

canvas {
    width: 100%;
    height: 100%;
}
</style>
