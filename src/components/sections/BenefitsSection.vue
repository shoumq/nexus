<template>
  <section class="section section--dense">
    <div class="container benefits-layout">
      <RevealBlock class="benefits-intro">
        <SectionHeading
          eyebrow="Почему Nexus"
          title="Делаем не просто интерфейсы, а цифровые продукты, которыми удобно управлять и которые дают измеримую ценность"
          description="Для бизнеса это означает меньше хаоса, быстрее запуск, понятные решения по приоритетам и основу, которая не ломается при росте."
        />
      </RevealBlock>

      <div class="benefits-list">
        <RevealBlock v-for="benefit in benefits" :key="benefit.title" class="benefit-card">
          <div class="benefit-card__icon">
            <AppIcon :name="benefit.icon" />
          </div>
          <div>
            <h3>{{ benefit.title }}</h3>
            <p>{{ benefit.description }}</p>
          </div>
        </RevealBlock>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'
import AppIcon from '../ui/AppIcon.vue'
import RevealBlock from '../ui/RevealBlock.vue'
import SectionHeading from '../ui/SectionHeading.vue'

defineProps({
  benefits: {
    type: Array,
    required: true
  }
})
</script>
