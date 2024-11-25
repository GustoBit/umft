<template>
  <section>
    <div
      class="relative p-[2px] rounded-[20px] bg-gradient-to-r from-[#FAFFFF] to-[#FDAF0A] lg:order-1 sm:flex sm:flex-col"
    >
      <div class="rounded-[18px] overflow-hidden">
        <img src="@/assets/img/mainPhoto.jpg" alt="" class="w-full object-cover" />
      </div>
      <div
        class="absolute inset-0 backdrop-blur-[1px] z-10 bg-cGreen/30 rounded-[20px] m-[1px] pointer-events-none"
      />

      <admissionSlider />
    </div>
  </section>
</template>
<script setup>
import admissionSlider from './admissionSlider.vue'
</script>
