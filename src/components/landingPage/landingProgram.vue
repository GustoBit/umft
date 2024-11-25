<template>
  <section>
    <div class="h1With48PxGreen">
      <div class="relative w-fit">
        Programs
        <span
          class="absolute bg-[#E0E1E5] top-0 -right-[35%] w-[58px] py-[6px] flex items-center justify-center rounded-[90px] sofiaLight custom-text text-[#7A8D8D] text-sm xl:w-fit xl:px-4 xl:text-xs lg:py-1 lg:px-3 sm:px-2"
        >
          79
        </span>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-5 sm:grid-cols-1 sm:gap-3">
      <select
        name="location"
        class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-cGreen ring-1 lg:text-sm ring-inset ring-cTextGreen focus:ring-2 focus:ring-cGreen"
        v-for="(select, index) of selects"
        :key="index"
        :disabled="!select.value"
      >
        <option v-for="(opt, idx) of select.items" :key="idx" :selected="idx - 2" :value="opt">
          {{ opt }}
        </option>
      </select>
    </div>

    <div class="mt-[30px] lg:mt-[25px] sm:mt-5">
      <lessonDetails />
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'
const selects = ref([
  {
    value: true,
    items: ['United States', 'Level', 'Mexico'],
  },
  {
    value: false,
    items: ['United States', 'Faculty', 'Mexico'],
  },
  {
    value: false,
    items: ['United States', 'Format', 'Mexico'],
  },
])

import lessonDetails from '@/assets/helpers/lesson/lessonDetails.vue'
</script>
