<template>
  <section id="pricing" class="py-20 bg-gradient-to-b from-gray-50 to-white" :dir="isRTL ? 'rtl' : 'ltr'">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          {{ getPricingTitle() }}
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {{ getTranslationAsString('pricing.subtitle') }}
        </p>
      </div>

      <!-- Pricing Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="(planKey) in ['starter', 'professional', 'enterprise']" 
          :key="planKey"
          class="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          :class="{ 'ring-2 ring-blue-500 scale-105': planKey === 'professional' }"
        >
          <!-- Popular Badge -->
          <div v-if="planKey === 'professional'" class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {{ getTranslationAsString(`pricing.plans.${planKey}.popular`) }}
            </span>
          </div>

          <div class="text-center">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ getTranslationAsString(`pricing.plans.${planKey}.name`) }}</h3>
            <p class="text-gray-600 mb-6">{{ getTranslationAsString(`pricing.plans.${planKey}.description`) }}</p>
            
            <div class="mb-8">
              <span class="text-5xl font-bold text-gray-900">${{ getTranslationAsString(`pricing.plans.${planKey}.price`) }}</span>
              <span class="text-gray-600">/month</span>
            </div>

            <button 
              @click="handleSelectPlan(getTranslationAsString(`pricing.plans.${planKey}.name`))"
              class="w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 mb-8"
              :class="planKey === 'professional'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform hover:scale-105' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-900'"
            >
              {{ getTranslationAsString(`pricing.plans.${planKey}.buttonText`) }}
            </button>

            <ul class="space-y-4 text-left" :class="{ 'text-right': isRTL }">
              <li v-for="feature in tArray(`pricing.plans.${planKey}.features`)" :key="feature" class="flex items-center" :class="{ 'flex-row-reverse': isRTL }">
                <svg class="w-5 h-5 text-green-500 mr-3" :class="{ 'ml-3 mr-0': isRTL }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useTranslation } from '../../composables/useTranslation'

export default defineComponent({
  name: 'PricingSection',

  setup() {
    const { t, tArray, isRTL } = useTranslation()

    // Helper function to ensure we get a string from translation
    const getTranslationAsString = (key: string, params?: Record<string, string>): string => {
      const result = t(key, params)
      return Array.isArray(result) ? result[0] || key : result
    }

    // Helper function to get the pricing title with interpolation
    const getPricingTitle = (): string => {
      const pricingText = getTranslationAsString('pricing.pricing')
      return getTranslationAsString('pricing.title', { pricing: pricingText })
    }

    const handleSelectPlan = (planName: string): void => {
      console.log(`Selected plan: ${planName}`)
    }

    return {
      tArray,
      isRTL,
      getTranslationAsString,
      getPricingTitle,
      handleSelectPlan
    }
  }
})
</script>
