<template>
  <div class="custom-container custom-responsive">
    <section class="">
      <div
        class="ahellya text-[56px] custom-text text-cGreen pb-[10px] border-b-[2px] border-cGray 2xl:text-[54px] xl:text-[42px] lg:text-[38px] md:text-[36px] sm:text-2xl mb-[26px]"
      >
        Computer engineering
      </div>

      <button class="sofiaMedium text-2xl text-[#556666] custom-text">/Bachelor’s</button>

      <div
        class="grid grid-cols-3 gap-5 mt-[26px] sm:grid-cols-1 sm:px-10 mb-[70px] 2xl:mt-[60px] xl:mb-[50px] lg:mb-9 sm:mb-6"
      >
        <div class="studyFormatDivs">
          <h2 class="text-xl custom-text text-[#6F8B8A] lg:text-lg">Term of Study</h2>
          <p class="studyFormatParagraph">3 years 6 months - 4 years 6 months</p>
        </div>

        <div class="studyFormatDivs">
          <h2 class="text-xl custom-text text-[#6F8B8A]">Term of Study</h2>
          <div class="flex items-center gap-4 mt-auto xl:gap-2 lg:flex-wrap">
            <button class="studyFormatButton">Online</button>
            <button class="studyFormatButton">Full-time</button>
            <button class="studyFormatButton">Part-time</button>
          </div>
        </div>

        <div class="studyFormatDivs">
          <h2 class="text-xl custom-text text-[#6F8B8A] lg:text-lg">Term of Study</h2>
          <p class="studyFormatParagraph">International Diploma in Computer Science</p>
        </div>
      </div>

      <h1 class="h1With48PxGreen">Study Program</h1>

      <div class="flex flex-col gap-4">
        <levelStudy title="First level" />
        <levelStudy title="Second level" />
        <levelStudy title="Third Level" />
        <levelStudy title="Fourth Level" />
      </div>
    </section>
  </div>

  <section
    class="bg-cGreen mt-[70px] 2xl:mt-[50px] xl:mt-10 lg:mt-6 sm:mt-5 mb-[70px] 2xl:mb-[50px] xl:mb-10 lg:mb-6 sm:mb-5"
  >
    <div class="custom-container custom-responsive">
      <teacherDetail />
    </div>
  </section>

  <div class="custom-container custom-responsive">
    <studyDetails />

    <div class="mt-[86px] 2xl:my-[60px] xl:my-10 lg:my-8 sm:my-6 mb-[70px]">
      <submitApp />
    </div>

    <div>
      <h1 class="h1With48PxGreen">We also recommend</h1>
      <lessonDetails />
    </div>
  </div>
</template>
<script setup>
import levelStudy from './levelStudy.vue'
import teacherDetail from './teacherDetail.vue'
import studyDetails from './studyDetails.vue'
import submitApp from '@/assets/helpers/submit/submitApp.vue'
import lessonDetails from '../../assets/helpers/lesson/lessonDetails.vue'
</script>
