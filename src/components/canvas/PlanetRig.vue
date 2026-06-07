<script setup lang="ts">
import { shallowRef } from 'vue';
import { useLoop } from '@tresjs/core';
import Planet from './Planet.vue';
import { scrollProgress } from '../../composables/useScrollProgress';

// Waypoints the planet travels through as the page scrolls (one per section).
// x/y position the planet within the viewport, scale sizes it.
const waypoints = [
  { x: 13, y: -1, scale: 13 }, // hero      — large, right
  { x: 17, y: 3, scale: 9 }, // about     — left, smaller
  { x: 15, y: -3, scale: 8 }, // works     — far right
  { x: 0, y: 2, scale: 11 }, // tech      — drifts up, centred
  // { x: -13, y: -10, scale: 8 }, // contact   — settles left
  { x: 0, y: -20, scale: 25 }, // contact   — settles left
];

const groupRef = shallowRef<any>(null);

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const smooth = (t: number) => t * t * (3 - 2 * t); // smoothstep easing

function sample(progress: number) {
  const segments = waypoints.length - 1;
  const scaled = Math.min(0.9999, Math.max(0, progress)) * segments;
  const i = Math.floor(scaled);
  const t = smooth(scaled - i);
  const a = waypoints[i];
  const b = waypoints[i + 1];
  return {
    x: lerp(a.x, b.x, t),
    y: lerp(a.y, b.y, t),
    scale: lerp(a.scale, b.scale, t),
  };
}

const { onBeforeRender } = useLoop();

onBeforeRender(({ delta, elapsed }) => {
  const g = groupRef.value;
  if (!g) return;

  const target = sample(scrollProgress.value);

  // Damp toward the target so fast scrolling glides instead of snapping.
  const k = Math.min(1, delta * 3);
  g.position.x = lerp(g.position.x, target.x, k);
  g.position.y = lerp(g.position.y, target.y, k);
  const s = lerp(g.scale.x, target.scale, k);
  g.scale.set(s, s, s);

  // Continuous spin plus a scroll-coupled turn so it rotates as you read.
  g.rotation.y = elapsed * 0.08 + scrollProgress.value * Math.PI * 2;
  g.rotation.z = Math.sin(elapsed * 0.3) * 0.05;
});
</script>

<template>
  <TresGroup ref="groupRef" :position="[13, -1, 0]" :scale="[13, 13, 13]">
    <Planet />
  </TresGroup>
</template>
