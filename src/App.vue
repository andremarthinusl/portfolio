<template>
  <div class="min-h-screen" :class="{ 'light-mode': isLightMode }">
    <!-- ============ NAVBAR ============ -->
    <nav
      class="fixed top-0 left-0 right-0 z-[98] border-b backdrop-blur-xl transition-colors duration-300"
      :class="
        isLightMode
          ? 'bg-white/80 border-gray-200/80'
          : 'bg-[#0d0d0f]/80 border-white/5'
      "
    >
      <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-8">
        <!-- logo -->
        <button @click="redirectToHome" class="group flex items-center fadein-bot">
          <span
            class="font-mono text-sm font-semibold"
            :class="isLightMode ? 'text-gray-800' : 'text-gray-100'"
          >
            <span class="text-blue-500">~</span>$ echo "AndreAja"<span class="animate-pulse">_</span>
          </span>
        </button>

        <!-- desktop links -->
        <div class="hidden md:flex items-center gap-1 fadein-bot rounded-full border p-1 transition-colors duration-300"
          :class="isLightMode ? 'bg-gray-100/80 border-gray-200' : 'bg-white/5 border-white/10'">
          <router-link
            v-for="(link, i) in navLinks"
            :key="link.to"
            :to="link.to"
            :class="[
              'rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300',
              $route.path === link.to
                ? 'bg-blue-500 text-white shadow-md shadow-blue-500/30'
                : isLightMode
                ? 'text-gray-600 hover:text-gray-900 hover:bg-white'
                : 'text-gray-400 hover:text-white hover:bg-white/10',
              `fadein-bot fadein-${i + 1}`,
            ]"
          >{{ link.label }}</router-link>
        </div>

        <!-- actions -->
        <div class="flex items-center gap-2 fadein-bot">
          <button
            @click="toggleTheme"
            aria-label="Toggle theme"
            class="flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 hover:scale-105"
            :class="
              isLightMode
                ? 'bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200'
                : 'bg-white/5 border-white/10 text-yellow-300 hover:bg-white/10'
            "
          >
            <svg v-if="isLightMode" xmlns="http://www.w3.org/2000/svg" class="h-[18px] w-[18px]" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-[18px] w-[18px]" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
            </svg>
          </button>
          <a
            href="https://github.com/andremarthinusl"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            class="flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 hover:scale-105"
            :class="
              isLightMode
                ? 'bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200'
                : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
            "
          >
            <svg class="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 015.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55A11.51 11.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"
              />
            </svg>
          </a>
        </div>
      </div>
    </nav>

    <!-- ============ PAGE CONTENT ============ -->
    <div class="pt-16">
      <router-view />
    </div>
  </div>

  <!-- ============ MOBILE BOTTOM NAV ============ -->
  <footer
    class="block md:hidden fixed bottom-0 left-3 right-3 mb-3 z-[98] rounded-2xl border backdrop-blur-xl"
    :class="
      isLightMode
        ? 'bg-white/90 border-gray-200 shadow-lg shadow-gray-200/50'
        : 'bg-[#161618]/90 border-white/10 shadow-lg shadow-black/40'
    "
  >
    <nav class="flex justify-around py-2">
      <router-link
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        class="flex flex-col items-center gap-0.5 rounded-xl px-4 py-1.5 text-[11px] font-medium transition-colors duration-300"
        :class="
          $route.path === link.to
            ? 'text-blue-500'
            : isLightMode
            ? 'text-gray-500 hover:text-gray-800'
            : 'text-gray-400 hover:text-white'
        "
      >
        <svg v-if="link.to === '/'" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 1.6l7.2 5.1v10.7a1 1 0 01-1 1h-4.2v-5.9h-4v5.9H3.8a1 1 0 01-1-1V6.7L10 1.6z" />
        </svg>
        <svg v-else-if="link.to === '/about'" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 10a4 4 0 100-8 4 4 0 000 8zm-7 8a7 7 0 1114 0H3z" clip-rule="evenodd" />
        </svg>
        <svg v-else-if="link.to === '/portfolio'" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M1.5 6a2 2 0 012-2h13a2 2 0 012 2v8a2 2 0 01-2 2h-13a2 2 0 01-2-2V6zm2-.5a.5.5 0 00-.5.5v1h16V6a.5.5 0 00-.5-.5h-15zM3 9v4.5a.5.5 0 00.5.5h13a.5.5 0 00.5-.5V9H3z" clip-rule="evenodd" />
        </svg>
        <svg v-else class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4 3.5A1.5 1.5 0 015.5 2h9A1.5 1.5 0 0116 3.5v10.7l-2.5-1.7-2.5 1.7-2.5-1.7L6 14.2 4 12.7V3.5zm3 3a.75.75 0 000 1.5h6a.75.75 0 000-1.5H7zm0 3a.75.75 0 000 1.5h4a.75.75 0 000-1.5H7z" clip-rule="evenodd" />
        </svg>
        {{ link.label }}
      </router-link>
    </nav>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      isLightMode: false,
      navLinks: [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/portfolio', label: 'Portfolio' },
        { to: '/blog', label: 'Blog' },
      ],
    }
  },
  mounted() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      this.isLightMode = true;
      document.body.classList.add('light-mode');
    }
  },
  watch: {
    isLightMode(newValue) {
      if (newValue) {
        document.body.classList.add('light-mode');
      } else {
        document.body.classList.remove('light-mode');
      }
    }
  },
  methods: {
    redirectToHome() {
      this.$router.push('/')
    },
    toggleTheme() {
      this.isLightMode = !this.isLightMode;
      localStorage.setItem('theme', this.isLightMode ? 'light' : 'dark');
    }
  },
}
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-track {
  border-radius: 5px;
}

body:not(.light-mode) ::-webkit-scrollbar-track {
  background: hsl(240, 1%, 17%);
}

body.light-mode ::-webkit-scrollbar-track {
  background: hsl(210, 20%, 90%);
}

::-webkit-scrollbar-thumb {
  background: #3b82f6;
  border-radius: 5px;
}

::-webkit-scrollbar-button { width: 20px; }

body {
  font-family: 'Poppins', sans-serif;
  background: hsl(240, 6%, 5%);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  transition: background-color 0.3s ease;
}

body.light-mode {
  background-color: #f8fafc !important;
}

.light-mode {
  background-color: #f8fafc;
  color: #1e293b;
}

nav a {
  transition: color 0.3s;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInBot {
  from {
    opacity: 0;
    transform: translate3d(0, -12px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fadein-bot {
  opacity: 0;
  animation: fadeInBot 0.5s forwards;
}

.fadein-1 { animation-delay: 100ms; }
.fadein-2 { animation-delay: 200ms; }
.fadein-3 { animation-delay: 300ms; }
.fadein-4 { animation-delay: 400ms; }
</style>
