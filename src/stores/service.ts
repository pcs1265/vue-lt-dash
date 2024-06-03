// Utilities
import { baseAxios } from "@/util/http-commons";
import { defineStore } from "pinia";
import type { Ref } from "vue";
import { ref } from "vue";

const base = baseAxios();

export type Services = {
  pinned: Service[];
  normal: Service[];
  etc: Service[];
};

export type Service = {
  title: string;
  subtitle: string | undefined;
  status: string;
  link: string;
  icon: string;
};

export const useServiceStore = defineStore("services", () => {
  const services: Ref<Services> = ref({});

  function get_services() {
    base.get("/services").then(({ data }) => {
      services.value = data;
      console.log(data);
    });
  }
  return { get_services, services };
});
