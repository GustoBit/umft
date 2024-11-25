<template>
  <footer class="bg-cGreen">
    <div class="custom-container custom-responsive">
      <section class="py-[26px] flex flex-col items-center gap-[26px] sm:gap-5">
        <div class="flex items-end gap-[26px] xl:gap-5 sm:flex-col sm:items-start sm:gap-4">
          <div class="flex items-center gap-[26px] xl:gap-4 sm:hidden">
            <a href="#" class="links"> Telegram </a>
            <a href="#" class="links"> Instagram </a>
            <a href="#" class="links"> YouTube </a>
          </div>

          <div class="flex gap-4 lg:gap-3">
            <div class="size-10 overflow-hidden lg:size-8">
              <img src="@/assets/img/logo.svg" alt="" class="w-full h-full object-cover" />
            </div>
            <div class="w-[150px] overflow-hidden lg:w-[120px]">
              <img src="@/assets/img/logoWords.svg" alt="" class="w-full h-full object-cover" />
            </div>
          </div>

          <div class="flex items-center gap-[26px] xl:gap-4">
            <a href="#" class="links"> Telegram </a>
            <a href="#" class="links"> Instagram </a>
            <a href="#" class="links"> YouTube </a>
          </div>

          <div class="sm:flex items-center gap-[26px] xl:gap-4 hidden">
            <a href="#" class="links"> Telegram </a>
            <a href="#" class="links"> Instagram </a>
            <a href="#" class="links"> YouTube </a>
          </div>
        </div>

        <div class="border-t-[1px] border-[#173C3C] w-full xl:w-fit sm:w-full">
          <navFooter />
        </div>

        <div class="bg-[#173C3C] w-full h-[1px]" />

        <div class="flex items-start gap-[3px] sofiaLight text-[#657E7E] leading-[1.5] select-none">
          <img src="@/assets/img/footerMiniLogo.svg" alt="" />
          <span>University of Management and Future Technologies 2024. All rights reserved.</span>
        </div>
      </section>
    </div>
  </footer>
</template>
<script setup>
import navFooter from '../mainFooter/navFooter.vue'
</script>
