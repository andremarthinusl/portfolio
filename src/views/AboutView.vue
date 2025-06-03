<script>
export default {
  data() {
    return {
      activeTab: 1,
      tech: [
        {
          id: 1,
          name: 'HTML',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png',
          status: 'Advanced'
        },
        {
          id: 2,
          name: 'CSS',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
          status: 'Advanced'
        },
        {
          id: 3,
          name: 'PHP',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-php-2038871-1720084.png',
          status: 'Advanced'
        },
        {
          id: 4,
          name: 'Javascript',
          imageUrl: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png',
          status: 'Advance'
        },
        {
          id: 5,
          name: 'Laravel',
          imageUrl: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg',
          status: 'Intermediate'
        },
        {
          id: 6,
          name: 'VueJS',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-vue-282497.png?f=webp',
          status: 'Pre-Intermediate'
        },
        {
          id: 7,
          name: 'Tailwind',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
          status: 'Intermediate'
        },
        {
          id: 8,
          name: 'Bootstrap',
          imageUrl: 'https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png',
          status: 'Intermediate'
        },
        {
          id: 9,
          name: 'ReactJS',
          imageUrl: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
          status: 'Beginner'
        }
      ],
      tools: [
        {
          id: 1,
          name: 'Git',
          imageUrl: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
          status: 'Version Control'
        },
        {
          id: 2,
          name: 'GitHub',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
          status: 'Git Hosting'
        },
        {
          id: 3,
          name: 'NPM',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-npm-3-1175132.png',
          status: 'Package Manager'
        },
        {
          id: 4,
          name: 'MySQL',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968313.png',
          status: 'Database'
        },
        {
          id: 5,
          name: 'VS Code',
          imageUrl: 'https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg',
          status: 'Code Editor'
        },
      ]
    };
  }
}
</script>
<template>  <div :class="[$root.isLightMode ? 'bg-white border-gray-200 text-gray-700' : 'bg-[#1e1e1f] border-[#383838] text-blue-50']" class="px-5 py-5 md:px-12 md:py-10 text-left border rounded-3xl mx-3 mb-5">
    <article data-page="about">

      <header>
        <div class="text-2xl font-bold mb-5 fadein-bot title-section flex items-center" :class="$root.isLightMode ? 'text-gray-800' : 'text-white'">
          About Me &nbsp;          
          <div class="h-[1px] w-32 bg-blue-500 md:w-96 aos-init aos-animate" data-aos="zoom-in-left"
            data-aos-duration="600"></div>
        </div>
      </header>

      <section
        class="text-sm md:text-lg text-justify flex flex-col gap-4 md:flex-row md:gap-8 md:justify-left md:items-center">
        <div class="flex justify-center">
          <img class="w-9/12 rounded-full mb-3 fadein-up"
            src="https://avatars.githubusercontent.com/u/192032451?v=4" alt="Foto">
        </div>
        <div class="md:w-7/12">
          <p class="mb-3 md:mb-7 fadein-left fadeins-1">
            &nbsp; &nbsp; &nbsp; Hi everyone! My name is Andre Marthinus Lumempouw. I'm a web developer from Balikpapan, Kalimantan Timur.
            I really enjoy what I do right now, in my opinion, creating programs is not just a job, but also an art that
            has
            aesthetic value
          </p>
          <p class="mb-3 fadein-left fadeins-2">
            &nbsp; &nbsp; &nbsp; I'm passionate about building responsive and user-friendly web applications, and I'm continuously exploring new technologies to grow as a full-stack developer
          </p>
        </div>

      </section>

    </article>
  </div>  <div class="px-5 py-5 md:px-12 md:py-10 text-left mx-3" :class="$root.isLightMode ? 'text-gray-700' : 'text-blue-50'">
    <article data-page="about">
      <header>
        <div class="text-2xl font-bold mb-5 fadein-bot title-section flex items-center" :class="$root.isLightMode ? 'text-gray-800' : 'text-white'">
          <div class="h-[1px] w-10 bg-blue-500 md:w-20 aos-init aos-animate" data-aos="zoom-in-left"
            data-aos-duration="600"></div>
          &nbsp; Skills
        </div>
      </header>
      <section>
        <div>          <ul class="flex flex-wrap text-sm font-medium text-center mb-5" :class="$root.isLightMode ? 'text-gray-600' : 'text-gray-400'">
            <li class="mr-2">              <button class="inline-block px-4 py-3 rounded-lg" 
                :class="{ 'text-blue-400 bg-blue-400 bg-opacity-10': activeTab === 1, 'hover:text-gray-900': $root.isLightMode, 'hover:text-white': !$root.isLightMode }" 
                @click="activeTab = 1">Tech Stack</button>
            </li>
            <li class="mr-2">              <button class="inline-block px-4 py-3 rounded-lg" 
                :class="{ 'text-blue-400 bg-blue-400 bg-opacity-10': activeTab === 2, 'hover:text-gray-900': $root.isLightMode, 'hover:text-white': !$root.isLightMode }" 
                @click="activeTab = 2">Tools</button>
            </li>
          </ul>
        </div>
        <div v-show="activeTab === 1">
          <div class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">            <div v-for="item in tech" :key="item.id">
              <div
                class="item-tech flex cursor-pointer items-center gap-2 rounded border border-blue-400 px-2 py-2 hover:bg-blue-400 hover:bg-opacity-10 md:gap-3 lg:px-3">
                <div class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                  <img alt="HTML" loading="lazy" width="32" height="32" decoding="async" data-nimg="1"
                    class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]  "
                    :src="item.imageUrl" style="color: transparent;">
                </div>                <div class="flex items-center text-sm md:text-base lg:text-lg">
                  <div class="tech font-medium text-secondary transition-all duration-300 translate-y-0 ">{{ item.name }}
                  </div>
                  <div
                    class="status-tech opacity-0 absolute mt-5 text-[10px] text-blue-300 transition-all duration-300 md:text-xs lg:text-sm">
                    {{ item.status }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-show="activeTab === 2">
          <div class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">            <div v-for="item in tools" :key="item.id">
              <div
                class="item-tech flex cursor-pointer items-center gap-2 rounded border border-blue-400 px-2 py-2 hover:bg-blue-400 hover:bg-opacity-10 md:gap-3 lg:px-3">
                <div class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                  <img alt="HTML" loading="lazy" width="32" height="32" decoding="async" data-nimg="1"
                    class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]  "
                    :src="item.imageUrl" style="color: transparent;">
                </div>
                <div class="flex items-center text-sm md:text-base lg:text-lg">                  <div class="tech font-medium text-secondary transition-all duration-300 translate-y-0 ">{{ item.name }}
                  </div>
                  <div
                    class="status-tech opacity-0 absolute mt-5 text-[10px] text-blue-300 transition-all duration-300 md:text-xs lg:text-sm">
                    {{ item.status }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<style>
.fadein-left {
  opacity: 0;
  animation: fadeInLeft 0.5s ease-out forwards;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadeins-1 {
  animation-delay: 500ms;
}

.fadeins-2 {
  animation-delay: 800ms;
}

.img-tech,
.tech {
  transition: transform 0.3s ease;
}

.item-tech:hover .img-tech {
  transform: scale(1.3);
}

.item-tech:hover .tech {
  transform: translateY(-12px);
}

.item-tech:hover .status-tech {
  opacity: 1;
}
</style>
