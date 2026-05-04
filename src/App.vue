<template>
  <div class="page-shell">
    <SiteHeader :navigation="navigation" />

    <main>
      <HeroSection :hero="hero" :trust-items="trustItems" />
      <ServicesSection :services="services" />
      <BenefitsSection :benefits="benefits" />
      <CasesSection :cases="cases" />
      <ProcessSection :steps="processSteps" />
      <MetricsSection :metrics="metrics" />
      <TestimonialsSection :testimonials="testimonials" :client-logos="clientLogos" />
      <FaqSection :items="faqItems" />
      <FinalCtaSection :cta="finalCta" />
    </main>

    <SiteFooter :navigation="navigation" :contacts="contacts" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import SiteHeader from './components/layout/SiteHeader.vue'
import SiteFooter from './components/layout/SiteFooter.vue'
import HeroSection from './components/sections/HeroSection.vue'
import ServicesSection from './components/sections/ServicesSection.vue'
import BenefitsSection from './components/sections/BenefitsSection.vue'
import CasesSection from './components/sections/CasesSection.vue'
import ProcessSection from './components/sections/ProcessSection.vue'
import MetricsSection from './components/sections/MetricsSection.vue'
import TestimonialsSection from './components/sections/TestimonialsSection.vue'
import FaqSection from './components/sections/FaqSection.vue'
import FinalCtaSection from './components/sections/FinalCtaSection.vue'
import {
  benefits,
  cases,
  clientLogos,
  contacts,
  faqItems,
  finalCta,
  hero,
  metrics,
  navigation,
  processSteps,
  services,
  testimonials,
  trustItems
} from './data/siteContent'

onMounted(() => {
  document.title = 'Nexus Agency | Vue 3 веб-приложения для роста бизнеса'

  let description = document.querySelector('meta[name="description"]')

  if (!description) {
    description = document.createElement('meta')
    description.setAttribute('name', 'description')
    document.head.appendChild(description)
  }

  description.setAttribute(
    'content',
    'Nexus проектирует и разрабатывает веб-приложения, MVP, SaaS, CRM и AI-интеграции для бизнеса. Прозрачный процесс, сильный UI/UX и запуск ценных продуктов в короткие сроки.'
  )
})
</script>
