<template>
  <section>
    <div
      class="flex divide-x-2 divide-cGray border-b-[2px] border-cGray xs:flex-col xs:gap-3 xs:divide-x-0 xs:border-0"
    >
      <div
        class="flex flex-col gap-[30px] pr-5 pb-[30px] xl:flex-1 xl:pb-0 lg:pr-4 sm:gap-3 sm:pr-2"
      >
        <div class="rounded-[10px] overflow-hidden">
          <img src="@/assets/img/students2.jpg" alt="" class="object-cover w-full h-full" />
        </div>

        <div
          class="flex items-start justify-between xl:gap-3 lg:gap-2 sm:flex-col sm:gap-2 xs:flex-row"
        >
          <h2 class="custom-text text-cGreen flex-1 text-2xl xl:text-xl lg:text-base sm:text-sm">
            Residential Life
          </h2>
          <readMoreButton class="ml-auto" />
        </div>
      </div>

      <div class="flex flex-col gap-[30px] pl-5 flex-1 xl:pb-5 lg:pl-4 sm:gap-3 sm:pl-2 xs:p-0">
        <div class="rounded-[10px] overflow-hidden">
          <img src="@/assets/img/woman.jpg" alt="" class="object-cover w-full h-full" />
        </div>

        <div
          class="flex items-start justify-between xl:gap-3 lg:gap-2 sm:flex-col sm:gap-2 xs:flex-row"
        >
          <h2 class="custom-text text-cGreen flex-1 text-2xl xl:text-xl lg:text-base sm:text-sm">
            Activities & Organizations
          </h2>
          <readMoreButton class="ml-auto" />
        </div>
      </div>
    </div>

    <div
      class="flex divide-x-2 divide-cGray mt-[18px] xs:flex-col xs:divide-x-0 xs:border-0 xs:gap-3"
    >
      <div class="flex flex-col gap-[30px] pr-5 flex-1 xl:pb-5 lg:pr-4 sm:pr-2 sm:gap-3 sm:pb-0">
        <div class="rounded-[10px] overflow-hidden">
          <img src="@/assets/img/woman.jpg" alt="" class="object-cover w-full h-full" />
        </div>

        <div
          class="flex items-start justify-between xl:gap-3 lg:gap-2 sm:flex-col sm:gap-2 xs:flex-row"
        >
          <h2 class="custom-text text-cGreen flex-1 text-2xl xl:text-xl lg:text-base sm:text-sm">
            Culture & Diversity
          </h2>
          <readMoreButton class="ml-auto" />
        </div>
      </div>

      <div
        class="flex flex-col gap-[30px] pl-5 pb-4 xl:flex-1 xl:pb-0 lg:pl-4 sm:pl-2 sm:gap-3 xs:p-0"
      >
        <div class="rounded-[10px] overflow-hidden">
          <img src="@/assets/img/students2.jpg" alt="" class="object-cover w-full h-full" />
        </div>

        <div
          class="flex items-start justify-between xl:gap-3 lg:gap-2 sm:flex-col sm:gap-2 xs:flex-row"
        >
          <h2 class="custom-text text-cGreen flex-1 text-2xl xl:text-xl lg:text-base sm:text-sm">
            Student Resources & Services
          </h2>
          <readMoreButton class="ml-auto" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import readMoreButton from '@/assets/helpers/readMoreButton/readMoreButton.vue'
</script>
