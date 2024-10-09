<script setup lang="ts">
import SvgSprite from '@/components/shared/SvgSprite.vue';
import { setUsersNotification } from '@/services/userapi';
import { useAlertStore } from '@/stores/alert';
import { ref } from 'vue';

import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const alert = useAlertStore();

const props = defineProps<{
  email: string;
}>();

const items = ref([
  {
    title: t('PersonalInformation.Setup Email Notification.Title'),
    icon: 'custom-mail-outline',
    content: t('PersonalInformation.Setup Email Notification.Content'),
    value: true
  },
  {
    title: t('PersonalInformation.Enable Web Notification.Title'),
    icon: 'custom-mail-outline',
    content: t('PersonalInformation.Enable Web Notification.Content'),
    value: false
  },
  {
    title: t('PersonalInformation.Setup SMS Notification.Title'),
    icon: 'custom-translation-outlie',
    content: t('PersonalInformation.Setup SMS Notification.Content'),
    value: false
  }
]);

async function submit() {
  try {
    const result = await setUsersNotification({
      email: props.email,
      email_notifications: items.value[0].value,
      web_notifications: items.value[1].value,
      sms_notifications: items.value[2].value
    });

    if (result === 200) {
      alert.addSuccess(t('Settings updated successfully'));
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
            {{ item.value }}
            <v-switch color="primary" density="compact" aria-label="switch" class="ml-3" v-model="item.value" inset hide-details></v-switch>
          </template>
        </v-list-item>
      </v-list>

      <div class="text-right mt-3">
        <v-btn variant="outlined" color="secondary" rounded="md">Cancel</v-btn>
        <v-btn @click="submit" variant="flat" color="primary" rounded="md" class="ml-3">Save</v-btn>
      </div>
    </v-card-item>
  </v-card>
</template>
