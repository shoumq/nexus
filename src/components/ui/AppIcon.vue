<template>
  <span class="app-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path v-for="(path, index) in iconPaths" :key="index" :d="path" />
    </svg>
  </span>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const icons = {
  window: ['M3 5h18v14H3z', 'M3 9h18'],
  'user-panel': ['M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z', 'M5 20a7 7 0 0 1 14 0'],
  grid: ['M4 4h7v7H4z', 'M13 4h7v7h-7z', 'M4 13h7v7H4z', 'M13 13h7v7h-7z'],
  layers: ['M12 3 3 8l9 5 9-5-9-5Z', 'm3 12 9 5 9-5', 'm3 16 9 5 9-5'],
  spark: ['M12 3v5', 'M12 16v5', 'M4.9 4.9 8.4 8.4', 'M15.6 15.6l3.5 3.5', 'M3 12h5', 'M16 12h5'],
  pulse: ['M3 12h4l2-4 4 8 2-4h6'],
  target: ['M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', 'M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0', 'M12 3v3', 'M21 12h-3'],
  chart: ['M5 19V9', 'M12 19V5', 'M19 19v-7'],
  flash: ['M13 2 5 14h6l-1 8 8-12h-6l1-8Z'],
  structure: ['M12 3v18', 'M5 8h14', 'M5 16h14', 'M7 5h4v6H7z', 'M13 13h4v6h-4z'],
  design: ['M4 20h4l10-10-4-4L4 16v4Z', 'M13 5l4 4']
}

const iconPaths = computed(() => icons[props.name] || icons.window)
</script>
