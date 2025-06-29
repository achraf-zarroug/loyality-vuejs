<template>
  <footer class="bg-gray-900 text-white relative overflow-hidden" :dir="isRTL ? 'rtl' : 'ltr'">
    <!-- Background decorative elements -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>
      <div class="absolute top-20 right-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 left-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10">
      <!-- Main Footer Content -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          <!-- Company Info -->
          <div class="lg:col-span-2">
            <!-- Logo -->
            <div class="flex items-center mb-6">
              <div class="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-xl flex items-center justify-center" :class="isRTL ? 'ml-3' : 'mr-3'">
                <span class="text-white font-bold text-lg">L</span>
              </div>
              <span class="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Loyalfy
              </span>
            </div>
            
            <p class="text-gray-400 leading-relaxed mb-6 max-w-md">
              {{ getTranslationAsString('footer.description') }}
            </p>
            
            <!-- Social Media Links -->
            <div class="flex space-x-4" :class="{ 'space-x-reverse': isRTL }">
              <a 
                v-for="social in socialLinks" 
                :key="social.name"
                :href="social.url" 
                class="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
                :aria-label="social.name"
              >
                <component :is="social.icon" class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          <!-- Product Links -->
          <div>
            <h3 class="text-lg font-semibold mb-6 text-white">{{ getTranslationAsString('footer.product') }}</h3>
            <ul class="space-y-4">
              <li v-for="link in productLinks" :key="link.name">
                <a 
                  :href="link.url" 
                  @click.prevent="handleLinkClick(link.url)"
                  class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  {{ link.name }}
                  <svg class="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" :class="{ 'mr-1 ml-0 group-hover:-translate-x-1': isRTL }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <!-- Company Links -->
          <div>
            <h3 class="text-lg font-semibold mb-6 text-white">{{ getTranslationAsString('footer.company') }}</h3>
            <ul class="space-y-4">
              <li v-for="link in companyLinks" :key="link.name">
                <a 
                  :href="link.url" 
                  @click.prevent="handleLinkClick(link.url)"
                  class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  {{ link.name }}
                  <svg class="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" :class="{ 'mr-1 ml-0 group-hover:-translate-x-1': isRTL }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <!-- Support Links -->
          <div>
            <h3 class="text-lg font-semibold mb-6 text-white">{{ getTranslationAsString('footer.support') }}</h3>
            <ul class="space-y-4">
              <li v-for="link in supportLinks" :key="link.name">
                <a 
                  :href="link.url" 
                  @click.prevent="handleLinkClick(link.url)"
                  class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  {{ link.name }}
                  <svg class="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" :class="{ 'mr-1 ml-0 group-hover:-translate-x-1': isRTL }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Newsletter Subscription -->
        <div class="mt-16 pt-8 border-t border-gray-800">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 class="text-2xl font-bold mb-2">{{ getTranslationAsString('footer.newsletter.title') }}</h3>
              <p class="text-gray-400">{{ getTranslationAsString('footer.newsletter.subtitle') }}</p>
            </div>
            <div class="flex flex-col sm:flex-row gap-4" :class="{ 'sm:flex-row-reverse': isRTL }">
              <div class="flex-1">
                <input 
                  v-model="email"
                  type="email" 
                  :placeholder="getTranslationAsString('footer.newsletter.placeholder')"
                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              <button 
                @click="handleSubscribe"
                :disabled="!email || isSubscribing"
                class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
              >
                {{ isSubscribing ? getTranslationAsString('footer.newsletter.subscribing') : getTranslationAsString('footer.newsletter.subscribe') }}
              </button>
            </div>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="mt-12 pt-8 border-t border-gray-800">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="flex items-center space-x-3 group cursor-pointer" :class="{ 'space-x-reverse': isRTL }" @click="handleContactClick('email')">
              <div class="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div class="text-sm text-gray-400">{{ getTranslationAsString('footer.contact.email') }}</div>
                <div class="text-white font-medium group-hover:text-blue-400 transition-colors">support@loyalfy.io</div>
              </div>
            </div>
            
            <div class="flex items-center space-x-3 group cursor-pointer" :class="{ 'space-x-reverse': isRTL }" @click="handleContactClick('phone')">
              <div class="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center group-hover:bg-green-600/30 transition-colors">
                <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div class="text-sm text-gray-400">{{ getTranslationAsString('footer.contact.phone') }}</div>
                <div class="text-white font-medium group-hover:text-green-400 transition-colors" dir="ltr">+966 58 387 2101</div>
              </div>
            </div>
            
            <div class="flex items-center space-x-3 group cursor-pointer" :class="{ 'space-x-reverse': isRTL }" @click="handleContactClick('location')">
              <div class="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center group-hover:bg-purple-600/30 transition-colors">
                <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div class="text-sm text-gray-400">{{ getTranslationAsString('footer.contact.location') }}</div>
                <div class="text-white font-medium group-hover:text-purple-400 transition-colors">Riyadh, Saudi Arabia</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Trust Badges -->
        <div class="mt-12 pt-8 border-t border-gray-800">
          <div class="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div class="text-gray-400 text-sm">
              <span class="font-semibold text-white">{{ getTranslationAsString('footer.trust.trusted') }}</span> {{ getTranslationAsString('footer.trust.businesses') }}
            </div>
            <div class="flex items-center space-x-6" :class="{ 'space-x-reverse': isRTL }">
              <div class="flex items-center space-x-2 text-gray-400" :class="{ 'space-x-reverse': isRTL }">
                <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span class="text-sm">{{ getTranslationAsString('footer.trust.uptime') }}</span>
              </div>
              <div class="flex items-center space-x-2 text-gray-400" :class="{ 'space-x-reverse': isRTL }">
                <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span class="text-sm">{{ getTranslationAsString('footer.trust.compliant') }}</span>
              </div>
              <div class="flex items-center space-x-2 text-gray-400" :class="{ 'space-x-reverse': isRTL }">
                <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span class="text-sm">{{ getTranslationAsString('footer.trust.gdpr') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div class="text-gray-400 text-sm">
              {{ getCopyright() }}
            </div>
            
            <div class="flex items-center space-x-6" :class="{ 'space-x-reverse': isRTL }">
              <a 
                v-for="legal in legalLinks" 
                :key="legal.name"
                :href="legal.url" 
                @click.prevent="handleLinkClick(legal.url)"
                class="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {{ legal.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { ref, computed, defineComponent } from 'vue'
import { useTranslation } from '../../composables/useTranslation'

// Social Media Icons
const TwitterIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>`
}

const LinkedInIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
}

const FacebookIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`
}

const InstagramIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"/></svg>`
}

interface Link {
  name: string
  url: string
}

interface SocialLink extends Link {
  icon: any
}

export default defineComponent({
  name: 'FooterShow',

  components: {
    TwitterIcon,
    LinkedInIcon,
    FacebookIcon,
    InstagramIcon
  },

  setup() {
    const { t, isRTL } = useTranslation()
    const email = ref<string>('')
    const isSubscribing = ref<boolean>(false)
    
    const currentYear = computed(() => new Date().getFullYear())

    // Helper function to ensure we get a string from translation
    const getTranslationAsString = (key: string, params?: Record<string, string>): string => {
      const result = t(key, params)
      return Array.isArray(result) ? result[0] || key : result
    }

    // Helper function to get the copyright with year interpolation
    const getCopyright = (): string => {
      return getTranslationAsString('footer.copyright', { year: currentYear.value.toString() })
    }

    const socialLinks: SocialLink[] = [
      { name: 'Twitter', url: 'https://twitter.com/loyalfy', icon: 'TwitterIcon' },
      { name: 'LinkedIn', url: 'https://linkedin.com/company/loyalfy', icon: 'LinkedInIcon' },
      { name: 'Facebook', url: 'https://facebook.com/loyalfy', icon: 'FacebookIcon' },
      { name: 'Instagram', url: 'https://instagram.com/loyalfy', icon: 'InstagramIcon' }
    ]

    const productLinks: Link[] = [
      { name: 'Features', url: '#features' },
      { name: 'Benefits', url: '#benefits' },
      { name: 'Pricing', url: '#pricing' },
      { name: 'Integrations', url: '#integrations' },
      { name: 'API Documentation', url: '#api' },
      { name: 'Live Demo', url: '#demo' }
    ]

    const companyLinks: Link[] = [
      { name: 'About Us', url: '#about' },
      { name: 'Our Story', url: '#story' },
      { name: 'Careers', url: '#careers' },
      { name: 'Press Kit', url: '#press' },
      { name: 'Blog', url: '#blog' },
      { name: 'Partners', url: '#partners' }
    ]

    const supportLinks: Link[] = [
      { name: 'Help Center', url: '#help' },
      { name: 'Contact Support', url: '#contact' },
      { name: 'System Status', url: '#status' },
      { name: 'Community', url: '#community' },
      { name: 'Tutorials', url: '#tutorials' },
      { name: 'Webinars', url: '#webinars' }
    ]

    const legalLinks: Link[] = [
      { name: getTranslationAsString('footer.legal.privacy'), url: '#privacy' },
      { name: getTranslationAsString('footer.legal.terms'), url: '#terms' },
      { name: getTranslationAsString('footer.legal.cookies'), url: '#cookies' }
    ]

    const handleSubscribe = async (): Promise<void> => {
      if (email.value && !isSubscribing.value) {
        isSubscribing.value = true
        console.log('Subscribing email:', email.value)
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        email.value = ''
        isSubscribing.value = false
        
        console.log('Successfully subscribed!')
      }
    }

    const handleLinkClick = (url: string): void => {
      console.log('Navigating to:', url)
      if (url.startsWith('#')) {
        const element = document.getElementById(url.substring(1))
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        window.open(url, '_blank')
      }
    }

    const handleContactClick = (type: string): void => {
      switch (type) {
        case 'email':
          window.location.href = 'mailto:support@loyalfy.io'
          break
        case 'phone':
          window.location.href = 'tel:+966583872101'
          break
        case 'location':
          window.open('https://maps.google.com/?q=Riyadh,Saudi+Arabia', '_blank')
          break
      }
    }

    return {
      isRTL,
      email,
      isSubscribing,
      currentYear,
      socialLinks,
      productLinks,
      companyLinks,
      supportLinks,
      legalLinks,
      getTranslationAsString,
      getCopyright,
      handleSubscribe,
      handleLinkClick,
      handleContactClick
    }
  }
})
</script>
