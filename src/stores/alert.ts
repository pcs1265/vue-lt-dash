import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import type { Service } from "./service";

export type Alert = {
  id?: number;
  title: string;
  text?: string;
  type: "error" | "success" | "warning" | "info" | undefined;
  opened?: boolean;
};

export const useAlertStore = defineStore("alert", () => {
  const alerts: Ref<Alert[]> = ref([]);
  const id_inc: Ref<number> = ref(0);

  function addAlert(alert: Alert) {
    alert.id = id_inc.value++;
    alert.opened = true;
    alerts.value.push(alert);
  }

  function clear() {
    id_inc.value = 0;
    alerts.value = [];
  }

  return { alerts, addAlert, clear };
});
