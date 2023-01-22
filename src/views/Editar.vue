<template>
  <div>
    <h1>Editar</h1>
    <p v-if="databaseStore.loadingDoc">Loading Doc...</p>
    <form @submit.prevent="handleSubmit()" v-else>
      <input type="text" placeholder="Ingrese la URL" v-model="url"/>
      <button type="submit">Editar</button>
    </form>
  </div>
</template>

<script setup >
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useDatabaseStore } from "../stores/database";

const databaseStore = useDatabaseStore();
const route = useRoute();
const handleSubmit = () => {
    databaseStore.updateUrl(route.params.id,url.value)
};
const url = ref("");
onMounted(async () => {
  url.value = await databaseStore.leerUrl(route.params.id);
});
</script>
