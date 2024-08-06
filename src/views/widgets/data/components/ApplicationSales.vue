<script setup lang="ts">
import { shallowRef } from 'vue';

const products = shallowRef([
  {
    title: 'Materially',
    subtext: 'Powerful Admin Theme',
    sales: '16,300',
    avgprice: '53',
    total: '15,652'
  },
  {
    title: 'Photoshop',
    subtext: 'Design Software',
    sales: '26,421',
    avgprice: '35',
    total: '8,785'
  },
  {
    title: 'Guruable',
    subtext: 'Best Admin Template',
    sales: '8,265',
    avgprice: '98',
    total: '9,652'
  },
  {
    title: 'Flatable',
    subtext: 'Admin App',
    sales: '10,652',
    avgprice: '20',
    total: '7,856'
  }
]);
</script>

<template>
  <v-table class="bordered-table" hover density="comfortable">
    <thead class="bg-containerBg">
      <tr>
        <th class="text-left pl-6 text-caption font-weight-bold text-uppercase">Application</th>
        <th class="text-right text-caption font-weight-bold text-uppercase">Sales</th>
        <th class="text-right text-caption font-weight-bold text-uppercase">Avg. Price</th>
        <th class="text-right text-caption font-weight-bold text-uppercase pr-6">Total</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.title">
        <td class="py-3 pl-6" style="min-width: 200px">
          <h6 class="text-subtitle-1 mb-0">{{ item.title }}</h6>
          <span class="text-lightText text-caption">{{ item.subtext }}</span>
        </td>
        <td class="text-right py-3">{{ item.sales }}</td>
        <td class="text-right py-3">${{ item.avgprice }}</td>
        <td class="text-right py-3 pr-6">${{ item.total }}</td>
      </tr>
    </tbody>
  </v-table>
</template>
