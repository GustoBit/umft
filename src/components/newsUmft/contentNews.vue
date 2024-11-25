<template>
  <section class="flex flex-col gap-[26px] items-center">
    <div
      class="grid grid-cols-[541px_auto] gap-[27px] 2xl:gap-5 2xl:grid-cols-[auto_auto] xl:grid-cols-[400px_auto] lg:grid-cols-[350px_auto] md:grid-cols-[280px_auto] sm:grid-cols-[150px_auto] sm:gap-6"
    >
      <div class="flex flex-col justify-between gap-[48px] sm:gap-6">
        <h1
          class="ahellya custom-text text-cGreen pl-[26px] border-l-[2px] border-cGray pr-[170px] text-[64px] 2xl:text-[54px] 2xl:pr-0 xl:text-[42px] lg:text-[38px] md:text-[36px] sm:text-2xl sm:pl-4"
        >
          News & Events of UMFT
        </h1>
        <div class="rounded-[20px] overflow-hidden boxShadow h-fit group">
          <img
            src="@/assets/img/campusImg2.jpg"
            alt="Students"
            class="w-full object-cover group-hover:scale-110 transition duration-300"
          />
        </div>
      </div>

      <div class="overflow-hidden rounded-[20px] boxShadow h-full group">
        <img
          src="@/assets/img/campusImg1.jpg"
          alt="Classroom"
          class="w-full h-full object-cover group-hover:scale-110 transition duration-300"
        />
      </div>
    </div>

    <div class="w-full h-[10px] pl-[20%] pr-[20%]">
      <div class="bg-[#D9D9D9] rounded-[90px] relative w-full h-full">
        <div class="absolute rounded-[90px] w-[35%] h-full bg-[#436261] top-0 left-0" />
      </div>
    </div>
  </section>
</template>
<script setup></script>
