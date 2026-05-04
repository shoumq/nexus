<template>
  <section id="faq" class="section">
    <div class="container faq-layout">
      <RevealBlock>
        <SectionHeading
          eyebrow="FAQ"
          title="Сняли ключевые вопросы, которые обычно мешают быстро перейти к обсуждению проекта"
          description="Ответы короткие и деловые: этого достаточно, чтобы человек понял формат работы и не ушел искать ясность в другое место."
        />
      </RevealBlock>

      <div class="faq-list">
        <RevealBlock v-for="item in items" :key="item.question" class="faq-item">
          <details>
            <summary>{{ item.question }}</summary>
            <p>{{ item.answer }}</p>
          </details>
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
  items: {
    type: Array,
    required: true
  }
})
</script>
