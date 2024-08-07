<script setup lang="ts">
import { getAllRolesAndPermissions } from '@/services/policies/policies';
import { addPermission } from '@/services/userapi';
import { useAlertStore } from '@/stores/alert';
import { onMounted, ref, type Ref } from 'vue';

const alert = useAlertStore();

const props = defineProps<{
  email: string;
}>();
const userPermissions: Ref<string[]> = ref([]);

let permissions: Ref<Record<string, string>> = ref({});

onMounted(async () => {
  permissions.value = await getAllRolesAndPermissions();
});

async function submit() {
  
  if (!props.email) {
    alert.addError('Please enter email');
    return;
  }


  const result = await addPermission({
    email: props.email,
    permissions: userPermissions.value,
  })

  if(result == 200) {
    alert.addSuccess('Permissions added successfully');
  } else {
    alert.addError('Failed to add permissions');
  }
  
}

</script>

<template>
  <v-card class="bg-surface" variant="outlined" rounded="lg">
    <v-card-text>
      <h5 class="text-subtitle-1 mb-0">{{ $t("PersonalInformation.Roles and Permissions") }}</h5>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-item class="pa-0">
      <v-row class="pa-5">
        <v-col cols="12" v-for="(itens, index) in permissions" :key="index">
          <v-label class="mb-2 text-h5">{{ index.toUpperCase() }}</v-label>
          <v-row>
            <v-col cols="3" v-for="(item, i) in itens" :key="i">
              <v-checkbox
                v-model="userPermissions"
                :label="item"
                :value="item"
                color="primary"
              ></v-checkbox>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-item>

        <v-divider></v-divider>

    <v-col cols="12" class="text-right">
          <v-btn variant="outlined" color="secondary" rounded="md">{{ $t('Cancel') }}</v-btn>
          <v-btn @click="submit" variant="flat" color="primary" rounded="md" class="ml-2">{{ $t('Save') }}</v-btn>
        </v-col>

  </v-card>
</template>

<style lang="scss">
.payment-method {
  .v-label {
    width: 100%;
  }
}
</style>
