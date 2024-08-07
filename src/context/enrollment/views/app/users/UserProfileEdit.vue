<script setup lang="ts">
import SvgSprite from '@/components/shared/SvgSprite.vue';
import { ref } from 'vue';

import EditTab from '@/context/enrollment/components/app/users/tabs/EditTab.vue';
import RolesTabUserCreated from '@/context/enrollment/components/app/users/tabs/RolesTabUserCreated.vue';
import SettingUserCreatedTab from '@/context/enrollment/components/app/users/tabs/SettingUserCreatedTab.vue';

const tab = ref('one');

const props = defineProps<{
  email: string;
}>();

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
            <v-tab value="two" selected-class="bg-lightprimary" rounded="md" hide-slider v-if="props.email">
              
              <SvgSprite name="custom-edit-outline" class="v-icon--start" style="width: 18px; height: 18px" /> {{
                $t('PersonalInformation.Roles and Permissions') }}
            </v-tab>

            <v-tab value="three" selected-class="bg-lightprimary" rounded="md" hide-slider  v-if="props.email"
              ><SvgSprite name="custom-setup-outline" class="v-icon--start" style="width: 18px; height: 18px" /> {{ $t('Settings') }}
            </v-tab>
          </v-tabs>
        </v-card-item>
      </v-card>
    </v-col>
    <v-col cols="12" xl="9" md="8">
      <v-window v-model="tab">
        <v-window-item value="one">
          <EditTab :email-props="props.email"/>
        </v-window-item>

        <v-window-item value="two">
          <RolesTabUserCreated :email="props.email" v-if="props.email" />
        </v-window-item>

        <v-window-item value="three">
          <SettingUserCreatedTab :email="props.email" v-if="props.email" />
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
