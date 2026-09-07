<script>
export default {
  data() {
    return {
      activeTab: 1,
      tech: [
        {
          id: 1,
          name: "HTML",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
          status: "Advanced",
        },
        {
          id: 2,
          name: "CSS",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
          status: "Advanced",
        },
        {
          id: 3,
          name: "PHP",
          imageUrl:
            "https://cdn.iconscout.com/icon/free/png-256/free-php-2038871-1720084.png",
          status: "Advanced",
        },
        {
          id: 4,
          name: "Javascript",
          imageUrl:
            "https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png",
          status: "Advanced",
        },
        {
          id: 5,
          name: "Laravel",
          imageUrl: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
          status: "Intermediate",
        },
        {
          id: 6,
          name: "VueJS",
          imageUrl:
            "https://cdn.iconscout.com/icon/free/png-256/free-vue-282497.png?f=webp",
          status: "Intermediate",
        },
        {
          id: 7,
          name: "Tailwind",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
          status: "Intermediate",
        },
        {
          id: 8,
          name: "Bootstrap",
          imageUrl:
            "https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png",
          status: "Intermediate",
        },
        {
          id: 9,
          name: "ReactJS",
          imageUrl:
            "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
          status: "Intermediate",
        },
        {
          id: 10,
          name: "Next.js",
          imageUrl: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
          status: "Intermediate",
        },
      ],
      tools: [
        {
          id: 1,
          name: "Git",
          imageUrl:
            "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
          status: "Version Control",
        },
        {
          id: 2,
          name: "GitHub",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
          status: "Git Hosting",
        },
        {
          id: 3,
          name: "NPM",
          imageUrl:
            "https://cdn.iconscout.com/icon/free/png-256/free-npm-3-1175132.png",
          status: "Package Manager",
        },
        {
          id: 4,
          name: "MySQL",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png",
          status: "Database",
        },
        {
          id: 5,
          name: "VS Code",
          imageUrl:
            "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg",
          status: "Code Editor",
        },
      ],
    };
  },
  computed: {
    light() {
      return this.$root.isLightMode;
    },
  },
};
</script>

<template>
  <div class="about-page text-left px-4 md:px-8 pb-32 md:pb-24 pt-6 md:pt-10 max-w-6xl mx-auto">
    <!-- ============ ABOUT ME ============ -->
    <section
      class="relative overflow-hidden rounded-3xl border p-6 md:p-10 fadein-bot"
      :class="
        light
          ? 'bg-white border-gray-200 shadow-sm shadow-gray-200/60'
          : 'bg-[#161618] border-white/10 shadow-lg shadow-black/30'
      "
    >
      <!-- decorative gradient blob -->
      <div
        class="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-20 blur-3xl"
        :class="light ? 'bg-blue-400' : 'bg-blue-600'"
      ></div>

      <header class="relative flex items-center gap-3 mb-8">
        <span class="h-8 w-1.5 rounded-full bg-gradient-to-b from-blue-400 to-blue-600"></span>
        <h2
          class="text-2xl md:text-3xl font-bold tracking-tight"
          :class="light ? 'text-gray-900' : 'text-white'"
        >
          About <span class="text-blue-500">Me</span>
        </h2>
      </header>

      <div class="relative grid gap-8 md:grid-cols-[280px_1fr] md:gap-12 items-center">
        <!-- avatar -->
        <div class="flex justify-center fadein-up">
          <div class="relative">
            <div
              class="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500 via-sky-400 to-blue-600 rotate-3 opacity-70"
            ></div>
            <img
              class="relative w-56 md:w-64 rounded-3xl object-cover ring-4 ring-offset-0"
              :class="light ? 'ring-white' : 'ring-[#161618]'"
              src="https://avatars.githubusercontent.com/u/192032451?v=4"
              alt="Andre Marthinus Lumempouw"
            />
          </div>
        </div>

        <!-- bio -->
        <div>
          <h3
            class="text-lg md:text-xl font-semibold mb-1 fadein-up fadein-1"
            :class="light ? 'text-gray-900' : 'text-gray-100'"
          >
            Andre Marthinus Lumempouw
          </h3>
          <p class="text-sm font-medium text-blue-500 mb-5 fadein-up fadein-1">
            Web Developer &amp; Informatics Student
          </p>

          <div class="space-y-4 text-sm md:text-base leading-relaxed">
            <p
              class="fade-in-from-left fadein-1"
              :class="light ? 'text-gray-600' : 'text-gray-300'"
            >
              Hi everyone! My name is Andre Marthinus Lumempouw. I'm a web
              developer from Balikpapan, Kalimantan Timur. I really enjoy what
              I do right now — in my opinion, creating programs is not just a
              job, but also an art that has aesthetic value.
            </p>
            <p
              class="fade-in-from-left fadein-2"
              :class="light ? 'text-gray-600' : 'text-gray-300'"
            >
              I'm passionate about building responsive and user-friendly web
              applications, and I'm continuously exploring new technologies to
              grow as a full-stack developer.
            </p>
          </div>

          <!-- info chips -->
          <div class="flex flex-wrap gap-2 mt-6 fadein-up fadein-3">
            <span
              class="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium border"
              :class="
                light
                  ? 'bg-blue-50 border-blue-100 text-blue-700'
                  : 'bg-blue-500/10 border-blue-400/20 text-blue-300'
              "
            >
              <svg class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  d="M10 2a6 6 0 00-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 00-6-6zm0 8.5A2.5 2.5 0 1110 5.5a2.5 2.5 0 010 5z"
                />
              </svg>
              Balikpapan, Indonesia
            </span>
            <span
              class="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium border"
              :class="
                light
                  ? 'bg-gray-50 border-gray-200 text-gray-700'
                  : 'bg-white/5 border-white/10 text-gray-300'
              "
            >
              <svg class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M1.5 3.75a.75.75 0 01.75-.75h15.5a.75.75 0 01.75.75v9.5a.75.75 0 01-.75.75H16v1.75a.75.75 0 01-.75.75h-10.5a.75.75 0 01-.75-.75V14H2.25a.75.75 0 01-.75-.75V3.75zM3 12.5h14v-8H3v8zm5.25 1.5h3.5v1h-3.5v-1z"
                  clip-rule="evenodd"
                />
              </svg>
              Full-Stack Web Developer
            </span>
            <span
              class="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium border"
              :class="
                light
                  ? 'bg-gray-50 border-gray-200 text-gray-700'
                  : 'bg-white/5 border-white/10 text-gray-300'
              "
            >
              <svg class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M10 1.75a.75.75 0 01.39.108l8 5a.75.75 0 010 1.284l-8 5a.75.75 0 01-.78 0l-8-5a.75.75 0 010-1.284l8-5A.75.75 0 0110 1.75zM4.25 8.5l5.75 3.595V16a.75.75 0 001.5 0v-3.905L17.25 8.5l-1.5-.938L10 10.905 4.25 7.562l-1.5.938 1.5.001z"
                  clip-rule="evenodd"
                />
              </svg>
              Informatics Student
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ SKILLS ============ -->
    <section class="mt-12 md:mt-16">
      <header class="flex items-center gap-3 mb-8 fadein-bot fadein-1">
        <span class="h-8 w-1.5 rounded-full bg-gradient-to-b from-blue-400 to-blue-600"></span>
        <h2
          class="text-2xl md:text-3xl font-bold tracking-tight"
          :class="light ? 'text-gray-900' : 'text-white'"
        >
          Skills
        </h2>
      </header>

      <!-- tabs -->
      <div
        class="inline-flex rounded-2xl p-1.5 border mb-8 fadein-bot fadein-2"
        :class="
          light
            ? 'bg-gray-100 border-gray-200'
            : 'bg-[#161618] border-white/10'
        "
      >
        <button
          class="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
          :class="
            activeTab === 1
              ? 'bg-blue-500 text-white shadow-md shadow-blue-500/30'
              : light
              ? 'text-gray-600 hover:text-gray-900'
              : 'text-gray-400 hover:text-gray-200'
          "
          @click="activeTab = 1"
        >
          Tech Stack
        </button>
        <button
          class="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
          :class="
            activeTab === 2
              ? 'bg-blue-500 text-white shadow-md shadow-blue-500/30'
              : light
              ? 'text-gray-600 hover:text-gray-900'
              : 'text-gray-400 hover:text-gray-200'
          "
          @click="activeTab = 2"
        >
          Tools
        </button>
      </div>

      <!-- skill grids -->
      <transition name="tab-fade" mode="out-in">
        <div
          v-if="activeTab === 1"
          key="tech"
          class="grid grid-cols-2 gap-3 md:gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
          <div
            v-for="(item, i) in tech"
            :key="item.id"
            class="skill-card group relative flex flex-col items-start gap-3 rounded-2xl border p-4 md:p-5 cursor-pointer transition-all duration-300"
            :class="
              light
                ? 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100'
                : 'bg-[#161618] border-white/10 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-900/20'
            "
            :style="{ animationDelay: `${i * 60}ms` }"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl p-2.5 transition-transform duration-300 group-hover:scale-110"
              :class="light ? 'bg-gray-50' : 'bg-white/5'"
            >
              <img
                :alt="item.name"
                loading="lazy"
                decoding="async"
                class="h-full w-full object-contain drop-shadow-lg"
                :src="item.imageUrl"
              />
            </div>
            <div>
              <p
                class="font-semibold text-sm md:text-base"
                :class="light ? 'text-gray-900' : 'text-gray-100'"
              >
                {{ item.name }}
              </p>
              <p class="text-xs mt-0.5 text-blue-500 font-medium">{{ item.status }}</p>
            </div>
          </div>
        </div>

        <div
          v-else
          key="tools"
          class="grid grid-cols-2 gap-3 md:gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
          <div
            v-for="(item, i) in tools"
            :key="item.id"
            class="skill-card group relative flex flex-col items-start gap-3 rounded-2xl border p-4 md:p-5 cursor-pointer transition-all duration-300"
            :class="
              light
                ? 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100'
                : 'bg-[#161618] border-white/10 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-900/20'
            "
            :style="{ animationDelay: `${i * 60}ms` }"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl p-2.5 transition-transform duration-300 group-hover:scale-110"
              :class="light ? 'bg-gray-50' : 'bg-white/5'"
            >
              <img
                :alt="item.name"
                loading="lazy"
                decoding="async"
                class="h-full w-full object-contain drop-shadow-lg"
                :src="item.imageUrl"
              />
            </div>
            <div>
              <p
                class="font-semibold text-sm md:text-base"
                :class="light ? 'text-gray-900' : 'text-gray-100'"
              >
                {{ item.name }}
              </p>
              <p class="text-xs mt-0.5 text-blue-500 font-medium">{{ item.status }}</p>
            </div>
          </div>
        </div>
      </transition>
    </section>
  </div>
</template>

<style scoped>
.skill-card {
  opacity: 0;
  animation: cardIn 0.45s ease-out forwards;
}

@keyframes cardIn {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.tab-fade-enter-active,
.tab-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.tab-fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.tab-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
