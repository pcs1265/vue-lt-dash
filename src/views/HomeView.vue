<script setup lang="ts">
import ServiceItem from "@/components/services/ServiceItem.vue";
import { useServiceStore } from "@/stores/service";
import { onMounted } from "vue";
import { VCard, VContainer } from "vuetify/components";

const serviceStore = useServiceStore();

onMounted(() => {
  serviceStore.get_services();
});
</script>

<template>
  <v-container>
    <template
      v-if="
        serviceStore.services.pinned != undefined &&
        serviceStore.services.pinned.length != 0
      "
    >
      <p class="text-h4 mb-5 font-weight-bold">Pinned Services</p>
      <v-row>
        <ServiceItem
          v-for="service in serviceStore.services.pinned"
          :service="service"
        ></ServiceItem>
      </v-row>
    </template>
    <p class="text-h4 my-5 font-weight-bold">System Stats</p>
    <v-row>
      <v-col cols="12" lg="6" xl="4">
        <v-card elevation="4" class="pa-5"> CPU Load </v-card>
      </v-col>
      <v-col cols="12" lg="6" xl="4">
        <v-card elevation="4" class="pa-5"> Memory Usage </v-card>
      </v-col>
      <v-col cols="12" lg="6" xl="4">
        <v-card elevation="4" class="pa-5"> Uptime, </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
