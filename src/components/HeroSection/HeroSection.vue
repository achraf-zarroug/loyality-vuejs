<template>
  <section id="hero" class="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden" :dir="isRTL ? 'rtl' : 'ltr'">
    <!-- Background decorative elements -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div class="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
    </div>

    <!-- Notification Banner -->
    <div class="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4">
      <div class="max-w-7xl mx-auto flex items-center justify-center text-center">
        <div class="flex items-center space-x-2" :class="{ 'space-x-reverse': isRTL }">
          <span class="text-sm font-medium">{{ getTranslationAsString('hero.notification') }}</span>
          <a :href="`tel:${getTranslationAsString('hero.phone')}`" class="text-yellow-300 hover:text-yellow-200 font-semibold underline">
            {{ getTranslationAsString('hero.phone') }}
          </a>
        </div>
      </div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
        <!-- Left Column - Content -->
        <div class="text-center lg:text-left" :class="{ 'lg:text-right': isRTL }">
          <h1 class="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            {{ getHeroTitle() }}
          </h1>
          
          <p class="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-2xl" :class="isRTL ? 'lg:mr-auto' : 'lg:ml-0'">
            {{ getTranslationAsString('hero.subtitle') }}
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-16" :class="{ 'lg:justify-end': isRTL }">
            <button 
              @click="handleGetFreeTrial"
              class="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:ring-4 focus:ring-blue-300 focus:outline-none overflow-hidden"
            >
              <span class="relative z-10 flex items-center">
                {{ getTranslationAsString('hero.getFreeTrial') }}
                <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" :class="{ 'mr-2 ml-0 group-hover:-translate-x-1': isRTL }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
            
            <button 
              @click="handleLivePreview"
              class="group flex items-center text-gray-700 hover:text-blue-600 font-semibold px-6 py-4 rounded-2xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
            >
              <svg class="w-6 h-6 mr-3 transition-colors" :class="{ 'ml-3 mr-0': isRTL }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {{ getTranslationAsString('hero.livePreview') }}
            </button>
          </div>

          <!-- Trust Indicators -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-8 text-gray-500" :class="{ 'lg:justify-end': isRTL }">
            <div class="flex items-center space-x-2" :class="{ 'space-x-reverse': isRTL }">
              <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span class="text-sm font-medium">5000+ Happy Customers</span>
            </div>
            <div class="flex items-center space-x-2" :class="{ 'space-x-reverse': isRTL }">
              <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span class="text-sm font-medium">99.9% Uptime</span>
            </div>
            <div class="flex items-center space-x-2" :class="{ 'space-x-reverse': isRTL }">
              <svg class="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span class="text-sm font-medium">Enterprise Security</span>
            </div>
          </div>
        </div>

        <!-- Right Column - Visual -->
        <div class="relative">
          <div class="relative bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <!-- Mock Dashboard -->
            <div class="space-y-6">
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-3" :class="{ 'space-x-reverse': isRTL }">
                  <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
                  <span class="font-semibold text-gray-900">Loyalty Dashboard</span>
                </div>
                <div class="flex space-x-2" :class="{ 'space-x-reverse': isRTL }">
                  <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div class="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              
              <div class="grid grid-cols-2 gap-4">
                <div class="bg-blue-50 rounded-xl p-4">
                  <div class="text-2xl font-bold text-blue-600">45%</div>
                  <div class="text-sm text-gray-600">Retention Rate</div>
                </div>
                <div class="bg-purple-50 rounded-xl p-4">
                  <div class="text-2xl font-bold text-purple-600">$2.5k</div>
                  <div class="text-sm text-gray-600">Avg Order Value</div>
                </div>
              </div>
              
              <div class="space-y-3">
                <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div class="flex items-center space-x-3" :class="{ 'space-x-reverse': isRTL }">
                    <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <span class="text-sm font-medium">New reward claimed</span>
                  </div>
                  <span class="text-xs text-gray-500">2m ago</span>
                </div>
                <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div class="flex items-center space-x-3" :class="{ 'space-x-reverse': isRTL }">
                    <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <span class="text-sm font-medium">Purchase completed</span>
                  </div>
                  <span class="text-xs text-gray-500">5m ago</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Floating elements -->
          <div class="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
            <span class="text-2xl">🎉</span>
          </div>
          <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
            <span class="text-xl">💎</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Integration Section -->
    <div class="relative z-10 bg-white/80 backdrop-blur-sm py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">{{ getTranslationAsString('integration.title') }}</h3>
          <div class="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <div class="flex items-center space-x-2 text-gray-600">
              <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <span class="text-sm font-bold">S</span>
              </div>
              <span>Shopify</span>
            </div>
            <div class="flex items-center space-x-2 text-gray-600">
              <div class="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <span class="text-sm font-bold">W</span>
              </div>
              <span>WooCommerce</span>
            </div>
            <div class="flex items-center space-x-2 text-gray-600">
              <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <span class="text-sm font-bold">M</span>
              </div>
              <span>Magento</span>
            </div>
            <div class="flex items-center space-x-2 text-gray-600">
              <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <span class="text-sm font-bold">Z</span>
              </div>
              <span>Zapier</span>
            </div>
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
  name: 'HeroSection',
  
  setup() {
    const { t, isRTL } = useTranslation()

    // Helper function to ensure we get a string from translation
    const getTranslationAsString = (key: string, params?: Record<string, string>): string => {
      const result = t(key, params)
      return Array.isArray(result) ? result[0] || key : result
    }

    // Helper function to get the hero title with interpolation
    const getHeroTitle = (): string => {
      const loyalText = getTranslationAsString('hero.loyal')
      return getTranslationAsString('hero.title', { loyal: loyalText })
    }

    const handleGetFreeTrial = (): void => {
      console.log('Get free trial clicked')
    }

    const handleLivePreview = (): void => {
      console.log('Live preview clicked')
    }

    return {
      isRTL,
      getTranslationAsString,
      getHeroTitle,
      handleGetFreeTrial,
      handleLivePreview
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

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
