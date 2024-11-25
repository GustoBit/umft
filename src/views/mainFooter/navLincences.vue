<template>
  <div class="flex 2xl:justify-between xl:grid grid-cols-2 sm:grid-cols-1">
    <div class="flex flex-col gap-[10px] pt-[26px] sm:pl-[20%]">
      <h1 class="sofiaSemibold custom-text text-xl text-[#B1C9C8]">Licences</h1>

      <div class="flex flex-col gap-2">
        <div class="flex gap-5">
          <div class="overflow-hidden rounded-[3px]">
            <img src="@/assets/img/sviditelsto.jpg" alt="" class="w-full h-full object-cover" />
          </div>
          <div class="overflow-hidden rounded-[3px]">
            <img src="@/assets/img/lisenziya.jpg" alt="" class="w-full h-full object-cover" />
          </div>
        </div>

        <div class="text-sm custom-text text-[#657E7E] text-nowrap">
          Licence #L-4409567, 09.11.2022
        </div>
      </div>
    </div>

    <div class="h-[240px] w-[1px] bg-[#173C3C] ml-[124px] 2xl:ml-0 xl:hidden"></div>

    <div class="flex flex-col gap-[10px] pt-[26px] ml-[26px] 2xl:ml-0 sm:pl-[20%]">
      <h1 class="sofiaSemibold custom-text text-xl text-[#B1C9C8]">About University</h1>
      <ul class="custom-list">
        <li class="li-hover">About us</li>
        <li class="li-hover">Campus life</li>
        <li class="li-hover">Organizational structure</li>
        <li class="li-hover">Grants</li>
        <li class="li-hover">Gallery</li>
        <li class="li-hover">Journal</li>
      </ul>
    </div>

    <div class="h-[240px] w-[1px] bg-[#173C3C] ml-[140px] 2xl:ml-0 xl:hidden"></div>

    <div class="flex flex-col gap-[10px] pt-[26px] ml-[26px] 2xl:ml-0 sm:pl-[20%]">
      <h1 class="sofiaSemibold custom-text text-xl text-[#B1C9C8]">Information for</h1>
      <ul class="custom-list">
        <li class="li-hover">Undergraduates</li>
        <li class="li-hover">Graduate students</li>
        <li class="li-hover">Continuing Education students</li>
        <li class="li-hover">Alumni</li>
        <li class="li-hover">Staff</li>
        <li class="li-hover">Teachers</li>
      </ul>
    </div>

    <div class="h-[240px] w-[1px] bg-[#173C3C] ml-[92px] 2xl:ml-0 xl:hidden"></div>

    <div class="flex flex-col gap-[10px] pt-[26px] ml-[26px] 2xl:ml-0 sm:pl-[20%]">
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
</template>
<script setup>
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'
</script>
