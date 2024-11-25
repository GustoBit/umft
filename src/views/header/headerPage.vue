<template>
  <div class="custom-container custom-responsive">
    <header
      class="flex items-center justify-between mb-[70px] pt-[30px] 2xl:mb-[40px] xl:mb-[35px] lg:mb-[30px] md:mb-[25px]"
    >
      <div class="flex items-start gap-[13.11px]">
        <img src="@/assets/img/logo.svg" alt="" />
        <img src="@/assets/img/logoWords.svg" alt="" class="pt-[14.13px]" />
      </div>
      <nav class="flex items-center gap-[60px] sofiaMedium custom-text text-lg 2xl:hidden">
        <button class="flex items-center gap-[1px]">
          Admissions
          <ChevronDownIcon class="w-3 h-2" />
        </button>
        <button>For Students</button>
        <button class="flex items-center gap-[1px]">
          Faculties
          <ChevronDownIcon class="w-3 h-2" />
        </button>
        <button class="flex items-center gap-[1px]">
          About
          <ChevronDownIcon class="w-3 h-2" />
        </button>
        <button>Research</button>
      </nav>
      <div class="flex items-center gap-4">
        <a
          href="tel:+998901234567"
          class="py-[6px] px-[24px] bg-cYellow rounded-[10px] flex items-center gap-4 factoria custom-text text-cGreen sm:hidden call"
        >
          <PhoneIcon class="size-[14px] callAnimate" />
          <span class="md:hidden">(55) 506 88 88</span>
        </a>
        <MagnifyingGlassIcon class="size-[43px] p-[10px] cursor-pointer text-cSearch sm:hidden" />
        <button class="flex-col gap-[9px] flex sm:gap-1">
          <span
            class="w-[17.5px] rounded-[10px] bg-gradient-to-r from-[#89A7A6] to-[#022726] h-[4.69px] sm:w-3"
          ></span>
          <span
            class="w-[35px] rounded-[10px] bg-gradient-to-r from-[#89A7A6] to-[#022726] h-[4.69px] sm:w-7"
          ></span>
          <span
            class="w-[24.5px] rounded-[10px] bg-gradient-to-r from-[#89A7A6] to-[#022726] h-[4.69px] sm:w-5"
          ></span>
        </button>
      </div>
    </header>
  </div>
</template>
<script setup>
import { ChevronDownIcon, PhoneIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
</script>
