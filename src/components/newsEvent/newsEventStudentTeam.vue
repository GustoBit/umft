<template>
  <div
    class="mt-[26px] mb-[70px] gap-[135px] grid grid-cols-[auto_324px] 2xl:gap-[80px] xl:mb-[50px] sm:mb-[30px] lg:gap-[40px] sm:grid-cols-1"
  >
    <div class="flex flex-col gap-[26px] flex-1 xl:gap-5">
      <h1 class="text-[32px] custom-text text-cTextGreen xl:text-[28px] lg:text-[24px] md:text-xl">
        Student Team Wins International Robotics Competition
      </h1>

      <ul
        class="list-none sofiaLight custom-text text-[#657E7E] flex flex-col gap-6 text-xl xl:gap-5 xl:text-lg lg:text-base lg:gap-3"
      >
        <li>
          If you are eligible to vote in the next general election on Thursday 4 July, ensure you
          are registered so (whether in Oxford or at your UK home address).
        </li>
        <li>
          On this page you can also check the ways you can vote (in person, postal, or by proxy) and
          whether you have the correct photo identification ahead of time.
        </li>
        <ul class="list-none">
          <li>
            The election can dominate the media and conversations among family and friends. Student
            Space has published a blog exploring how to maintain wellbeing during the election
            campaign.
          </li>
          <li>
            If you are eligible to vote in the next general election on Thursday 4 July, ensure you
            are registered so (whether in Oxford or at your UK home address).
          </li>
        </ul>
        <li>
          On this page you can also check the ways you can vote (in person, postal, or by proxy) and
          whether you have the correct photo identification ahead of time.
        </li>
        <li>
          The election can dominate the media and conversations among family and friends. Student
          Space has published a blog exploring how to maintain wellbeing during the election
          campaign.
        </li>
      </ul>
    </div>

    <div
      class="bg-[#E8E8E8] rounded-[12px] py-[26px] px-[23px] flex flex-col gap-[26px] h-fit lg:p-[15px] lg:gap-5"
    >
      <h1
        class="text-2xl custom-text text-cGreen pb-[10px] border-b-[2px] border-[#D2DBDB] lg:text-xl"
      >
        Latest
      </h1>

      <div class="flex flex-col gap-[47px] lg:gap-6">
        <div class="flex flex-col">
          <span class="overflow-hidden rounded-[10px] block">
            <img src="@/assets/img/newsLatest.jpg" alt="" class="w-full" />
          </span>
          <span
            class="block mt-4 mb-[22px] sm:my-[15px] text-lg sofiaMedium leading-[1.5] text-cGreen lg:text-base"
          >
            Student Team Wins International Robotics Competition
          </span>
          <span class="flex items-center justify-between">
            <p class="text-[#97A1A1] custom-text uppercase lg:text-sm">10 AUG 2024</p>
            <readMoreButton />
          </span>
        </div>

        <div class="flex flex-col">
          <span class="overflow-hidden rounded-[10px] block">
            <img src="@/assets/img/newsLatest.jpg" alt="" class="w-full" />
          </span>
          <span
            class="block mt-4 mb-[22px] sm:my-[15px] text-lg sofiaMedium leading-[1.5] text-cGreen lg:text-base"
          >
            Student Team Wins International Robotics Competition
          </span>
          <span class="flex items-center justify-between">
            <p class="text-[#97A1A1] custom-text uppercase lg:text-sm">10 AUG 2024</p>
            <readMoreButton />
          </span>
        </div>
      </div>
      <!--  -->
    </div>
  </div>
</template>
<script setup>
import readMoreButton from '@/assets/helpers/readMoreButton/readMoreButton.vue'
</script>
