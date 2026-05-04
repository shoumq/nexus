<template>
  <header class="site-header">
    <div class="container site-header__inner">
      <a href="#top" class="brand-mark" aria-label="Nexus Agency home">
        <span class="brand-mark__icon brand-mark__icon--image">
          <img src="/favicon.ico" alt="" />
        </span>
        <span class="brand-mark__text">
          <strong>Nexus</strong>
          <small>Vue Product Agency</small>
        </span>
      </a>

      <nav class="site-nav" aria-label="Основная навигация">
        <a v-for="item in navigation" :key="item.href" :href="item.href">{{ item.label }}</a>
      </nav>

      <BaseButton href="#contact-form" label="Обсудить проект" />
    </div>
  </header>
</template>

<script setup>
import { defineProps } from 'vue'
import BaseButton from '../ui/BaseButton.vue'

defineProps({
  navigation: {
    type: Array,
    required: true
  }
})
</script>
