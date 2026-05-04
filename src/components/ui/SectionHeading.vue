<template>
  <div class="section-heading">
    <span v-if="eyebrow" class="section-heading__eyebrow">{{ eyebrow }}</span>
    <h2 class="section-heading__title">{{ title }}</h2>
    <p v-if="description" class="section-heading__description">{{ description }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  eyebrow: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  }
})
</script>
