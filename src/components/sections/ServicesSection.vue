<template>
  <section id="services" class="section">
    <div class="container">
      <RevealBlock>
        <SectionHeading
          eyebrow="Услуги"
          title="Закрываем ключевые продуктовые задачи бизнеса от MVP до зрелых внутренних систем"
          description="Собираем решения, которые помогают запускать новые направления, ускорять операции и делать взаимодействие с продуктом понятным для пользователей и команды."
        />
      </RevealBlock>

      <div class="cards-grid cards-grid--services">
        <RevealBlock v-for="service in services" :key="service.title" class="info-card">
          <div class="info-card__icon">
            <AppIcon :name="service.icon" />
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
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
  services: {
    type: Array,
    required: true
  }
})
</script>
