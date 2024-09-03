<script setup lang="ts">
    import { useGLTF } from '@tresjs/cientos';

    const { nodes } = await useGLTF('/models/error_404.glb', { draco: true })

    const model = nodes['404']
</script>

<template>
    <primitive :object="model" />
</template>
