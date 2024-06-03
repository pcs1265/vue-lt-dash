import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ServicesView from "@/views/ServicesView.vue";
import SystemView from "@/views/SystemView.vue";
import { useAlertStore } from "@/stores/alert";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      redirect: "home",
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/services",
      name: "services",
      component: ServicesView,
    },
    {
      path: "/system",
      name: "system",
      component: SystemView,
    },
  ],
});

router.beforeEach(() => {
  const alertStore = useAlertStore();
  alertStore.clear();
});

export default router;
