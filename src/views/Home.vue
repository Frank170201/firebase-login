<template>
    <div>
        <h1>Home</h1>
        <p>{{ userStore.userData?.email }}</p>
    </div>
</template>

<script setup>
import { useUserStore } from '../stores/user';
import {onAuthStateChanged} from 'firebase/auth'
import { auth} from '../firebaseConfig';

const userStore=useUserStore()
</script>
