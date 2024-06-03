<script setup lang="ts">
import ServiceItem from "@/components/services/ServiceItem.vue";
import { useAlertStore } from "@/stores/alert";
import { useServiceStore } from "@/stores/service";
import { onMounted } from "vue";

const serviceStore = useServiceStore();

const alertStore = useAlertStore();

onMounted(() => {
  serviceStore.get_services();
});
</script>

<template>
  <v-container>
    <p class="text-h4 mb-5 font-weight-bold">Services</p>

    <template
      v-if="
        serviceStore.services.pinned != undefined &&
        serviceStore.services.pinned.length != 0
      "
    >
      <p class="text-h5 mb-5">Pinned</p>
      <v-row>
        <ServiceItem
          v-for="service in serviceStore.services.pinned"
          :service="service"
        ></ServiceItem>
      </v-row>
    </template>

    <template
      v-if="
        serviceStore.services.normal != undefined &&
        serviceStore.services.normal.length != 0
      "
    >
      <v-divider class="my-5"></v-divider>
      <p class="text-h5 mb-5">Not Pinned</p>
      <v-row>
        <ServiceItem
          v-for="service in serviceStore.services.normal"
          :service="service"
        ></ServiceItem>
      </v-row>
    </template>

    <template
      v-if="
        serviceStore.services.etc != undefined &&
        serviceStore.services.etc.length != 0
      "
    >
      <v-divider class="my-5"></v-divider>
      <p class="text-h5 mb-5">Etc</p>
      <v-row>
        <ServiceItem
          v-for="service in serviceStore.services.etc"
          :service="service"
        ></ServiceItem>
      </v-row>
    </template>
  </v-container>
</template>
