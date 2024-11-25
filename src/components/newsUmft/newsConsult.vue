<template>
  <div class="pt-[50px] pb-[63px] 2xl:py-[40px]">
    <h1 class="h1With48PxWhite pr-[900px] 2xl:pr-[600px] xl:px-[10%]">
      Could not find what you are looking for?
    </h1>
    <div class="flex flex-col gap-[38px] pr-[192px] pl-[670px] 2xl:px-[25%] lg:px-[15%] sm:px-[5%]">
      <div class="sofiaLight text-xl custom-text text-[#BACAC9] sm:text-lg">
        Submit your own questions. Leave your contact details and we will contact you soon.
      </div>
      <form @submit.prevent="add" class="flex flex-col gap-[25px]">
        <label
          for="name"
          class="text-[#94A3A3] custom-text text-[24px] 2xl:text-[20px] lg:text-base sm:text-sm"
        >
          Name
          <input
            type="text"
            id="name"
            class="w-full outline-none text-white border-b-[2px] border-[#173B3B] bg-transparent"
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
            class="w-full outline-none text-white border-b-[2px] border-[#173B3B] bg-transparent"
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
            class="w-full outline-none text-white border-b-[2px] border-[#173B3B] bg-transparent"
          />
        </label>

        <div
          class="relative p-[2px] rounded-[20px] bg-gradient-to-r from-[#FFBA27] to-[#FFE3A7] self-end transition-all duration-300 ease-in-out"
        >
          <button
            class="rounded-[18px] bg-cGreen py-[7px] px-[16px] hover:bg-gradient-to-r hover:from-[#FFBA27] hover:to-[#FFE3A7] transition duration-300"
          >
            <span class="text-gradient custom-text sofiaLight">Get consultation</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup></script>
