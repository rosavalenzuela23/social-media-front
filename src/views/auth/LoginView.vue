<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
const apiUrl = 'http://localhost:3000';

const password = ref("")
const username = ref("")

const registerUser = async (event: SubmitEvent) => {
    event.preventDefault();

    await axios.post(`${apiUrl}/api/users/login/`, {
        username: username.value,
        password: password.value
    }, {
        withCredentials: true
    });
}

</script>
 
<template>

    <form @submit="registerUser($event)">
        <input type="text" placeholder="Username" v-model="username">
        <input type="text" placeholder="Password" v-model="password">
        <button>
            Login
        </button>
    </form>

    <button>Register</button>

</template>