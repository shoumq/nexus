<template>
  <section class="section">
    <div class="container">
      <RevealBlock class="metrics-panel">
        <div class="metrics-panel__intro">
          <span class="section-heading__eyebrow">Цифры</span>
          <h2>Структура, темп и прозрачность, которые ожидают от агентства высокого уровня</h2>
        </div>

        <div class="metrics-grid">
          <div v-for="item in metrics" :key="item.label" class="metric-card">
            <strong>{{ item.value }}</strong>
            <span>{{ item.label }}</span>
          </div>
        </div>
      </RevealBlock>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'
import RevealBlock from '../ui/RevealBlock.vue'

defineProps({
  metrics: {
    type: Array,
    required: true
  }
})
</script>
