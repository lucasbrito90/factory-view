<script setup lang="ts">
import { useAuthUserStore } from '@/stores/authUser';

const user = useAuthUserStore();

const props = defineProps<{
    customClass?: string[];
}>();

</script>


<template>
    <v-avatar :class="props.customClass" size="40" rounded="circle"
        v-if="user.userAuth?.avatar && typeof user.userAuth?.avatar === 'string'">
        <img :src="user.userAuth?.avatar" class="rounded-circle" width="40" alt="profile" />
    </v-avatar>
    <v-avatar :class="props.customClass" size="40" color="lightprimary" class="text-primary py-2" variant="flat" v-else> 
        {{ user.userAuth?.name?.substring(0, 2).toUpperCase() || '' }}
    </v-avatar>
</template>