<template>
  <div class="custom-container custom-responsive">
    <section>
      <div
        class="ahellya custom-text text-cGreen pl-[26px] border-l-[2px] border-cGray text-[64px] 2xl:text-[54px] xl:text-[42px] lg:text-[38px] md:text-[36px] sm:text-xl xs:text-lg sm:pl-4"
      >
        <div>About University of</div>
        <span>Management and Future Technologies</span>
      </div>

      <div class="responsiveMb70">
        <aboutVideo />
      </div>

      <div class="">
        <aboutOfficer />
      </div>

      <div class="responsiveMt70">
        <aboutGoals />
      </div>

      <div class="responsiveMt70">
        <aboutLife />
      </div>

      <div class="responsiveMt70 responsiveMb70">
        <submitApp />
      </div>
    </section>
  </div>
</template>
<script setup>
import aboutVideo from './aboutVideo.vue'
import aboutOfficer from './aboutOfficer.vue'
import aboutGoals from './aboutGoals.vue'
import submitApp from '@/assets/helpers/submit/submitApp.vue'
import aboutLife from './aboutLife.vue'
</script>
