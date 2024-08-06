<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import { useDisplay } from 'vuetify';

import VerticalSidebar from './sidebar/VerticalSidebar.vue';
import AppBarMenu from './AppBarMenu.vue';
import LoaderWrapper from '../dashboard/LoaderWrapper.vue';
import Customizer from '../dashboard/customizer/CustomizerPanel.vue';
import { useCustomizerStore } from '../../stores/customizer';
const customizer = useCustomizerStore();

const { lgAndUp } = useDisplay();
const toggleSide = ref(false);
</script>
<template>
  <v-locale-provider>
    <v-app
      :theme="customizer.actTheme"
      class="component-wrapper"
      :class="[
        customizer.actTheme,
        customizer.fontTheme,
        customizer.mini_sidebar ? 'mini-sidebar' : '',
        customizer.setHorizontalLayout ? 'horizontalLayout' : 'verticalLayout',
        customizer.inputBg ? 'inputWithbg' : ''
      ]"
    >
      <Customizer />
      <AppBarMenu @s-Toggle="toggleSide = !toggleSide" />
      <v-main class="page-wrapper">
        <v-container>
          <v-row class="mt-lg-8 mb-0">
            <v-col lg="3" v-if="!toggleSide && lgAndUp">
              <VerticalSidebar />
            </v-col>
            <v-col lg="9">
              <!-- Loader start -->
              <LoaderWrapper />
              <!-- Loader end -->
              <RouterView />
            </v-col>
          </v-row>
        </v-container>
        <v-navigation-drawer temporary v-model="toggleSide" width="300" top v-if="!lgAndUp">
          <VerticalSidebar />
        </v-navigation-drawer>
      </v-main>
    </v-app>
  </v-locale-provider>
</template>
