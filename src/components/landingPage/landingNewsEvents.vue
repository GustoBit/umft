<template>
  <section>
    <div class="h1Title48 flex justify-between">
      <span>News</span>
      <span>Events</span>
    </div>

    <div class="flex flex-col items-center gap-10 md:gap-8 sm:gap-4">
      <div
        class="grid grid-cols-[574px_auto] gap-6 border-b-[2px] border-cGray 2xl:grid-cols-2 xl:grid-cols-1 xl:gap-0"
      >
        <aside
          class="py-4 pr-5 border-r-[2px] border-cGray xl:grid grid-cols-[2fr_1fr] xl:p-0 xl:border-r-0 xl:border-b-[2px] xl:py-4 xl:gap-5 sm:grid-cols-1"
        >
          <div
            class="flex flex-col gap-4 pb-4 border-b-[2px] border-cGray xl:border-0 xl:p-0 lg:gap-2"
          >
            <div class="overflow-hidden rounded-[10px]">
              <img src="@/assets/img/guys.jpg" alt="" class="w-full object-cover h-full" />
            </div>

            <div class="sofiaMedium leading-[1.5] text-cGreen text-2xl lg:text-xl">
              Student Team Wins International Robotics Competition
            </div>

            <div class="sofiaLight custom-text text-[#657E7E]">
              To be one of the universities with high rating indicators in the field of higher
              education, providing quality education at the level of international standards,
              training competitive, modern mature specialists.
            </div>

            <div class="flex items-end justify-between lg:mt-auto">
              <div class="uppercase text-[#97A1A1] custom-text">10 AUG 2024</div>
              <div>
                <readMoreButton />
              </div>
            </div>
          </div>

          <div class="py-4 xl:p-0">
            <div class="flex gap-5 xl:gap-1 xl:flex-col">
              <div class="overflow-hidden rounded-[10px]">
                <img src="@/assets/img/bacalavr.jpg" alt="" class="w-full h-full object-cover" />
              </div>

              <div class="flex flex-col gap-4 flex-1 xl:gap-1">
                <div class="sofiaMedium leading-[1.5] text-cGreen text-lg lg:text-base">
                  Professor Jane Doe Publishes Groundbreaking Research
                </div>

                <div class="flex flex-col gap-5 xl:gap-3">
                  <div
                    class="sofiaLight custom-text text-[#657E7E] text-sm xl:line-clamp-4 md:line-clamp-none"
                  >
                    To be one of the universities with high rating indicators in the field of higher
                    education, providing quality education, providing quality education, quality
                    education, providing quality education.
                  </div>

                  <div class="flex items-end justify-between">
                    <span class="uppercase custom-text text-[#97A1A1]">10 AUG 2024</span>
                    <div>
                      <readMoreButton />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <main class="">
          <div
            class="grid grid-cols-[auto_356px] gap-5 border-b-[2px] border-cGray 2xl:grid-cols-[1fr_1fr] 2xl:gap-3 xl:grid-cols-[3fr_1fr] lg:grid-cols-[2fr_1fr] sm:grid-cols-1"
          >
            <div
              class="border-r-[2px] border-cGray flex flex-col gap-4 py-4 pr-6 2xl:pr-3 xl:gap-2 sm:border-0 sm:pr-0 sm:pb-0"
            >
              <div class="overflow-hidden rounded-[10px]">
                <img src="@/assets/img/visualStd.jpg" alt="" class="w-full h-full object-cover" />
              </div>

              <div class="">
                <div class="sofiaMedium leading-[1.5] text-cGreen text-lg">
                  Student Team Wins International Robotics Competition
                </div>

                <div
                  class="sofiaLight custom-text text-[#657E7E] text-sm mt-[10px] mb-5 line-clamp-3 xl:my-1"
                >
                  To be one of the universities with high rating indicators in the field of higher
                  education ...
                </div>

                <div class="flex items-end justify-between">
                  <span class="text-[#97A1A1] custom-text">10 AUG 2024</span>
                  <div>
                    <readMoreButton />
                  </div>
                </div>
              </div>
            </div>

            <div class="divide-y-2 divide-cGray flex flex-col py-4 gap-4 sm:flex-row sm:divide-y-0">
              <div
                class="flex flex-col gap-11 event md:gap-5 sm:gap-3"
                v-for="(event, index) of events"
                :key="index"
              >
                <div
                  class="leading-[1.5] text-cGreen text-2xl 2xl:text-base xl:text-xl lg:text-lg sm:text-base"
                >
                  {{ event.title }}
                </div>

                <div class="flex items-end justify-between xs:flex-col xs:gap-2">
                  <span class="custom-text text-cYellow sm:text-xs">{{ event.date }}</span>
                  <div>
                    <readMoreButton />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="grid grid-cols-[auto_356px] gap-5 2xl:grid-cols-[1fr_1fr] 2xl:gap-3 xl:grid-cols-[1fr_3fr] lg:grid-cols-[1fr_2fr] s:grid-cols-1"
          >
            <div
              class="border-r-[2px] border-cGray flex flex-col gap-4 py-4 pr-6 2xl:pr-3 xl:order-2 xl:pr-0 xl:pl-3 xl:border-r-0 xl:border-l-[2px] xl:gap-1 s:order-1 s:pl-0 s:border-0"
            >
              <div class="overflow-hidden rounded-[10px]">
                <img src="@/assets/img/bufet.jpg" alt="" class="w-full h-full object-cover" />
              </div>

              <div class="">
                <div class="sofiaMedium leading-[1.5] text-cGreen text-lg sm:text-base xs:text-sm">
                  Student Team Wins International Robotics Competition
                </div>

                <div
                  class="sofiaLight custom-text text-[#657E7E] text-sm mt-[10px] mb-5 line-clamp-3 xl:my-1 xs:text-xs"
                >
                  To be one of the universities with high rating indicators in the field of higher
                  education ...
                </div>

                <div class="flex items-end justify-between">
                  <span class="text-[#97A1A1] custom-text">10 AUG 2024</span>
                  <div>
                    <readMoreButton />
                  </div>
                </div>
              </div>
            </div>

            <div
              class="divide-y-2 divide-cGray flex flex-col py-4 gap-4 xl:order-1 s:order-2 s:flex-row s:pt-0 s:divide-y-0"
            >
              <div
                class="flex flex-col gap-11 event md:gap-5 sm:gap-3 smEvent"
                v-for="(event, index) of events"
                :key="index"
              >
                <div
                  class="leading-[1.5] text-cGreen text-2xl 2xl:text-base xl:text-xl lg:text-lg sm:text-xs xs:text-[10px]"
                >
                  {{ event.title }}
                </div>

                <div class="flex items-end justify-between sm:flex-col sm:gap-1">
                  <span class="custom-text text-cYellow sm:text-xs">{{ event.date }}</span>
                  <div>
                    <readMoreButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <button
        type="button"
        class="rounded-[90px] bg-[#E0E1E5] flex items-center gap-3 py-2 px-5 hover:bg-cTextGreen group transition duration-300 sm:py-1 sm:px-4"
      >
        <span
          class="sofiaLight leading-[1.5] text-cGreen text-lg group-hover:text-cGray sm:text-base"
          >see all</span
        >
        <ArrowLongRightIcon class="size-4 group-hover:text-cGray sm:size-3" />
      </button>
    </div>
  </section>
</template>
<script setup>
import readMoreButton from '@/assets/helpers/readMoreButton/readMoreButton.vue'
import { ref } from 'vue'

import { ArrowLongRightIcon } from '@heroicons/vue/24/outline'

const events = ref([
  {
    title: 'Student Team Wins International Robotics Competition',
    date: '10 AUG 2024',
  },
  {
    title: 'Student Team Wins International Robotics Competition',
    date: '1 OCT 2024',
  },
])
</script>
