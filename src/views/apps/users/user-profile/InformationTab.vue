<script setup lang="ts">
import { computed, ref, type Ref } from 'vue';
import SvgSprite from '@/components/shared/SvgSprite.vue';
import countries from "@/utils/helpers/countries";
import avatar from "@/assets/images/profile/user-profile-1.png";
import { registerUser } from '@/services/userapi';
import { date } from 'yup';
import { getAllRolesAndPermissions } from '@/services/policies/policies';

//months
const items = ref([
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]);

//days
const items1 = ref([
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
  '31'
]);

//years
const items2 = ref([
  '1990',
  '1991',
  '1992',
  '1993',
  '1994',
  '1995',
  '1996',
  '1997',
  '1998',
  '1999',
  '2000',
  '2001',
  '2002',
  '2003',
  '2004',
  '2005',
  '2006',
  '2007',
  '2008',
  '2009',
  '2010',
  '2011',
  '2012',
  '2013',
  '2014',
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
  '2021',
  '2022',
  '2023'
]);

const isUpdating = ref(false);

const permissions: Record<string, string> = await getAllRolesAndPermissions();

const items4: Ref<string[]> = ref([]);
const firstname: Ref<string> = ref('');
const lastname: Ref<string> =  ref('');
const email: Ref<string> = ref('');
const day: Ref<string> = ref('');
const month: Ref<string> = ref('');
const year: Ref<string> = ref('');
const countryCode: Ref<string> = ref('');
const phoneNumber: Ref<string> = ref('');
const gender: Ref<string> = ref('');
const pronoun: Ref<string> = ref('');
const address: Ref<string> = ref('');
const country: Ref<string> = ref('');
const city: Ref<string> = ref('');
const note: Ref<string> = ref('');
const sector: Ref<string> = ref('');
const role: Ref<string> = ref('');
const image: Ref<File | null> = ref(null);
const imageURL: Ref<string> = ref(avatar);

const fullname = computed(() => `${firstname.value} ${lastname.value}`);
const fullPhoneNumber = computed(() => `${countryCode.value} ${phoneNumber.value}`);
const fullDateOfBirth = computed(() => `${year.value}-${month.value}-${day.value}`);

const Regform = ref();

const firstNameRules = ref([
  (v: string) => !!v || 'First Name is required',
  (v: string) => (v && v.length >= 3) || 'First name must be at least 3 characters long'
]);

const lastNameRules = ref([
  (v: string) => !!v || 'Last Name is required',
  (v: string) => (v && v.length >= 3) || 'Last name must be at least 3 characters long'
]);

const emailRules = ref([
  (v: string) => !!v || 'E-mail is required',
   (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
]);

const addressRules = ref([
  (v: string) => !!v || 'Address is required'
]);

const countryRules = ref([
  (v: string) => !!v || 'Country is required'
]);

const cityRules = ref([
  (v: string) => !!v || 'City is required'
]);

const imageRules = ref([
  (v: FileList) => !v || !v.length || v[0].size < 2000000 || 'Avatar size should be less than 2 MB!'
]);

const phoneNumberRules = ref([
  //only numbers
  (v: string) => /^[0-9]*$/.test(v) || 'Only numbers are allowed',  
]);


function onPictureChange(e: Event) {
  const file: File = (e.target as HTMLInputElement).files![0]
  imageURL.value = URL.createObjectURL(file);
  console.log(imageURL.value);
}

function submit(){

  Regform.value.validate(); 

  if (Regform.value.isValid) {
    registerUser({
      first_name: firstname.value,
      last_name: lastname.value,
      email: email.value,
      date_of_birth: fullDateOfBirth.value,
      phone_number: fullPhoneNumber.value,
      gender: gender.value,
      pronoun: pronoun.value,
      address: address.value,
      country: country.value,
      city: city.value,
      note: note.value,
      sector: sector.value,
      role: role.value,
      image: image.value || undefined 
    });
  }

}
  
</script>

<template>
  <v-card class="bg-surface" variant="outlined" rounded="lg">
    <v-row>
      <v-col cols="12" md="12">
        <div class="text-center py-4">
            <v-avatar size="124" variant="outlined" color="primary" class="dashed bg-lightprimary">
              <v-img
                class="mx-auto"
                width="124"
                height="124"
                :lazy-src="imageURL"
                :src="imageURL"
              >
                <template v-slot:placeholder>
                  <div class="d-flex align-center justify-center fill-height">
                    <v-progress-circular
                      color="grey-lighten-4"
                      indeterminate
                    ></v-progress-circular>
                  </div>
                </template>
              </v-img>

              <!-- <img :src="imageURL" width="124" alt="profile" /> -->
            </v-avatar>
            <h5 class="text-h5 pt-5 mb-1">{{ fullname }}</h5>
            <p class="text-h6 text-lightText">{{ $t("PersonalInformation.Picture") }}</p>
      </div>
      </v-col>
    </v-row>
    <h5 class="text-h5 mb-0 pa-5 pb-4">{{ $t("Personal Information") }}</h5>
    <v-divider></v-divider>

    <v-form ref="Regform" fast-fail class="loginForm">

    <v-card-item>
      <v-row>
        <v-col cols="12" md="12">
          <v-label class="mb-2">{{ $t("PersonalInformation.First Name") }}</v-label>
          <v-file-input
            v-model="image"
            :rules="imageRules" 
            accept="image/*"
            variant="outlined"
            density="comfortable"
            prepend-icon="$camera"
            @change="onPictureChange"
            counter
            multiple
            show-size
            hide-details="auto"
          ></v-file-input>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-label class="mb-2">{{ $t("PersonalInformation.First Name") }}</v-label>
          <v-text-field
            v-model="firstname"
            :rules="firstNameRules"
            hide-details="auto"
            density="comfortable"
            single-line
            aria-label="firstname"
            variant="outlined"
            label="Your First Name"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-label class="mb-2">{{ $t("PersonalInformation.Last Name") }}</v-label>
          <v-text-field
            :rules="lastNameRules"
            v-model="lastname"
            density="comfortable"
            single-line
            aria-label="lastname"
            variant="outlined"
            label="Your Last Name"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col cols="12" xl="6" md="12">
          <v-label class="mb-2">{{ $t("PersonalInformation.Email") }}</v-label>
          <v-text-field
            :rules="emailRules"
            v-model="email"
            single-line
            density="comfortable"
            aria-label="email address"
            variant="outlined"
            hide-details="auto"
            label="your@email.com"
            type="email"
          ></v-text-field>
        </v-col>
        <v-col cols="12" xl="6" md="12">
          <v-label class="mb-2">{{ $t("PersonalInformation.Date of Birth") }}</v-label>
          <v-row>
            <v-col cols="6" sm="4">
              <v-autocomplete
                aria-label="autocomplete"
                v-model="month"
                :items="items"
                color="primary"
                variant="outlined"
                hide-details="auto"
                single-line
                density="comfortable"
              ></v-autocomplete>
            </v-col>
            <v-col cols="6" sm="4">
              <v-autocomplete
                aria-label="autocomplete"
                v-model="day"
                :items="items1"
                color="primary"
                variant="outlined"
                hide-details="auto"
                single-line
                density="comfortable"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="4">
              <v-autocomplete
                aria-label="autocomplete"
                v-model="year"
                :items="items2"
                color="primary"
                variant="outlined"
                hide-details="auto"
                single-line
                density="comfortable"
              >
              </v-autocomplete>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" xl="6">
          <v-label class="mb-2"> {{ $t("PersonalInformation.Phone Number") }}</v-label>
          <v-row>
            <v-col cols="5" lg="3" md="5" sm="4">
              <v-autocomplete
                v-model="countryCode"
                aria-label="autocomplete"
                :items="countries"
                color="primary"
                variant="outlined"
                hide-details="auto"
                density="comfortable"
                item-title="area_code"
                item-value="area_code"
                single-line
                clearable
                clear-icon="$close"
                
              >
              <template v-slot:item="{ props, item }">
              <v-list-item v-bind="props" :title="item?.raw?.area_code">
                <template v-slot:prepend>
                  <v-avatar size="18" rounded="sm">
                    <img :src="item?.raw?.avatar" width="18" alt="flag" />
                  </v-avatar>
                </template>
              </v-list-item>
            </template>
            </v-autocomplete>
            </v-col>
            <v-col cols="7" lg="9" md="7" sm="8">
              <v-text-field
                :rules="phoneNumberRules"
                single-line
                aria-label="phone number"
                variant="outlined"
                hide-details="auto"
                density="comfortable"
                v-model="phoneNumber"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6">
          <v-label class="mb-2"> {{ $t("PersonalInformation.Gender") }}</v-label>
          <v-text-field
            single-line
            density="comfortable"
            aria-label="designation"
            variant="outlined"
            hide-details="auto"
            v-model="gender"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-label class="mb-2"> {{ $t("PersonalInformation.Prounoun") }}</v-label>
          <v-text-field
            single-line
            density="comfortable"
            aria-label="designation"
            variant="outlined"
            hide-details="auto"
            v-model="pronoun"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-item>
    <v-card-item class="pa-0">
      <h5 class="text-h5 mb-0 pa-5 pb-4">{{ $t("PersonalInformation.Address") }}</h5>
      <v-divider></v-divider>
      <v-row class="pa-5">
        <v-col cols="12" md="6">
          <v-label class="mb-2">{{ $t("PersonalInformation.Address Line 1") }}</v-label>
          <v-textarea
            :rules="addressRules"
            variant="outlined"
            density="comfortable"
            rows="3"
            hide-details="auto"
            aria-label="address"
            v-model="address"
          ></v-textarea>
        </v-col>
        <v-col cols="12" md="6">
          <v-label class="mb-2">{{ $t("PersonalInformation.Country") }}</v-label>
          <v-autocomplete
            :rules="countryRules"
            v-model="country"
            aria-label="autocomplete"
            :disabled="isUpdating"
            :items="countries"
            color="primary"
            variant="outlined"
            hide-details="auto"
            density="comfortable"
            item-title="name"
            item-value="name"
            label="Select"
            single-line
            clearable
            clear-icon="$close"
          >
            <template v-slot:item="{ props, item }">
              <v-list-item v-bind="props" :title="item?.raw?.name">
                <template v-slot:prepend>
                  <v-avatar size="18" rounded="sm">
                    <img :src="item?.raw?.avatar" width="18" alt="flag" />
                  </v-avatar>
                </template>
              </v-list-item>
            </template>
          </v-autocomplete>
        </v-col>
        <v-col cols="12" md="6">
          <v-label class="mb-2">{{ $t("PersonalInformation.City") }}</v-label>
          <v-text-field
            :rules="cityRules"
            density="comfortable"
            single-line
            aria-label="state"
            variant="outlined"
            hide-details="auto"
            v-model="city"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-item>
    <v-card-item class="pa-0">
      <h5 class="text-h5 mb-0 pa-5 pb-4">Skills</h5>
      <v-divider></v-divider>
      <v-row class="pa-5">
        <v-col cols="12" v-for="(item, index) in permissions" :key="index">
          <v-label class="mb-2">{{ index.toUpperCase() }}</v-label>
          <v-autocomplete
            aria-label="autocomplete"
            density="comfortable"
            :items="item"
            variant="outlined"
            class="skill-field"
            color="primary"
            label="Outlined"
            single-line
            multiple
            hide-details="auto"
            closable-chips
            role="combobox"
          >
            <template v-slot:chip>
              <v-chip
                label
                variant="tonal"
                color="lightText"
                size="large"
                rounded="lg"
                style="--v-chip-height: 38px"
                class="my-1 text-subtitle-1 text-dark font-weight-regular"
                border="lightText solid thin opacity-50"
              >
                <template v-slot:close>
                  <SvgSprite name="custom-close" style="width: 20px; height: 20px; transform: rotate(45deg)" />
                </template>
              </v-chip>
            </template>
          </v-autocomplete>
        </v-col>
      </v-row>
    </v-card-item>
    <v-card-item class="pa-0">
      <h5 class="text-h5 mb-0 pa-5 pb-4">{{ $t("PersonalInformation.Professional Information") }}</h5>
      <v-divider></v-divider>
      <v-row class="pa-5">
        <v-col cols="12">
          <v-label class="mb-2">{{ $t("PersonalInformation.Note") }}</v-label>
          <v-textarea
            aria-label="note"
            variant="outlined"
            density="comfortable"
            hide-details="auto"
            single-line
            v-model="note"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row cols="12" md="6"  class="pa-5">
        <v-col cols="12" md="6">
          <v-label class="mb-2">{{ $t("PersonalInformation.Sector") }}</v-label>
          <v-text-field
            density="comfortable"
            single-line
            aria-label="firstname"
            variant="outlined"
            hide-details="auto"
            v-model="sector"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-label class="mb-2">{{ $t("PersonalInformation.Role") }}</v-label>
          <v-text-field
            density="comfortable"
            single-line
            aria-label="lastname"
            variant="outlined"
            hide-details="auto"
            v-model="role"
          ></v-text-field>
        </v-col>

        <v-col cols="12" class="text-right">
          <v-btn variant="outlined" color="secondary" rounded="md">{{ $t('Cancel') }}</v-btn>
          <v-btn @click="submit" variant="flat" color="primary" rounded="md" class="ml-2">{{ $t('Save') }}</v-btn>
        </v-col>

      </v-row>
    </v-card-item>

    </v-form>

  </v-card>
</template>
<style lang="scss">
.skill-field {
  .v-autocomplete__selection {
    height: 2.2rem;
  }
}
</style>
