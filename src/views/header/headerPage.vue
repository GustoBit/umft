<template>
  <div class="custom-container custom-responsive">
    <header
      class="flex items-center justify-between mb-[70px] pt-[30px] 2xl:mb-[40px] xl:mb-[35px] lg:mb-[30px] md:mb-[25px]"
    >
      <router-link
        :to="{ name: 'landing' }"
        class="flex items-start gap-[13.11px] sm:items-center sm:gap-2"
      >
        <img src="@/assets/img/logo.svg" alt="" class="sm:size-10" />
        <img src="@/assets/img/logoWords.svg" alt="" class="pt-[14.13px] sm:p-0" />
      </router-link>

      <nav class="flex items-center gap-10 sofiaMedium custom-text text-lg 2xl:hidden">
        <headerDropdown title="Admissions">
          <div class="p-1 flex flex-col">
            <router-link
              v-for="(item, idx) of navigation"
              :key="idx"
              :to="item.to"
              :class="[
                'p-2 sofiaMedium custom-text text-lg hover:bg-cGray/50 whitespace-nowrap',
                idx % 2 === 0 ? undefined : 'bg-gray-50',
              ]"
            >
              {{ item.name }}
            </router-link>
          </div>
        </headerDropdown>

        <button>For Students</button>

        <headerDropdown title="Faculties">
          <div class="p-1 flex flex-col">
            <router-link
              v-for="(item, idx) of navigation"
              :key="idx"
              :to="item.to"
              :class="[
                'p-2 sofiaMedium custom-text text-lg hover:bg-cGray/50 whitespace-nowrap',
                idx % 2 === 0 ? undefined : 'bg-gray-50',
              ]"
            >
              {{ item.name }}
            </router-link>
          </div>
        </headerDropdown>

        <headerDropdown title="About">
          <div class="p-1 flex flex-col">
            <router-link
              v-for="(item, idx) of navigation"
              :key="idx"
              :to="item.to"
              :class="[
                'p-2 sofiaMedium custom-text text-lg hover:bg-cGray/50 whitespace-nowrap',
                idx % 2 === 0 ? undefined : 'bg-gray-50',
              ]"
            >
              {{ item.name }}
            </router-link>
          </div>
        </headerDropdown>
        <button>Research</button>
      </nav>

      <div class="flex items-center gap-4">
        <a
          href="tel:+998901234567"
          class="py-[6px] px-[24px] bg-cYellow rounded-[10px] flex items-center gap-4 factoria custom-text text-cGreen sm:hidden call"
        >
          <PhoneIcon class="size-[14px] callAnimate" />
          <span class="md:hidden">(55) 506 88 88</span>
        </a>
        <MagnifyingGlassIcon class="size-[43px] p-[10px] cursor-pointer text-cSearch sm:hidden" />

        <button class="flex-col gap-[9px] flex sm:gap-1" @click="show = true">
          <span
            class="w-[17.5px] rounded-[10px] bg-gradient-to-r from-[#89A7A6] to-[#022726] h-[4.69px] sm:w-3"
          ></span>
          <span
            class="w-[35px] rounded-[10px] bg-gradient-to-r from-[#89A7A6] to-[#022726] h-[4.69px] sm:w-7"
          ></span>
          <span
            class="w-[24.5px] rounded-[10px] bg-gradient-to-r from-[#89A7A6] to-[#022726] h-[4.69px] sm:w-5"
          ></span>
        </button>
      </div>
    </header>
  </div>

  <asidePage :show="show" @asideClose="asideClose" />
</template>
<script setup>
import { PhoneIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'

import headerDropdown from '@/support/headerDropdown.vue'

const navigation = [
  { name: 'Partners', to: 'partners' },
  { name: 'Admission', to: 'admission' },
  { name: 'Program-Details', to: 'program-details' },
  { name: 'News', to: 'news' },
  { name: 'Campus-Life', to: 'campus-life' },
  { name: 'News-Event', to: 'news-event' },
]

import { ref } from 'vue'
const show = ref(false)

const asideClose = () => {
  show.value = false
}

import asidePage from '@/support/asidePage.vue'
</script>
