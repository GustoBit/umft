<template>
  <section>
    <h1
      class="ahellya custom-text text-[48px] text-cGreen pb-[10px] border-b-[2px] border-[#D2DBDB] mb-[26px] sm:mb-4 xl:text-[40px] lg:text-[32px] sm:text-2xl"
    >
      Submit an application
    </h1>

    <div
      class="grid grid-cols-[auto_670px] gap-[214px] 2xl:gap-[100px] 2xl:grid-cols-[auto_550px] xl:grid-cols-[auto_400px] lg:grid-cols-[auto_300px] sm:grid-cols-1 sm:gap-8"
    >
      <div class="flex flex-col justify-between">
        <div class="relative">
          <h2 class="text-xl custom-text text-[#527372] xl:text-base sm:text-sm">
            Want to get more information about the courses and university? Have own unanswered
            questions? Fill in the form and our manager will contact you.
          </h2>
          <div class="absolute -bottom-[36px] -right-[82px] 2xl:-right-[40px] sm:hidden">
            <img src="@/assets/img/lineRight.svg" alt="" class="w-full" />
          </div>
        </div>

        <div class="flex flex-col gap-6 xl:gap-4 sm:hidden">
          <h2 class="ahellya text-[36px] custom-text text-cGreen xl:text-[28px] lg:text-[24px]">
            Contact information
          </h2>
          <div class="flex items-center gap-[26px] 2xl:flex-col 2xl:items-start">
            <a
              href="tel:+998901234567"
              class="py-[6px] px-[24px] bg-cYellow rounded-[10px] flex items-center gap-4 factoria custom-text text-cGreen call"
            >
              <PhoneIcon class="size-[14px] callAnimate" />
              <span class="">(55) 506 88 88</span>
            </a>
            <navLinks />
          </div>
        </div>
      </div>

      <form @submit.prevent="add" class="flex flex-col gap-[25px] sm:px-6">
        <label
          for="name"
          class="text-[#94A3A3] custom-text text-[24px] 2xl:text-[20px] lg:text-base sm:text-sm"
        >
          Name
          <input
            type="text"
            id="name"
            class="w-full outline-none text-cGreen border-b-[2px] border-[#D2DBDB] bg-[#EEEEEE]"
          />
        </label>
        <label
          for="phone"
          class="text-[#94A3A3] custom-text text-[24px] 2xl:text-[20px] lg:text-base sm:text-sm"
        >
          Phone Number
          <input
            type="number"
            id="phone"
            class="w-full outline-none text-cGreen border-b-[2px] border-[#D2DBDB] bg-[#EEEEEE]"
          />
        </label>
        <label
          for="email"
          class="text-[#94A3A3] custom-text text-[24px] 2xl:text-[20px] lg:text-base sm:text-sm"
        >
          Email
          <input
            type="email"
            id="email"
            class="w-full outline-none text-cGreen border-b-[2px] border-[#D2DBDB] bg-[#EEEEEE]"
          />
        </label>
        <button
          type="submit"
          class="py-[20px] rounded-[16px] bg-cSubmitButton text-cGreen text-2xl custom-text mt-6 boxShadow 2xl:py-[20px] 2xl:text-[20px] lg:text-base lg:py-3 lg:mt-4 sm:text-sm sm:py-2 sm:mt-0"
        >
          Submit an application
        </button>
      </form>

      <div class="sm:flex flex-col gap-5 hidden mt-4">
        <div class="flex items-center justify-between">
          <h2 class="ahellya text-xl custom-text text-cGreen">Contact information</h2>
          <a
            href="tel:+998901234567"
            class="py-1 px-3 bg-cYellow rounded-[10px] flex items-center gap-2 factoria custom-text text-cGreen text-xs"
          >
            <PhoneIcon class="size-[14px]" />
            <span class="">(55) 506 88 88</span>
          </a>
        </div>
        <navLinks />
      </div>
    </div>
  </section>
</template>
<script setup>
import { PhoneIcon } from '@heroicons/vue/24/outline'
import navLinks from '@/assets/helpers/navLinks/navLinks.vue'

const add = () => {
  console.log('ku')
}
</script>
