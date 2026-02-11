<script setup async lang="ts">
import axios from 'axios';
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';


onMounted(async () => {
  const response = await axios.get("http://localhost:3000/api/profiles/me", {
    withCredentials: true
  })

  if (!response.data) {
    const name = prompt("Please give a name to your new profile");

    if (!name) {
      alert("Please enter a name")
    } else {
      await axios.post("http://localhost:3000/api/profiles/me", {
        name
      }, {
        withCredentials: true
      })
    }

  }
})

</script>

<template>
  <Suspense>
    <RouterView></RouterView>
  </Suspense>
</template>

<style scoped></style>
