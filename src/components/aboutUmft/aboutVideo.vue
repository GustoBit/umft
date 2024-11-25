<template>
  <div
    class="grid grid-cols-[355px_auto] gap-[85px] items-end mt-[17px] xl:gap-10 lg:grid-cols-1 lg:gap-6"
  >
    <div
      class="flex flex-col gap-6 pl-5 border-l-2 border-cGray lg:order-2 lg:gap-4 sm:pl-3 sm:gap-2"
    >
      <nav class="flex items-center gap-4">
        <a href="#" class="link-hover group hover:bg-cGreen/50">
          <img
            src="@/assets/img/facebook.svg"
            alt=""
            class="group-hover:brightness-200 group-hover:invert-1"
          />
        </a>
        <a href="#" class="link-hover group hover:bg-cGreen/50"
          ><img
            src="@/assets/img/telegram.svg"
            alt=""
            class="group-hover:brightness-200 group-hover:invert-1"
        /></a>
        <a href="#" class="link-hover group hover:bg-cGreen/50"
          ><img
            src="@/assets/img/instagram.svg"
            alt=""
            class="group-hover:brightness-200 group-hover:invert-1"
        /></a>
        <a href="#" class="link-hover group hover:bg-cGreen/50"
          ><img
            src="@/assets/img/facebook.svg"
            alt=""
            class="group-hover:brightness-200 group-hover:invert-1"
        /></a>
        <a href="#" class="link-hover group hover:bg-cGreen/50"
          ><img
            src="@/assets/img/telegram.svg"
            alt=""
            class="group-hover:brightness-200 group-hover:invert-1"
        /></a>
      </nav>
      <p class="text-xl custom-text text-cGreen line-clamp-5 xl:text-lg sm:text-base">
        The University of Management and Future Technologies is one of the non-governmental higher
        education institutions in the Republic of Uzbekistan that trains
      </p>
    </div>

    <div
      class="relative p-[2px] rounded-[20px] overflow-hidden bg-gradient-to-r from-[#FAFFFF] to-[#FDAF0A] lg:order-1"
    >
      <div class="rounded-[18px] overflow-hidden object-cover aspect-video">
        <!-- <iframe
          class="backdrop-blur-sm"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/CLiznLYZPRI?si=CDeNMfwVTCkr2Dxo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe> -->
        <img src="@/assets/img/campusImg1.jpg" alt="" class="w-full object-cover h-full" />
      </div>
      <div
        class="absolute inset-0 backdrop-blur-sm z-10 bg-cGreen/50 rounded-[20px] m-[1px] pointer-events-none"
      />

      <div class="absolute inset-0 m-auto z-50 size-[100px] xl:size-[60px]">
        <button class="playButton">
          <img src="@/assets/img/playVideo.svg" alt="" class="pl-2 xl:size-6 xl:pl-1" />
        </button>
      </div>
    </div>
  </div>
</template>
<script setup></script>
