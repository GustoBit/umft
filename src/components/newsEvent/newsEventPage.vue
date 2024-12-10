<template>
  <div class="custom-container custom-responsive">
    <section class="mb-[70px]">
      <h1
        class="ahellya custom-text text-[56px] text-cGreen pb-[10px] border-b-[2px] border-[#D2DBDB] mb-[50px] 2xl:mb-[40px] xl:mb-[35px] lg:mb-[30px] md:mb-[25px] sm:text-[24px] pr-[513px] 2xl:pr-[400px] xl:pr-0 md:text-[30px] lg:text-[34px] xl:text-[40px] 2xl:text-[46px]"
      >
        Student Team Wins International Robotics Competition
      </h1>
      <newsImg />
      <studentTeam />
      <submitApp />
    </section>
  </div>

  <footerPage />
</template>
<script setup>
import newsImg from './newsEventImg.vue'
import studentTeam from './newsEventStudentTeam.vue'
import submitApp from '@/assets/helpers/submit/submitApp.vue'

import footerPage from '@/views/mainFooter/footerPage.vue'
</script>
