<script setup lang="ts">
import type { Alert } from "@/stores/alert";

const props = defineProps<{
  alert: Alert;
}>();
</script>

<template>
  <v-alert
    v-model="alert.opened"
    close-label="Close Alert"
    :type="alert.type"
    :title="alert.title"
    closable
    class="mt-3"
    variant="tonal"
  >
    {{ alert.text }}
  </v-alert>
</template>

<style scoped></style>
