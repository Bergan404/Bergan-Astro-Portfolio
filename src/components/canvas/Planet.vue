<script setup lang="ts">
    import { useGLTF } from '@tresjs/cientos';

    const { nodes } = await useGLTF('/models/stylized_planet.glb', { draco: true });

    const model = nodes['Sketchfab_model'];
</script>

<template>
    <primitive :object="model" />
</template>
