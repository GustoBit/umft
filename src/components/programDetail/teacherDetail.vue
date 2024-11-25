<template>
  <section class="py-[26px]">
    <h1 class="h1With48PxWhite">Leading Teachers</h1>

    <div class="grid grid-cols-3 gap-[120px] 2xl:gap-20 xl:gap-[60px] lg:gap-10 sm:hidden">
      <div
        class="flex flex-col gap-[13px] relative lg:gap-1"
        v-for="teacher of teachers"
        :key="teacher.id"
      >
        <div class="rounded-[20px] overflow-hidden group">
          <img :src="teacher.image" alt="Example" class="teacherImage" />
        </div>
        <div class="flex flex-col gap-[26px] lg:gap-3">
          <div class="">
            <h1 class="teacherTitle mb-[10px] lg:mb-1">{{ teacher.name }}</h1>

            <ul class="teacherStatus">
              <li>{{ teacher.title }}</li>
              <li>{{ teacher.degree }}</li>
            </ul>
          </div>
          <div class="ml-auto">
            <readMoreButtonToGreen />
          </div>
        </div>
      </div>
    </div>

    <!-- SM Splide all teacher -->
    <div class="hidden sm:block px-10">
      <Splide :options="splideOptions" class="splide-custom">
        <SplideSlide v-for="teacher of teachers" :key="teacher.id">
          <div class="flex flex-col gap-[13px] relative lg:gap-1">
            <div class="rounded-[20px] overflow-hidden group">
              <img :src="teacher.image" alt="Example" class="teacherImage" />
            </div>
            <div class="flex flex-col gap-[26px] lg:gap-3">
              <div class="">
                <h1 class="teacherTitle mb-[10px] lg:mb-1">{{ teacher.name }}</h1>

                <ul class="teacherStatus">
                  <li>{{ teacher.title }}</li>
                  <li>{{ teacher.degree }}</li>
                </ul>
              </div>
              <div class="ml-auto">
                <readMoreButtonToGreen />
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </section>
</template>
<script setup>
import readMoreButtonToGreen from '@/assets/helpers/readMoreButton/readMoreButtonToGreen.vue'

import { ref } from 'vue'
import '@splidejs/splide/dist/css/splide.min.css'
const splideOptions = ref({
  type: 'loop',
  perPage: 1,
  pagination: true,
  arrows: false,
  autoplay: true,
  interval: 3000,
  focus: 'center',
})

const teachers = ref([
  {
    id: 1,
    name: 'Robert Downey Jr.',
    title: 'Professor in Machine Learning',
    degree: 'Masters in Harvard University',
    image: new URL('@/assets/img/teacher1.jpg', import.meta.url).href,
  },
  {
    id: 2,
    name: 'Chris Evans',
    title: 'Professor in Artificial Intelligence',
    degree: 'Masters in MIT',
    image: new URL('@/assets/img/teacher2.jpg', import.meta.url).href,
  },
  {
    id: 3,
    name: 'Scarlett Johansson',
    title: 'Data Scientist',
    degree: 'Masters in Stanford University',
    image: new URL('@/assets/img/teacher3.jpg', import.meta.url).href,
  },
])
</script>
