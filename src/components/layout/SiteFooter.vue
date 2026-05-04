<template>
  <footer id="contacts" class="site-footer">
    <div class="container site-footer__grid">
      <div class="site-footer__brand">
        <a href="#top" class="brand-mark brand-mark--footer" aria-label="Nexus Agency home">
          <span class="brand-mark__icon">N</span>
          <span class="brand-mark__text">
            <strong>Nexus</strong>
            <small>Digital products on Vue 3</small>
          </span>
        </a>
        <p class="site-footer__summary">
          Помогаем бизнесу запускать и развивать веб-приложения, которые упрощают процессы и дают реальную операционную ценность.
        </p>
      </div>

      <div class="site-footer__nav">
        <h3>Навигация</h3>
        <div class="footer-links">
          <a v-for="item in navigation" :key="item.href" :href="item.href">{{ item.label }}</a>
        </div>
      </div>

      <div class="site-footer__contacts">
        <h3>Контакты</h3>
        <div class="footer-links">
          <a :href="`mailto:${contacts.email}`">{{ contacts.email }}</a>
          <a :href="`tel:${sanitizedPhone}`">{{ contacts.phone }}</a>
          <a href="https://t.me/nexus_agency" target="_blank" rel="noreferrer">{{ contacts.telegram }}</a>
          <a href="https://wa.me/79991234567" target="_blank" rel="noreferrer">{{ contacts.whatsapp }}</a>
          <span>{{ contacts.address }}</span>
        </div>
      </div>
    </div>

    <div class="container site-footer__bottom">
      <span>© 2026 Nexus Agency</span>
      <span>Strategy · Design · Development</span>
    </div>
  </footer>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  navigation: {
    type: Array,
    required: true
  },
  contacts: {
    type: Object,
    required: true
  }
})

const sanitizedPhone = computed(() => props.contacts.phone.replace(/[^\d+]/g, ''))
</script>
