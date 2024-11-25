<template>
  <div class="h1With48PxGreen">University Officers</div>

  <div
    class="grid grid-cols-[438px_auto] gap-5 items-start officer xl:grid-cols-[1fr_2fr] sm:grid-cols-2 sm:gap-3 xs:grid-cols-1"
    v-for="(officer, index) of officers"
    :key="index"
  >
    <div class="overflow-hidden rounded-[20px] xl:h-full" v-if="officer.image.length > 0">
      <img :src="officer.image" alt="" class="object-cover w-full xl:h-full" />
    </div>

    <div
      class="flex flex-col gap-4 border-b-[2px] border-cGray pb-[26px] 2xl:pb-5 2xl:gap-3 xl:gap-1 md:pb-3 sm:pb-1"
    >
      <div class="text-[26px] custom-text text-[#657E7E] xl:text-xl lg:text-lg sm:text-xs">
        Chancellor
      </div>
      <div class="text-[32px] custom-text text-cGreen xl:text-2xl lg:text-xl sm:text-sm">
        Dean: {{ officer.dean }}
      </div>

      <div class="flex items-end gap-[78px] 2xl:gap-10 xl:gap-8 lg:gap-6 sm:flex-col sm:gap-1">
        <div
          class="flex flex-col gap-5 text-[#657E7E] text-lg custom-text sofiaLight flex-1 2xl:gap-3 xl:text-base lg:text-sm sm:gap-1 sm:text-xs"
        >
          <div class="xl:line-clamp-3 lg:line-clamp-2">{{ officer.text }}</div>
          <div class="xl:line-clamp-2 lg:line-clamp-2">{{ officer.summary }}</div>
        </div>

        <div><readMoreButton /></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import readMoreButton from '@/assets/helpers/readMoreButton/readMoreButton.vue'

import { ref } from 'vue'
const officers = ref([
  {
    dean: 'J. Robert Oppenheimer',
    text: 'The University of Management and Future Technologies is one of the non-governmental higher education institutions in the Republic of Uzbekistan that trains specialists in the fields of information and communication technologies, economics, finance and business management.',
    summary:
      'Trains specialists in the fields of information and communication technologies, economics, finance and business management.',
    image: new URL('@/assets/img/dean.jpg', import.meta.url).href,
  },
  {
    dean: 'J. Robert Oppenheimer',
    text: 'The University of Management and Future Technologies is one of the non-governmental higher education institutions in the Republic of Uzbekistan that trains specialists in the fields of information and communication technologies, economics, finance and business management.',
    summary:
      'Trains specialists in the fields of information and communication technologies, economics, finance and business management.',
    image: new URL('@/assets/img/dean.jpg', import.meta.url).href,
  },
])
</script>
