<template>
  <component :is="tag" ref="root" class="reveal-block">
    <slot />
  </component>
</template>

<script setup>
import { defineProps } from 'vue'
import { useReveal } from '../../composables/useReveal'

defineProps({
  tag: {
    type: String,
    default: 'div'
  }
})

const { root } = useReveal()
</script>
