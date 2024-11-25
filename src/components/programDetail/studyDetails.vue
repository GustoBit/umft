<template>
  <div
    class="grid grid-cols-4 divide-x-2 divide-cGray xl:grid-cols-2 xl:divide-x-0 xl:gap-5 sm:hidden sm:xl:grid-cols-1 sm:px-[10%]"
  >
    <div
      v-for="(topic, index) in topics"
      :key="index"
      class="flex flex-col gap-[89px] studyTopic 2xl:gap-10 xl:gap-2"
    >
      <h1 class="h1StudyText">{{ topic.title }}</h1>
      <ul class="listStudy">
        <li v-for="(item, idx) in topic.items" :key="idx" class="cursor-pointer hover:underline">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>

  <!-- SM qismi -->
  <div class="sm:grid grid-cols-1 hidden px-[10%]">
    <div
      v-for="(topic, index) in topics"
      :key="index"
      class="flex flex-col gap-[89px] studyTopic 2xl:gap-10 xl:gap-2"
    >
      <h1
        class="h1StudyText cursor-pointer flex justify-between items-center"
        @click="toggleImages(index)"
      >
        {{ topic.title }}
        <ChevronRightIcon
          class="transition-transform duration-300 size-4 text-cGreen"
          :class="{
            'rotate-0': !showImages[index],
            'rotate-90': showImages[index],
          }"
        />
      </h1>
      <ul
        class="listStudy overflow-hidden transition-all duration-500 ease-in-out"
        :style="{ height: showImages[index] ? contentHeights[index] + 'px' : '0px' }"
        ref="contentRefs"
      >
        <li
          v-for="(item, idx) in topic.items"
          :key="idx"
          class="cursor-pointer hover:underline py-1"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const topics = ref([
  {
    title: 'Introduction to electronics',
    items: [
      'Basic Concepts of Electricity',
      'Components and Devices',
      'Circuit Analysis Techniques',
      'Semiconductors and Devices',
      'Digital Electronics',
      'Semiconductors and Devices',
      'Digital Electronics',
    ],
  },
  {
    title: 'Computer networks',
    items: [
      'Network Architectures and Protocols',
      'Network Security',
      'Wireless Networks',
      'Network Management',
      'Cloud Networking',
      'Data Center Networking',
      'Trends in Networking',
    ],
  },
  {
    title: 'Programming principles',
    items: [
      'Basic Concepts',
      'Functions and Procedures',
      'Data Structures',
      'OOP',
      'Error Handling',
      'File Handling',
      'Algorithms',
    ],
  },
  {
    title: 'Computer architecture',
    items: [
      'Basic Computer Organization',
      'Digital Logic',
      'CPU Architecture',
      'Memory Hierarchy',
      'Instruction Execution Cycle',
      'Input/Output Systems',
      'Parallelism',
    ],
  },
])

const showImages = ref(topics.value.map(() => false))
const contentHeights = ref([])
const contentRefs = ref([])

const toggleImages = async (index) => {
  showImages.value[index] = !showImages.value[index]

  if (showImages.value[index]) {
    await nextTick()
    const el = contentRefs.value[index]
    if (el) {
      contentHeights.value[index] = el.scrollHeight
    }
  } else {
    contentHeights.value[index] = 0
  }
}

import { ChevronRightIcon } from '@heroicons/vue/24/outline'
</script>
