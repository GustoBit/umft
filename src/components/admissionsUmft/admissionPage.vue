<template>
  <div class="custom-container custom-responsive">
    <section>
      <div class="">
        <topMain />
      </div>

      <div class="mt-[37px]">
        <imageMain />
      </div>

      <div class="responsiveMb70">
        <infoAddmission />
      </div>
    </section>
  </div>

  <licencesFooter />
</template>
<script setup>
import topMain from './topMain.vue'
import imageMain from './imageMain.vue'
import infoAddmission from './infoAddmission.vue'

import licencesFooter from '@/views/optionFooter/licencesFooter.vue'
</script>
