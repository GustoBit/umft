<template>
  <div class="relative p-[2px] rounded-[20px] bg-gradient-to-r from-[#B1C9C8] to-[#436261]">
    <button
      class="flex items-center gap-1 rounded-[18px] py-[7px] px-[16px] text-[#6F8B8A] sofiaLight custom-text transition-all duration-500 ease-in-out hover:text-white hover:bg-gradient-to-r hover:from-[#B1C9C8] hover:to-[#436261] bg-[#EEEEEE] sm:py-1 sm:px-2 md:py-1 md:px-3"
    >
      <span class="text-base sofiaLight lg:text-sm sm:text-xs">Read more</span>
      <ChevronRightIcon class="size-3" />
    </button>
  </div>
</template>
<script setup>
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
</script>
