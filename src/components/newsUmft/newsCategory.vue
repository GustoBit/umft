<template>
  <section
    class="flex flex-col gap-4 mt-[66px] mb-[144px] xl:mt-8 lg:mt-7 md:mt-6 sm:my-5 2xl:mb-14 xl:mb-12 lg:mb-10 md:mb-6"
  >
    <h1
      class="ahellya custom-text text-[48px] text-cGreen pb-[10px] border-b-[2px] border-[#D2DBDB] mb-[26px] xl:text-[40px] lg:text-[32px] sm:text-2xl xl:mb-0"
    >
      News
    </h1>

    <div class="grid grid-cols-[360px_auto] gap-[41px] 2xl:gap-5 xl:grid-cols-1 xl:gap-8">
      <div class="flex flex-col gap-[26px] lg:gap-5 sm:gap-4">
        <h1 class="text-[32px] custom-text text-cTextGreen lg:text-2xl md:text-xl sm:text-lg">
          Category
        </h1>

        <div class="flex flex-wrap gap-[6px]">
          <button
            v-for="(event, index) of events"
            :key="index"
            @click="event.status = !event.status"
            :class="[
              event.status ? 'ring-cGreen text-cGreen' : '',
              'py-[5px] px-[15px] ring-1 ring-inset ring-[#657E7E] rounded-[90px] overflow-hidden text-[#657E7E] hover:ring-cGreen hover:text-cGreen flex items-center gap-1 custom-text',
            ]"
          >
            {{ event.title }}
            <XMarkIcon class="size-[12px]" :class="!event.status ? 'hidden' : ''" />
          </button>
        </div>
      </div>

      <div class="grid grid-cols-[auto_360px] md:grid-cols-2 sm:grid-cols-1 sm:gap-8">
        <div class="flex flex-col">
          <div class="flex flex-col pr-[23px] pb-4 border-b-[2px] border-cGray sm:px-5">
            <span class="overflow-hidden rounded-[10px] block">
              <img src="@/assets/img/students.jpg" alt="" class="w-full" />
            </span>
            <div class="my-4 flex flex-col gap-4 xl:gap-1 xl:my-3 sm:my-1">
              <span class="block text-[24px] sofiaMedium leading-[1.5] text-cGreen md:text-lg">
                Student Team Wins International Robotics Competition
              </span>
              <span
                class="sofiaLight custom-text text-[#657E7E] line-clamp-4 pr-[22px] md:line-clamp-2 md:text-sm"
              >
                To be one of the universities with high rating indicators in the field of higher
                education, providing quality education at the level of international standards,
                training competitive, modern mature specialists.
              </span>
            </div>
            <span class="flex items-center justify-between">
              <p class="text-[#97A1A1] custom-text uppercase lg:text-sm">10 AUG 2024</p>
              <readMoreButton />
            </span>
          </div>

          <div class="flex gap-[19px] pr-6 mt-auto lg:flex-col lg:m-0 lg:pt-5 sm:px-5 sm:gap-2">
            <span class="overflow-hidden rounded-[10px] block 2xl:flex-1 lg:flex-none h-fit">
              <img src="@/assets/img/professorWoman.jpg" alt="" class="w-full object-cover" />
            </span>
            <div class="flex-1">
              <div class="flex flex-col gap-4 2xl:gap-3">
                <span class="block text-[22px] sofiaMedium leading-[1.5] text-cGreen 2xl:text-lg">
                  Professor Jane Doe Publishes Groundbreaking Research
                </span>
                <span
                  class="sofiaLight custom-text text-[#657E7E] line-clamp-5 pr-[22px] 2xl:text-sm 2xl:pr-0 lg:line-clamp-2"
                >
                  To be one of the universities with high rating indicators in the field of higher
                  education, providing quality education, providing quality education, quality
                  education, providing quality education.
                </span>
              </div>
              <span class="flex items-center justify-between mt-[21px] 2xl:mt-3">
                <p class="text-[#97A1A1] custom-text uppercase 2xl:text-sm">10 AUG 2024</p>
                <readMoreButton />
              </span>
            </div>
          </div>
        </div>

        <div
          class="flex flex-col divide-y-2 divide-cGray space-y-4 pl-[21px] border-l-[2px] border-cGray sm:px-5 sm:border-none"
        >
          <div class="flex flex-col">
            <span class="overflow-hidden rounded-[10px] block">
              <img src="@/assets/img/newsLatest.jpg" alt="" class="w-full" />
            </span>
            <div class="mt-4 mb-[22px] flex flex-col gap-[10px]">
              <span class="block text-lg sofiaMedium leading-[1.5] text-cGreen lg:text-base">
                Student Team Wins International Robotics Competition
              </span>
              <span class="sofiaLight text-[14px] custom-text text-[#657E7E] line-clamp-2"
                >To be one of the universities with high rating indicators in the field of higher
                education ...
              </span>
            </div>
            <span class="flex items-center justify-between">
              <p class="text-[#97A1A1] custom-text uppercase lg:text-sm">10 AUG 2024</p>
              <readMoreButton />
            </span>
          </div>

          <div class="flex flex-col pt-4">
            <span class="overflow-hidden rounded-[10px] block">
              <img src="@/assets/img/newsUmftImg.jpg" alt="" class="w-full" />
            </span>
            <div class="mt-4 mb-[22px] flex flex-col gap-[10px]">
              <span class="block text-lg sofiaMedium leading-[1.5] text-cGreen lg:text-base">
                Student Team Wins International Robotics Competition
              </span>
              <span class="sofiaLight text-[14px] custom-text text-[#657E7E] line-clamp-2"
                >To be one of the universities with high rating indicators in the field of higher
                education ...
              </span>
            </div>
            <span class="flex items-center justify-between">
              <p class="text-[#97A1A1] custom-text uppercase lg:text-sm">10 AUG 2024</p>
              <readMoreButton />
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline'
import readMoreButton from '@/assets/helpers/readMoreButton/readMoreButton.vue'

import { ref } from 'vue'

const events = ref([
  {
    status: false,
    title: 'Any',
  },
  {
    status: false,
    title: 'Education',
  },
  {
    status: false,
    title: 'Music',
  },
  {
    status: false,
    title: 'Admissions',
  },
  {
    status: false,
    title: 'Awards',
  },
  {
    status: false,
    title: 'Education',
  },
  {
    status: false,
    title: 'Science',
  },
  {
    status: false,
    title: 'Business',
  },
  {
    status: false,
    title: 'Art',
  },
  {
    status: false,
    title: 'Any',
  },
  {
    status: false,
    title: 'Music',
  },
  {
    status: false,
    title: 'Admissions',
  },
  {
    status: false,
    title: 'Awards',
  },
  {
    status: false,
    title: 'Business',
  },
  {
    status: false,
    title: 'Art',
  },
  {
    status: false,
    title: 'Any',
  },
  {
    status: false,
    title: 'Education',
  },
  {
    status: false,
    title: 'Music',
  },
  {
    status: false,
    title: 'Admissions',
  },
  {
    status: false,
    title: 'Awards',
  },
  {
    status: false,
    title: 'Education',
  },
  {
    status: false,
    title: 'Science',
  },
  {
    status: false,
    title: 'Business',
  },
  {
    status: false,
    title: 'Art',
  },
  {
    status: false,
    title: 'Any',
  },
  {
    status: false,
    title: 'Music',
  },
  {
    status: false,
    title: 'Admissions',
  },
  {
    status: false,
    title: 'Awards',
  },
  {
    status: false,
    title: 'Business',
  },
  {
    status: false,
    title: 'Art',
  },

  {
    status: false,
    title: 'Science',
  },
  {
    status: false,
    title: 'Business',
  },
])
</script>
