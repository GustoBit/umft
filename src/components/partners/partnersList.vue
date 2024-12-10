<template>
  <div class="responsiveMt70 responsiveMb70">
    <div class="h1Title48">Our Partners</div>

    <div
      class="grid grid-cols-4 gap-10 2xl:mt-[50px] xl:mt-10 lg:mt-8 sm:mt-6 mt-[60px] relative xl:grid-cols-3 xl:gap-7 md:grid-cols-2 md:gap-6 sm:grid-cols-1 sm:gap-4"
    >
      <div
        class="py-3 px-6 flex items-center justify-center gap-2 cursor-pointer hover:bg-cGreen transition duration-500 group lg:py-2 lg:px-4"
        v-for="(partner, idx) of partners"
        :key="idx"
      >
        <div>
          <img :src="partner.image" alt="" class="w-full object-cover h-full" />
        </div>

        <div
          class="sofiaMedium leading-[1.5] text-[#494949] flex-1 group-hover:text-cGray lg:text-sm"
        >
          {{ partner.title }}
        </div>
      </div>

      <!-- THE FIRST HEIGHT LINE -->
      <div class="absolute w-[2px] h-full top-0 left-[24.3%] bg-cGray xl:left-[32.5%] md:hidden" />
      <!-- THE SECOND MIDDLE HEIGHT LINE -->
      <div class="absolute w-[2px] h-full top-0 left-[50%] bg-cGray xl:hidden" />
      <!-- THE LAST HEIGHT LINE -->
      <div
        class="absolute w-[2px] h-full top-0 right-[24.3%] bg-cGray xl:right-[32.5%] md:hidden"
      />

      <!-- LINES -->

      <!-- THE FIRST TOP LINE -->
      <div
        class="absolute bg-cGray w-[24.3%] h-[2px] top-[260px] left-0 xl:w-[32.5%] xl:top-[240px] lg:hidden"
      />
      <!-- THE FIRST BOTTOM LINE -->
      <div
        class="absolute bg-cGray w-[24.3%] h-[2px] bottom-[118px] left-0 xl:w-[32.5%] xl:bottom-[110px] lg:hidden"
      />

      <!-- THE LAST TOP LINE -->
      <div
        class="absolute bg-cGray w-[24.3%] h-[2px] top-[118px] right-0 xl:w-[32.5%] xl:top-[240px] lg:hidden"
      />
      <!-- THE LAST BOTTOM LINE -->
      <div
        class="absolute bg-cGray w-[24.3%] h-[2px] bottom-[255px] right-0 xl:w-[32.5%] xl:bottom-[110px] lg:hidden"
      />

      <!--  -->

      <!-- THE LEFT MIDDLE TOP LINE -->
      <div
        class="absolute bg-cGray w-[25%] h-[2px] top-[118px] left-[25%] xl:w-[32.5%] xl:top-[115px] xl:left-[35%] lg:hidden"
      />
      <!-- THE LEFT MIDDLE BOTTOM LINE -->
      <div
        class="absolute bg-cGray w-[25%] h-[2px] bottom-[255px] left-[25%] xl:w-[32.5%] xl:left-[35%] xl:bottom-[238px] lg:hidden"
      />

      <!-- THE RIGHT MIDDLE TOP LINE -->
      <div class="absolute bg-cGray w-[24.3%] h-[2px] top-[260px] left-[50%] xl:hidden" />
      <!-- THE RIGHT MIDDLE BOTTOM LINE -->
      <div class="absolute bg-cGray w-[24.3%] h-[2px] bottom-[118px] left-[50%] xl xl:hidden" />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const partners = ref([
  {
    title: 'Tashkent State Pedagogical University',
    image: new URL('@/assets/img/image1.svg', import.meta.url).href,
  },
  {
    title: 'Vidzeme University of Applied science',
    image: new URL('@/assets/img/image1.svg', import.meta.url).href,
  },
  {
    title: 'Uztelecom',
    image: new URL('@/assets/img/image3.svg', import.meta.url).href,
  },
  {
    title: 'Tashkent University of Information Technologies',
    image: new URL('@/assets/img/image4.svg', import.meta.url).href,
  },
  {
    title: 'Tashkent State Pedagogical University',
    image: new URL('@/assets/img/image1.svg', import.meta.url).href,
  },
  {
    title: 'Vidzeme University of Applied science',
    image: new URL('@/assets/img/image1.svg', import.meta.url).href,
  },
  {
    title: 'Uztelecom',
    image: new URL('@/assets/img/image3.svg', import.meta.url).href,
  },
  {
    title: 'Tashkent University of Information Technologies',
    image: new URL('@/assets/img/image4.svg', import.meta.url).href,
  },
  {
    title: 'Vidzeme University of Applied science',
    image: new URL('@/assets/img/image1.svg', import.meta.url).href,
  },
  {
    title: 'Uztelecom',
    image: new URL('@/assets/img/image3.svg', import.meta.url).href,
  },
  {
    title: 'Tashkent University of Information Technologies',
    image: new URL('@/assets/img/image4.svg', import.meta.url).href,
  },
  {
    title: 'Tashkent State Pedagogical University',
    image: new URL('@/assets/img/image1.svg', import.meta.url).href,
  },
  {
    title: 'A.avlony NAtional research institute',
    image: new URL('@/assets/img/image5.svg', import.meta.url).href,
  },
  {
    title: 'Tashkent Institute of Finance',
    image: new URL('@/assets/img/image6.svg', import.meta.url).href,
  },
  {
    title: 'Vidzeme University of Applied science',
    image: new URL('@/assets/img/image7.svg', import.meta.url).href,
  },
  {
    title: 'Digital Economy Research Center',
    image: new URL('@/assets/img/image8.svg', import.meta.url).href,
  },
  {
    title: 'Namangan Institute of Engineering and Technology',
    image: new URL('@/assets/img/image9.svg', import.meta.url).href,
  },
  {
    title: 'Far East University',
    image: new URL('@/assets/img/image10.svg', import.meta.url).href,
  },
  {
    title: 'Tashkent University of Information Technologies',
    image: new URL('@/assets/img/image1.svg', import.meta.url).href,
  },
  {
    title: 'Tashkent Institute of Finance',
    image: new URL('@/assets/img/image6.svg', import.meta.url).href,
  },
  {
    title: 'Tashkent State Pedagogical University',
    image: new URL('@/assets/img/image1.svg', import.meta.url).href,
  },
  {
    title: 'Uztelecom',
    image: new URL('@/assets/img/image3.svg', import.meta.url).href,
  },
  {
    title: 'Tashkent University of Information Technologies',
    image: new URL('@/assets/img/image4.svg', import.meta.url).href,
  },
  {
    title: 'Vidzeme University of Applied science',
    image: new URL('@/assets/img/image1.svg', import.meta.url).href,
  },
])
</script>
