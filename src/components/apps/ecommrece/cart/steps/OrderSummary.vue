<script setup lang="ts">
import { onMounted } from 'vue';
import { useEcomStore } from '@/stores/apps/eCommerce';

const store = useEcomStore();
onMounted(() => {
  store.getsubTotal();
  store.getTotal();
  store.getDiscount();
});
</script>
<template>
  <v-card variant="outlined" class="my-6 bg-surface" rounded="lg">
    <h6 class="text-subtitle-1 pa-4 mb-0">Order Summary</h6>
    <v-divider></v-divider>
    <v-table density="compact" class="py-2">
      <tbody>
        <tr>
          <td class="text-h6">Sub Total</td>
          <td class="text-right text-subtitle-1">${{ store.subTotal }}</td>
        </tr>
        <tr>
          <td class="text-h6">Coupon Discount 5%</td>
          <td class="text-right text-h6">- ${{ store.discount }}</td>
        </tr>
        <tr>
          <td class="text-h6">Shipping Charges</td>
          <td class="text-right text-h6">-</td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
  <v-card variant="outlined" rounded="lg">
    <v-table class="py-2">
      <tbody>
        <tr>
          <td class="text-subtitle-1">Total</td>
          <td class="text-right text-subtitle-1">${{ store.total }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>
