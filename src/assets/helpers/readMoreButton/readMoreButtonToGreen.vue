<template>
  <div class="relative p-[2px] rounded-[20px] bg-gradient-to-r from-[#B1C9C8] to-[#436261]">
    <button
      class="flex items-center gap-1 rounded-[18px] py-[7px] px-[16px] text-[#6F8B8A] sofiaLight custom-text transition-all duration-500 ease-in-out hover:text-white hover:bg-gradient-to-r hover:from-[#B1C9C8] hover:to-[#436261] bg-cGreen lg:p-2"
    >
      <span class="text-base sofiaLight lg:text-xs md:text-[10px]">Read more</span>
      <ChevronRightIcon class="size-3 md:size-2" />
    </button>
  </div>
</template>
<script setup>
import { ChevronRightIcon } from '@heroicons/vue/24/outline'

</script>
