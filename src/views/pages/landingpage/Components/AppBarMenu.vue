<script setup lang="ts">
import { ref } from 'vue';

import SvgSprite from '@/components/shared/SvgSprite.vue';

import Logo from './LogoMain.vue';
import { useDisplay } from 'vuetify';

const { mdAndUp } = useDisplay();
const drawer = ref(false);

const url = ref<string>(); // Define url as a ref

const value: string = window.location.search;
const params = new URLSearchParams(value);
const ispValue = params.get('isp');

if (ispValue !== null && parseInt(ispValue) === 1) {
  url.value = 'https://1.envato.market/B0JAPW';
} else {
  url.value = 'https://1.envato.market/zNkqj6';
}
</script>

<template>
  <v-app-bar elevation="0" flat height="74" class="border-bottom position-fixed" border="0">
    <v-container class="fill-height maxWidth">
      <div class="d-flex align-center ga-2 w-100">
        <Logo />
        <!---/Search part -->
        <v-spacer />
        <!-- ---------------------------------------------- -->
        <!---right part -->
        <!-- ---------------------------------------------- -->
        <template v-if="mdAndUp">
          <v-btn variant="text" class="font-weight-medium" to="/dashboard/default" target="_">Dashboard</v-btn>
          <v-btn variant="text" class="font-weight-medium" to="/components/buttons">Components</v-btn>
          <v-btn variant="text" class="font-weight-medium" href="https://phoenixcoded.gitbook.io/able-pro/v/vue/" target="_"
            >Documentation</v-btn
          >
          <v-btn
            icon
            variant="tonal"
            target="_"
            aria-label="github link"
            href="https://github.com/phoenixcoded/able-pro-free-admin-dashboard-template"
          >
            <SvgSprite name="custom-document-2" style="width: 20px; height: 20px" />
          </v-btn>
          <v-btn variant="flat" class="font-weight-medium ml-4" height="42px" color="success" rounded="md" :href="url" target="_">
            <template v-slot:prepend>
              <SvgSprite name="custom-link2" style="width: 20px; height: 20px" />
            </template>
            Purchase Now
          </v-btn>
        </template>
        <template v-else>
          <v-btn variant="outlined" color="warning" class="font-weight-medium" to="/components/buttons" rounded="md">All Components</v-btn>
          <v-btn icon rounded="sm" variant="text" size="small" @click.stop="drawer = !drawer">
            <SvgSprite name="custom-menu-outline" style="width: 20px; height: 20px" />
          </v-btn>
        </template>
      </div>
    </v-container>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary location="top" style="height: 310px" floating v-if="!mdAndUp">
    <v-list color="primary">
      <v-list-item to="/dashboard/default">
        <template v-slot:prepend>
          <SvgSprite name="custom-line" class="text-lightText" style="width: 20px; height: 20px" />
        </template>

        <v-list-item-title class="ml-3 text-lightText text-h6">Dashboard</v-list-item-title>
      </v-list-item>
      <v-list-item to="/components/buttons">
        <template v-slot:prepend>
          <SvgSprite name="custom-line" class="text-lightText" style="width: 20px; height: 20px" />
        </template>

        <v-list-item-title class="ml-3 text-lightText text-h6">All Components</v-list-item-title>
      </v-list-item>
      <v-list-item href="https://github.com/phoenixcoded/able-pro-free-admin-dashboard-template" target="_">
        <template v-slot:prepend>
          <SvgSprite name="custom-line" class="text-lightText" style="width: 20px; height: 20px" />
        </template>

        <v-list-item-title class="ml-3 text-lightText text-h6">Free version</v-list-item-title>
      </v-list-item>
      <v-list-item href="https://phoenixcoded.gitbook.io/able-pro/v/vue/" target="_">
        <template v-slot:prepend>
          <SvgSprite name="custom-line" class="text-lightText" style="width: 20px; height: 20px" />
        </template>

        <v-list-item-title class="ml-3 text-lightText text-h6">Documentation</v-list-item-title>
      </v-list-item>
      <v-list-item href="https://phoenixcoded.authordesk.app/" target="_">
        <template v-slot:prepend>
          <SvgSprite name="custom-line" class="text-lightText" style="width: 20px; height: 20px" />
        </template>

        <v-list-item-title class="ml-3 text-lightText text-h6">Support</v-list-item-title>
      </v-list-item>
      <v-list-item :href="url" target="_">
        <template v-slot:prepend>
          <SvgSprite name="custom-line" class="text-lightText" style="width: 20px; height: 20px" />
        </template>

        <v-list-item-title class="ml-3 text-lightText text-h6">Purchase Now</v-list-item-title>
        <template v-slot:append>
          <v-chip color="primary" variant="flat" size="small">v1.0</v-chip>
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
