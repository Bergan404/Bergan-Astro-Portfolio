<script setup lang="ts">
  // Import necessary three.js classes
  import { Mesh, BoxGeometry, MeshBasicMaterial } from 'three';

  // Create a box geometry and a basic material
  const geometry = new BoxGeometry(1, 1, 1);
  const material = new MeshBasicMaterial({ color: 0x00ff00 });

  // Create a mesh with the geometry and material
  const meshWithMaterial = new Mesh(geometry, material);
</script>

<template>
  <TresCanvas>
    <primitive :object="meshWithMaterial" />
  </TresCanvas>
</template>

