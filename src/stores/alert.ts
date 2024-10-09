import { defineStore } from 'pinia';
import { ref, type Ref } from 'vue';

export const useAlertStore = defineStore('alerts', () => {
  const errors: Ref<string[]> = ref([]);
  const successes: Ref<string[]> = ref([]);

  function addError(error: string) {
    errors.value.push(error);
    setTimeout(
      () => {
        errors.value.shift();
      },
      import.meta.env.VITE_ERROR_TIMEOUT
    );
  }

  function addSuccess(success: string) {
    successes.value.push(success);
    setTimeout(
      () => {
        successes.value.shift();
      },
      import.meta.env.VITE_ERROR_TIMEOUT
    );
  }

  function clearErrors() {
    errors.value = [];
  }

  function clearSuccess() {
    successes.value = [];
  }

  function getErrors() {
    return errors.value;
  }

  function getSuccess() {
    return successes.value;
  }

  function removeError(index: number) {
    errors.value.splice(index, 1);
  }

  function removeSuccess(index: number) {
    successes.value.splice(index, 1);
  }

  function clearAll() {
    clearErrors();
    clearSuccess();
  }

  return {
    errors,
    addError,
    clearErrors,
    getErrors,
    removeError,
    clearAll,
    addSuccess,
    clearSuccess,
    getSuccess,
    removeSuccess,
    successes
  };
});
