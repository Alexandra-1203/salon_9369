<template>
  <section class="relative w-full py-16 lg:py-24 overflow-hidden">
    <div class="max-w-3xl mx-auto px-6 lg:px-12">
      <div class="text-center mb-12">
        <Reveal
          tag="h2"
          class="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 text-gray-900"
        >
          Свяжитесь с нами
        </Reveal>
        <Reveal
          tag="p"
          :delay="100"
          class="text-gray-600 text-lg max-w-2xl mx-auto"
        >
          Оставьте заявку — мы перезвоним в течение 15 минут
        </Reveal>
      </div>

      <form
        class="contact-form"
        @submit.prevent="onSubmit"
      >
        <input
          v-model="form.website"
          type="text"
          name="website"
          tabindex="-1"
          autocomplete="off"
          class="hidden-field"
        >

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Reveal
            :delay="200"
            class="field"
          >
            <label
              for="name"
              class="field__label"
            >Ваше имя *</label>
            <input
              id="name"
              v-model.trim="form.name"
              type="text"
              required
              placeholder="Как к вам обращаться"
              class="field__input"
            >
          </Reveal>

          <Reveal
            :delay="300"
            class="field"
          >
            <label
              for="phone"
              class="field__label"
            >Телефон *</label>
            <input
              id="phone"
              v-model.trim="form.phone"
              type="tel"
              required
              placeholder="+7 (___) ___-__-__"
              class="field__input"
              @input="formatPhone"
            >
          </Reveal>
        </div>

        <Reveal
          :delay="400"
          class="field"
        >
          <label
            for="email"
            class="field__label"
          >Email *</label>
          <input
            id="email"
            v-model.trim="form.email"
            type="email"
            required
            placeholder="example@mail.ru"
            class="field__input"
          >
        </Reveal>

        <Reveal
          :delay="500"
          class="field"
        >
          <label
            for="message"
            class="field__label"
          >Сообщение</label>
          <textarea
            id="message"
            v-model.trim="form.message"
            rows="4"
            placeholder="Что вас интересует?"
            class="field__input field__input--textarea"
          />
        </Reveal>

        <Reveal :delay="600">
          <UCheckbox
            v-model="form.consent"
            label="Я согласен(а) на обработку персональных данных"
            required
          />
        </Reveal>

        <Reveal :delay="700">
          <UButton
            type="submit"
            size="xl"
            :loading="sending"
            :disabled="sending"
            class="w-full justify-center bg-amber-900 hover:bg-amber-950 text-white border-none rounded-xl mt-2"
          >
            {{ sending ? 'Отправляем…' : 'Отправить заявку' }}
          </UButton>
        </Reveal>

        <Reveal
          v-if="success"
          :delay="0"
        >
          <p class="contact-form__success">
            Спасибо! Мы получили вашу заявку и скоро свяжемся.
          </p>
        </Reveal>

        <Reveal
          v-if="error"
          :delay="0"
        >
          <p class="contact-form__error">
            {{ errorText }}
          </p>
        </Reveal>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  phone: '',
  email: '',
  message: '',
  consent: false,
  website: ''
})

const sending = ref(false)
const success = ref(false)
const error = ref(false)
const errorText = ref('Не удалось отправить. Попробуйте ещё раз или позвоните нам.')

async function onSubmit() {
  if (form.website) {
    success.value = true
    return
  }

  sending.value = true
  success.value = false
  error.value = false

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: form.name,
        phone: form.phone,
        email: form.email,
        message: form.message
      }
    })
    success.value = true
    form.name = ''
    form.phone = ''
    form.email = ''
    form.message = ''
    form.consent = false
  } catch (e) {
    error.value = true
    errorText.value
      = e?.data?.statusMessage
        || e?.statusMessage
        || 'Не удалось отправить. Попробуйте ещё раз или позвоните нам.'
  } finally {
    sending.value = false
  }
}

const formatPhone = (e) => {
  let input = e.target.value.replace(/\D/g, '')

  if (input.length === 0) {
    form.phone = ''
    return
  }

  if (input[0] === '7' || input[0] === '8') {
    input = input.substring(1)
  }

  let formatted = '+7 '
  if (input.length > 0) {
    formatted += `(${input.substring(0, 3)}`
  }
  if (input.length >= 3) {
    formatted += `) ${input.substring(3, 6)}`
  }
  if (input.length > 6) {
    formatted += `-${input.substring(6, 8)}`
  }
  if (input.length > 8) {
    formatted += `-${input.substring(8, 10)}`
  }

  form.phone = formatted
}
</script>

<style scoped>
.hidden-field {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field__label {
  font-size: 0.9rem;
  color: #78350f;
  font-weight: 500;
}

.field__input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e8d0d6;
  border-radius: 12px;
  background: #fff;
  font-size: 1rem;
  color: #5b2c0d;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  outline: none;
}

.field__input::placeholder { color: #b9a89f; }

.field__input:focus {
  border-color: #c99aa8;
  box-shadow: 0 0 0 3px rgba(201, 154, 168, 0.15);
}

.field__input--textarea {
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
}

.checkbox {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.875rem;
  color: #6b7280;
  cursor: pointer;
  user-select: none;
}

.checkbox__input {
  width: 18px;
  height: 18px;
  accent-color: #78350f;
  flex-shrink: 0;
  margin-top: 1px;
  cursor: pointer;
}

.checkbox__text { line-height: 1.4; }

.contact-form__success {
  color: #166534;
  background: #f0fdf4;
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 0.95rem;
  text-align: center;
  margin-top: 8px;
}

.contact-form__error {
  color: #991b1b;
  background: #fef2f2;
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 0.95rem;
  text-align: center;
  margin-top: 8px;
}
</style>
