<script setup lang="ts">
// common components
import { useAuthUserStore } from '@/stores/authUser';
import { onMounted, ref, type Ref } from 'vue';

const user = useAuthUserStore();
const photo: Ref<File | null> = ref(null);
const imageURL: Ref<string> = ref('');

onMounted(() => {
  if (user.userAuth?.avatar) {
    imageURL.value = user.userAuth.avatar as unknown as string;
  }
});

const emits = defineEmits(['update:photo']);

function onSelectedPhoto(event: Event) {
  photo.value = (event.target as HTMLInputElement).files?.[0] || null;

  if (user.userAuth !== null && user.userAuth !== undefined) {
    user.userAuth.avatar = photo.value;
  }

  emits('update:photo', photo.value);

  if (photo.value instanceof File) {
    imageURL.value = URL.createObjectURL(photo.value);
  }

}


</script>
<template>
  <div class="text-center">
    <v-avatar size="124" variant="outlined" color="primary" class="dashed bg-lightprimary" v-if="user.userAuth?.avatar">
      <v-img :src="imageURL" width="124" alt="profile" />
      <input type="file" class="preview-upload" aria-label="upload file" @change="onSelectedPhoto"/>
    </v-avatar>
    <v-avatar size="124" color="lightprimary" class="text-primary" variant="flat" v-if="!user.userAuth?.avatar">
      <span class="text-h1">{{user.userAuth?.name?.substring(0, 2).toUpperCase() || ''}}</span>
      <input type="file" class="preview-upload" aria-label="upload file" @change="onSelectedPhoto"/>
    </v-avatar>
    <h5 class="text-h5 pt-5 mb-1">{{ user.userAuth?.name || '' }}</h5>
    <p class="text-h6 text-lightText">{{ user.userAuth?.role || '' }}</p>
    <!-- <v-list class="d-flex justify-center py-0" aria-label="social links" aria-busy="true">
      <v-list-item class="px-3" rounded="md">
        <SvgSprite name="custom-google-outline" class="text-error" style="width: 20px; height: 20px" />
      </v-list-item>
      <v-list-item class="px-3" rounded="md">
        <SvgSprite name="custom-facebook-fill" class="text-facebook" style="width: 20px; height: 20px" />
      </v-list-item>
      <v-list-item class="px-3" rounded="md">
        <SvgSprite name="custom-apple-fill" class="text-linkedin" style="width: 20px; height: 20px" />
      </v-list-item>
    </v-list> -->
    <!-- <div class="my-4 mb-8 d-flex align-center ga-2">
      <div class="text-center w-100">
        <h5 class="text-h5 mb-1">86</h5>
        <span class="text-h6 text-lightText">Post </span>
      </div>
      <v-divider vertical></v-divider>
      <div class="text-center w-100">
        <h5 class="text-h5 mb-1">40</h5>
        <span class="text-h6 text-lightText">Project </span>
      </div>
      <v-divider vertical></v-divider>
      <div class="text-center w-100">
        <h5 class="text-h5 mb-1">4.5K</h5>
        <span class="text-h6 text-lightText">Members </span>
      </div>
    </div> -->
  </div>
</template>
