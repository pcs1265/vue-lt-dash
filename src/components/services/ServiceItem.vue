<script setup lang="ts">
import type { Service } from "@/stores/service";
import { computed } from "vue";

const props = defineProps<{
  service: Service;
}>();

const online = computed(() => {
  if (props.service.status == "Running") {
    return "text-green";
  } else {
    return "text-red";
  }
});

const icon = computed(() => {
  return (
    import.meta.env.VITE_BASE_URL + "/static/serviceIcon/" + props.service.icon
  );
});
</script>

<template>
  <v-col cols="12" lg="6" xl="4">
    <v-card
      elevation="4"
      class="pa-3"
      link
      :href="service.link"
      target="_blank"
    >
      <v-row>
        <v-col cols="4" class="justify-center align-center d-flex">
          <v-img :src="icon" aspect-ratio="1/1" max-height="100px"></v-img>
        </v-col>
        <v-col cols="8" class="ps-0">
          <v-card-title>{{ service.title }}</v-card-title>
          <v-card-subtitle>{{ service.subtitle }}</v-card-subtitle>
        </v-col>
      </v-row>
    </v-card>
  </v-col>
</template>

<style scoped></style>
