<script setup lang="ts">
import { getdarkPrimary } from '@/context/enrollment/components/forms/charts/apex-chart/UpdateColors';
import { useAuthUserStore } from '@/stores/authUser';
import { computed } from 'vue';

const user = useAuthUserStore();
const completionPercentage = computed(() => {
  return [user.userAuth?.completion_percentage?.toFixed(2) || 0];
});

const chartOptions = computed(() => {
  return {
    chart: {
      type: 'radialBar',
      width: 136,
      height: 150,
      offsetX: -25,
      offsetY: -10,
      fontFamily: `inherit`
    },
    colors: [getdarkPrimary.value],
    plotOptions: {
      radialBar: {
        offsetY: 0,
        hollow: {
          margin: 5,
          size: '60%'
        },
        track: {
          show: true,
          background: '#ffffff'
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            show: true,
            offsetY: 5,
            fontWeight: 700
          }
        }
      }
    },
    grid: {
      padding: {
        right: -50,
        left: -35
      }
    },
    legend: {
      show: false
    }
  };
});

</script>

<template>
  <div class="d-flex align-center">
    <!-- ---------------------------------------------------- -->
    <!-- Redial Chart -->
    <!-- ---------------------------------------------------- -->
    <apexchart type="radialBar" class="radial-small" height="140" width="140" :options="chartOptions" :series="completionPercentage">
    </apexchart>
    <div>
      <h5 class="text-h5">{{ $t("PersonalInformation.Edit Your Profile") }}</h5>
      <p class="mb-0 text-caption text-lightText">{{ $t("PersonalInformation.Complete Your Profile") }}</p>
    </div>
  </div>
</template>

<style lang="scss">
.radial-small {
  margin-bottom: -25px;
}
</style>
