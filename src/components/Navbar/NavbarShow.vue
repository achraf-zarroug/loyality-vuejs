<template>
  <nav class="bg-white/95 backdrop-blur-md border-b border-gray-100 px-4 lg:px-8 py-4 sticky top-0 z-50 shadow-sm" :dir="isRTL ? 'rtl' : 'ltr'">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-7xl">
      <!-- Left side: Logo and Navigation -->
      <div class="flex items-center space-x-12" :class="{ 'space-x-reverse': isRTL }">
        <!-- Logo -->
        <a href="#hero" @click="scrollToSection('hero')" class="flex items-center group">
          <div class="relative">
            <div class="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105" :class="isRTL ? 'ml-3' : 'mr-3'">
              <span class="text-white font-bold text-lg">L</span>
            </div>
            <div class="absolute -top-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" :class="isRTL ? '-left-1' : '-right-1'"></div>
          </div>
          <span class="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Loyalfy
          </span>
        </a>
        
        <!-- Desktop Navigation -->
        <div class="hidden lg:flex lg:items-center lg:space-x-8" :class="{ 'space-x-reverse': isRTL }">
          <a 
            v-for="item in navigationItems" 
            :key="item.section"
            :href="`#${item.section}`"
            @click.prevent="scrollToSection(item.section)"
            class="relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 py-2 px-1 group"
            :class="{ 'text-blue-600': activeSection === item.section }"
          >
            {{ getTranslationAsString(`nav.${item.section}`) }}
            <span 
              class="absolute bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"
              :class="[
                activeSection === item.section ? 'w-full' : 'w-0',
                isRTL ? 'right-0' : 'left-0'
              ]"
            ></span>
          </a>
        </div>
      </div>

      <!-- Right side -->
      <div class="flex items-center space-x-4" :class="{ 'space-x-reverse': isRTL }">
        <!-- Language Switcher -->
        <button 
          @click="toggleLanguage"
          class="hidden lg:inline-flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
        >
          <svg class="w-4 h-4 mr-2" :class="{ 'ml-2 mr-0': isRTL }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
          {{ getTranslationAsString('nav.language') }}
        </button>
        
        <button 
          @click="handleSignIn"
          class="hidden lg:inline-flex items-center text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 px-4 py-2 rounded-lg hover:bg-gray-50"
        >
          {{ getTranslationAsString('nav.signIn') }}
        </button>
        
        <button 
          @click="scrollToSection('hero')"
          class="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl px-6 py-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:ring-4 focus:ring-blue-300 focus:outline-none"
        >
          {{ getTranslationAsString('nav.getStarted') }}
        </button>
        
        <!-- Mobile menu button -->
        <button 
          @click="toggleMobileMenu"
          class="lg:hidden p-3 text-gray-500 rounded-xl hover:bg-gray-100 transition-all duration-300"
        >
          <div class="relative w-6 h-6">
            <span 
              class="absolute top-0 left-0 w-6 h-0.5 bg-current transition-all duration-300 transform origin-center"
              :class="isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''"
            ></span>
            <span 
              class="absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-300"
              :class="isMobileMenuOpen ? 'opacity-0' : ''"
            ></span>
            <span 
              class="absolute top-5 left-0 w-6 h-0.5 bg-current transition-all duration-300 transform origin-center"
              :class="isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''"
            ></span>
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 transform -translate-y-4"
      enter-to-class="opacity-100 transform translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 transform translate-y-0"
      leave-to-class="opacity-0 transform -translate-y-4"
    >
      <div v-show="isMobileMenuOpen" class="lg:hidden mt-6 border-t border-gray-100 pt-6">
        <div class="flex flex-col space-y-2">
          <a 
            v-for="item in navigationItems" 
            :key="item.section"
            :href="`#${item.section}`"
            @click.prevent="handleMobileNavClick(item.section)"
            class="text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium py-3 px-4 rounded-lg transition-all duration-300"
            :class="{ 'text-blue-600 bg-blue-50': activeSection === item.section }"
          >
            {{ getTranslationAsString(`nav.${item.section}`) }}
          </a>
          
          <button 
            @click="toggleLanguage"
            class="text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center"
          >
            <svg class="w-4 h-4 mr-3" :class="{ 'ml-3 mr-0': isRTL }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            {{ getTranslationAsString('nav.language') }}
          </button>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted, defineComponent } from 'vue'
import { useTranslation } from '../../composables/useTranslation'

interface NavigationItem {
  section: string
}

export default defineComponent({
  name: 'NavbarShow',
  
  setup() {
    const { t, currentLanguage, isRTL, setLanguage } = useTranslation()
    const isMobileMenuOpen = ref<boolean>(false)
    const activeSection = ref<string>('hero')

    // Helper function to ensure we get a string from translation
    const getTranslationAsString = (key: string, params?: Record<string, string>): string => {
      const result = t(key, params)
      return Array.isArray(result) ? result[0] || key : result
    }

    const navigationItems: NavigationItem[] = [
      { section: 'features' },
      { section: 'benefits' },
      { section: 'pricing' }
    ]

    const toggleLanguage = (): void => {
      const newLang = currentLanguage.value === 'en' ? 'ar' : 'en'
      setLanguage(newLang)
      isMobileMenuOpen.value = false
    }

    const scrollToSection = (sectionId: string): void => {
      const element = document.getElementById(sectionId)
      if (element) {
        const offsetTop = element.offsetTop - 100
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
      }
    }

    const handleMobileNavClick = (sectionId: string): void => {
      scrollToSection(sectionId)
      isMobileMenuOpen.value = false
    }

    const toggleMobileMenu = (): void => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value
    }

    const handleSignIn = (): void => {
      console.log('Sign in clicked')
    }

    const handleScroll = (): void => {
      const sections = ['hero', 'features', 'benefits', 'pricing']
      const scrollPosition = window.scrollY + 150

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            activeSection.value = section
            break
          }
        }
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      handleScroll()
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      isRTL,
      isMobileMenuOpen,
      activeSection,
      navigationItems,
      getTranslationAsString,
      toggleLanguage,
      scrollToSection,
      handleMobileNavClick,
      toggleMobileMenu,
      handleSignIn
    }
  }
})
</script>
