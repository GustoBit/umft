<template>
  <div class="custom-container custom-responsive">
    <section class="flex flex-col mb-[70px]">
      <h1
        class="ahellya custom-text text-[48px] text-cGreen pb-[10px] border-b-[2px] border-[#D2DBDB] mb-[50px] 2xl:mb-[40px] xl:mb-[35px] lg:mb-[30px] md:mb-[25px] sm:text-[38px]"
      >
        Our Partners
      </h1>
      <main
        class="grid grid-cols-4 gap-[45px] relative xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:gap-[30px] sm:grid-rows-1"
      >
        <!-- birinchi h-full liniya -->
        <div
          class="absolute h-full w-[2px] bg-[#D2DBDB] left-[23%] top-0 2xl:left-[24%] xl:left-[32.5%] md:left-[50%] sm:w-0"
        />
        <!-- ikkinchi h-full liniya -->
        <div class="absolute h-full w-[2px] bg-[#D2DBDB] left-[51%] top-0 2xl:left-[50%] xl:w-0" />
        <!-- uchinchi h-full liniya -->
        <div
          class="absolute h-full w-[2px] bg-[#D2DBDB] right-[23.2%] top-0 2xl:right-[24%] xl:right-[32.5%] md:w-0"
        />

        <!-- chap tarafdan ikta -->
        <div
          class="absolute h-[2px] w-[314px] bg-[#D2DBDB] left-0 top-[32.5%] 2xl:w-[280px] xl:top-[24%] xl:w-[310px] lg:w-[250px] md:w-[50%] md:top-[24.5%] sm:w-0"
        />
        <div
          class="absolute h-[2px] w-[314px] bg-[#D2DBDB] left-0 bottom-[15%] 2xl:w-[280px] xl:bottom-[24%] xl:w-[310px] lg:w-[250px] md:w-[50%] sm:w-0"
        />

        <!-- chap o'rtadan ikta tekis -->
        <div
          class="absolute h-[2px] w-[369px] bg-[#D2DBDB] left-[24%] top-[15%] 2xl:w-[320px] xl:left-[33%] xl:top-[11%] lg:w-[260px] md:w-0"
        />
        <div
          class="absolute h-[2px] w-[369px] bg-[#D2DBDB] left-[24%] bottom-[32.5%] 2xl:w-[320px] xl:left-[33%] xl:bottom-[37%] lg:w-[260px] md:w-0"
        />

        <!-- o'ng o'rtadan ikta tekis -->
        <div class="absolute h-[2px] w-[305px] bg-[#D2DBDB] left-[51%] top-[32.5%] xl:w-0"></div>
        <div
          class="absolute h-[2px] w-[305px] bg-[#D2DBDB] left-[51%] bottom-[15.5%] 2xl:bottom-[14.5%] xl:w-0"
        ></div>

        <!-- o'ng tarafdan 2 ta tekis -->
        <div
          class="absolute h-[2px] w-[310px] bg-[#D2DBDB] right-0 bottom-[32.5%] 2xl:w-[280px] 2xl:bottom-[31.5%] xl:w-[310px] xl:bottom-[24%] lg:w-[260px] md:w-[50%] md:bottom-[15.5%] sm:w-0"
        />
        <div
          class="absolute h-[2px] w-[310px] bg-[#D2DBDB] right-0 top-[15.5%] 2xl:w-[280px] 2xl:top-[14.5%] xl:w-[310px] xl:top-[24%] lg:w-[260px] md:w-[50%] md:top-[15.5%] sm:w-0"
        />

        <button
          class="py-[10px] px-[26px] partners-logo sm:border-b-[2px] sm:border-[#D2DBDB] h-[95px] group 2xl:p-[10px]"
        >
          <img
            src="@/assets/img/image1.svg"
            alt=""
            class="group-hover:brightness-1 group-hover:invert-1"
          />
          <span class="pr-[36px] group-hover:text-white 2xl:p-0"
            >Tashkent State Pedagogical University</span
          >
        </button>

        <button class="p-[10px] partners-logo sm:border-b-[2px] sm:border-[#D2DBDB] h-[95px] group">
          <img src="@/assets/img/image2.svg" alt="" />
          <span class="group-hover:text-white">Vidzeme University of Applied science</span>
        </button>

        <button class="p-[10px] partners-logo sm:border-b-[2px] sm:border-[#D2DBDB] h-[95px] group">
          <img
            src="@/assets/img/image3.svg"
            alt=""
            class="pl-[51px] group-hover:brightness-1 group-hover:invert-1 xl:pl-[20px] sm:p-0"
          />
          <span class="group-hover:text-white">Uztelecom</span>
        </button>

        <button
          class="py-[10px] px-[13px] partners-logo sm:border-b-[2px] sm:border-[#D2DBDB] h-[95px] group sm:p-[10px]"
        >
          <img
            src="@/assets/img/image4.svg"
            alt=""
            class="group-hover:brightness-1 group-hover:invert-1"
          />
          <span class="pr-[40px] group-hover:text-white 2xl:p-0"
            >Tashkent University of Information Technologies</span
          >
        </button>

        <button class="p-[10px] partners-logo sm:border-b-[2px] sm:border-[#D2DBDB] h-[95px] group">
          <img
            src="@/assets/img/image5.svg"
            alt=""
            class="pl-[46px] group-hover:brightness-1 group-hover:invert-1 2xl:pl-[20px] sm:p-0"
          />
          <span class="group-hover:text-white">Think Ahead</span>
        </button>

        <button class="p-[10px] partners-logo sm:border-b-[2px] sm:border-[#D2DBDB] h-[95px] group">
          <img
            src="@/assets/img/image6.svg"
            alt=""
            class="group-hover:brightness-1 group-hover:invert-1"
          />
          <span class="pr-[40px] group-hover:text-white 2xl:p-0"
            >Namangan Institute of Engineering and Technology</span
          >
        </button>

        <button class="p-[10px] partners-logo sm:border-b-[2px] sm:border-[#D2DBDB] h-[95px] group">
          <img
            src="@/assets/img/image7.svg"
            alt=""
            class="pl-[53px] group-hover:brightness-1 group-hover:invert-1 xl:pl-[10px] sm:p-0"
          />
          <span class="pr-[40px] group-hover:text-white">Far East University</span>
        </button>

        <button class="p-[10px] partners-logo sm:border-b-[2px] sm:border-[#D2DBDB] h-[95px] group">
          <img
            src="@/assets/img/image8.svg"
            alt=""
            class="pl-[13px] group-hover:brightness-1 group-hover:invert-1 sm:p-0"
          />
          <span class="pr-[40px] group-hover:text-white 2xl:p-0"
            >Digital Economy Research Center</span
          >
        </button>

        <button class="p-[10px] partners-logo sm:border-b-[2px] sm:border-[#D2DBDB] h-[95px] group">
          <img
            src="@/assets/img/image9.svg"
            alt=""
            class="pl-[14px] group-hover:brightness-1 group-hover:invert-1 sm:p-0"
          />
          <span class="pr-[14px] group-hover:text-white">A.avlony NAtional research institute</span>
        </button>

        <button
          class="py-[10px] px-[13px] partners-logo sm:border-b-[2px] sm:border-[#D2DBDB] h-[95px] group sm:p-[10px]"
        >
          <img
            src="@/assets/img/image4.svg"
            alt=""
            class="group-hover:brightness-1 group-hover:invert-1"
          />
          <span class="pr-[40px] group-hover:text-white 2xl:p-0"
            >Tashkent University of Information Technologies</span
          >
        </button>

        <button
          class="py-[10px] px-[36px] partners-logo sm:border-b-[2px] sm:border-[#D2DBDB] h-[95px] group xl:p-[10px]"
        >
          <img
            src="@/assets/img/image10.svg"
            alt=""
            class="pl-[20px] group-hover:brightness-1 group-hover:invert-1 sm:p-0"
          />
          <span class="pr-[20px] group-hover:text-white 2xl:p-0"
            >Tashkent Institute of Finance</span
          >
        </button>

        <button
          class="py-[10px] px-[26px] partners-logo sm:border-b-[2px] sm:border-[#D2DBDB] h-[95px] group xl:p-[10px]"
        >
          <img
            src="@/assets/img/image1.svg"
            alt=""
            class="group-hover:brightness-1 group-hover:invert-1"
          />
          <span class="pr-[36px] group-hover:text-white 2xl:p-0"
            >Tashkent State Pedagogical University</span
          >
        </button>

        <button
          class="py-[10px] px-[26px] partners-logo sm:border-b-[2px] sm:border-[#D2DBDB] h-[95px] group xl:p-[10px]"
        >
          <img
            src="@/assets/img/image1.svg"
            alt=""
            class="group-hover:brightness-1 group-hover:invert-1"
          />
          <span class="pr-[36px] group-hover:text-white 2xl:p-0"
            >Tashkent State Pedagogical University</span
          >
        </button>

        <button class="p-[10px] partners-logo sm:border-b-[2px] sm:border-[#D2DBDB] h-[95px] group">
          <img
            src="@/assets/img/image2.svg"
            alt=""
            class="group-hover:brightness-1 group-hover:invert-1"
          />
          <span class="group-hover:text-white">Vidzeme University of Applied science</span>
        </button>

        <button class="p-[10px] partners-logo sm:border-b-[2px] sm:border-[#D2DBDB] h-[95px] group">
          <img
            src="@/assets/img/image3.svg"
            alt=""
            class="pl-[51px] group-hover:brightness-1 group-hover:invert-1 xl:pl-[20px] sm:p-0"
          />
          <span class="group-hover:text-white">Uztelecom</span>
        </button>

        <button
          class="py-[10px] px-[13px] partners-logo sm:border-b-[2px] sm:border-[#D2DBDB] h-[95px] group sm:p-[10px]"
        >
          <img
            src="@/assets/img/image4.svg"
            alt=""
            class="group-hover:brightness-1 group-hover:invert-1"
          />
          <span class="pr-[40px] group-hover:text-white 2xl:p-0"
            >Tashkent University of Information Technologies</span
          >
        </button>

        <button class="p-[10px] partners-logo sm:border-b-[2px] sm:border-[#D2DBDB] h-[95px] group">
          <img
            src="@/assets/img/image5.svg"
            alt=""
            class="pl-[46px] group-hover:brightness-1 group-hover:invert-1 2xl:pl-[20px] sm:p-0"
          />
          <span class="group-hover:text-white">Think Ahead</span>
        </button>

        <button class="p-[10px] partners-logo sm:border-b-[2px] sm:border-[#D2DBDB] h-[95px] group">
          <img
            src="@/assets/img/image6.svg"
            alt=""
            class="group-hover:brightness-1 group-hover:invert-1"
          />
          <span class="pr-[40px] group-hover:text-white 2xl:p-0"
            >Namangan Institute of Engineering and Technology</span
          >
        </button>

        <button class="p-[10px] partners-logo sm:border-b-[2px] sm:border-[#D2DBDB] h-[95px] group">
          <img
            src="@/assets/img/image7.svg"
            alt=""
            class="pl-[53px] group-hover:brightness-1 group-hover:invert-1 xl:pl-[10px] sm:p-0"
          />
          <span class="pr-[40px] group-hover:text-white">Far East University</span>
        </button>

        <button class="p-[10px] partners-logo sm:border-b-[2px] sm:border-[#D2DBDB] h-[95px] group">
          <img
            src="@/assets/img/image8.svg"
            alt=""
            class="pl-[13px] group-hover:brightness-1 group-hover:invert-0 sm:p-0"
          />
          <span class="pr-[40px] group-hover:text-white 2xl:p-0"
            >Digital Economy Research Center</span
          >
        </button>

        <button class="p-[10px] partners-logo sm:border-b-[2px] sm:border-[#D2DBDB] h-[95px] group">
          <img
            src="@/assets/img/image9.svg"
            alt=""
            class="pl-[14px] group-hover:brightness-1 group-hover:invert-1 xl:p-0 sm:p-0"
          />
          <span class="pr-[14px] group-hover:text-white">A.avlony NAtional research institute</span>
        </button>

        <button
          class="py-[10px] px-[13px] partners-logo sm:border-b-[2px] sm:border-[#D2DBDB] h-[95px] group sm:p-[10px]"
        >
          <img
            src="@/assets/img/image4.svg"
            alt=""
            class="group-hover:brightness-1 group-hover:invert-1"
          />
          <span class="pr-[40px] group-hover:text-white 2xl:p-0"
            >Tashkent University of Information Technologies</span
          >
        </button>

        <button
          class="py-[10px] px-[36px] partners-logo sm:border-b-[2px] sm:border-[#D2DBDB] h-[95px] group xl:p-[10px]"
        >
          <img
            src="@/assets/img/image10.svg"
            alt=""
            class="pl-[20px] group-hover:brightness-1 group-hover:invert-1 sm:p-0"
          />
          <span class="pr-[20px] group-hover:text-white 2xl:p-0"
            >Tashkent Institute of Finance</span
          >
        </button>

        <button
          class="py-[10px] px-[26px] partners-logo sm:border-b-[2px] sm:border-[#D2DBDB] h-[95px] group xl:p-[10px]"
        >
          <img
            src="@/assets/img/image1.svg"
            alt=""
            class="group-hover:brightness-1 group-hover:invert-1"
          />
          <span class="pr-[36px] group-hover:text-white 2xl:p-0"
            >Tashkent State Pedagogical University</span
          >
        </button>
      </main>
    </section>
  </div>
</template>
<script setup></script>
