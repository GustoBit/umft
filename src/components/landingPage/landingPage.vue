<template>
  <div class="custom-container custom-responsive">
    <section>
      <div class="">
        <landingTopMain />
      </div>
      <div class="mt-[30px]">
        <landingImageMain />
      </div>

      <div
        class="mt-[134px] 2xl:mt-[100px] xl:mt-[90px] lg:mt-[50px] md:mt-10 sm:mt-[130px] xs:mt-[160px]"
      >
        <landingStudy />
      </div>

      <div class="responsiveMt70 responsiveMb70">
        <landingProgram />
      </div>

      <div class="">
        <landingNewsEvents />
      </div>

      <div class="">
        <partnersList />
      </div>
    </section>
  </div>

  <licencesFooter />
</template>
<script setup>
import landingTopMain from './landingTopMain.vue'
import landingImageMain from './mainView/landingImageMain.vue'
import landingStudy from './landingStudy.vue'
import landingProgram from './landingProgram.vue'
import landingNewsEvents from './landingNewsEvents.vue'
import partnersList from '../partners/partnersList.vue'

import licencesFooter from '@/views/optionFooter/licencesFooter.vue'
</script>
