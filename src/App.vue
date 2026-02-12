<script setup async lang="ts">
import { onMounted } from 'vue';
import { RouterView, useRouter } from 'vue-router';
import ProfileService from './services/profile.service';

const router = useRouter();

const profileService = ProfileService.getInstance();

onMounted(async () => {

  try {
    const myProfile = await profileService.getMyProfile();

    if (!myProfile) {
      const name = prompt("What is your name?");
      if (!name) {
        alert("Please enter a name")
        window.location.reload();
        return;
      }
      await profileService.createProfile(name);
    }

  } catch {
    router.push("/login")
    return;
  }

})

</script>

<template>
  <Suspense>
    <RouterView></RouterView>
  </Suspense>
</template>

<style scoped></style>
