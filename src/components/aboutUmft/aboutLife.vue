<template>
  <section class="">
    <div class="h1Title48">Campus Life</div>

    <div
      class="grid grid-cols-[408px_auto] gap-5 border-b-[2px] border-cGray 2xl:grid-cols-[300px_auto] xl:grid-cols-[250px_auto] lg:grid-cols-[200px_auto] md:grid-cols-1 sm:border-0"
    >
      <div
        class="border-r-[2px] border-cGray flex flex-col gap-[269px] pt-[18px] pr-[11px] 2xl:gap-[250px] xl:gap-[150px] lg:gap-[100px] md:pr-0 md:border-r-0 md:border-b-[2px] md:grid md:grid-cols-2 md:gap-4 md:pb-3 sm:grid-cols-1"
      >
        <div
          class="sofiaLight custom-text text-[#556666] text-xl 2xl:text-lg xl:text-base lg:text-sm"
        >
          The University of Management and Future Technologies is one of the non-governmental higher
          education institutions in the Republic of Uzbekistan that trains specialists in the fields
          of information and communication technologies.
        </div>

        <div class="pr-[81px] 2xl:pr-2 md:pr-0 md:flex md:flex-col">
          <div class="flex items-start gap-[74px] lg:gap-6">
            <h1
              class="sofiaMedium custom-text text-cGreen flex-1 text-xl 2xl:text-lg xl:text-base lg:text-sm md:text-lg"
            >
              Join our friendly UMFT family
            </h1>
            <ArrowLongRightIcon class="text-cGreen/50 w-10 md:rotate-90" />
          </div>

          <div
            class="sofiaLight custom-text text-[#556666] text-lg mt-[10px] 2xl:text-base xl:text-sm lg:text-xs"
          >
            To be one of the universities with high rating indicators in the field of higher
            education, providing quality education at the level of international standards, training
            competitive, modern mature specialists
          </div>

          <button
            class="custom-text text-cGreen rounded-[20px] bg-[#FDBA2D] py-[7px] px-4 mt-[50px] 2xl:mt-10 xl:mt-6 xl:text-sm lg:text-xs lg:py-1 lg:px-3 md:ml-auto"
          >
            Choose a program
          </button>
        </div>
      </div>

      <div class="pt-[18px] md:pt-0">
        <imgOverall />
      </div>
    </div>
  </section>
</template>
<script setup>
import { ArrowLongRightIcon } from '@heroicons/vue/24/outline'
import imgOverall from '@/assets/helpers/overall/imgOverall.vue'
</script>
