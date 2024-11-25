<template>
  <div class="flex gap-4 md:flex-col">
    <div class="rounded-[20px] overflow-hidden">
      <img src="@/assets/img/newsPhoto.jpg" alt="" class="w-full" />
    </div>

    <div class="flex flex-col justify-between items-start md:flex-row md:items-center">
      <div class="mt-[12px] md:mt-0 md:flex md:gap-[20px] md:items-center">
        <span
          class="uppercase block text-[#979B9B] custom-text text-lg mb-[26px] lg:text-lg md:mb-0 sm:text-sm"
        >
          PUBLISHED
        </span>
        <span class="text-2xl block custom-text text-cGreen lg:text-sm sm:text-xs"
          >10 AVG 2024</span
        >
      </div>
      <div class="flex flex-col items-start gap-[26px] lg:hidden">
        <span class="custom-text text-[#979B9B]">SHARE THIS</span>
        <nav class="flex flex-col items-center gap-[16px]">
          <a href="#" class="link-hover group hover:bg-cGreen/50">
            <img
              src="@/assets/img/facebook.svg"
              alt=""
              class="group-hover:brightness-200 group-hover:invert-1"
            />
          </a>
          <a href="#" class="link-hover group hover:bg-cGreen/50"
            ><img
              src="@/assets/img/telegram.svg"
              alt=""
              class="group-hover:brightness-200 group-hover:invert-1"
          /></a>
          <a href="#" class="link-hover group hover:bg-cGreen/50"
            ><img
              src="@/assets/img/instagram.svg"
              alt=""
              class="group-hover:brightness-200 group-hover:invert-1"
          /></a>
          <a href="#" class="link-hover group hover:bg-cGreen/50"
            ><img
              src="@/assets/img/facebook.svg"
              alt=""
              class="group-hover:brightness-200 group-hover:invert-1"
          /></a>
          <a href="#" class="link-hover group hover:bg-cGreen/50"
            ><img
              src="@/assets/img/telegram.svg"
              alt=""
              class="group-hover:brightness-200 group-hover:invert-1"
          /></a>
        </nav>
      </div>
      <div class="hidden lg:flex items-center gap-[5px] sm:gap-0">
        <span class="custom-text text-[#979B9B] uppercase text-sm sm:text-xs">share this</span>
        <ChevronDownIcon class="w-3 h-2" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
</script>
