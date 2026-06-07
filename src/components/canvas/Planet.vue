<script setup lang="ts">
import { useGLTF } from '@tresjs/cientos';

// v5: useGLTF returns reactive `state` (auto-loads); render once it resolves.
const { state } = useGLTF('/models/stylized_planet.glb', { draco: true });
</script>

<template>
  <primitive v-if="state" :object="(state as any).scene" />
</template>
