<template>
  <section class="">
    <div class="h1With48PxGreen">Our Goals</div>

    <div class="grid grid-cols-4 lg:grid-cols-2 lg:gap-4">
      <div
        class="flex flex-col gap-[26px] goals justify-between xl:gap-5 sm:gap-4"
        v-for="(goal, index) of goals"
        :key="index"
      >
        <div class="text-[32px] custom-text text-cGreen xl:text-2xl sm:text-base">
          {{ goal.title }}
        </div>
        <div class="text-[#657E7E] text-xl custom-text pr-[26px] xl:text-base xl:pr-4 sm:text-xs">
          {{ goal.text }}
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'
const goals = ref([
  {
    title: 'International Standard',
    text: 'Training of highly qualified specialists with modern knowledge based on international standards of education',
  },
  {
    title: 'Education for all',
    text: 'Identifying, supporting and providing scholarships to talented and skilled youth',
  },
  {
    title: 'Hybrid education',
    text: 'Distance learning in internationally certified training courses in conjunction with the curriculum',
  },
  {
    title: 'Science',
    text: 'Ensuring the effective integration of science, education and industry cooperation',
  },
])
</script>
