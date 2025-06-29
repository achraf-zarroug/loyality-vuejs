<template>
  <section id="benefits" class="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden" :dir="isRTL ? 'rtl' : 'ltr'">
    <!-- Background decorative elements -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div class="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          {{ getBenefitsTitle() }}
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {{ getTranslationAsString('benefits.subtitle') }}
        </p>
      </div>

      <!-- Stats Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        <div 
          v-for="(stat, index) in stats" 
          :key="stat.id"
          class="text-center group"
          :style="{ animationDelay: `${index * 150}ms` }"
        >
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group-hover:border-blue-200">
            <div class="text-4xl lg:text-5xl font-bold mb-2" :class="stat.color">
              {{ stat.value }}
            </div>
            <div class="text-gray-600 font-medium mb-2">{{ getTranslationAsString(`benefits.stats.${stat.key}`) }}</div>
            <div class="text-sm text-gray-500">{{ getTranslationAsString(`benefits.stats.${stat.key}Desc`) }}</div>
            
            <!-- Animated progress bar -->
            <div class="mt-4 bg-gray-200 rounded-full h-2 overflow-hidden">
              <div 
                class="h-full rounded-full transition-all duration-1000 ease-out"
                :class="stat.progressColor"
                :style="{ width: `${stat.progress}%` }"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Benefits Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <!-- Left Column - Benefits List -->
        <div class="space-y-8">
          <h3 class="text-3xl font-bold text-gray-900 mb-8">
            Transform your business with proven results
          </h3>
          
          <div 
            v-for="(benefit, index) in benefits" 
            :key="benefit.key"
            class="flex items-start group"
            :class="isRTL ? 'space-x-reverse' : 'space-x-4'"
            :style="{ animationDelay: `${index * 200}ms` }"
          >
            <div class="flex-shrink-0">
              <div 
                class="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                :class="benefit.iconBg"
              >
                <component :is="benefit.icon" :class="benefit.iconColor" class="w-6 h-6" />
              </div>
            </div>
            <div class="flex-1" :class="isRTL ? 'mr-4' : 'ml-4'">
              <h4 class="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {{ getTranslationAsString(`benefits.benefits.${benefit.key}.title`) }}
              </h4>
              <p class="text-gray-600 leading-relaxed">
                {{ getTranslationAsString(`benefits.benefits.${benefit.key}.description`) }}
              </p>
              <div class="mt-3 flex items-center text-sm text-blue-600 font-medium">
                <span>{{ getTranslationAsString(`benefits.benefits.${benefit.key}.impact`) }}</span>
                <svg class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" :class="{ 'mr-1 ml-0 group-hover:-translate-x-1': isRTL }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Testimonial Card -->
        <div class="relative">
          <div class="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 text-white relative overflow-hidden">
            <!-- Background pattern -->
            <div class="absolute inset-0 opacity-10">
              <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
            </div>
            
            <div class="relative z-10">
              <!-- Quote icon -->
              <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              
              <blockquote class="text-xl leading-relaxed mb-6">
                "{{ getTranslationAsString('benefits.testimonial.quote') }}"
              </blockquote>
              
              <div class="flex items-center">
                <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4" :class="{ 'ml-4 mr-0': isRTL }">
                  <span class="text-lg font-bold">AH</span>
                </div>
                <div>
                  <div class="font-semibold">{{ getTranslationAsString('benefits.testimonial.author') }}</div>
                  <div class="text-blue-200">{{ getTranslationAsString('benefits.testimonial.position') }}</div>
                </div>
              </div>
              
              <!-- Rating stars -->
              <div class="flex items-center mt-4 space-x-1" :class="{ 'space-x-reverse': isRTL }">
                <span v-for="i in 5" :key="i" class="text-yellow-400">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          
          <!-- Floating elements -->
          <div class="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
          <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
        <h3 class="text-3xl font-bold text-gray-900 mb-4">
          {{ getTranslationAsString('benefits.cta.title') }}
        </h3>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {{ getTranslationAsString('benefits.cta.subtitle') }}
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6" :class="{ 'sm:space-x-reverse': isRTL }">
          <button 
            @click="handleStartTrial"
            class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            {{ getTranslationAsString('benefits.cta.startTrial') }}
          </button>
          <button 
            @click="handleScheduleDemo"
            class="flex items-center text-blue-600 hover:text-blue-700 font-semibold px-6 py-4 rounded-xl border-2 border-blue-200 hover:border-blue-300 transition-all duration-300"
          >
            <svg class="w-5 h-5 mr-2" :class="{ 'ml-2 mr-0': isRTL }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {{ getTranslationAsString('benefits.cta.scheduleDemo') }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useTranslation } from '../../composables/useTranslation'

// Benefit icons
const TrendingUpIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>`
}

const HeartIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>`
}

const ClockIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
}

const DollarIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" /></svg>`
}

interface Stat {
  id: number
  value: string
  key: string
  color: string
  progress: number
  progressColor: string
}

interface Benefit {
  key: string
  icon: any
  iconBg: string
  iconColor: string
}

export default defineComponent({
  name: 'BenefitsSection',

  components: {
    TrendingUpIcon,
    HeartIcon,
    ClockIcon,
    DollarIcon
  },

  setup() {
    const { t, isRTL } = useTranslation()

    // Helper function to ensure we get a string from translation
    const getTranslationAsString = (key: string, params?: Record<string, string>): string => {
      const result = t(key, params)
      return Array.isArray(result) ? result[0] || key : result
    }

    // Helper function to get the benefits title with interpolation
    const getBenefitsTitle = (): string => {
      const chooseText = getTranslationAsString('benefits.choose')
      return getTranslationAsString('benefits.title', { choose: chooseText })
    }

    const stats: Stat[] = [
      {
        id: 1,
        value: '45%',
        key: 'retention',
        color: 'text-blue-600',
        progress: 85,
        progressColor: 'bg-blue-500'
      },
      {
        id: 2,
        value: '32%',
        key: 'orderValue',
        color: 'text-green-600',
        progress: 75,
        progressColor: 'bg-green-500'
      },
      {
        id: 3,
        value: '5000+',
        key: 'businesses',
        color: 'text-purple-600',
        progress: 95,
        progressColor: 'bg-purple-500'
      },
      {
        id: 4,
        value: '2.5x',
        key: 'roi',
        color: 'text-orange-600',
        progress: 90,
        progressColor: 'bg-orange-500'
      }
    ]

    const benefits: Benefit[] = [
      {
        key: 'retention',
        icon: 'HeartIcon',
        iconBg: 'bg-red-100',
        iconColor: 'text-red-600'
      },
      {
        key: 'orderValue',
        icon: 'TrendingUpIcon',
        iconBg: 'bg-green-100',
        iconColor: 'text-green-600'
      },
      {
        key: 'timeResource',
        icon: 'ClockIcon',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600'
      },
      {
        key: 'revenue',
        icon: 'DollarIcon',
        iconBg: 'bg-yellow-100',
        iconColor: 'text-yellow-600'
      }
    ]

    const handleStartTrial = (): void => {
      console.log('Start trial clicked')
    }

    const handleScheduleDemo = (): void => {
      console.log('Schedule demo clicked')
    }

    return {
      isRTL,
      stats,
      benefits,
      getTranslationAsString,
      getBenefitsTitle,
      handleStartTrial,
      handleScheduleDemo
    }
  }
})
</script>

<style scoped>
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

/* Fade in animation for stats and benefits */
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
