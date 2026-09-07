<template>
  <div class="max-w-6xl mx-auto px-4 md:px-8 pb-32 md:pb-24 pt-6 md:pt-10">
    <!-- page header -->
    <header class="text-left mb-10 fadein-bot">
      <p class="text-sm font-semibold tracking-widest uppercase text-blue-500 mb-2">Blog</p>
      <h2
        class="text-3xl md:text-4xl font-extrabold tracking-tight"
        :class="$root.isLightMode ? 'text-gray-900' : 'text-white'"
      >
        Latest Articles
      </h2>
      <div class="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-blue-400 to-sky-500"></div>
    </header>

    <div class="flex flex-col-reverse md:flex-row gap-8 relative items-start">
      <!-- article list -->
      <div class="w-full md:w-2/3">
        <div class="flex flex-col gap-4">
          <article
            v-for="(article, i) in articles"
            :key="article.id"
            class="blog-card"
            :style="{ animationDelay: `${i * 100}ms` }"
          >
            <router-link
              :to="`/read/${article.slug}/${article.id}`"
              class="group flex w-full items-center gap-4 rounded-2xl border p-4 md:p-6 text-left transition-all duration-300 hover:-translate-y-0.5"
              :class="
                $root.isLightMode
                  ? 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/60'
                  : 'bg-[#161618] border-white/10 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-950/40'
              "
            >
              <div class="w-full pr-2">
                <div
                  class="mb-2 flex items-center gap-2 text-xs font-medium"
                  :class="$root.isLightMode ? 'text-gray-400' : 'text-gray-500'"
                >
                  <span class="h-1 w-6 rounded-full bg-blue-500"></span>
                  {{ article.date }}
                </div>
                <h1
                  class="paraf mb-2 text-base md:text-lg font-bold transition-colors duration-300"
                  :class="
                    $root.isLightMode
                      ? 'text-gray-900 group-hover:text-blue-600'
                      : 'text-gray-100 group-hover:text-blue-300'
                  "
                >
                  {{ article.title }}
                </h1>
                <div
                  class="paraf hidden text-sm leading-relaxed md:block"
                  :class="$root.isLightMode ? 'text-gray-600' : 'text-gray-400'"
                >
                  {{ article.desc }}
                </div>
                <span
                  class="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  Read article
                  <svg class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <div class="shrink-0">
                <div class="h-20 w-20 overflow-hidden rounded-xl md:h-28 md:w-28">
                  <img
                    :src="article.image"
                    alt=""
                    loading="lazy"
                    class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </router-link>
          </article>
        </div>
      </div>

      <!-- sidebar -->
      <aside class="w-full md:w-1/3 md:sticky md:top-24">
        <div
          class="rounded-2xl border p-6 text-left fadein-up"
          :class="
            $root.isLightMode
              ? 'bg-white border-gray-200'
              : 'bg-[#161618] border-white/10'
          "
        >
          <p
            class="text-sm leading-relaxed"
            :class="$root.isLightMode ? 'text-gray-600' : 'text-gray-300'"
          >
            Let's share experiences, stories, and knowledge together.
          </p>

          <div class="my-6 h-px w-full" :class="$root.isLightMode ? 'bg-gray-100' : 'bg-white/5'"></div>

          <div class="hidden md:block">
            <div
              class="text-sm font-bold"
              :class="$root.isLightMode ? 'text-gray-900' : 'text-white'"
            >
              Topics
            </div>
            <div class="mt-3 flex flex-wrap gap-2">
              <span
                v-for="topic in ['NodeJS', 'Technology']"
                :key="topic"
                class="cursor-pointer rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors duration-300"
                :class="
                  $root.isLightMode
                    ? 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                    : 'bg-white/5 text-gray-300 hover:bg-blue-400/15 hover:text-blue-300'
                "
              >
                #{{ topic }}
              </span>
            </div>

            <div class="my-6 h-px w-full" :class="$root.isLightMode ? 'bg-gray-100' : 'bg-white/5'"></div>

            <div
              class="text-sm font-bold"
              :class="$root.isLightMode ? 'text-gray-900' : 'text-white'"
            >
              Popular Articles
            </div>
            <ul class="mt-3 space-y-3">
              <li v-for="(article, i) in articles.slice(0, 3)" :key="article.id">
                <router-link
                  :to="`/read/${article.slug}/${article.id}`"
                  class="group flex items-start gap-3"
                >
                  <span
                    class="text-lg font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-600 opacity-60"
                  >
                    {{ String(i + 1).padStart(2, '0') }}
                  </span>
                  <span
                    class="line-clamp-2 text-xs font-medium leading-snug transition-colors duration-300"
                    :class="
                      $root.isLightMode
                        ? 'text-gray-600 group-hover:text-blue-600'
                        : 'text-gray-300 group-hover:text-blue-300'
                    "
                  >
                    {{ article.title }}
                  </span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      articles: []
    }
  },
  mounted() {
    this.getArticles();
  },
  methods: {
    async getArticles() {
      axios.get('https://64a38c9cc3b509573b564183.mockapi.io/api/blog/all')
        .then(response => {
          this.articles = response.data;
        })
    },
  }
}
</script>

<style scoped>
.paraf {
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blog-card {
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
</style>
