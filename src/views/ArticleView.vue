<template>
    <div class="w-full md:w-3/5 mx-auto px-3 md:px-0 md:mt-8 pb-24">
        <!-- back link -->
        <router-link
            to="/blog"
            class="group mb-6 inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-300"
            :class="$root.isLightMode ? 'text-gray-500 hover:text-blue-600' : 'text-gray-400 hover:text-blue-300'"
        >
            <svg class="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd" />
            </svg>
            Back to Blog
        </router-link>

        <article
            class="fadein-up overflow-hidden rounded-3xl border text-left"
            :class="
                $root.isLightMode
                    ? 'bg-white border-gray-200 shadow-sm shadow-gray-200/60'
                    : 'bg-[#161618] border-white/10 shadow-lg shadow-black/30'
            "
        >
            <div class="p-6 md:p-10">
                <h1
                    class="text-xl md:text-4xl font-extrabold leading-snug tracking-tight"
                    :class="$root.isLightMode ? 'text-gray-900' : 'text-white'"
                >
                    {{ title }}
                </h1>
                <div class="mt-4 flex items-center gap-2 text-sm">
                    <span
                        class="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
                        :class="
                            $root.isLightMode
                                ? 'bg-blue-50 text-blue-700'
                                : 'bg-blue-400/10 text-blue-300'
                        "
                    >
                        <svg class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118.5 6.75v8.5A2.75 2.75 0 0115.75 18h-11.5A2.75 2.75 0 011.5 15.25v-8.5A2.75 2.75 0 014.25 4H4.5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h11.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
                        </svg>
                        Published at {{ date }}
                    </span>
                </div>

                <div class="mt-6 overflow-hidden rounded-2xl" v-if="image">
                    <img :src="image" class="w-full object-cover" alt="Thumbnail" />
                </div>

                <div
                    class="article-content mt-8"
                    :class="$root.isLightMode ? 'text-gray-700' : 'text-gray-300'"
                    v-html="content"
                ></div>
            </div>
        </article>
    </div>
</template>
<script>
import axios from 'axios';
import { useRoute } from 'vue-router';

export default {
    data() {
        return {
            route: useRoute(),
            title: '',
            image: '',
            date: '',
            content: '',
        }
    },
    mounted() {
        this.getDetails();
    },
    methods: {
        async getDetails() {
            const id = this.route.params.id;
            axios.get('https://64a38c9cc3b509573b564183.mockapi.io/api/blog/all/' + id)
                .then(response => {
                    this.title = response.data.title;
                    this.image = response.data.image;
                    this.date = response.data.date;
                    this.content = response.data.content;
                })
        }
    }
}
</script>

<style scoped>
.article-content :deep(p) {
    margin-bottom: 1rem;
    line-height: 1.75;
    font-size: 0.95rem;
}

.article-content :deep(h1),
.article-content :deep(h2),
.article-content :deep(h3) {
    font-weight: 700;
    margin: 1.5rem 0 0.75rem;
    line-height: 1.3;
}

.article-content :deep(h1) { font-size: 1.5rem; }
.article-content :deep(h2) { font-size: 1.25rem; }
.article-content :deep(h3) { font-size: 1.1rem; }

.article-content :deep(ul),
.article-content :deep(ol) {
    margin: 0 0 1rem 1.25rem;
    list-style: revert;
    line-height: 1.75;
}

.article-content :deep(a) {
    color: #3b82f6;
    text-decoration: underline;
    text-underline-offset: 2px;
}

.article-content :deep(img) {
    border-radius: 1rem;
    margin: 1rem 0;
}

.article-content :deep(blockquote) {
    border-left: 3px solid #3b82f6;
    padding-left: 1rem;
    margin: 1rem 0;
    font-style: italic;
    opacity: 0.9;
}
</style>
