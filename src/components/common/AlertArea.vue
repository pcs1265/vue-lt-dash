<script setup lang="ts">
import { useAlertStore } from "@/stores/alert";
import AlertItem from "./AlertItem.vue";

const alertStore = useAlertStore();
</script>

<template>
  <v-container class="py-0">
    <AlertItem
      v-for="alert in alertStore.alerts"
      :key="alert.id"
      :alert="alert"
    ></AlertItem>
  </v-container>
</template>

<style scoped></style>
