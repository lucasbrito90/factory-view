<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

const props = defineProps<{
    customClass?: string[];
}>();

</script>


<template>
    <v-avatar :class="props.customClass" size="40" rounded="circle"
        v-if="authStore.User?.avatar && typeof authStore.User.avatar === 'string'">
        <img :src="authStore.User?.avatar" class="rounded-circle" width="40" alt="profile" />
    </v-avatar>
    <v-avatar :class="props.customClass" size="40" color="lightprimary" class="text-primary py-2" variant="flat" v-else> 
        {{ authStore.User?.name?.substring(0, 2).toUpperCase() || '' }}
    </v-avatar>
</template>