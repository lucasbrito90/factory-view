<script setup lang="ts">
import SvgSprite from '@/components/shared/SvgSprite.vue';
import { ref, type Ref } from 'vue';

import InformationTab from '@/context/enrollment/components/app/users/tabs/InformationTab.vue';
import RolesTab from '@/context/enrollment/components/app/users/tabs/RolesTab.vue';
import SettingTab from '@/context/enrollment/components/app/users/tabs/SettingTab.vue';

const tab = ref('one');

const userEmail: Ref<string | null> = ref(null);

function setEmail(email: string) {
  userEmail.value = email;
}

function changeTab(page: string) {
  tab.value = page;
}
</script>

<template>
  <v-row class="mt-0">
    <v-col cols="12" xl="3" md="4">
      <v-card variant="outlined" class="bg-surface" rounded="lg">
        <v-card-item>
          <v-tabs v-model="tab" color="primary" hide-slider density="compact" direction="vertical">
            <v-tab value="one" selected-class="bg-lightprimary" rounded="md" hide-slider>
              <SvgSprite name="custom-user-outline" class="v-icon--start" style="width: 18px; height: 18px" />
              {{ $t('Personal Information') }}
            </v-tab>
            <v-tab value="two" selected-class="bg-lightprimary" rounded="md" hide-slider v-if="userEmail">
              <SvgSprite name="custom-edit-outline" class="v-icon--start" style="width: 18px; height: 18px" />
              {{ $t('PersonalInformation.Roles and Permissions') }}
            </v-tab>

            <v-tab value="three" selected-class="bg-lightprimary" rounded="md" hide-slider v-if="userEmail"
              ><SvgSprite name="custom-setup-outline" class="v-icon--start" style="width: 18px; height: 18px" /> {{ $t('Settings') }}
            </v-tab>
          </v-tabs>
        </v-card-item>
      </v-card>
    </v-col>
    <v-col cols="12" xl="9" md="8">
      <v-window v-model="tab">
        <v-window-item value="one">
          <InformationTab @share-user-email="setEmail" @change-tab="changeTab" />
        </v-window-item>

        <v-window-item value="two">
          <RolesTab :email="userEmail" v-if="userEmail" @change-tab="changeTab" />
        </v-window-item>

        <v-window-item value="three">
          <SettingTab :email="userEmail" v-if="userEmail" />
        </v-window-item>
      </v-window>
    </v-col>
  </v-row>
</template>

<style>
.editBtn {
  @media (max-width: 600px) {
    width: 100%;
  }
}
</style>
