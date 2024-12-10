<template>
  <footer class="bg-cGreen py-[26px] 2xl:py-[20px] 2xl:px-[30px] md:px-5 sm:p-[30px]">
    <div class="custom-container">
      <div class="flex items-center justify-between sm:flex-col sm:gap-5 sm:items-start">
        <router-link
          :to="{ name: 'landing' }"
          class="flex items-center gap-[16.78px]"
          @click="scrollTop"
        >
          <img src="@/assets/img/footerLogo.svg" alt="" />
          <img src="@/assets/img/footerLogoWords.svg" alt="" />
        </router-link>

        <navLinks />
      </div>

      <div class="bg-[#173C3C] w-full h-[2px] mt-[26px]"></div>

      <navLincences />

      <div class="bg-[#173C3C] w-full h-[2px] my-[26px]"></div>
      <div class="flex items-start gap-[3px] sofiaLight text-[#657E7E] leading-[1.5] select-none">
        <img src="@/assets/img/footerMiniLogo.svg" alt="" />
        <span>University of Management and Future Technologies 2024. All rights reserved.</span>
      </div>
    </div>
  </footer>
</template>
<script setup>
import navLincences from '../mainFooter/navLincences.vue'
import navLinks from '@/assets/helpers/navLinks/navLinks.vue'

import { scrollTop } from '@/helpers/func'
</script>
