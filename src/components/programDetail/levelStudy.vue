<template>
  <section
    class="rounded-[20px] overflow-hidden transition duration-500"
    :class="showImages ? 'bg-[#F3F5F5]' : 'bg-[#E5E5E5]'"
  >
  
    <div class="py-[25px] px-5 flex items-center justify-between xl:p-4" @click="toggleImages">
      <div class="text-[32px] custom-text text-cGreen 2xl:text-2xl lg:text-xl md:text-base">{{ title }}</div>

      <ChevronRightIcon
        :class="{
          'rotate-0': !showImages,
          'rotate-90': showImages,
        }"
        class="transition-transform duration-300 size-10 text-cGreen lg:size-6"
      />
    </div>

    <div
      class="overflow-hidden transition-all duration-500 ease-in-out"
      :style="{ maxHeight: showImages ? contentHeight + 'px' : '0px' }"
      ref="content"
    >
      <div
        class="grid grid-cols-4 gap-[26px] pt-[43px] pr-[108px] pb-[26px] pl-[26px] bg-[#F3F5F5] xl:p-4 lg:gap-4 sm:grid-cols-2"
      >
        <div class="levelDivs">
          <div class="levelNumbers">1</div>
          <p class="levelParaghraph">Introductions to electronics</p>
        </div>
        <div class="levelDivs">
          <div class="levelNumbers">2</div>
          <p class="levelParaghraph">Computer networks</p>
        </div>
        <div class="levelDivs">
          <div class="levelNumbers">3</div>
          <p class="levelParaghraph">Programming principles</p>
        </div>
        <div class="levelDivs">
          <div class="levelNumbers">4</div>
          <p class="levelParaghraph">Computer architecture</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, nextTick } from 'vue'
const showImages = ref(false)
const contentHeight = ref(0)
const content = ref(null)

const toggleImages = async () => {
  showImages.value = !showImages.value

  if (showImages.value) {
    await nextTick()
    contentHeight.value = content.value.scrollHeight
  } else {
    contentHeight.value = 0
  }
}

import { ChevronRightIcon } from '@heroicons/vue/24/outline'
defineProps(['title'])
</script>
