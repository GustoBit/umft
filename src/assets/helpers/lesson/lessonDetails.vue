<template>
  <section
    class="2xl:mb-[60px] xl:mb-10 lg:mb-8 sm:mb-6 mb-[70px] flex flex-col items-center gap-[50px] xl:gap-10"
  >
    <div class="grid grid-cols-3 gap-5 w-full lg:grid-cols-2 sm:gap-4 xs:grid-cols-1 xs:px-2">
      <div class="fatherElement group" v-for="(lesson, index) of lessons" :key="index">
        <h1 class="mainTitle">
          {{ lesson.title }}
        </h1>

        <div class="mainTimeElements">
          <div class="flex flex-col gap-[3px] sm:gap-0">
            <div class="sm:text-base">Full-time</div>
            <div class="flex items-end gap-1">
              <div class="partAndPart">
                {{ lesson.fullTime }}
                <span class="paraghraphOfTime">mln. sum/year</span>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-[3px] sm:gap-0">
            <div class="sm:text-base">Part-time</div>
            <div class="flex items-end gap-1">
              <div class="partAndPart">
                {{ lesson.partTime }}
                <span class="paraghraphOfTime">mln. sum/year</span>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between mt-auto">
          <button class="buttonApply">Apply</button>

          <a href="#" class="aHrefNext">
            <ArrowRightIcon class="size-6 2xl:size-5 xl:size-4 sm:size-3" />
          </a>
        </div>
      </div>
    </div>

    <button class="showMoreButton">
      show more
      <ArrowDownIcon class="size-3" />
    </button>
  </section>
</template>
<script setup>
import { ArrowRightIcon, ArrowDownIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'

const lessons = ref([
  {
    title: 'Computer engineering',
    fullTime: 14,
    partTime: 12.1,
  },
  {
    title: 'Foreign language and Literature',
    fullTime: 15,
    partTime: 13.1,
  },
  {
    title: 'Digital economy',
    fullTime: 14,
    partTime: 11.2,
  },
])
</script>
