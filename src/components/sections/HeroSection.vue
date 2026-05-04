<template>
  <section id="top" class="hero section">
    <div class="container hero__grid">
      <RevealBlock tag="div" class="hero__content">
        <span class="hero__eyebrow">{{ hero.eyebrow }}</span>
        <h1>{{ hero.title }}</h1>
        <p class="hero__description">{{ hero.description }}</p>

        <div class="hero__actions">
          <BaseButton :href="hero.primaryCta.href" :label="hero.primaryCta.label" />
          <BaseButton :href="hero.secondaryCta.href" :label="hero.secondaryCta.label" variant="secondary" />
        </div>

        <div class="trust-line" aria-label="Преимущества работы">
          <span v-for="item in trustItems" :key="item">{{ item }}</span>
        </div>
      </RevealBlock>

      <RevealBlock tag="aside" class="hero-panel">
        <div class="hero-panel__header">
          <span class="hero-panel__badge">{{ hero.dashboard.badge }}</span>
          <div class="hero-panel__dots">
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>

        <div class="hero-panel__body">
          <div>
            <h2>{{ hero.dashboard.title }}</h2>
            <p>{{ hero.dashboard.summary }}</p>
          </div>

          <div class="hero-panel__stats">
            <div v-for="item in hero.dashboard.stats" :key="item.label" class="mini-stat">
              <strong>{{ item.value }}</strong>
              <span>{{ item.label }}</span>
            </div>
          </div>

          <div class="hero-panel__timeline">
            <div v-for="point in hero.dashboard.highlights" :key="point" class="timeline-point">
              <span class="timeline-point__dot"></span>
              <p>{{ point }}</p>
            </div>
          </div>
        </div>
      </RevealBlock>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'
import BaseButton from '../ui/BaseButton.vue'
import RevealBlock from '../ui/RevealBlock.vue'

defineProps({
  hero: {
    type: Object,
    required: true
  },
  trustItems: {
    type: Array,
    required: true
  }
})
</script>
