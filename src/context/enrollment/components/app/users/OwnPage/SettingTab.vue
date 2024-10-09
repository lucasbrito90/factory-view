<script setup lang="ts">
import SvgSprite from '@/components/shared/SvgSprite.vue';
import type { User } from '@/context/enrollment/interfaces/user';
import { getUserByEmail, setUsersNotification } from '@/context/enrollment/services/userapi';
import { useAlertStore } from '@/stores/alert';
import { useAuthStore } from '@/stores/auth';
import { onMounted, ref, type Ref } from 'vue';

import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const alert = useAlertStore();
const authStore = useAuthStore();

const user: Ref<User | null> = ref(null);
const items: Ref<
  {
    title: string;
    icon: string;
    content: string;
    value: boolean;
  }[]
> = ref([]);

onMounted(async () => {
  user.value = await getUserByEmail(authStore.User?.email || '');

  items.value = [
    createSwitcherQuery(
      t('PersonalInformation.Setup Email Notification.Title'),
      'custom-mail-outline',
      t('PersonalInformation.Setup Email Notification.Content'),
      user.value.email_notifications
    ),
    createSwitcherQuery(
      t('PersonalInformation.Enable Web Notification.Title'),
      'custom-notification-outline',
      t('PersonalInformation.Enable Web Notification.Content'),
      user.value?.web_notifications
    ),
    createSwitcherQuery(
      t('PersonalInformation.Setup SMS Notification.Title'),
      'custom-share-bold',
      t('PersonalInformation.Setup SMS Notification.Content'),
      user.value.sms_notifications
    ),
    createSwitcherQuery(
      t('PersonalInformation.Setup 2FA Notification.Enable 2FA'),
      'custom-lock-outline',
      t('PersonalInformation.Setup 2FA Notification.Content'),
      user.value.sms_notifications
    )
  ];
});

function createSwitcherQuery(title: string, icon: string, content: string, value: number = 0) {
  return {
    title: title,
    icon: icon,
    content: content,
    value: value == 1 ? true : false
  };
}

async function submit() {
  try {
    const result = await setUsersNotification({
      email: authStore.User?.email || '',
      email_notifications: items.value[0].value ?? false,
      web_notifications: items.value[1].value ?? false,
      sms_notifications: items.value[2].value ?? false
    });

    if (result === 200) {
      alert.addSuccess(t('Settings updated successfully'));
    }

    if (items.value[3].value === true) {
      //TODO: Implement 2FA
    }
  } catch (error) {
    //TODO handle error
    // LOG.error(error);
  }
}
</script>

<template>
  <v-card class="bg-surface" variant="outlined" rounded="lg">
    <v-card-text>
      <h5 class="text-subtitle-1 mb-0">Settings</h5>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-item>
      <v-list lines="two" border aria-label="setting list" aria-busy="true">
        <v-list-item v-for="(item, index) in items" :key="index" class="py-6">
          <template v-slot:prepend>
            <SvgSprite :name="item.icon || ''" class="mr-4 text-primary" style="width: 24px; height: 24px" />
          </template>
          <v-list-item-title class="text-h5">{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle class="text-body-2 text-lightText" style="opacity: 1"> {{ item.content }}</v-list-item-subtitle>
          <template v-slot:append>
            <v-switch color="primary" density="compact" aria-label="switch" class="ml-3" v-model="item.value" inset hide-details></v-switch>
          </template>
        </v-list-item>
      </v-list>

      <div class="text-right mt-3">
        <v-btn @click="submit" variant="flat" color="primary" rounded="md" class="ml-3">{{ $t('Update') }}</v-btn>
      </div>
    </v-card-item>
  </v-card>
</template>
