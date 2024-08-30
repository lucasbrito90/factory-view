<script setup lang="ts">
import { computed, onMounted, ref, type Ref } from 'vue';
// common components
import SvgSprite from '@/components/shared/SvgSprite.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import type { User } from '@/context/enrollment/interfaces/user';
import { activeUser, deactiveUser, listUsers } from '@/context/enrollment/services/userapi';
import type { Pagination } from '@/shared/interfaces/Pagination';
import { useRouter, type Router } from 'vue-router';

const users: Ref<Pagination<User> | null> = ref(null);
const limit: Ref<number> = ref(5);
const page: Ref<number> = ref(1);
const name: Ref<string> = ref('');
const email: Ref<string> = ref('');
const role: Ref<string> = ref('');
const sector: Ref<string> = ref('');
const router: Router = useRouter();

const usersData = async () => {
  users.value = await listUsers({
    page: page.value,
    limit: limit.value,
    name: name.value,
    email: email.value,
    role: role.value,
    sector: sector.value,
  });
};

onMounted(async () => {
  await usersData();
});

const listCards = computed<User[]>(() => {
  return users.value?.data || [];
});

const search = async () => {
  page.value = 1;
  await usersData();
};

</script>
<template>
  <v-row>
    <v-col cols="12" md="12">
      <UiParentCard :title="$t('User List')">
        <v-row class="justify-start">

          <v-col cols="3">
            <v-label class="mb-2">{{ $t("PersonalInformation.Full Name") }}</v-label>
            <v-text-field color="primary" hide-details width="200" variant="outlined" density="default"
              persistent-placeholder placeholder="name" v-model="name" class="mt-sm-0 mt-2 w-100" @update:modelValue="search">
              <template v-slot:prepend-inner>
                <SvgSprite name="custom-user-bold" class="text-lightText" style="width: 16px; height: 16px" />
              </template>
            </v-text-field>
          </v-col>

          <v-col cols="3">
            <v-label class="mb-2">{{ $t("PersonalInformation.Email") }}</v-label>
            <v-text-field color="primary" hide-details width="200" variant="outlined" density="default"
              persistent-placeholder placeholder="email" v-model="email" class="mt-sm-0 mt-2 w-100"
              @update:modelValue="search">
              <template v-slot:prepend-inner>
                <SvgSprite name="custom-sms" class="text-lightText" style="width: 16px; height: 16px" />
              </template>
            </v-text-field>
          </v-col>

          <v-col cols="3">
            <v-label class="mb-2">{{ $t("PersonalInformation.Role") }}</v-label>
            <v-text-field color="primary" hide-details width="200" variant="outlined" density="default"
              persistent-placeholder placeholder="role" v-model="role" class="mt-sm-0 mt-2 w-100" @update:modelValue="search">
              <template v-slot:prepend-inner>
                <SvgSprite name="custom-document-text" class="text-lightText" style="width: 16px; height: 16px" />
              </template>
            </v-text-field>
          </v-col>

          <v-col cols="3">
            <v-label class="mb-2">{{ $t("PersonalInformation.Sector") }}</v-label>
            <v-text-field color="primary" hide-details width="200" variant="outlined" density="default"
              persistent-placeholder placeholder="sector" v-model="sector" class="mt-sm-0 mt-2 w-100"
              @update:modelValue="search">
              <template v-slot:prepend-inner>
                <SvgSprite name="custom-search" class="text-lightText" style="width: 16px; height: 16px" />
              </template>
            </v-text-field>
          </v-col>
        </v-row>
        <v-divider class="my-4"></v-divider>

        <v-row v-for="card in listCards" :key="card.id">
          <v-col md="3" sm="5" cols="12" class="mt-2">
            <div class="d-flex align-start ga-4">
              <img :src="card.avatar" alt="avatar" width="50" class="rounded-md" v-if="card.avatar" />
              <div class="d-flex align-center ga-2" v-if="!card.avatar">
                <v-avatar size="32" color="lightprimary" class="text-primary" variant="flat"> {{ card.name &&
                  card.name.substring(0, 2).toLocaleUpperCase() }} </v-avatar>
              </div>
              <div>
                <h5 class="text-h5 mb-0">
                  {{ card.name }}
                  <v-btn icon v-if="card.email_verified_at !== null" variant="tonal" aria-label="verify" rounded="md"
                    color="success" size="small" class="verifybtn" @keyup.enter="search">
                    <SvgSprite name="custom-check-circle-fill" style="width: 16px; height: 16px" />
                  </v-btn>
                </h5>
                <small class="text-subtitle">{{ card.role }}</small>
                <p class="text-subtitle-2 text-lightText mt-2">{{ card.sector }}</p>
              </div>
            </div>
          </v-col>
          <v-col md="2" sm="3" cols="6">
            <small class="font-weight-bold">{{ $t("PersonalInformation.Email") }}</small>
            <h5 class="text-h6">{{ card.email }}</h5>
            <small class="mt-2 d-block font-weight-bold">{{ $t("PersonalInformation.Phone Number") }}</small>
            <h5 class="text-h6">{{ card.phone_number }}</h5>
          </v-col>
          <v-col md="2" sm="3" cols="6">
            <small class="font-weight-bold">{{ $t("PersonalInformation.Language") }}</small>
            <h5 class="text-h6 mb-2">{{ card.language }}</h5>
            <!-- <div class="avatarBox">
              <v-avatar variant="flat" size="small">
                <v-img :src="user1" alt="John"></v-img>
              </v-avatar>
              <v-avatar variant="flat" size="small">
                <v-img :src="user2" alt="John"></v-img>
              </v-avatar>
              <v-avatar variant="flat" size="small">
                <v-img :src="user3" alt="John"></v-img>
              </v-avatar>
              <v-avatar color="lightsecondary" variant="flat" size="small">
                <span class="text-h5">2</span>
              </v-avatar>
            </div> -->
          </v-col>
          <v-col md="5" sm="6" cols="12">
            <div class="d-flex align-center ga-4 mb-5">
              <span>{{ $t("Progress") }}</span>
              <v-progress-linear :model-value="card.completion_percentage" aria-label="progressbar"
                background-color="pink lighten-3" rounded color="primary"></v-progress-linear>
              <span>{{ card.completion_percentage && card.completion_percentage.toPrecision(2) + "%" }} </span>
            </div>
            <v-row>
              <v-col col="6">
                <v-btn 
                  color="secondary" 
                  variant="outlined" 
                  rounded="md" 
                  block 
                  size="small"
                  @click="router.push({path: `/app/user/edit/${card.email}`})">
                  <SvgSprite name="custom-edit-outline" class="mr-2" style="width: 16px; height: 16px" />
                  {{ $t("Edit") }}
                </v-btn>
              </v-col>
              <v-col col="6">
                <v-btn v-if="card.active == true" color="error" variant="outlined" rounded="md" block size="small"
                  @click="async () => {
                    let result: number = await deactiveUser(card.email);

                    if (result === 200) {
                      card.active = false;
                    }
                  }">
                  <SvgSprite name="custom-slash-outline" class="mr-2" style="width: 16px; height: 16px" />
                  {{ $t("Block") }}
                </v-btn>
                <v-btn v-else color="error" variant="flat" rounded="md" block size="small" @click="async () => {
                  let result: number = await activeUser(card.email);

                  if (result === 200) {
                    card.active = true;
                  }
                }">
                  <SvgSprite name="custom-undo-outline" class="mr-2" style="width: 16px; height: 16px" />
                  {{ $t("Unblock") }}
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col md="12" cols="12"><v-divider /></v-col> </v-row><br />
        <v-row justify="space-between">
          <v-col cols="8" >
            <v-pagination density="compact" class="left-pagination" active-color="primary" v-model="page"
              :length="users?.last_page" :first="users?.from" :last="users?.to" :total-visible="6" :page="page"
              @update:model-value="usersData">
            </v-pagination>
          </v-col>

          <v-col cols="2" >
          <v-autocomplete 
              v-model="limit" 
              :items="[5, 10, 15]" 
              color="primary"
              variant="outlined" hide-details="auto" density="default"
              single-line
              @update:modelValue="usersData"
              ></v-autocomplete>
            </v-col>

        </v-row>
      </UiParentCard>
    </v-col>
  </v-row>
</template>
<style lang="scss">
.verifybtn {
  height: 12px !important;
  width: 12px !important;
  margin-top: -3px;
}

.avatarBox {
  .v-avatar {
    margin-left: -5px;
  }
}

.left-pagination .v-pagination__list {
  justify-content: start;
}
</style>
