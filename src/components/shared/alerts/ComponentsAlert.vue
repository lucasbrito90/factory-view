<script setup lang="ts">
import { useAlertStore } from '@/stores/alert';
import BasicAlert from '@/components/shared/alerts/BasicAlert.vue';

const alert = useAlertStore();
</script>

<template>
    <BasicAlert type="error" :text="error" v-for="(error, index) in alert.errors" :key="index" />
    <BasicAlert type="success" :text="success" v-for="(success, index) in alert.successes" :key="index" />
</template>