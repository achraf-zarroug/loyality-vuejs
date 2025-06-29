<template>
  <section id="features" class="py-20 bg-white relative overflow-hidden" :dir="isRTL ? 'rtl' : 'ltr'">
    <!-- Background decorative elements -->
    <div class="absolute inset-0">
      <div class="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      <div class="absolute bottom-20 left-20 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          {{ getFeaturesTitle() }}
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {{ getTranslationAsString('features.subtitle') }}
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <div 
          v-for="(feature, index) in features" 
          :key="feature.key"
          class="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          :style="{ animationDelay: `${index * 150}ms` }"
        >
          <!-- Icon -->
          <div class="flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300 group-hover:scale-110" :class="feature.iconBg">
            <component :is="feature.icon" :class="feature.iconColor" class="w-8 h-8" />
          </div>
          
          <!-- Content -->
          <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
            {{ getTranslationAsString(`features.${feature.key}.title`) }}
          </h3>
          <p class="text-gray-600 leading-relaxed mb-6">
            {{ getTranslationAsString(`features.${feature.key}.description`) }}
          </p>
          
          <!-- Learn More Link -->
          <div class="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
            <span>Learn more</span>
            <svg class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" :class="{ 'mr-2 ml-0 group-hover:-translate-x-1': isRTL }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
          
          <!-- Hover Effect -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12">
        <h3 class="text-3xl font-bold text-gray-900 mb-4">
          {{ getTranslationAsString('features.cta.title') }}
        </h3>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {{ getTranslationAsString('features.cta.subtitle') }}
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6" :class="{ 'sm:space-x-reverse': isRTL }">
          <button 
            @click="handleStartTrial"
            class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            {{ getTranslationAsString('features.cta.startTrial') }}
          </button>
          <button 
            @click="handleViewDemo"
            class="flex items-center text-blue-600 hover:text-blue-700 font-semibold px-6 py-4 rounded-xl border-2 border-blue-200 hover:border-blue-300 transition-all duration-300"
          >
            <svg class="w-5 h-5 mr-2" :class="{ 'ml-2 mr-0': isRTL }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {{ getTranslationAsString('features.cta.viewDemo') }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useTranslation } from '../../composables/useTranslation'

// Feature icons
const PointsIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" /></svg>`
}

const AnalyticsIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>`
}

const SegmentationIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>`
}

const CustomizationIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" /></svg>`
}

const SecurityIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>`
}

const IntegrationsIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>`
}

interface Feature {
  key: string
  icon: any
  iconBg: string
  iconColor: string
}

export default defineComponent({
  name: 'FeaturesSection',

  components: {
    PointsIcon,
    AnalyticsIcon,
    SegmentationIcon,
    CustomizationIcon,
    SecurityIcon,
    IntegrationsIcon
  },

  setup() {
    const { t, isRTL } = useTranslation()

    // Helper function to ensure we get a string from translation
    const getTranslationAsString = (key: string, params?: Record<string, string>): string => {
      const result = t(key, params)
      return Array.isArray(result) ? result[0] || key : result
    }

    // Helper function to get the features title with interpolation
    const getFeaturesTitle = (): string => {
      const boostText = getTranslationAsString('features.boost')
      return getTranslationAsString('features.title', { boost: boostText })
    }

    const features: Feature[] = [
      {
        key: 'pointsRewards',
        icon: 'PointsIcon',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600'
      },
      {
        key: 'analytics',
        icon: 'AnalyticsIcon',
        iconBg: 'bg-green-100',
        iconColor: 'text-green-600'
      },
      {
        key: 'segmentation',
        icon: 'SegmentationIcon',
        iconBg: 'bg-purple-100',
        iconColor: 'text-purple-600'
      },
      {
        key: 'customization',
        icon: 'CustomizationIcon',
        iconBg: 'bg-orange-100',
        iconColor: 'text-orange-600'
      },
      {
        key: 'security',
        icon: 'SecurityIcon',
        iconBg: 'bg-red-100',
        iconColor: 'text-red-600'
      },
      {
        key: 'integrations',
        icon: 'IntegrationsIcon',
        iconBg: 'bg-indigo-100',
        iconColor: 'text-indigo-600'
      }
    ]

    const handleStartTrial = (): void => {
      console.log('Start trial clicked')
    }

    const handleViewDemo = (): void => {
      console.log('View demo clicked')
    }

    return {
      isRTL,
      features,
      getTranslationAsString,
      getFeaturesTitle,
      handleStartTrial,
      handleViewDemo
    }
  }
})
</script>

<style scoped>
/* Fade in animation for features */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.group {
  animation: fadeInUp 0.6s ease-out forwards;
}
</style>
