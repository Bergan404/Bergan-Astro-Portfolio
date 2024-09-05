<script setup lang="ts">
import { type ShallowRef, shallowRef } from 'vue';
import { Stars, OrbitControls, Levioso, MouseParallax } from '@tresjs/cientos';
import { TresCanvas } from '@tresjs/core';
import { useRenderLoop } from '@tresjs/core';

const boxRef = shallowRef(null)
const groupRef = shallowRef(null)

const { onLoop } = useRenderLoop()

onLoop(({ delta, elapsed }) => {
    // I will run at every frame ~ 60FPS (depending of your monitor)
    if (boxRef.value) {
        boxRef.value.rotation.y += delta
        boxRef.value.rotation.z = elapsed * 0.2
    }

    if (groupRef.value) {
        groupRef.value.rotation.y += 0.001
    }

})
</script>

<template>
    <div class="tres-container-absolute d-lg-block d-none">
        <TresCanvas>
            <TresPerspectiveCamera :position="[0, 0, 45]" :fov="45" :aspect="1" :near="0.1" :far="1000" />
            <TresGroup ref="groupRef">
                <Stars ref="starRef" />
            </TresGroup>
            <TresAmbientLight :intensity="1" />
            <TresDirectionalLight :position="[-4, -2, 2]" :intensity="1" cast-shadow color="#00f0ff" />
            <TresDirectionalLight :position="[4, 6, 4]" :intensity="2" cast-shadow color="white" />
        </TresCanvas>
    </div>
</template>

<style>
.tres-container-absolute {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
}

canvas {
    width: 100%;
    height: 100%;
}
</style>
