<template>
  <div class="container mx-auto p-3 md:p-8">
    <div class="flex flex-col-reverse md:flex-row relative">
      <div class="w-full md:w-2/3">
        <div class="flex flex-col gap-4 md:px-20 fade-zoom-up">
          <article v-for="article in articles" :key="article.id">
            <router-link :to="`/read/${article.slug}/${article.id}`" 
              :class="$root.isLightMode ? 'flex w-full bg-white border-gray-200 rounded-xl text-left p-5 md:py-7 md:px-8 cursor-pointer hover:bg-gray-100 items-center' : 'flex w-full bg-[#1e1e1f] border-[#383838] rounded-xl text-left text-white p-5 md:py-7 md:px-8 cursor-pointer hover:bg-[#282828] items-center'">
              <div class="w-full pr-4">                <div class="text-xs mb-1 flex items-center italic" 
                :class="$root.isLightMode ? 'text-gray-500' : 'text-slate-400'">
                  <div class="h-[1px] w-20 bg-blue-500 md:w-5 aos-init aos-animate mr-2"></div> {{ article.date }}
                </div>
                <h1 class="text-sm md:text-md text-blue-400 font-bold mb-2 paraf">{{ article.title }}</h1>
                <div class="text-sm hidden md:block paraf" :class="$root.isLightMode ? 'text-gray-700' : 'text-white'">{{ article.desc }}</div>
              </div>
              <div>
                <div class="w-20 h-20 md:w-28 flex items-center md:h-28">
                  <img :src="article.image" class="rounded-lg md:rounded-xl" alt="">
                </div>
              </div>
            </router-link>
          </article>
        </div>
      </div>      <div class="w-full md:w-1/3 h-fit p-8 md:sticky md:top-24">
        <!-- Sidebar -->
        <div class="flex flex-col text-left">          
          <div class="text-transparent bg-clip-text"
            :class="$root.isLightMode ? 'bg-gradient-to-r from-gray-700 to-blue-500' : 'bg-gradient-to-r from-slate-100 to-blue-500'">
            Let's share experiences, stories, and knowledge together.
          </div>
          <div class="h-[1px] mt-7 mb-7 w-20 bg-blue-500 aos-init aos-animate mr-2"></div>
          <div class="hidden md:block">
            <div :class="$root.isLightMode ? 'text-gray-800' : 'text-white'" class="text-md font-semibold">Topics</div>
            <div class="mt-3 flex flex-wrap gap-1">
              <span
                :class="$root.isLightMode ? 'py-2 px-3 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs cursor-pointer' : 'py-2 px-3 rounded-2xl bg-[#1e1e1f] hover:bg-white/20 text-white text-xs cursor-pointer'">NodeJS</span>
              <span
                :class="$root.isLightMode ? 'py-2 px-3 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs cursor-pointer' : 'py-2 px-3 rounded-2xl bg-[#1e1e1f] hover:bg-white/20 text-white text-xs cursor-pointer'">Technology</span>
            </div>
            <div class="h-[1px] mt-7 mb-7 w-20 bg-blue-500 aos-init aos-animate mr-2"></div>
            <div :class="$root.isLightMode ? 'text-gray-800' : 'text-white'" class="text-md font-semibold">Popular Articles</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ArticleList />
</template>
  
<script>
import ArticleList from '@/components/ArticleList.vue';
import axios from "axios";
export default {
  data() {
    return {
      articles: []
    }
  },
  components: {
    ArticleList
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
  text-overflow: ellipsis;
  overflow: hidden;
}
@media (min-width: 768px) { 
  .paraf {
    display: -webkit-box;
  }
}
@keyframes fadeZoomUp {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.fade-zoom-up {
  animation: fadeZoomUp 1s ease-in-out;
  /* animation-delay: 1000ms; */
}
</style>