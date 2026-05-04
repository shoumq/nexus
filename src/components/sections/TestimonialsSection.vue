<template>
  <section id="testimonials" class="section section--dense">
    <div class="container">
      <RevealBlock>
        <SectionHeading
          eyebrow="Отзывы"
          title="Доверие строится там, где команда умеет мыслить продуктом и не прячет процесс за красивыми слайдами"
          description="Поэтому блок social proof сделан с отзывами и логотипами, которые усиливают ощущение зрелой и надежной agency-практики."
        />
      </RevealBlock>

      <RevealBlock class="logo-cloud">
        <span v-for="logo in clientLogos" :key="logo">{{ logo }}</span>
      </RevealBlock>

      <div class="testimonial-grid">
        <RevealBlock v-for="item in testimonials" :key="item.author" class="testimonial-card">
          <p class="testimonial-card__quote">“{{ item.quote }}”</p>
          <div class="testimonial-card__author">
            <strong>{{ item.author }}</strong>
            <span>{{ item.role }}</span>
          </div>
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
  testimonials: {
    type: Array,
    required: true
  },
  clientLogos: {
    type: Array,
    required: true
  }
})
</script>
