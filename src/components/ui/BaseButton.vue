<template>
  <a :href="href" class="base-button" :class="variantClass">
    <span>{{ label }}</span>
  </a>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  href: {
    type: String,
    default: '#'
  },
  label: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    default: 'primary'
  }
})

const variantClass = computed(() => `base-button--${props.variant}`)
</script>
