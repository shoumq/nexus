<template>
  <section id="process" class="section section--dense">
    <div class="container">
      <RevealBlock>
        <SectionHeading
          eyebrow="Процесс"
          title="Строим работу так, чтобы у бизнеса был контроль, а у продукта постоянное движение вперед"
          description="Каждый этап объясняет, что происходит с проектом сейчас, зачем это нужно и что станет следующей точкой результата."
        />
      </RevealBlock>

      <div class="timeline-grid">
        <RevealBlock v-for="(step, index) in steps" :key="step.title" class="timeline-card">
          <span class="timeline-card__index">0{{ index + 1 }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </RevealBlock>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'
import RevealBlock from '../ui/RevealBlock.vue'
import SectionHeading from '../ui/SectionHeading.vue'

defineProps({
  steps: {
    type: Array,
    required: true
  }
})
</script>
