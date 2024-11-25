<template>
  <footer class="bg-cGreen">
    <div class="custom-container custom-responsive">
      <section class="py-[50px] flex flex-col gap-10 sm:gap-7">
        <div
          class="pb-[10px] border-b-[1px] border-[#173C3C] flex items-end justify-between sm:flex-col sm:items-center sm:gap-5"
        >
          <div class="flex gap-4 lg:gap-3">
            <div class="size-10 overflow-hidden lg:size-8">
              <img src="@/assets/img/logo.svg" alt="" class="w-full h-full object-cover" />
            </div>
            <div class="w-[150px] overflow-hidden lg:w-[120px]">
              <img src="@/assets/img/logoWords.svg" alt="" class="w-full h-full object-cover" />
            </div>
          </div>

          <div
            class="flex items-center gap-10 pr-[175px] 2xl:pr-0 xl:gap-7 sm:overflow-x-auto sm:w-full"
          >
            <a href="#" class="thirdFooterLink"> Foundation </a>
            <a href="#" class="thirdFooterLink"> Bachelor </a>
            <a href="#" class="thirdFooterLink"> Masters </a>
            <a href="#" class="thirdFooterLink"> Courses </a>
            <a href="#" class="thirdFooterLink"> Masters </a>
          </div>
        </div>

        <div class="flex gap-[177px] 2xl:justify-between 2xl:gap-0 xl:flex-col xl:gap-10">
          <div class="flex flex-col justify-between xl:order-2 xl:gap-10">
            <div><navLinks /></div>
            <div
              class="flex items-start self-start gap-[3px] sofiaLight text-[#657E7E] leading-[1.5] select-none"
            >
              <img src="@/assets/img/footerMiniLogo.svg" alt="" />
              <div>
                <span class="block sm:inline"
                  >University of Management and Future Technologies 2024.</span
                >
                <span> All rights reserved.</span>
              </div>
            </div>
          </div>

          <div
            class="flex gap-[100px] xl:order-1 xl:gap-0 xl:justify-between xl:px-10 lg:px-0 sm:flex-col sm:gap-5"
          >
            <div class="flex flex-col gap-[10px]">
              <h1 class="sofiaSemibold custom-text text-xl text-[#B1C9C8]">Quick links</h1>
              <ul class="custom-list">
                <li class="li-hover">Jobs and Vacancies</li>
                <li class="li-hover">Admission steps</li>
                <li class="li-hover">For students</li>
                <li class="li-hover">Faculties</li>
                <li class="li-hover">Departments</li>
                <li class="li-hover">For researchers</li>
                <li class="li-hover">Admissions</li>
              </ul>
            </div>

            <div class="flex flex-col gap-[10px]">
              <h1 class="sofiaSemibold custom-text text-xl text-[#B1C9C8]">Quick links</h1>
              <ul class="custom-list">
                <li class="li-hover">Jobs and Vacancies</li>
                <li class="li-hover">Admission steps</li>
                <li class="li-hover">For students</li>
                <li class="li-hover">Faculties</li>
                <li class="li-hover">Departments</li>
                <li class="li-hover">For researchers</li>
                <li class="li-hover">Admissions</li>
              </ul>
            </div>

            <div class="flex flex-col gap-[10px]">
              <h1 class="sofiaSemibold custom-text text-xl text-[#B1C9C8]">Contact information</h1>
              <ul class="custom-list">
                <li class="li-hover flex items-center gap-[5px]">
                  <MapPinIcon class="w-5 h-[23px] text-[#A0B0B0]" />
                  Toshkent sh. Diydor ko’chasi 71
                </li>
                <li class="li-hover flex items-center gap-[5px]">
                  <EnvelopeIcon class="w-5 h-[23px] text-[#A0B0B0]" />
                  info@umft.uz
                </li>
                <li class="li-hover flex items-center gap-[5px]">
                  <PhoneIcon class="w-5 h-[23px] text-[#A0B0B0]" />
                  (55) 506 88 88
                </li>
                <li class="li-hover flex items-center gap-[5px]">
                  <PhoneIcon class="w-5 h-[23px] text-[#A0B0B0]" />
                  (55) 506 88 88
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  </footer>
</template>
<script setup>
import navLinks from '@/assets/helpers/navLinks/navLinks.vue'
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'
</script>
