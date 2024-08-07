<script setup lang="ts">

type types = "primary" | "secondary" | "success" | "info" | "warning" | "error";

interface Props {
    color?: string;
    variant?: string;
    name?: string;
    icon?: boolean;
    rounded?: string;
};

const alert: Record<types, Props> = {
    primary: { color: 'primary', variant: 'tonal', icon: false, rounded: 'md', name: 'custom-alert-fill' },
    secondary: { color: 'secondary', variant: 'tonal', icon: false, rounded: 'md', name: 'custom-database-outline' },
    success: { color: 'success', variant: 'tonal', icon: false, rounded: 'md', name: 'custom-check-square-fill' },
    warning: { color: 'warning', variant: 'tonal', icon: false, rounded: 'md', name: 'custom-warning-fill' },
    info: { color: 'info', variant: 'tonal', icon: false, rounded: 'md', name: 'custom-circle-info-fill' },
    error: { color: 'error', variant: 'tonal', icon: false, rounded: 'md', name: 'custom-bug-fill' },
};

const props = defineProps<{
    type: types;
    text: string;
}>();

</script>

<template>
    <v-alert 
    :color="alert[props.type].color" 
    :variant="alert[props.type].variant" 
    class="mb-4" 
    :icon="alert[props.type].icon" 
    :rounded="alert[props.type].rounded">
        <template v-slot:prepend>
            <SvgSprite :name="alert[props.type].name" style="width: 20px; height: 20px" />
        </template>
        {{props.text}}
    </v-alert>
</template>