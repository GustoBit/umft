<template>
  <section>
    <div
      class="relative p-[2px] rounded-[20px] overflow-hidden bg-gradient-to-r from-[#FAFFFF] to-[#FDAF0A] lg:order-1"
    >
      <div class="rounded-[18px] overflow-hidden">
        <img src="@/assets/img/mainPhoto.jpg" alt="" class="w-full object-cover" />
      </div>
      <div
        class="absolute inset-0 backdrop-blur-[1px] z-10 bg-cGreen/50 rounded-[20px] m-[1px] pointer-events-none"
      />

      <button
        class="absolute rounded-[16px] z-50 bg-[#FDBA2D] py-[10px] px-[26px] bottom-[15%] left-[37%] mx-auto text-[26px] text-cGreen custom-text factoria hover:bg-cTextGreen hover:text-cGray transition duration-300 xl:py-2 xl:px-5 xl:text-xl lg:text-base lg:left-[35%] sm:text-xs sm:left-[31%] sm:bottom-[5%] sm:px-2 sm:py-1 xs:text-[10px] xs:left-[32%]"
      >
        Submit an application
      </button>
    </div>
  </section>
</template>
<script setup></script>
