<script setup lang="ts">
import SvgSprite from '@/components/shared/SvgSprite.vue';
import type { User } from '@/context/enrollment/interfaces/user';
import { getUserByEmail, updateUser } from '@/context/enrollment/services/userapi';
import { useAlertStore } from '@/stores/alert';
import countries from "@/utils/helpers/countries";
import moment from 'moment';
import { computed, onMounted, ref, type Ref } from 'vue';
import { useGoTo } from 'vuetify';

const alert = useAlertStore();
const user: Ref<User | null> = ref(null);
const emit = defineEmits(['getUser']);

const props = defineProps<{
    emailProps: string;
}>();

const scrollBar = {
    number: 500,
    offset: 0,
    easing: 'easeInOutCubic',
}

const isUpdating = ref(false);

const goTo = useGoTo();

const name: Ref<string> = ref('');
const fullDateOfBirth: Ref<Date> = ref(new Date());
const phoneNumber: Ref<string> = ref('');
const address: Ref<string> = ref('');
const country: Ref<string> = ref('');
const city: Ref<string> = ref('');
const sector: Ref<string> = ref('');
const role: Ref<string> = ref('');

onMounted(async () => {
    user.value = await getUserByEmail(props.emailProps);
    emit('getUser', user.value);

    if (user.value) {
        name.value = user.value.name || '';
        fullDateOfBirth.value = user.value.date_of_birth ? new Date(user.value.date_of_birth) : new Date();
        phoneNumber.value = user.value.phone_number || '';
        address.value = user.value.address || '';
        country.value = user.value.country || '';
        city.value = user.value.city || '';
        sector.value = user.value.sector || '';
        role.value = user.value.role || '';
    }
});


const Regform = ref();

const firstNameRules = ref([
    (v: string) => !!v || 'First Name is required',
    (v: string) => (v && v.length >= 3) || 'First name must be at least 3 characters long'
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

const computedDateFormattedMomentjs = computed(() => {
    return fullDateOfBirth.value ? moment(fullDateOfBirth.value).format('YYYY-MM-DD') : '';
});


async function submit() {

    Regform.value.validate();

    if (Regform.value.isValid) {


        try {
            const result: number = await updateUser({
                id: user.value?.id || 0,
                name: name.value,
                date_of_birth: computedDateFormattedMomentjs.value,
                phone_number: phoneNumber.value,
                address: address.value,
                country: country.value,
                city: city.value,
                sector: sector.value,
                role: role.value,
                email: user.value?.email || ''
            });

            if (result === 200) {
                alert.addSuccess('User updated successfully');
            }
        } catch (error) {
            //TODO: handle error
            //LOG ERROR
        }
    }

    goTo('#app', scrollBar);

}

</script>

<template>
    <v-card class="bg-surface" variant="outlined" rounded="lg">
        <h5 class="text-h5 mb-0 pa-5 pb-4">{{ $t("Personal Information") }}</h5>
        <v-divider></v-divider>

        <v-form ref="Regform" fast-fail class="loginForm">

            <v-card-item>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-label class="mb-2">{{ $t("PersonalInformation.First Name") }}</v-label>
                        <v-text-field v-model="name" :rules="firstNameRules" hide-details="auto" density="comfortable"
                            single-line aria-label="firstname" variant="outlined"
                            label="Your First Name"></v-text-field>
                    </v-col>
                    <v-col cols="12" xl="6" md="12">
                        <v-label class="mb-2">{{ $t("PersonalInformation.Date of Birth") }}</v-label>
                        <v-row>
                            <v-col cols="12" md="6" sm="6">
                                <v-menu :close-on-content-click="false">
                                    <template v-slot:activator="{ props }">
                                        <v-text-field single-line hide-details variant="outlined" v-bind="props"
                                            v-model="computedDateFormattedMomentjs" placeholder="YYYY-MM-DD" readonly
                                            density="comfortable" color="primary">
                                            <template v-slot:append-inner>
                                                <SvgSprite name="custom-calendar" class="text-lightText"
                                                    style="width: 20px; height: 20px" />
                                            </template>
                                        </v-text-field>
                                    </template>
                                    <v-date-picker v-model="fullDateOfBirth" hide-header
                                        color="primary"></v-date-picker>
                                </v-menu>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" xl="6">
                        <v-label class="mb-2"> {{ $t("PersonalInformation.Phone Number") }}</v-label>
                        <v-row>
                            <v-col cols="7" lg="9" md="7" sm="8">
                                <v-text-field single-line aria-label="phone number" variant="outlined"
                                    hide-details="auto" density="comfortable" v-model="phoneNumber"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card-item>
            <v-card-item class="pa-0">
                <h5 class="text-h5 mb-0 pa-5 pb-4">{{ $t("PersonalInformation.Address") }}</h5>
                <v-divider></v-divider>
                <v-row class="pa-5">
                    <v-col cols="12" md="6">
                        <v-label class="mb-2">{{ $t("PersonalInformation.Address Line 1") }}</v-label>
                        <v-textarea :rules="addressRules" variant="outlined" density="comfortable" rows="3"
                            hide-details="auto" aria-label="address" v-model="address"></v-textarea>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-label class="mb-2">{{ $t("PersonalInformation.Country") }}</v-label>
                        <v-autocomplete :rules="countryRules" v-model="country" aria-label="autocomplete"
                            :disabled="isUpdating" :items="countries" color="primary" variant="outlined"
                            hide-details="auto" density="comfortable" item-title="name" item-value="name" label="Select"
                            single-line clearable clear-icon="$close">
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
                        <v-text-field :rules="cityRules" density="comfortable" single-line aria-label="state"
                            variant="outlined" hide-details="auto" v-model="city"></v-text-field>
                    </v-col>
                </v-row>
            </v-card-item>
            <v-card-item class="pa-0">
                <h5 class="text-h5 mb-0 pa-5 pb-4">{{ $t("PersonalInformation.Professional Information") }}</h5>
                <v-divider></v-divider>
                <v-row cols="12" md="6" class="pa-5">
                    <v-col cols="12" md="6">
                        <v-label class="mb-2">{{ $t("PersonalInformation.Sector") }}</v-label>
                        <v-text-field density="comfortable" single-line aria-label="firstname" variant="outlined"
                            hide-details="auto" v-model="sector"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-label class="mb-2">{{ $t("PersonalInformation.Role") }}</v-label>
                        <v-text-field density="comfortable" single-line aria-label="lastname" variant="outlined"
                            hide-details="auto" v-model="role"></v-text-field>
                    </v-col>

                    <v-col cols="12" class="text-right">
                        <v-btn @click="submit" variant="flat" color="primary" rounded="md" class="ml-2">{{ $t('Update')
                            }}</v-btn>
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
