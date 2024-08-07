<script setup lang="ts">
import { computed, ref, type ComputedRef, type Ref } from 'vue';
import SvgSprite from '@/components/shared/SvgSprite.vue';
import { registerUser, type RegisterUserError } from '@/services/user';
import { useRouter } from 'vue-router';

const showPwd = ref(false);
const showConfrmPwd = ref(false);
const router= useRouter();

const firstname: Ref<string> = ref('');
const lastname: Ref<string> =  ref('');
const password: Ref<string> = ref('');
const confirmPassword: Ref<string> = ref('');
const email: Ref<string> = ref('');

const fullname: ComputedRef<string> = computed(() => `${firstname.value} ${lastname.value}`);

const Regform = ref();

const passwordRules = ref([
  (v: string) => !!v || 'Password is required',
  (v: string) => (v && v.length >= 8) || 'Password must be less than 8 characters',
  (v: string) => /(?=.*[!@#$%^&*])/.test(v) || 'Password must contain at least one special character',
  (v: string) => /(?=.*[A-Z])/.test(v) || 'Password must contain at least one uppercase letter',
]);
const confirmPasswordRules = ref([
  (v: string) => !!v || 'Confirm Password is required',
  (v: string) => v === password.value || 'Password does not match'
]);

const firstRules = ref([
  (v: string) => !!v || 'First Name is required',
  (v: string) => (v && v.length >= 3) || 'First name must be at least 3 characters long'
]);

const lastRules = ref([
  (v: string) => !!v || 'Last Name is required',
  (v: string) => (v && v.length >= 3) || 'Last name must be at least 3 characters long'
]);
const emailRules = ref([(v: string) => !!v || 'E-mail is required', (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid']);

async function validate() {
  Regform.value.validate();

  if (Regform.value.isValid) {
    const response: boolean | RegisterUserError = await registerUser({
      email: email.value,
      password: password.value,
      password_confirmation: confirmPassword.value,
      name: fullname.value,
    });

    if (response === true) {
      router.push({ name: 'Landingpage' });
    }
  }
}
</script>

<template>
  <div class="d-flex justify-space-between align-center">
    <h3 class="text-h3 text-center mb-0">Sign up</h3>
    <router-link to="/auth/login1" class="text-primary text-decoration-none">Already have an account?</router-link>
  </div>
  <v-form ref="Regform" fast-fail action="/dashboards/analytical" class="mt-7 loginForm">
    <v-row class="my-0">
      <v-col cols="12" sm="6" class="py-0">
        <div class="mb-6">
          <v-label>First Name*</v-label>
          <v-text-field
            v-model="firstname"
            :rules="firstRules"
            hide-details="auto"
            required
            variant="outlined"
            class="mt-2"
            color="primary"
            placeholder="John"
          ></v-text-field>
        </div>
      </v-col>
      <v-col cols="12" sm="6" class="py-0">
        <div class="mb-6">
          <v-label>Last Name*</v-label>
          <v-text-field
            v-model="lastname"
            :rules="lastRules"
            hide-details="auto"
            required
            variant="outlined"
            class="mt-2"
            color="primary"
            placeholder="Doe"
          ></v-text-field>
        </div>
      </v-col>
    </v-row>
    <div class="mb-6">
      <v-label>Email Address*</v-label>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        placeholder="demo@company.com"
        class="mt-2"
        required
        hide-details="auto"
        variant="outlined"
        color="primary"
        type="email"
      ></v-text-field>
    </div>
    <div class="mb-6">
      <v-label>Password</v-label>
      <v-text-field
        v-model="password"
        :rules="passwordRules"
        placeholder="*****"
        required
        variant="outlined"
        color="primary"
        hide-details="auto"
        :type="showPwd ? 'text' : 'password'"
        class="pwdInput mt-2"
      >
        <template v-slot:append-inner>
          <v-btn color="secondary" aria-label="icon" icon rounded variant="text">
            <SvgSprite name="custom-eye-invisible" style="width: 20px; height: 20px" v-if="showPwd == false" @click="showPwd = !showPwd" />
            <SvgSprite name="custom-eye" style="width: 20px; height: 20px" v-if="showPwd == true" @click="showPwd = !showPwd" />
          </v-btn>
        </template>
      </v-text-field>
    </div>

    <div class="mb-6">
      <v-label>Confirm Password</v-label>
      <v-text-field
        v-model="confirmPassword"
        :rules="confirmPasswordRules"
        placeholder="*****"
        required
        variant="outlined"
        color="primary"
        hide-details="auto"
        :type="showConfrmPwd ? 'text' : 'password'"
        class="pwdInput mt-2"
      >
        <template v-slot:append-inner>
          <v-btn color="secondary" aria-label="icon" icon rounded variant="text">
            <SvgSprite name="custom-eye-invisible" style="width: 20px; height: 20px" v-if="showConfrmPwd == false" @click="showConfrmPwd = !showConfrmPwd" />
            <SvgSprite name="custom-eye" style="width: 20px; height: 20px" v-if="showConfrmPwd == true" @click="showConfrmPwd = !showConfrmPwd" />
          </v-btn>
        </template>
      </v-text-field>
    </div>

    <div class="d-sm-inline-flex align-center mt-2 mb-7 mb-sm-0 font-weight-bold">
      <h6 class="text-caption">
        By Signing up, you agree to our
        <router-link to="/auth/register1" class="text-primary link-hover font-weight-medium">Terms of Service </router-link>
        and
        <router-link to="/auth/register1" class="text-primary link-hover font-weight-medium">Privacy Policy</router-link>
      </h6>
    </div>
    <v-btn color="primary" block class="mt-4" variant="flat" rounded="md" size="large" @click="validate()">Create Account</v-btn>
  </v-form>
</template>
