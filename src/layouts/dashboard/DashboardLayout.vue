<script setup lang="ts">
import Alerts from '@/components/shared/alerts/ComponentsAlert.vue';
import { RouterView } from 'vue-router';
import { useCustomizerStore } from '../../stores/customizer';
import Customizer from './customizer/CustomizerPanel.vue';
import FooterPanel from './footer/FooterPanel.vue';
import HorizontalHeader from './horizontal-header/HorizontalHeader.vue';
import HorizontalSidebar from './horizontal-sidebar/HorizontalSidebar.vue';
import LoaderWrapper from './LoaderWrapper.vue';
import VerticalHeaderVue from './vertical-header/VerticalHeader.vue';
import VerticalSidebarVue from './vertical-sidebar/VerticalSidebar.vue';
const customizer = useCustomizerStore();


</script>

<template>
  <v-locale-provider>
    <v-app
      :theme="customizer.actTheme"
      :class="[
        customizer.actTheme,
        customizer.fontTheme,
        customizer.mini_sidebar ? 'mini-sidebar' : '',
        customizer.setHorizontalLayout ? 'horizontalLayout' : 'verticalLayout',
        customizer.inputBg ? 'inputWithbg' : ''
      ]"
    >
      <Customizer />
      <VerticalSidebarVue v-if="!customizer.setHorizontalLayout" />
      <VerticalHeaderVue v-if="!customizer.setHorizontalLayout" />
      <HorizontalHeader v-if="customizer.setHorizontalLayout" />
      <HorizontalSidebar v-if="customizer.setHorizontalLayout" />

      <v-main class="page-wrapper">
        <v-container fluid>
          <div :class="customizer.boxed ? 'maxWidth' : ''">

            <Alerts />

            <!-- Loader start -->
            <LoaderWrapper />
            <!-- Loader end -->
            <RouterView />
          </div>
        </v-container>
        <v-container fluid class="pt-0">
          <div :class="customizer.boxed ? 'maxWidth' : ''">
            <FooterPanel />
          </div>
        </v-container>
      </v-main>
    </v-app>
  </v-locale-provider>
</template>
