<template>  <div class="max-w-7xl mx-auto flex flex-col relative" :class="{ 'light-mode': isLightMode }">

    <nav class="max-w-7xl px-5 md:fixed top-0 z-[98] w-screen backdrop-blur-md" :class="isLightMode ? 'bg-white bg-opacity-80' : 'bg-[#121212] bg-opacity-80'">
      <div class="container mx-auto flex flex-wrap items-center justify-between">        <button @click="redirectToHome" class="flex">
          <span class="self-center text-lg text-[#3b82f6] font-semibold whitespace-nowrap fadein-bot hover:text-blue-300">echo "AndreAja";</span>
        </button>
        <div class="flex items-center gap-4 md:order-2 fadein-bot">
          <button @click="toggleTheme" class="p-1 rounded-full" :class="isLightMode ? 'bg-gray-200' : 'bg-gray-800'">
            <svg v-if="isLightMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
            </svg>
          </button>
          <a href="https://github.com/andremarthinusl" target="_blank"><img class="w-9 rounded-full" src="https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png" alt="github"></a>
        </div>        <div class="hidden md:flex justify-between items-center w-full md:w-auto md:order-1" id="mobile-menu-3">
          <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
              <router-link to="/"
                :class="[isLightMode ? 'text-gray-800 md:hover:text-gray-600' : 'text-gray-300 md:hover:text-gray-100', 'fadein-bot border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:p-0']"
                aria-current="page">Home</router-link>
            </li>
            <li>
              <router-link to="/about"
                :class="[isLightMode ? 'text-gray-800 md:hover:text-gray-600' : 'text-gray-300 md:hover:text-gray-100', 'fadein-bot fadein-1 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:p-0']">About</router-link>
            </li>
            <li>
              <router-link to="/portfolio"
                :class="[isLightMode ? 'text-gray-800 md:hover:text-gray-600' : 'text-gray-300 md:hover:text-gray-100', 'fadein-bot fadein-2 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:p-0']">Portfolio</router-link>
            </li>
            <li>
              <router-link to="/blog"
                :class="[isLightMode ? 'text-gray-800 md:hover:text-gray-600' : 'text-gray-300 md:hover:text-gray-100', 'fadein-bot fadein-3 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:p-0 blog']">Blog</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="md:mt-[100px]">
      <router-view />
    </div>
  </div>  <footer class="block md:hidden fixed bottom-0 left-0 right-0 rounded-t-3xl backdrop-blur-md backdrop-opacity-90"
  :class="isLightMode ? 'border border-gray-200 bg-white bg-opacity-80' : 'border border-[#383838] bg-[#121212] bg-opacity-80'">
  <nav class="flex justify-around py-4 text-xs">
    <router-link to="/" :class="isLightMode ? 'text-gray-600 hover:text-gray-800' : 'text-gray-300 hover:text-white'">Home</router-link>
    <router-link to="/about" :class="isLightMode ? 'text-gray-600 hover:text-gray-800' : 'text-gray-300 hover:text-white'">About</router-link>
    <router-link to="/portfolio" :class="isLightMode ? 'text-gray-600 hover:text-gray-800' : 'text-gray-300 hover:text-white'">Portfolio</router-link>
    <router-link to="/blog" :class="isLightMode ? 'text-gray-600 hover:text-gray-800' : 'text-gray-300 hover:text-white'">Blog</router-link>
  </nav>
</footer>
</template>

<script>
export default {  data() {
    return {
      isLightMode: false
    }
  },
  mounted() {
    // Check for saved theme preference or use default (dark mode)
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
      // Save theme preference
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
  background: hsl(0, 0%, 7%);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  transition: background-color 0.3s ease;
}

/* Light mode styles */
.light-mode {
  background-color: #f8fafc;
  color: #1e293b;
}

body .light-mode {
  background-color: #f8fafc;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  transition: color 0.3s;
}

nav a.router-link-exact-active {
  display: inline-flex;
  flex-direction: column;
  transition: color 0.3s;
}

.light-mode ~ body nav a.router-link-exact-active {
  color: #1e293b;
}

body:not(.light-mode) nav a.router-link-exact-active {
  color: white;
}

nav a.router-link-exact-active::after {
  display: inline-block;
  content: "";
  margin-top: 0.08em;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: #3b82f6;
}

.light-mode ~ body nav a.router-link-exact-active:hover {
  color: #1e293b;
}

body:not(.light-mode) nav a.router-link-exact-active:hover {
  color: white;
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

body.light-mode {
  background-color: #f8fafc !important;
}

.light-mode nav a.router-link-exact-active {
  color: #1e293b;
}

.light-mode ::-webkit-scrollbar-track {
  background: #e2e8f0;
}

</style>
