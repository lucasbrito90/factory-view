import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const useErrorStore = defineStore('error', () => {
    const errors: Ref<string[]> = ref([]);

    function addError(error: string) {
        errors.value.push(error);
        setTimeout(() => {
            errors.value.shift();
        }, 10000);
    }

    function clearErrors() {
        errors.value = [];
    }

    function getErrors() {
        return errors.value;
    }

    function removeError(index: number) {
        errors.value.splice(index, 1);
    }

    return {
        errors,
        addError
    }
});