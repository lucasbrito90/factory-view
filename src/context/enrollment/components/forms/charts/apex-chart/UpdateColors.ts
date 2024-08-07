import { computed } from 'vue';
import * as themeColors from '@/theme/LightTheme';
import * as themeDarkColors from '@/theme/DarkTheme';
import { useCustomizerStore } from '@/stores/customizer';

const custmizer = useCustomizerStore();

const getPrimary = computed(() => {
  if (custmizer.actTheme === 'LightTheme1') {
    return themeColors.LightTheme1.colors.primary;
  } else if (custmizer.actTheme === 'LightTheme2') {
    return themeColors.LightTheme2.colors.primary;
  } else if (custmizer.actTheme === 'LightTheme3') {
    return themeColors.LightTheme3.colors.primary;
  } else if (custmizer.actTheme === 'LightTheme4') {
    return themeColors.LightTheme4.colors.primary;
  } else if (custmizer.actTheme === 'LightTheme5') {
    return themeColors.LightTheme5.colors.primary;
  } else if (custmizer.actTheme === 'LightTheme6') {
    return themeColors.LightTheme6.colors.primary;
  } else if (custmizer.actTheme === 'LightTheme7') {
    return themeColors.LightTheme7.colors.primary;
  } else if (custmizer.actTheme === 'LightTheme8') {
    return themeColors.LightTheme8.colors.primary;
  } else {
    return themeColors.DefaultTheme.colors.primary;
  }
});

const getSuccess = computed(() => {
  if (custmizer.actTheme === 'LightTheme1') {
    return themeColors.LightTheme1.colors.success;
  } else if (custmizer.actTheme === 'LightTheme2') {
    return themeColors.LightTheme2.colors.success;
  } else if (custmizer.actTheme === 'LightTheme3') {
    return themeColors.LightTheme3.colors.success;
  } else if (custmizer.actTheme === 'LightTheme4') {
    return themeColors.LightTheme4.colors.success;
  } else if (custmizer.actTheme === 'LightTheme5') {
    return themeColors.LightTheme5.colors.success;
  } else if (custmizer.actTheme === 'LightTheme6') {
    return themeColors.LightTheme6.colors.success;
  } else if (custmizer.actTheme === 'LightTheme7') {
    return themeColors.LightTheme7.colors.success;
  } else if (custmizer.actTheme === 'LightTheme8') {
    return themeColors.LightTheme8.colors.success;
  } else {
    return themeColors.DefaultTheme.colors.success;
  }
});

const getdarkPrimary = computed(() => {
  if (custmizer.actTheme === 'LightTheme1') {
    return themeColors.LightTheme1.colors.darkprimary;
  } else if (custmizer.actTheme === 'LightTheme2') {
    return themeColors.LightTheme2.colors.darkprimary;
  } else if (custmizer.actTheme === 'LightTheme3') {
    return themeColors.LightTheme3.colors.darkprimary;
  } else if (custmizer.actTheme === 'LightTheme4') {
    return themeColors.LightTheme4.colors.darkprimary;
  } else if (custmizer.actTheme === 'LightTheme5') {
    return themeColors.LightTheme5.colors.darkprimary;
  } else if (custmizer.actTheme === 'LightTheme6') {
    return themeColors.LightTheme6.colors.darkprimary;
  } else if (custmizer.actTheme === 'LightTheme7') {
    return themeColors.LightTheme7.colors.darkprimary;
  } else if (custmizer.actTheme === 'LightTheme8') {
    return themeColors.LightTheme8.colors.darkprimary;
  } else {
    return themeColors.DefaultTheme.colors.darkprimary;
  }
});

const getdarkSecondary = computed(() => {
  if (custmizer.actTheme === 'LightTheme1') {
    return themeColors.LightTheme1.colors.darksecondary;
  } else if (custmizer.actTheme === 'LightTheme2') {
    return themeColors.LightTheme2.colors.darksecondary;
  } else if (custmizer.actTheme === 'LightTheme3') {
    return themeColors.LightTheme3.colors.darksecondary;
  } else if (custmizer.actTheme === 'LightTheme4') {
    return themeColors.LightTheme4.colors.darksecondary;
  } else if (custmizer.actTheme === 'LightTheme5') {
    return themeColors.LightTheme5.colors.darksecondary;
  } else if (custmizer.actTheme === 'LightTheme6') {
    return themeColors.LightTheme6.colors.darksecondary;
  } else if (custmizer.actTheme === 'LightTheme7') {
    return themeColors.LightTheme7.colors.darksecondary;
  } else if (custmizer.actTheme === 'LightTheme8') {
    return themeColors.LightTheme8.colors.darksecondary;
  } else {
    return themeColors.DefaultTheme.colors.darksecondary;
  }
});

const getLightBorder = computed(() => {
  if (custmizer.actTheme === 'LightTheme1') {
    return themeColors.LightTheme1.colors.borderLight;
  } else if (custmizer.actTheme === 'LightTheme2') {
    return themeColors.LightTheme2.colors.borderLight;
  } else if (custmizer.actTheme === 'LightTheme3') {
    return themeColors.LightTheme3.colors.borderLight;
  } else if (custmizer.actTheme === 'LightTheme4') {
    return themeColors.LightTheme4.colors.borderLight;
  } else if (custmizer.actTheme === 'LightTheme5') {
    return themeColors.LightTheme5.colors.borderLight;
  } else if (custmizer.actTheme === 'LightTheme6') {
    return themeColors.LightTheme6.colors.borderLight;
  } else if (custmizer.actTheme === 'LightTheme7') {
    return themeColors.LightTheme7.colors.borderLight;
  } else if (custmizer.actTheme === 'LightTheme8') {
    return themeColors.LightTheme8.colors.borderLight;
  } else if (custmizer.actTheme === 'DarkTheme1') {
    return themeDarkColors.DarkTheme1.colors.borderLight;
  } else if (custmizer.actTheme === 'DarkTheme2') {
    return themeDarkColors.DarkTheme2.colors.borderLight;
  } else if (custmizer.actTheme === 'DarkTheme3') {
    return themeDarkColors.DarkTheme3.colors.borderLight;
  } else if (custmizer.actTheme === 'DarkTheme4') {
    return themeDarkColors.DarkTheme4.colors.borderLight;
  } else if (custmizer.actTheme === 'DarkTheme5') {
    return themeDarkColors.DarkTheme5.colors.borderLight;
  } else if (custmizer.actTheme === 'DarkTheme6') {
    return themeDarkColors.DarkTheme6.colors.borderLight;
  } else if (custmizer.actTheme === 'DarkTheme7') {
    return themeDarkColors.DarkTheme7.colors.borderLight;
  } else if (custmizer.actTheme === 'DarkTheme8') {
    return themeDarkColors.DarkTheme8.colors.borderLight;
  } else if (custmizer.actTheme === 'DarkDefaultTheme') {
    return themeDarkColors.DarkDefaultTheme.colors.borderLight;
  } else {
    return themeColors.DefaultTheme.colors.borderLight;
  }
});

const getLightPrimary = computed(() => {
  if (custmizer.actTheme === 'LightTheme1') {
    return themeColors.LightTheme1.colors.primary200;
  } else if (custmizer.actTheme === 'LightTheme2') {
    return themeColors.LightTheme2.colors.primary200;
  } else if (custmizer.actTheme === 'LightTheme3') {
    return themeColors.LightTheme3.colors.primary200;
  } else if (custmizer.actTheme === 'LightTheme4') {
    return themeColors.LightTheme4.colors.primary200;
  } else if (custmizer.actTheme === 'LightTheme5') {
    return themeColors.LightTheme5.colors.primary200;
  } else if (custmizer.actTheme === 'LightTheme6') {
    return themeColors.LightTheme6.colors.primary200;
  } else if (custmizer.actTheme === 'LightTheme7') {
    return themeColors.LightTheme7.colors.primary;
  } else if (custmizer.actTheme === 'LightTheme8') {
    return themeColors.LightTheme8.colors.primary;
  } else {
    return themeColors.DefaultTheme.colors.primary200;
  }
});

const getSecondary = computed(() => {
  if (custmizer.actTheme === 'LightTheme1') {
    return themeColors.LightTheme1.colors.secondary;
  } else if (custmizer.actTheme === 'LightTheme2') {
    return themeColors.LightTheme2.colors.secondary;
  } else if (custmizer.actTheme === 'LightTheme3') {
    return themeColors.LightTheme3.colors.secondary;
  } else if (custmizer.actTheme === 'LightTheme4') {
    return themeColors.LightTheme4.colors.secondary;
  } else if (custmizer.actTheme === 'LightTheme5') {
    return themeColors.LightTheme5.colors.secondary;
  } else if (custmizer.actTheme === 'LightTheme6') {
    return themeColors.LightTheme6.colors.secondary;
  } else if (custmizer.actTheme === 'LightTheme7') {
    return themeColors.LightTheme7.colors.secondary;
  } else if (custmizer.actTheme === 'LightTheme8') {
    return themeColors.LightTheme8.colors.secondary;
  } else {
    return themeColors.DefaultTheme.colors.secondary;
  }
});

const getLightSecondary = computed(() => {
  if (custmizer.actTheme === 'LightTheme1') {
    return themeColors.LightTheme1.colors.secondary200;
  } else if (custmizer.actTheme === 'LightTheme2') {
    return themeColors.LightTheme2.colors.secondary200;
  } else if (custmizer.actTheme === 'LightTheme3') {
    return themeColors.LightTheme3.colors.secondary200;
  } else if (custmizer.actTheme === 'LightTheme4') {
    return themeColors.LightTheme4.colors.secondary200;
  } else if (custmizer.actTheme === 'LightTheme5') {
    return themeColors.LightTheme5.colors.secondary200;
  } else if (custmizer.actTheme === 'LightTheme6') {
    return themeColors.LightTheme6.colors.secondary200;
  } else if (custmizer.actTheme === 'LightTheme7') {
    return themeColors.LightTheme7.colors.secondary200;
  } else if (custmizer.actTheme === 'LightTheme8') {
    return themeColors.LightTheme8.colors.secondary200;
  } else {
    return themeColors.DefaultTheme.colors.secondary200;
  }
});

const getError = computed(() => {
  if (custmizer.actTheme === 'LightTheme1') {
    return themeColors.LightTheme1.colors.error;
  } else if (custmizer.actTheme === 'LightTheme2') {
    return themeColors.LightTheme2.colors.error;
  } else if (custmizer.actTheme === 'LightTheme3') {
    return themeColors.LightTheme3.colors.error;
  } else if (custmizer.actTheme === 'LightTheme4') {
    return themeColors.LightTheme4.colors.error;
  } else if (custmizer.actTheme === 'LightTheme5') {
    return themeColors.LightTheme5.colors.error;
  } else if (custmizer.actTheme === 'LightTheme6') {
    return themeColors.LightTheme6.colors.error;
  } else if (custmizer.actTheme === 'LightTheme7') {
    return themeColors.LightTheme7.colors.error;
  } else if (custmizer.actTheme === 'LightTheme8') {
    return themeColors.LightTheme8.colors.error;
  } else {
    return themeColors.DefaultTheme.colors.error;
  }
});

const getDarkText = computed(() => {
  if (custmizer.actTheme === 'LightTheme1') {
    return themeColors.LightTheme1.colors.darkText;
  } else if (custmizer.actTheme === 'LightTheme2') {
    return themeColors.LightTheme2.colors.darkText;
  } else if (custmizer.actTheme === 'LightTheme3') {
    return themeColors.LightTheme3.colors.darkText;
  } else if (custmizer.actTheme === 'LightTheme4') {
    return themeColors.LightTheme4.colors.darkText;
  } else if (custmizer.actTheme === 'LightTheme5') {
    return themeColors.LightTheme5.colors.darkText;
  } else if (custmizer.actTheme === 'LightTheme6') {
    return themeColors.LightTheme6.colors.darkText;
  } else if (custmizer.actTheme === 'LightTheme7') {
    return themeColors.LightTheme7.colors.darkText;
  } else if (custmizer.actTheme === 'LightTheme8') {
    return themeColors.LightTheme8.colors.darkText;
  } else if (custmizer.actTheme === 'DarkTheme1') {
    return themeDarkColors.DarkTheme1.colors.darkText;
  } else if (custmizer.actTheme === 'DarkTheme2') {
    return themeDarkColors.DarkTheme2.colors.darkText;
  } else if (custmizer.actTheme === 'DarkTheme3') {
    return themeDarkColors.DarkTheme3.colors.darkText;
  } else if (custmizer.actTheme === 'DarkTheme4') {
    return themeDarkColors.DarkTheme4.colors.darkText;
  } else if (custmizer.actTheme === 'DarkTheme5') {
    return themeDarkColors.DarkTheme5.colors.darkText;
  } else if (custmizer.actTheme === 'DarkTheme6') {
    return themeDarkColors.DarkTheme6.colors.darkText;
  } else if (custmizer.actTheme === 'DarkTheme7') {
    return themeDarkColors.DarkTheme7.colors.darkText;
  } else if (custmizer.actTheme === 'DarkTheme8') {
    return themeDarkColors.DarkTheme8.colors.darkText;
  } else if (custmizer.actTheme === 'DarkDefaultTheme') {
    return themeDarkColors.DarkDefaultTheme.colors.darkText;
  } else {
    return themeColors.DefaultTheme.colors.darkText;
  }
});

const getLightText = computed(() => {
  if (custmizer.actTheme === 'LightTheme1') {
    return themeColors.LightTheme1.colors.lightText;
  } else if (custmizer.actTheme === 'LightTheme2') {
    return themeColors.LightTheme2.colors.lightText;
  } else if (custmizer.actTheme === 'LightTheme3') {
    return themeColors.LightTheme3.colors.lightText;
  } else if (custmizer.actTheme === 'LightTheme4') {
    return themeColors.LightTheme4.colors.lightText;
  } else if (custmizer.actTheme === 'LightTheme5') {
    return themeColors.LightTheme5.colors.lightText;
  } else if (custmizer.actTheme === 'LightTheme6') {
    return themeColors.LightTheme6.colors.lightText;
  } else if (custmizer.actTheme === 'LightTheme7') {
    return themeColors.LightTheme7.colors.lightText;
  } else if (custmizer.actTheme === 'LightTheme8') {
    return themeColors.LightTheme8.colors.lightText;
  } else if (custmizer.actTheme === 'DarkTheme1') {
    return themeDarkColors.DarkTheme1.colors.lightText;
  } else if (custmizer.actTheme === 'DarkTheme2') {
    return themeDarkColors.DarkTheme2.colors.lightText;
  } else if (custmizer.actTheme === 'DarkTheme3') {
    return themeDarkColors.DarkTheme3.colors.lightText;
  } else if (custmizer.actTheme === 'DarkTheme4') {
    return themeDarkColors.DarkTheme4.colors.lightText;
  } else if (custmizer.actTheme === 'DarkTheme5') {
    return themeDarkColors.DarkTheme5.colors.lightText;
  } else if (custmizer.actTheme === 'DarkTheme6') {
    return themeDarkColors.DarkTheme6.colors.lightText;
  } else if (custmizer.actTheme === 'DarkTheme7') {
    return themeDarkColors.DarkTheme7.colors.lightText;
  } else if (custmizer.actTheme === 'DarkTheme8') {
    return themeDarkColors.DarkTheme8.colors.lightText;
  } else if (custmizer.actTheme === 'DarkDefaultTheme') {
    return themeDarkColors.DarkDefaultTheme.colors.lightText;
  } else {
    return themeColors.DefaultTheme.colors.lightText;
  }
});

export {
  getPrimary,
  getSecondary,
  getdarkPrimary,
  getLightPrimary,
  getLightSecondary,
  getLightBorder,
  getDarkText,
  getLightText,
  getError,
  getSuccess,
  getdarkSecondary
};
