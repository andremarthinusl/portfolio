<template>
  <main
    class="relative flex flex-col-reverse items-center gap-10 pb-28 md:pb-10 md:grid md:grid-cols-2 md:gap-8 min-h-[70vh] md:min-h-[82vh] px-6 md:px-10"
  >
    <!-- background decoration -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden -z-10">
      <div
        class="absolute top-1/4 -left-32 h-96 w-96 rounded-full blur-3xl opacity-[0.07]"
        :class="$root.isLightMode ? 'bg-blue-600' : 'bg-blue-500'"
      ></div>
      <div
        class="absolute bottom-0 -right-32 h-96 w-96 rounded-full blur-3xl opacity-[0.06]"
        :class="$root.isLightMode ? 'bg-sky-500' : 'bg-sky-400'"
      ></div>
      <div class="hero-grid absolute inset-0 opacity-[0.35]"></div>
    </div>

    <!-- text column -->
    <div class="space-y-4 text-center md:text-left md:pl-6 lg:pl-14">
      <div
        class="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium fadein-up fadein-1"
        :class="
          $root.isLightMode
            ? 'border-blue-200 bg-blue-50 text-blue-700'
            : 'border-blue-400/20 bg-blue-400/10 text-blue-300'
        "
      >
        Hello World, I'm
      </div>

      <h1
        class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.3] md:leading-[1.08] fadein-up fadein-2"
        :class="$root.isLightMode ? 'text-gray-900' : 'text-white'"
      >
        Andre Marthinus<br />
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-blue-500"
          >Lumempouw</span
        >
      </h1>

      <div class="py-1">
        <h2
          class="typewrite text-lg font-semibold md:text-2xl fadein-up fadein-3"
          :class="$root.isLightMode ? 'text-gray-700' : 'text-gray-200'"
          ref="typewriter"
        >
          <span class="wrap">{{ txt }}</span>
        </h2>
      </div>

      <p
        class="max-w-md mx-auto md:mx-0 text-sm md:text-base leading-relaxed fade-in-from-left fade-500"
        :class="$root.isLightMode ? 'text-gray-600' : 'text-gray-300'"
      >
        Welcome to my personal website.
        <span class="wave inline-block">👋🏼</span>
      </p>

      <!-- CTA + socials -->
      <div class="flex items-center justify-center md:justify-start gap-3 pt-2 fadein-up fade-500">
        <router-link
          to="/portfolio"
          class="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white bg-blue-500 hover:bg-blue-400 shadow-lg shadow-blue-500/25 hover:shadow-blue-400/30 hover:-translate-y-0.5 transition-all duration-300"
        >
          View My Work
          <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clip-rule="evenodd"
            />
          </svg>
        </router-link>
        <router-link
          to="/about"
          class="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold border transition-all duration-300 hover:-translate-y-0.5"
          :class="
            $root.isLightMode
              ? 'border-gray-300 text-gray-700 hover:border-blue-400 hover:text-blue-600'
              : 'border-white/15 text-gray-200 hover:border-blue-400/60 hover:text-blue-300'
          "
        >
          About Me
        </router-link>

        <div
          class="hidden sm:flex items-center ml-2 pl-3 border-l"
          :class="$root.isLightMode ? 'border-gray-300' : 'border-white/15'"
        >
          <a
            href="https://github.com/andremarthinusl"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            class="p-2 rounded-lg transition-colors duration-300"
            :class="
              $root.isLightMode
                ? 'text-gray-500 hover:text-gray-900'
                : 'text-gray-400 hover:text-white'
            "
          >
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 015.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55A11.51 11.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- avatar column -->
    <div class="relative flex justify-center fadein-right md:pr-6 lg:pr-16">
      <div class="relative">
        <div
          class="absolute -inset-4 rounded-full bg-gradient-to-tr from-blue-500 via-sky-400 to-blue-600 opacity-20 blur-2xl"
        ></div>
        <div
          class="absolute inset-0 rounded-full border-2 border-dashed animate-[spin_28s_linear_infinite]"
          :class="$root.isLightMode ? 'border-blue-300/60' : 'border-blue-400/30'"
          style="margin: -14px"
        ></div>
        <img
          alt="avatar"
          fetchpriority="high"
          width="300"
          height="300"
          decoding="async"
          class="relative w-64 sm:w-72 md:w-80 lg:w-[22rem] aspect-square rounded-full border-4 pict"
          :class="$root.isLightMode ? 'border-white' : 'border-[#121212]'"
          src="https://avatars.githubusercontent.com/u/192032451?v=4"
        />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      toRotate: ["Web Developer", "Informatics Student"],
      period: 2000,
      txt: '',
      loopNum: 0,
      isDeleting: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.tick();
    });
  },
  methods: {
    tick() {
      let typewriter = this.$refs.typewriter;

      if (!typewriter) {
        return;
      }

      let i = this.loopNum % this.toRotate.length;
      let fullTxt = this.toRotate[i];

      this.txt = this.isDeleting ? fullTxt.substring(0, this.txt.length - 1) : fullTxt.substring(0, this.txt.length + 1);
      typewriter.innerHTML = `<span class="wrap">${this.txt}</span>`;

      let that = this;
      let delta = 200 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(() => {
        that.tick();
      }, delta);
    },
  }
}
</script>

<style>
body {
  overflow-y: scroll;
  overflow-x: hidden;
}

.hero-grid {
  background-image:
    linear-gradient(to right, rgba(59, 130, 246, 0.06) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(59, 130, 246, 0.06) 1px, transparent 1px);
  background-size: 44px 44px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 70%);
}

.typewrite>.wrap {
  border-right: 0.08em solid #3b82f6;
  animation: blink-caret-dark 0.75s step-end infinite;
}

body.light-mode .typewrite>.wrap {
  border-right: 0.08em solid #1e293b;
  animation: blink-caret-light 0.75s step-end infinite;
}

@keyframes blink-caret-dark {
  from, to { border-color: transparent }
  50% { border-color: #3b82f6; }
}

@keyframes blink-caret-light {
  from, to { border-color: transparent }
  50% { border-color: #1e293b; }
}

.wave {
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg)
  }

  10% {
    transform: rotate(14deg)
  }

  20% {
    transform: rotate(-8deg)
  }

  30% {
    transform: rotate(14deg)
  }

  40% {
    transform: rotate(-4deg)
  }

  50% {
    transform: rotate(10deg)
  }

  60% {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(0deg)
  }
}

.pict {
  box-shadow: 0px 0px 73px -9px rgba(59, 130, 246, 0.44);
  -webkit-box-shadow: 0px 0px 73px -9px rgba(59, 130, 246, 0.44);
  -moz-box-shadow: 0px 0px 73px -9px rgba(59, 130, 246, 0.44);
}

.fadein-up {
  opacity: 0;
  animation-name: fadeInUp;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-delay: 500ms;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 24px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fade-in-from-left {
  opacity: 0;
  animation: fadeInLeft 0.5s ease-out forwards;
  animation-delay: 500ms;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-24px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadein-right {
  opacity: 0;
  animation: fadeInRight 0.6s ease-out forwards;
  animation-delay: 500ms;
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(24px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadein-bot {
  opacity: 0;
  animation: fadeInBot 0.5s forwards;
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

.fadein-1 {
  animation-delay: 200ms;
}
.fadein-2 {
  animation-delay: 400ms;
}
.fadein-3 {
  animation-delay: 600ms;
}
.fade-500 {
  animation-delay: 500ms;
}
</style>
