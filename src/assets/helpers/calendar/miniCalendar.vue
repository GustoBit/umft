<template>
  <div class="w-screen h-screen flex items-center justify-center bg-gray-500">
    <div class="text-center p-[30px] bg-white rounded-[20px]">
      <div class="flex items-center text-gray-900">
        <button
          type="button"
          class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">Previous month</span>
          <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
        </button>
        <div class="flex-auto text-lg interBold text-[#657E7E]">January</div>
        <button
          type="button"
          class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">Next month</span>
          <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div class="w-full h-[1px] bg-[#F2F1FF] mt-5"></div>

      <div class="mt-5 grid grid-cols-7 text-lg leading-5 text-[#99ACAC] interMedium gap-5">
        <div>Mo</div>
        <div>Tu</div>
        <div>We</div>
        <div>Th</div>
        <div>Fr</div>
        <div>Sa</div>
        <div>Su</div>
      </div>

      <div class="isolate mt-5 grid grid-cols-7 gap-5 text-lg">
        <button
          v-for="day in days"
          :key="day.date"
          type="button"
          :class="[
            'hover:bg-cGreen hover:text-[#FFFFFF] focus:z-10 rounded-full overflow-hidden size-[30px]',

            day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',

            day.isSelected && 'text-[#FFFFFF]',

            !day.isSelected && day.isCurrentMonth && 'text-cGreen bg-cGreen',

            !day.isSelected && !day.isCurrentMonth && 'text-[#99ACAC]',
          ]"
        >
          <time
            :datetime="day.date"
            :class="[
              'flex items-center justify-center rounded-full',
              day.isSelected && !day.isToday && 'bg-cGreen',
            ]"
          >
            {{ day.date.split('-').pop().replace(/^0/, '') }}
          </time>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'

const days = [
  { date: '2021-12-27' },
  { date: '2021-12-28' },
  { date: '2021-12-29' },
  { date: '2021-12-30' },
  { date: '2021-12-31' },
  { date: '2022-01-01', isCurrentMonth: true },
  { date: '2022-01-02', isCurrentMonth: true },
  { date: '2022-01-03', isCurrentMonth: true },
  { date: '2022-01-04', isCurrentMonth: true },
  { date: '2022-01-05', isCurrentMonth: true },
  { date: '2022-01-06', isCurrentMonth: true },
  { date: '2022-01-07', isCurrentMonth: true },
  { date: '2022-01-08', isCurrentMonth: true },
  { date: '2022-01-09', isCurrentMonth: true, isSelected: true },
  { date: '2022-01-10', isCurrentMonth: true },
  { date: '2022-01-11', isCurrentMonth: true },
  { date: '2022-01-12', isCurrentMonth: true },
  { date: '2022-01-13', isCurrentMonth: true },
  { date: '2022-01-14', isCurrentMonth: true },
  { date: '2022-01-15', isCurrentMonth: true },
  { date: '2022-01-16', isCurrentMonth: true },
  { date: '2022-01-17', isCurrentMonth: true },
  { date: '2022-01-18', isCurrentMonth: true },
  { date: '2022-01-19', isCurrentMonth: true },
  { date: '2022-01-20', isCurrentMonth: true },
  { date: '2022-01-21', isCurrentMonth: true },
  { date: '2022-01-22', isCurrentMonth: true },
  { date: '2022-01-23', isCurrentMonth: true },
  { date: '2022-01-24', isCurrentMonth: true },
  { date: '2022-01-25', isCurrentMonth: true },
  { date: '2022-01-26', isCurrentMonth: true },
  { date: '2022-01-27', isCurrentMonth: true },
  { date: '2022-01-28', isCurrentMonth: true },
  { date: '2022-01-29', isCurrentMonth: true },
  { date: '2022-01-30', isCurrentMonth: true },
  { date: '2022-01-31', isCurrentMonth: true },
  { date: '2022-02-01' },
  { date: '2022-02-02' },
  { date: '2022-02-03' },
  { date: '2022-02-04' },
  { date: '2022-02-05' },
  { date: '2022-02-06' },
]
</script>
