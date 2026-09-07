<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Portal Habbo Agency",
          imageUrl: "portal",
          status:
            "This portal is designed to help users record all activities carried out in the agency such as promotions, trainings and others.",
          tech: ["Laravel 11", "Bootstrap 5"],
          github: null,
          demo: null,
        },
        {
          id: 2,
          name: "IAF Portfolio Website",
          imageUrl: "iaf",
          status:
            "A custom portfolio website for the International Army Force, built to showcase activities, ranks, and resources for the Habbo agency roleplay community.",
          tech: ["PHP", "HTML", "Bootstrap", "JavaScript"],
          github: null,
          demo: "https://habboiaf.com",
        },
        {
          id: 3,
          name: "Nimex Komix",
          imageUrl: "nimex",
          status:
            "A streaming anime and manga reading website that fetches data from external sources like Otakudesu and Komikstation.",
          tech: ["Next.js"],
          github: null,
          demo: "https://nimex-komix.vercel.app",
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
  <div class="max-w-6xl mx-auto px-4 md:px-8 pb-32 md:pb-24 pt-6 md:pt-10 text-left">
    <header class="text-center mb-12 md:mb-16 fadein-bot">
      <p class="text-sm font-semibold tracking-widest uppercase text-blue-500 mb-2">
        Portfolio
      </p>
      <h2
        class="text-3xl md:text-4xl font-extrabold tracking-tight"
        :class="light ? 'text-gray-900' : 'text-white'"
      >
        Past Project Experience
      </h2>
      <p class="mt-3 text-sm md:text-base" :class="light ? 'text-gray-500' : 'text-gray-400'">
        Explore the projects I've worked on so far
      </p>
      <div class="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-blue-400 to-sky-500"></div>
    </header>

    <section class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-7">
      <article
        v-for="(item, i) in items"
        :key="item.id"
        class="project-card group flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1.5"
        :class="
          light
            ? 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/70'
            : 'bg-[#161618] border-white/10 hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-950/40'
        "
        :style="{ animationDelay: `${i * 120}ms` }"
      >
        <!-- thumbnail -->
        <div class="relative overflow-hidden">
          <div class="aspect-[16/10] w-full overflow-hidden">
            <img
              :alt="item.name"
              loading="lazy"
              decoding="async"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              :src="'/img/portfolio-' + item.imageUrl + '.png'"
            />
          </div>
          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          ></div>
        </div>

        <!-- body -->
        <div class="flex flex-1 flex-col p-5 md:p-6">
          <h3
            class="text-lg font-bold mb-2 transition-colors duration-300"
            :class="light ? 'text-gray-900 group-hover:text-blue-600' : 'text-gray-100 group-hover:text-blue-300'"
          >
            {{ item.name }}
          </h3>
          <p
            class="flex-1 text-sm leading-relaxed"
            :class="light ? 'text-gray-600' : 'text-gray-400'"
          >
            {{ item.status }}
          </p>

          <!-- tech tags -->
          <div class="mt-4 flex flex-wrap gap-1.5">
            <span
              v-for="t in item.tech"
              :key="t"
              class="rounded-full px-2.5 py-1 text-[11px] font-medium"
              :class="
                light
                  ? 'bg-blue-50 text-blue-700'
                  : 'bg-blue-400/10 text-blue-300'
              "
            >
              {{ t }}
            </span>
          </div>

          <!-- links -->
          <div class="mt-5 flex items-center justify-between border-t pt-4" :class="light ? 'border-gray-100' : 'border-white/5'">
            <span class="text-[11px] font-medium uppercase tracking-wider" :class="light ? 'text-gray-400' : 'text-gray-500'">
              {{ item.demo ? 'Live project' : 'Private project' }}
            </span>
            <div class="flex items-center gap-1">
              <a
                v-if="item.github"
                :href="item.github"
                target="_blank"
                rel="noreferrer"
                title="View github repository"
                class="rounded-lg p-2 transition-colors duration-300"
                :class="light ? 'text-gray-500 hover:bg-gray-100 hover:text-gray-900' : 'text-gray-400 hover:bg-white/10 hover:text-white'"
              >
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                v-if="item.demo"
                :href="item.demo"
                target="_blank"
                rel="noreferrer"
                title="View finished project"
                class="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-300 bg-blue-500 text-white hover:bg-blue-400 shadow-md shadow-blue-500/20"
              >
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Visit
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<style scoped>
.project-card {
  opacity: 0;
  animation: cardIn 0.5s ease-out forwards;
}

@keyframes cardIn {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
