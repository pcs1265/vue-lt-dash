<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { useTheme } from "vuetify";
import AlertArea from "./components/common/AlertArea.vue";

const drawer = ref(false);

const theme = useTheme();
const darkTheme = ref(true);
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}

const menus = [
  {
    to: "home",
    icon: "mdi-home-circle",
    title: "Home",
    subtitle: "",
  },
  {
    to: "services",
    icon: "mdi-application-braces-outline",
    title: "Services",
    subtitle: "Services provided by this server",
  },
  {
    to: "system",
    icon: "mdi-cog",
    title: "System",
    subtitle: "",
  },
];
</script>

<template>
  <v-app>
    <v-app-bar :elevation="4" color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title class="font-weight-bold">LT DashBoard</v-app-bar-title>

      <v-btn icon>
        <v-icon>mdi-key-variant</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>

        <v-menu activator="parent">
          <v-list>
            <v-list-item>
              <!-- <v-list-item-title>{{ item.title }}</v-list-item-title> -->
              <v-switch
                label="Dark Theme"
                @click="toggleTheme"
                v-model="darkTheme"
              />
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary>
      <!-- <v-list-item title="My Application" subtitle="Vuetify"></v-list-item> -->
      <!-- <v-divider></v-divider> -->
      <v-list>
        <v-list-subheader>MENU</v-list-subheader>
        <template v-for="menu in menus" :key="menu.to">
          <v-divider></v-divider>
          <v-list-item link :to="{ name: menu.to }" class="py-5">
            <v-list-item-title>
              <v-icon :icon="menu.icon"></v-icon>
              {{ menu.title }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ menu.subtitle }}</v-list-item-subtitle>
          </v-list-item>
        </template>
        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <AlertArea></AlertArea>

      <RouterView></RouterView>
    </v-main>
  </v-app>
</template>

<style scoped></style>
