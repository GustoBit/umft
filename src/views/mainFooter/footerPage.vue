<template>
  <footer class="bg-cGreen py-[26px] pr-[51px] pl-[40px] 2xl:py-[20px] 2xl:px-[30px] sm:p-[30px]">
    <div class="custom-container">
      <div class="flex items-center justify-between sm:flex-col sm:gap-5">
        <div class="flex items-center gap-[16.78px]">
          <img src="@/assets/img/footerLogo.svg" alt="" />
          <img src="@/assets/img/footerLogoWords.svg" alt="" />
        </div>

        <nav class="flex items-center gap-[26px]">
          <a href="#" class="link-hover group">
            <img
              src="@/assets/img/facebook.svg"
              alt=""
              class="group-hover:brightness-200 group-hover:invert-1"
            />
          </a>
          <a href="#" class="link-hover group"
            ><img
              src="@/assets/img/telegram.svg"
              alt=""
              class="group-hover:brightness-200 group-hover:invert-1"
          /></a>
          <a href="#" class="link-hover group"
            ><img
              src="@/assets/img/instagram.svg"
              alt=""
              class="group-hover:brightness-200 group-hover:invert-1"
          /></a>
          <a href="#" class="link-hover group"
            ><img
              src="@/assets/img/facebook.svg"
              alt=""
              class="group-hover:brightness-200 group-hover:invert-1"
          /></a>
          <a href="#" class="link-hover group"
            ><img
              src="@/assets/img/telegram.svg"
              alt=""
              class="group-hover:brightness-200 group-hover:invert-1"
          /></a>
        </nav>
      </div>

      <div class="bg-[#173C3C] w-full h-[2px] mt-[26px]"></div>
      <div><navFooter /></div>
      <!-- <div><navLincences /></div> -->
      <div class="bg-[#173C3C] w-full h-[2px] my-[26px]"></div>
      <div class="flex items-start gap-[3px] sofiaLight text-[#657E7E] leading-[1.5] select-none">
        <img src="@/assets/img/footerMiniLogo.svg" alt="" />
        <span>University of Management and Future Technologies 2024. All rights reserved.</span>
      </div>
    </div>
  </footer>
</template>
<script setup>
import navFooter from './navFooter.vue'
// import navLincences from './navLincences.vue'
</script>
