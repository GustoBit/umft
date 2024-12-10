<template>
  <section class="transition duration-500 relative" ref="dropdownRef">
    <button
      class="p-1 sofiaMedium custom-text text-lg flex items-center gap-[1px]"
      @click="toggleImages"
      @mouseenter="toggleImages"
      @mouseleave="closeDropdown"
    >
      <div class="custom-text text-cGreen">
        {{ title }}
      </div>

      <ChevronDownIcon
        :class="{
          'rotate-0': !showImages,
          'rotate-180': showImages,
        }"
        class="transition-transform duration-300 size-4 text-cGreen"
      />
    </button>

    <div
      class="overflow-hidden transition-all duration-500 ease-in-out absolute right-0 bg-white w-fit mt-1 z-10"
      :style="{ maxHeight: showImages ? contentHeight + 'px' : '0px' }"
      ref="content"
      @click="closeDropdown"
      @mouseenter="toggleImages"
      @mouseleave="closeDropdown"
    >
      <slot />
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

import { ChevronDownIcon } from '@heroicons/vue/24/outline'
defineProps(['title'])

const dropdownRef = ref()

import { onClickOutside } from '@vueuse/core'
const closeDropdown = () => {
  showImages.value = false
}
onClickOutside(dropdownRef, closeDropdown)
</script>
