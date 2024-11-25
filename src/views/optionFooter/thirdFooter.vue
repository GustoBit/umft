<template>
  <footer class="bg-cGreen">
    <div class="custom-container custom-responsive">
      <section class="py-[50px] px-[100px] 2xl:px-0 flex flex-col items-center gap-[50px]">
        <div class="grid grid-cols-3 gap-[70px] sm:grid-cols-1 sm:gap-10">
          <div class="flex flex-col items-center gap-[10px]">
            <h1 class="sofiaSemibold custom-text text-xl text-[#B1C9C8]">Quick links</h1>
            <ul class="custom-list items-center">
              <li class="li-hover">Jobs and Vacancies</li>
              <li class="li-hover">Admission steps</li>
              <li class="li-hover">For students</li>
              <li class="li-hover">Faculties</li>
              <li class="li-hover">Departments</li>
              <li class="li-hover">For researchers</li>
              <li class="li-hover">Admissions</li>
            </ul>
          </div>

          <div class="flex flex-col gap-[10px] items-center">
            <h1 class="sofiaSemibold custom-text text-xl text-[#B1C9C8]">About University</h1>
            <ul class="custom-list items-center">
              <li class="li-hover">About us</li>
              <li class="li-hover">Campus life</li>
              <li class="li-hover">Organizational structure</li>
              <li class="li-hover">Grants</li>
              <li class="li-hover">Gallery</li>
              <li class="li-hover">Journal</li>
            </ul>
          </div>

          <div class="flex flex-col gap-[10px] items-center">
            <h1 class="sofiaSemibold custom-text text-xl text-[#B1C9C8]">Contact information</h1>
            <ul class="custom-list items-center">
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
              <li class="li-hover flex items-center gap-[5px]">
                <MapPinIcon class="w-5 h-[23px] text-[#A0B0B0]" />
                <div>
                  <div>Toshkent sh.</div>
                  <span>Diydor ko’chasi 71</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="flex items-end justify-between w-full sm:flex-col sm:gap-7 sm:items-center">
          <div
            class="flex items-start gap-[3px] sofiaLight text-[#657E7E] leading-[1.5] select-none md:hidden"
          >
            <img src="@/assets/img/footerMiniLogo.svg" alt="" />
            <div>
              <div>University of Management and Future</div>
              <span>Technologies 2024. All rights reserved.</span>
            </div>
          </div>

          <div class="flex gap-4 lg:gap-3">
            <div class="size-10 overflow-hidden lg:size-8">
              <img src="@/assets/img/logo.svg" alt="" class="w-full h-full object-cover" />
            </div>
            <div class="w-[150px] overflow-hidden lg:w-[120px]">
              <img src="@/assets/img/logoWords.svg" alt="" class="w-full h-full object-cover" />
            </div>
          </div>

          <div>
            <navLinks />
          </div>
        </div>

        <div
            class="md:flex items-start self-start gap-[3px] sofiaLight text-[#657E7E] leading-[1.5] select-none hidden"
          >
            <img src="@/assets/img/footerMiniLogo.svg" alt="" />
            <div>
              <div>University of Management and Future</div>
              <span>Technologies 2024. All rights reserved.</span>
            </div>
          </div>
      </section>
    </div>
  </footer>
</template>
<script setup>
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'
import navLinks from '@/assets/helpers/navLinks/navLinks.vue'
</script>
