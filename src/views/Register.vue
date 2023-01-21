<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="handleSubmit">
      <input type="email" placeholder="Ingrese email" v-model.trim="email" />
      <input
        type="password"
        placeholder="Ingrese contrasenia"
        v-model.trim="password"
      />
      <button type="submit" :disabled="useStore.loadingUser">Crear Usuario</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/user";


const useStore = useUserStore();

const email = ref("");
const password = ref("");
const handleSubmit = async() => {
  if (!email.value || password.value.length <5) {
    return alert("llena los campos");
  }
  await useStore.registerUser(email.value, password.value);

};
</script>
