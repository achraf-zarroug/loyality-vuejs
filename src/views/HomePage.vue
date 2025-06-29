<template>
  <div class="min-h-screen" :dir="isRTL ? 'rtl' : 'ltr'" :lang="currentLanguage">
    <!-- Navigation -->
    <NavbarShow />
    
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- Features Section -->
    <FeaturesSection />
    
    <!-- Benefits Section -->
    <BenefitsSection />
    
    <!-- Pricing Section -->
    <PricingSection />
    
    <!-- Footer -->
    <FooterShow />
    
    <!-- Scroll to Top Button -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 transform translate-y-2 scale-95"
      enter-to-class="opacity-100 transform translate-y-0 scale-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 transform translate-y-0 scale-100"
      leave-to-class="opacity-0 transform translate-y-2 scale-95"
    >
      <button
        v-show="showScrollTop"
        @click="scrollToTop"
        class="fixed z-50 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
        :class="isRTL ? 'bottom-8 left-8' : 'bottom-8 right-8'"
        aria-label="Scroll to top"
      >
        <svg class="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </transition>

    <!-- Progress Bar -->
    <div class="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div 
        class="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ease-out"
        :style="{ width: `${scrollProgress}%` }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted, defineComponent } from 'vue'
import { useTranslation } from '../composables/useTranslation'
import NavbarShow from '../components/Navbar/NavbarShow.vue'
import HeroSection from '../components/HeroSection/HeroSection.vue'
import FeaturesSection from '../components/FeaturesSection/FeaturesSection.vue'
import BenefitsSection from '../components/BenefitsSection/BenefitsSection.vue'
import PricingSection from '../components/PricingSection/PricingSection.vue'
import FooterShow from '../components/Footer/FooterShow.vue'

export default defineComponent({
  name: 'HomePage',
  
  components: {
    NavbarShow,
    HeroSection,
    FeaturesSection,
    BenefitsSection,
    PricingSection,
    FooterShow
  },
  
  setup() {
    const { currentLanguage, isRTL, initializeLanguage } = useTranslation()
    const showScrollTop = ref<boolean>(false)
    const scrollProgress = ref<number>(0)

    const scrollToTop = (): void => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    const handleScroll = (): void => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      
      showScrollTop.value = scrollTop > 300
      scrollProgress.value = (scrollTop / docHeight) * 100
    }

    onMounted(() => {
      initializeLanguage()
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      currentLanguage,
      isRTL,
      showScrollTop,
      scrollProgress,
      scrollToTop
    }
  }
})
</script>

<style>
/* Global styles */
html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* RTL Support */
[dir="rtl"] {
  text-align: right;
}

[dir="rtl"] .space-x-reverse > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 1;
}

/* Smooth scroll with offset for sticky navbar */
.scroll-mt-20 {
  scroll-margin-top: 5rem;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #2563eb, #7c3aed);
}
</style>
