<template>
  <section id="cases" class="section">
    <div class="container">
      <RevealBlock>
        <SectionHeading
          eyebrow="Кейсы"
          title="Примеры решений, где продуктовая логика и сильный интерфейс дали бизнесу понятный эффект"
          description="Карточки построены как витрина сложных digital-продуктов: с акцентом на задачу, решение и понятный результат, который считывается за несколько секунд."
        />
      </RevealBlock>

      <div class="cases-grid">
        <RevealBlock v-for="item in cases" :key="item.title" class="case-card">
          <span class="case-card__tag">{{ item.tag }}</span>
          <h3>{{ item.title }}</h3>
          <dl>
            <div>
              <dt>Задача</dt>
              <dd>{{ item.challenge }}</dd>
            </div>
            <div>
              <dt>Что сделали</dt>
              <dd>{{ item.solution }}</dd>
            </div>
            <div>
              <dt>Результат</dt>
              <dd>{{ item.result }}</dd>
            </div>
          </dl>
          <a href="#contact-form" class="text-link">Смотреть кейс</a>
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
  cases: {
    type: Array,
    required: true
  }
})
</script>
