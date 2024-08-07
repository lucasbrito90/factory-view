<script setup lang="ts">
import SvgSprite from '@/components/shared/SvgSprite.vue';
import { changePassword } from '@/context/enrollment/services/userapi';
import { useAlertStore } from '@/stores/alert';
import { useAuthUserStore } from '@/stores/authUser';
import { ref } from 'vue';

const cpassword = ref('');
const npassword = ref('');
const conpassword = ref('');
const show1 = ref(false);
const show2 = ref(false);
const show3 = ref(false);

const user = useAuthUserStore();
const alert = useAlertStore();

import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const items = ref([
  {
    title: 'At least 8 characters',
    check: () => npassword.value.length >= 8,
    value: false
  },
  {
    title: 'At least 1 lower letter (a-z)',
    check: () => /[a-z]/.test(npassword.value),
    value: false
  },
  {
    title: 'At least 1 uppercase letter (A-Z)',
    check: () => /[A-Z]/.test(npassword.value),
    value: false
  },
  {
    title: 'At least 1 number (0-9)',
    check: () => /[0-9]/.test(npassword.value),
    value: false
  },
  {
    title: 'At least 1 special characters',
    check: () => /[!@#$%^&*()_+\-={};':"\\|,.<>/[\]?]+/.test(npassword.value),
    value: false
  }
]);

function checkPassword() {
  items.value.forEach((item) => {
    item.value = item.check();
  });
}

async function updatePassword() {

  if(user.userAuthenticated?.email !== undefined) {
    const result = await changePassword({
      email: user.userAuthenticated?.email,
      password: npassword.value,
      old_password: cpassword.value,
      password_confirmation : conpassword.value
    });

    if(result) {
      alert.addSuccess(
        t('Password updated successfully')
      );
    } else {
      alert.addError(
        t('Password update failed')
      );
    }
  }

}
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-card variant="flat" rounded="lg">
        <v-card variant="outlined" rounded="lg">
          <div class="pa-5">
            <h5 class="text-subtitle-1 mb-0">{{ $t("Change Password")}}</h5>
          </div>
          <v-divider></v-divider>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <v-row>
                  <v-col cols="12">
                    <v-label class="mb-2">{{ $t("Old Password") }}</v-label>
                    <v-text-field
                      color="primary"
                      single-line
                      placeholder="Enter Old Password"
                      variant="outlined"
                      density="comfortable"
                      :type="show1 ? 'text' : 'password'"
                      hide-details
                      v-model="cpassword"
                    >
                      <template v-slot:append-inner>
                        <SvgSprite
                          name="custom-eye-invisible"
                          class="text-secondary"
                          style="width: 20px; height: 20px"
                          v-if="show1 == false"
                          @click="show1 = !show1"
                        />
                        <SvgSprite
                          name="custom-eye"
                          class="text-secondary"
                          style="width: 20px; height: 20px"
                          v-if="show1 == true"
                          @click="show1 = !show1"
                        />
                      </template>
                    </v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-label class="mb-2">{{ $t("New Password") }}</v-label>
                    <v-text-field
                      color="primary"
                      single-line
                      placeholder="Enter New Password"
                      variant="outlined"
                      density="comfortable"
                      :type="show2 ? 'text' : 'password'"
                      hide-details
                      v-model="npassword"
                      @update:modelValue="checkPassword"
                    >
                      <template v-slot:append-inner>
                        <SvgSprite
                          name="custom-eye-invisible"
                          class="text-secondary"
                          style="width: 20px; height: 20px"
                          v-if="show2 == false"
                          @click="show2 = !show2"
                        />
                        <SvgSprite
                          name="custom-eye"
                          class="text-secondary"
                          style="width: 20px; height: 20px"
                          v-if="show2 == true"
                          @click="show2 = !show2"
                        />
                      </template>
                    </v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-label class="mb-2">{{ $t("Confirm Password") }}</v-label>
                    <v-text-field
                      color="primary"
                      single-line
                      placeholder="Enter Confirm Password"
                      variant="outlined"
                      density="comfortable"
                      :type="show3 ? 'text' : 'password'"
                      :rules="[() => (conpassword == npassword)]"
                      hide-details
                      v-model="conpassword"
                    >
                      <template v-slot:append-inner>
                        <SvgSprite
                          name="custom-eye-invisible"
                          class="text-secondary"
                          style="width: 20px; height: 20px"
                          v-if="show3 == false"
                          @click="show3 = !show3"
                        />
                        <SvgSprite
                          name="custom-eye"
                          class="text-secondary"
                          style="width: 20px; height: 20px"
                          v-if="show3 == true"
                          @click="show3 = !show3"
                        />
                      </template>
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" md="6">
                <h5 class="text-h5">{{ $t("New Password must contain") }}n:</h5>
                <v-list aria-label="content" aria-busy="true">
                  <v-list-item v-for="(item, index) in items" :key="index" border>
                    <template v-slot:prepend>
                      <SvgSprite name="custom-line" class="mr-2" style="width: 24px; height: 24px" />
                    </template>
                    <h6 class="text-h6 mb-0" :class="item.value ? 'text-success' : 'text-error'">
                      {{ item.title }}
                    </h6>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
            <div class="text-right mt-4">
              <v-btn 
              color="primary" 
              rounded="md" 
              variant="flat"
              @click="updatePassword"
              >{{ $t("Update") }}</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-card>
    </v-col>
  </v-row>
</template>
