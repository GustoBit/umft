<template>
  <section class="custom-container custom-responsive">
    <section class="flex flex-col gap-4 sm:mt-8">
      <div class="flex justify-between items-end pb-[10px] border-b-[2px] border-[#D2DBDB]">
        <h1
          class="ahellya custom-text text-[48px] text-cGreen xl:text-[40px] lg:text-[32px] sm:text-2xl"
        >
          Events
        </h1>
        <div class="flex items-center gap-[36px] text-[#B9C1C1]">
          <ChevronLeftIcon class="size-[40px] sm:size-[25px] hover:text-[#6F8B8A] cursor-pointer" />
          <ChevronRightIcon
            class="size-[40px] sm:size-[25px] hover:text-[#6F8B8A] cursor-pointer"
          />
        </div>
      </div>

      <div
        class="grid grid-cols-[406px_auto] gap-[64px] 2xl:gap-10 xl:grid-cols-1 xl:gap-8 lg:gap-7"
      >
        <!-- the first column When -->
        <div class="flex flex-col gap-10 xl:flex-row xl:gap-10 lg:gap-8 md:flex-col">
          <!-- the first child column -->
          <div class="flex flex-col gap-4">
            <h1 class="text-[32px] custom-text text-cTextGreen sm:text-lg">When</h1>

            <form class="flex items-end gap-[10px] sm:flex-wrap">
              <div class="flex flex-col gap-1">
                <label for="before" class="custom-text text-[#657E7E] sm:text-sm"> Before </label>
                <input
                  type="date"
                  id="before"
                  v-model="before"
                  @click="beforeCalendar()"
                  class="outline-none ring-1 ring-[#657E7E] ring-inset rounded-[90px] py-[5px] px-[18px] custom-text text-base text-[#657E7E] w-[126px]"
                />
              </div>
              <div class="flex flex-col gap-1">
                <label for="after" class="custom-text text-[#657E7E] sm:text-sm">
                  On or After
                </label>
                <input
                  @click="afterCalendar()"
                  type="date"
                  id="after"
                  v-model="after"
                  class="outline-none ring-1 ring-[#657E7E] ring-inset rounded-[90px] py-[5px] px-[18px] custom-text text-base text-[#657E7E] w-[126px]"
                />
              </div>

              <button
                type="button"
                class="bg-cGreen rounded-[90px] text-[#EEEEEE] py-[5px] px-10 hover:bg-cTextGreen"
              >
                Apply
              </button>
            </form>
          </div>

          <!-- the second child column -->
          <div class="flex flex-col gap-[26px] lg:gap-5 sm:gap-4 xl:gap-5">
            <h1 class="text-[32px] custom-text text-cTextGreen lg:text-2xl md:text-xl sm:text-lg">
              Category
            </h1>

            <div class="flex flex-wrap gap-[6px] overflow-y-scroll h-[142px] hide-scrollbar lg:h-fit">
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
        </div>

        <!-- second columns  -->
        <div class="grid grid-cols-3 gap-4 xl:gap-7 md:gap-5 sm:grid-cols-1 sm:px-6">
          <div class="rounded-[20px] bg-[#E5E5E5] py-[25px] px-4 flex flex-col relative">
            <h1 class="sofiaMedium leading-[1.5] text-cGreen">Robotics Competition</h1>

            <div class="sofiaLight custom-text text-sm text-[#657E7E] mt-4 mb-[26px] lg:my-3">
              UMFT Library
            </div>

            <div class="h-[140px] overflow-auto hide-scrollbar lg:h-[120px] sm:h-[80px]">
              <div class="flex flex-wrap gap-[6px]">
                <button
                  v-for="(event, index) of events"
                  :key="index"
                  class="category-oldButton custom-text"
                  v-show="event.status"
                >
                  {{ event.title }}
                </button>
              </div>
            </div>

            <div class="flex items-center justify-between mt-auto">
              <div class="text-[52px] custom-text text-[#FDBA2D] lg:text-4xl">24</div>
              <div class="text-sm custom-text text-[#657E7E] flex flex-col items-end lg:text-xs">
                <div>SEP</div>
                <div>2024</div>
              </div>
            </div>

            <div class="absolute w-full h-[1px] bg-cGray left-0 bottom-[30%] lg:bottom-[22%] sm:bottom-[28%]" />
          </div>

          <div class="rounded-[20px] bg-[#E5E5E5] py-[25px] px-4 flex flex-col relative">
            <h1 class="sofiaMedium leading-[1.5] text-cGreen">Robotics Competition</h1>

            <div class="sofiaLight custom-text text-sm text-[#657E7E] mt-4 mb-[26px] lg:my-3">
              UMFT Library
            </div>

            <div class="h-[140px] overflow-auto hide-scrollbar lg:h-[120px] sm:h-[80px]">
              <div class="flex flex-wrap gap-[6px]">
                <button
                  v-for="(event, index) of events"
                  :key="index"
                  class="category-oldButton custom-text"
                  v-show="event.status"
                >
                  {{ event.title }}
                </button>
              </div>
            </div>

            <div class="flex items-center justify-between mt-auto">
              <div class="text-[52px] custom-text text-[#FDBA2D] lg:text-4xl">24</div>
              <div class="text-sm custom-text text-[#657E7E] flex flex-col items-end lg:text-xs">
                <div>SEP</div>
                <div>2024</div>
              </div>
            </div>

            <div class="absolute w-full h-[1px] bg-cGray left-0 bottom-[30%] lg:bottom-[22%] sm:bottom-[28%]" />
          </div>

          <div class="rounded-[20px] bg-[#E5E5E5] py-[25px] px-4 flex flex-col relative">
            <h1 class="sofiaMedium leading-[1.5] text-cGreen">Robotics Competition</h1>

            <div class="sofiaLight custom-text text-sm text-[#657E7E] mt-4 mb-[26px] lg:my-3">
              UMFT Library
            </div>

            <div class="h-[140px] overflow-auto hide-scrollbar lg:h-[120px] sm:h-[80px]">
              <div class="flex flex-wrap gap-[6px]">
                <button
                  v-for="(event, index) of events"
                  :key="index"
                  class="category-oldButton custom-text"
                  v-show="event.status"
                >
                  {{ event.title }}
                </button>
              </div>
            </div>

            <div class="flex items-center justify-between mt-auto">
              <div class="text-[52px] custom-text text-[#FDBA2D] lg:text-4xl">24</div>
              <div class="text-sm custom-text text-[#657E7E] flex flex-col items-end lg:text-xs">
                <div>SEP</div>
                <div>2024</div>
              </div>
            </div>

            <div class="absolute w-full h-[1px] bg-cGray left-0 bottom-[30%] lg:bottom-[22%] sm:bottom-[28%]" />
          </div>
          <!-- tugadi -->
        </div>
      </div>
    </section>
  </section>
</template>
<script setup>
import { ChevronRightIcon, ChevronLeftIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'
const date = ref(new Date())
const day = String(date.value.getDate()).padStart(2, '0')
const month = String(date.value.getMonth() + 1).padStart(2, '0')
const year = date.value.getFullYear()
const before = `${year}-${month}-${day}`
const after = `${year}-${month}-${day}`

const afterCalendar = () => {
  const dateInput = document.getElementById('after')
  if (dateInput) {
    dateInput.showPicker()
  }
}
const beforeCalendar = () => {
  const dateInput = document.getElementById('before')
  if (dateInput) {
    dateInput.showPicker()
  }
}

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
])
</script>
