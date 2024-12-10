<template>
  <div class="custom-container custom-responsive">
    <div class="mb-[70px]">
      <contentCampus />
      <div class="flex flex-col gap-[26px] flex-1 xl:gap-5 pr-[34.4%] mt-[50px] sm:pr-0">
        <h1
          class="text-[32px] custom-text text-cTextGreen xl:text-[28px] lg:text-[24px] md:text-xl"
        >
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
            On this page you can also check the ways you can vote (in person, postal, or by proxy)
            and whether you have the correct photo identification ahead of time.
          </li>
          <ul class="list-none">
            <li>
              The election can dominate the media and conversations among family and friends.
              Student Space has published a blog exploring how to maintain wellbeing during the
              election campaign.
            </li>
            <li>
              If you are eligible to vote in the next general election on Thursday 4 July, ensure
              you are registered so (whether in Oxford or at your UK home address).
            </li>
          </ul>
          <li>
            On this page you can also check the ways you can vote (in person, postal, or by proxy)
            and whether you have the correct photo identification ahead of time.
          </li>
          <li>
            The election can dominate the media and conversations among family and friends. Student
            Space has published a blog exploring how to maintain wellbeing during the election
            campaign.
          </li>
        </ul>
      </div>
    </div>
  </div>

  <footerPage />
</template>
<script setup>
import contentCampus from './contentCampus.vue'

import footerPage from '@/views/mainFooter/footerPage.vue'
</script>
