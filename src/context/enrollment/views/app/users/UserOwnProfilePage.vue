<script setup lang="ts">
import SvgSprite from '@/components/shared/SvgSprite.vue';
import { ref, type Ref } from 'vue';

import ChangePasswordTab from '@/context/enrollment/components/app/users/OwnPage/ChangePasswordTab.vue';
import InformationTab from '@/context/enrollment/components/app/users/OwnPage/InformationTab.vue';
import ProfileBanner from '@/context/enrollment/components/app/users/OwnPage/ProfileBanner.vue';
import SettingTab from '@/context/enrollment/components/app/users/OwnPage/SettingTab.vue';
import UserBackLeft from '@/context/enrollment/components/app/users/OwnPage/UserBackLeft.vue';
import UserBackRight from '@/context/enrollment/components/app/users/OwnPage/UserBackRight.vue';
import UserDetails from '@/context/enrollment/components/app/users/OwnPage/UserDetails.vue';
import { getVerificationCode } from '@/context/enrollment/services/userapi';
import { useAuthStore } from '@/stores/auth';

const tab = ref('one');

const authStore = useAuthStore();
const photo: Ref<File | null> = ref(null);

async function verifyEmail() {
  await getVerificationCode(authStore.User?.email || '');
}

function updatePhoto(file: File) {
  photo.value = file;
}
</script>

<template>
  <v-row class="mt-0">
    <v-col cols="12">
      <v-card class="profile-banner overflow-hidden" variant="flat" color="lightprimary" rounded="lg">
        <v-card-item class="pb-4 pt-2 px-6">
          <div class="d-flex justify-space-between align-center flex-wrap ga-4">
            <ProfileBanner />
            <v-btn
              variant="flat"
              color="primary"
              rounded="md"
              class="editBtn"
              @click="verifyEmail"
              v-if="authStore.User?.email_verified_at == null"
              >{{ $t('PersonalInformation.Verify Your Email') }}</v-btn
            >
          </div>
        </v-card-item>
        <UserBackLeft />
        <UserBackRight />
      </v-card>
    </v-col>
    <v-col cols="12" xl="3" md="4">
      <v-card variant="outlined" class="bg-surface" rounded="lg">
        <v-card-item>
          <UserDetails @update:photo="updatePhoto" />
          <v-tabs class="" v-model="tab" color="primary" hide-slider density="compact" direction="vertical">
            <v-tab value="one" selected-class="bg-lightprimary" rounded="md" hide-slider>
              <SvgSprite name="custom-user-outline" class="v-icon--start" style="width: 18px; height: 18px" />
              {{ $t('Personal Information') }}
            </v-tab>
            <v-tab value="three" selected-class="bg-lightprimary" rounded="md" hide-slider
              ><SvgSprite name="custom-lock-2" class="v-icon--start" style="width: 18px; height: 18px" /> {{ $t('Change Password') }}
            </v-tab>
            <v-tab value="four" selected-class="bg-lightprimary" rounded="md" hide-slider
              ><SvgSprite name="custom-setup-outline" class="v-icon--start" style="width: 18px; height: 18px" /> {{ $t('Settings') }}
            </v-tab>
          </v-tabs>
        </v-card-item>
      </v-card>
    </v-col>
    <v-col cols="12" xl="9" md="8">
      <v-window v-model="tab">
        <v-window-item value="one">
          <InformationTab :photo="photo" />
        </v-window-item>

        <v-window-item value="three">
          <ChangePasswordTab />
        </v-window-item>

        <v-window-item value="four">
          <SettingTab />
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
