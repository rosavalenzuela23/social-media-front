<script async setup lang="ts">
import type { Post } from '@/services/dto/post.dto';
import PostService from '@/services/posts.service';
import { onMounted, reactive, ref } from 'vue';

const postsService = PostService.getInstance();

const posts = reactive<Post[]>([])
const content = ref("");

async function createPostEvent(submitEvent: SubmitEvent) {
    submitEvent.preventDefault();
    await postsService.createPost(content.value)
}

onMounted(async () => {
    posts.push(...await postsService.getPosts())
})

</script>


<template>
    <form @submit="createPostEvent">
        <textarea name="" id="" v-model="content">
            En que estas pensando!
        </textarea>
        <button>
            Crear post
        </button>
    </form>

    <div v-for="post in posts" :key="post.creatorUuid">
        {{ post.message }}
    </div>

</template>