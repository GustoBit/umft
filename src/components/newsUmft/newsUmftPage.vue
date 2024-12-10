<template>
  <div class="custom-container custom-responsive">
    <contentNews />
    <newsCategory />
    <newsEvents />
  </div>
  <div class="bg-cGreen mt-[70px]">
    <div class="custom-container custom-responsive">
      <newsConsult />
    </div>
  </div>

  <footerPage />
</template>
<script setup>
import contentNews from './contentNews.vue'
import newsCategory from './newsCategory.vue'
import newsEvents from './newsEvents.vue'
import newsConsult from './newsConsult.vue'

import footerPage from '@/views/mainFooter/footerPage.vue'
</script>
