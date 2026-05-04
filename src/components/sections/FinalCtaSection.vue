<template>
  <section class="section">
    <div class="container">
      <RevealBlock class="final-cta">
        <div class="final-cta__content">
          <span class="section-heading__eyebrow">Контакт</span>
          <h2>{{ cta.title }}</h2>
          <p>{{ cta.description }}</p>
          <small>{{ cta.note }}</small>
        </div>

        <form id="contact-form" class="contact-form" @submit.prevent>
          <label>
            <span>Ваше имя</span>
            <input type="text" name="name" placeholder="Например, Алексей" />
          </label>

          <label>
            <span>Контакт</span>
            <input type="text" name="contact" placeholder="Telegram, email или телефон" />
          </label>

          <label>
            <span>Кратко о задаче</span>
            <textarea
              name="message"
              rows="5"
              placeholder="Что нужно запустить, автоматизировать или улучшить"
            ></textarea>
          </label>

          <button type="submit" class="submit-button">{{ cta.buttonLabel }}</button>
        </form>
      </RevealBlock>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'
import RevealBlock from '../ui/RevealBlock.vue'

defineProps({
  cta: {
    type: Object,
    required: true
  }
})
</script>
