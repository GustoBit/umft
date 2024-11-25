<template>
  <div
    class="absolute w-[923px] -bottom-[64px] left-[218px] z-50 2xl:left-[220px] 2xl:w-[800px] xl:w-[600px] xl:left-[200px] lg:left-[115px] lg:w-[550px] lg:-bottom-[25px] md:left-[110px] md:w-[500px] md:-bottom-[20px] sm:left-0 sm:w-full sm:-bottom-[60%] sm:px-2 xs:-bottom-[90%] s:-bottom-[110%]"
  >
    <div class="flex flex-col items-center gap-[23px] xl:gap-4 lg:gap-3 sm:gap-2">
      <button
        class="border-l-[10px] border-cYellow lg:border-l-[8px] bg-[#EEEEEE] flex items-center gap-2 rounded-[10px] py-5 px-6 group hover:bg-cTextGreen hover:border-cYellow/50 transition-all duration-500 2xl:py-3 xl:py-2 xl:px-4 lg:py-1 lg:px-2 sm:rounded sm:border-l-[4px]"
      >
        <span
          class="sofiaMedium uppercase custom-text text-cGreen text-2xl group-hover:text-cYellow 2xl:text-lg xl:text-base lg:text-sm sm:text-xs"
        >
          ADMISSION STEPS
        </span>
        <ChevronRightIcon
          class="size-7 group-hover:text-cYellow group-hover:translate-x-1 transition duration-1000 2xl:size-5 xl:size-3 sm:size"
        />
      </button>

      <div
        class="flex flex-col w-full border-t-[10px] border-cYellow rounded-[10px] overflow-hidden lg:border-t-[8px] sm:flex"
      >
        <div
          class="bg-[#EEEEEE] py-6 px-[53px] shadow-[0_4px_14px_0_rgba(131,131,131,0.13)] 2xl:px-10 2xl:py-4 xl:py-3 xl:px-6 lg:py-1 lg:px-3 sm:hidden"
        >
          <div class="flex gap-[28px] divide-x-2 divide-cGray xl:gap-4 lg:gap-2">
            <div
              class="flex flex-col gap-[10px] career lg:gap-1"
              v-for="(admission, inx) of admissions"
              :key="inx"
            >
              <div class="flex items-start justify-between">
                <div class="custom-text text-cGreen xl:text-sm lg:text-xs">
                  {{ admission.title }}
                </div>
                <ArrowLongRightIcon class="size-7 text-cGreen/50 xl:size-5 lg:size-4" />
              </div>
              <div class="sofiaLight custom-text text-[#556666] xl:text-xs lg:text-[10px]">
                {{ admission.text }}
              </div>
            </div>
          </div>
        </div>

        <!-- SM SLIDER ANOTHER SCREEN HIDDEN -->
        <div
          class="bg-[#EEEEEE] py-4 px-3 shadow-[0_4px_14px_0_rgba(131,131,131,0.13)] hidden sm:block s:p-1"
        >
          <Splide class="flex gap-4" :options="splideOptions">
            <SplideSlide
              class="flex flex-col gap-[10px] relative"
              v-for="(admission, inx) of admissions"
              :key="inx"
            >
              <div class="custom-text text-cGreen text-base">
                {{ admission.title }}
              </div>
              <div class="sofiaLight custom-text text-[#556666] text-xs">
                {{ admission.text }}
              </div>
            </SplideSlide>
          </Splide>
        </div>

        <!-- SM BUTTONS SLIDER ANOTHER SCREEN HIDDEN -->
        <div class="bg-gray-200 sm:block hidden px-10 overflow-hidden btns s:px-4 s:text-nowrap">
          <Splide :options="splideButtons" class="flex items-center justify-between">
            <SplideSlide
              v-for="(item, index) of items"
              :key="index"
              class="hover:bg-cYellow transition duration-300 hover:text-cGray text-[10px] text-center"
            >
              {{ item }}
            </SplideSlide>
          </Splide>
        </div>

        <div
          class="bg-gray-200 flex items-center justify-between px-[50px] 2xl:px-10 xl:px-6 sm:hidden"
        >
          <button
            class="hover:bg-cYellow py-5 px-5 transition duration-300 hover:text-cGray 2xl:p-3 xl:p-2 xl:text-sm lg:text-xs lg:p-1"
            v-for="(item, index) of items"
            :key="index"
          >
            {{ item }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { ChevronRightIcon, ArrowLongRightIcon } from '@heroicons/vue/24/outline'

const admissions = ref([
  {
    title: 'CAREER CENTER',
    text: 'The University of Management and Future Technologies is one of the non-governmental higher education institutions in the Republic of ',
  },
  {
    title: 'CAREER CENTER',
    text: 'The University of Management and Future Technologies is one of the non-governmental higher education institutions in the Republic of ',
  },
  {
    title: 'CAREER CENTER',
    text: 'The University of Management and Future Technologies is one of the non-governmental higher education institutions in the Republic of ',
  },
])

import '@splidejs/splide/dist/css/splide.min.css'
const items = ref(['Course Listing', 'Library', 'Campus Life', 'Journals', 'Human Resourses'])

const splideOptions = ref({
  type: 'loop',
  perPage: 1,
  pagination: true,
  arrows: false,
  autoplay: true,
  interval: 2500,
  focus: 'center',
})

const splideButtons = ref({
  type: 'loop',
  perPage: 3,
  pagination: true,
  arrows: false,
  autoplay: true,
  interval: 3000,
  focus: 'center',
})
</script>
