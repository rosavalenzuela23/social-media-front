<script async setup lang="ts">
import axios from 'axios';


const posts = await axios.get("http://localhost:3000/api/posts/", {
    withCredentials: true,
    params: {
        page: 1,
        size: 10
    }
})

console.log(posts)

</script>


<template>
    <b></b>
</template>