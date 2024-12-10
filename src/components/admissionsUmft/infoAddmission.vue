<template>
  <section>
    <div
      class="grid grid-cols-[236px_auto] gap-10 2xl:gap-6 lg:gap-5 lg:grid-cols-[180px_auto] sm:grid-cols-1"
    >
      <div
        class="border-r-[2px] border-cGray h-fit pr-[26px] pt-[50px] 2xl:pt-10 xl:pt-8 lg:pt-6 sm:pt-4 lg:pr-4 sm:hidden"
      >
        <div
          v-for="(button, index) in buttons"
          :key="index"
          :class="!button.show ? 'divide-y-2 divide-cGray' : ''"
          class="custom-text text-cGreen text-xl flex flex-col gap-4 buttonInfo"
        >
          <div
            class="custom-text text-cGreen text-xl cursor-pointer lg:text-lg"
            @click="toggle(index)"
          >
            {{ button.title }}
          </div>

          <div
            class="overflow-hidden transition-all duration-500 ease-in-out"
            :style="{ maxHeight: button.show ? button.contentHeight + 'px' : '0px' }"
            ref="contentRefs"
          >
            <div class="flex flex-col gap-1 pl-5 divide-y-2 divide-cGray lg:pl-3">
              <div v-for="(text, i) in button.text" :key="i" class="miniButtonInfo">
                <div
                  class="custom-text text-[#597676] cursor-pointer text-lg rounded-[10px] py-[10px] hover:bg-[#DCE0E0] hover:pl-4 transition-all duration-500 lg:text-base"
                >
                  {{ text }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-[auto_324px] gap-10 2xl:gap-6 xl:grid-cols-1 sm:relative">
        <!-- SM qimsdagi buttons ni bari -->
        <div class="hidden text-cGreen sm:block absolute top-4 right-0 z-50" @click="show = true">
          <Bars3CenterLeftIcon class="size-8" />
        </div>

        <!-- SM qism BUTTONS -->
        <asideAdmission :show="show" @asideClose="show = false">
          <div class="p-3 w-full mt-32 overflow-y-auto">
            <div
              v-for="(button, index) in buttons"
              :key="index"
              :class="!button.show ? 'divide-y-2 divide-cGray' : ''"
              class="custom-text text-white text-lg flex flex-col gap-2 buttonInfo"
            >
              <div class="custom-text cursor-pointer text-lg" @click="phoneToggle(index)">
                {{ button.title }}
              </div>

              <div
                class="overflow-hidden transition-all duration-500 ease-in-out"
                :style="{ maxHeight: button.show ? button.contentHeight + 'px' : '0px' }"
                ref="phoneContentRefs"
              >
                <div class="flex flex-col gap-1 pl-5 divide-y-2 divide-cGray/10 lg:pl-3">
                  <div v-for="(text, i) in button.text" :key="i" class="miniButtonInfo">
                    <div
                      class="custom-text text-white cursor-pointer text-lg rounded-[10px] py-[10px] hover:bg-[#DCE0E0] hover:pl-4 transition-all duration-500 lg:text-base"
                    >
                      {{ text }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </asideAdmission>

        <div class="pt-[50px] 2xl:pt-10 xl:pt-8 lg:pt-6 sm:pt-4">
          <div class="flex flex-col gap-10 lg:gap-6">
            <div class="" v-for="(info, index) of informations" :key="index">
              <div
                class="custom-text text-cGreen text-2xl pb-[10px] border-b-[2px] border-cGray xl:text-xl sm:text-lg"
              >
                {{ info.title }}
              </div>

              <div
                class="sofiaLight custom-text text-[#556666] text-xl mt-[10px] mb-4 flex flex-col gap-5 xl:text-lg lg:text-base lg:mb-0 lg:gap-3 sm:text-base sm:gap-2"
              >
                {{ info.text }}
                <span v-if="info.secondText">{{ info.secondText }}</span>
              </div>

              <div class="mb-[26px] lg:mt-[10px] lg:mb-5 sm:mb-3">
                <table
                  v-if="info.programs"
                  class="rounded-[10px] overflow-hidden border-[1px] border-cGray table-cell"
                >
                  <thead>
                    <tr class="custom-text text-cGreen lg:text-sm sm:text-xs">
                      <th
                        class="py-6 px-4 border border-gray-300 text-left lg:py-4 lg:px-2 sm:p-1 sm:text-center"
                      >
                        №
                      </th>
                      <th
                        class="py-6 px-4 border border-gray-300 text-left lg:py-4 lg:px-2 sm:py-[4px] sm:px-[6px]"
                      >
                        Academic Program
                      </th>
                      <th
                        class="py-6 px-4 border border-gray-300 text-left lg:py-4 lg:px-2 sm:py-[4px] sm:px-[6px]"
                      >
                        Main Subject
                      </th>
                      <th
                        class="py-6 px-4 border border-gray-300 text-left lg:py-4 lg:px-2 sm:py-[4px] sm:px-[6px]"
                      >
                        Additional Subject
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(prog, i) of info.programs"
                      :key="prog.id"
                      class="sofiaLight custom-text text-[#657E7E] lg:text-sm lg:py-4 lg:px-2 sm:text-[10px]"
                    >
                      <td
                        class="py-4 px-6 border border-gray-300 text-cGreen lg:py-2 lg:px-3 sm:p-1 sm:text-center"
                      >
                        {{ i + 1 }}
                      </td>
                      <td
                        class="py-4 px-6 border border-gray-300 lg:py-2 lg:px-3 sm:py-[4px] sm:px-[6px]"
                      >
                        {{ prog.program }}
                      </td>
                      <td
                        class="py-4 px-6 border border-gray-300 lg:py-2 lg:px-3 sm:py-[4px] sm:px-[6px]"
                      >
                        {{ prog.main }}
                      </td>
                      <td
                        class="py-4 px-6 border border-gray-300 lg:py-2 lg:px-3 sm:py-[4px] sm:px-[6px]"
                      >
                        {{ prog.additional }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div
                class="flex flex-col gap-5 sofiaLight custom-text text-[#556666] text-xl xl:text-lg xl:gap-3 lg:text-base sm:text-sm sm:gap-1"
                v-if="info.firstAdditional || info.secondAddinional"
              >
                <div class="">
                  {{ info.firstAdditional }}
                </div>
                <div class="">
                  {{ info.secondAddinional }}
                </div>
              </div>

              <ul
                class="list-decimal pl-5 sofiaLight custom-text text-cGreen text-xl space-y-1 mt-5 xl:text-lg lg:text-base sm:text-sm sm:mt-2"
              >
                <li v-for="(item, idx) of info.item" :key="idx" class="space-y-1">{{ item }}</li>
              </ul>

              <div
                class="flex flex-col gap-5 sofiaLight custom-text text-[#556666] text-xl mt-6 xl:text-lg xl:gap-3 lg:text-base sm:text-sm sm:gap-1 sm:mt-2"
                v-if="info.firstReminder || info.secondReminder"
              >
                <div class="" v-if="info.firstReminder">
                  <span class="sofiaSemibold text-cGreen">Reminder.</span>
                  {{ info.firstReminder }}
                </div>
                <div class="" v-if="info.secondReminder">
                  {{ info.secondReminder }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="bg-[#E8E8E8] h-fit pt-[50px] 2xl:pt-10 xl:pt-8 lg:pt-6 sm:pt-4 pb-[23px] rounded-b-2xl xl:hidden"
        >
          <div class="px-[23px]">
            <div
              class="custom-text text-cGreen border-b-[2px] border-cGray text-2xl pb-[10px] mb-4"
            >
              Research
            </div>

            <div class="flex flex-col gap-10">
              <div class="flex flex-col gap-3" v-for="(people, index) of readMore" :key="index">
                <div class="rounded-[10px] overflow-hidden">
                  <img :src="people.image" alt="" class="w-full object-cover" />
                </div>

                <div class="sofiaMedium leading-[1.5] text-cGreen text-lg">{{ people.title }}</div>

                <div class="flex items-end justify-between custom-text text-[#97A1A1]">
                  {{ people.date }}
                  <readMoreButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import readMoreButton from '@/assets/helpers/readMoreButton/readMoreButton.vue'
import { ref, nextTick } from 'vue'

const buttons = ref([
  {
    title: 'About us',
    text: ['Undergraduate', 'Graduate', 'Transfer', 'Privileges', 'Exam Materials'],
  },
  {
    title: 'Library',
    text: ['Undergraduate', 'Graduate', 'Transfer', 'Privileges', 'Exam Materials'],
  },
  {
    title: 'Campus Life',
    text: ['Undergraduate', 'Graduate', 'Transfer', 'Privileges', 'Exam Materials'],
  },
  {
    title: 'Academics',
    text: ['Undergraduate', 'Graduate', 'Transfer', 'Privileges', 'Exam Materials'],
  },
  {
    title: 'Journals',
    text: ['Undergraduate', 'Graduate', 'Transfer', 'Privileges', 'Exam Materials'],
  },
  {
    title: 'Admissions',
    text: ['Undergraduate', 'Graduate', 'Transfer', 'Privileges', 'Exam Materials'],
  },
])

const contentRefs = ref([])
const phoneContentRefs = ref([])

const toggle = async (index) => {
  const btn = buttons.value[index]
  btn.show = !btn.show
  console.log(btn)

  if (btn.show) {
    await nextTick()
    const content = contentRefs.value[index]
    btn.contentHeight = content.scrollHeight
  } else {
    btn.contentHeight = 0
  }
}

const phoneToggle = async (index) => {
  const btn = buttons.value[index]
  btn.show = !btn.show
  console.log(btn)

  if (btn.show) {
    await nextTick()
    const content = phoneContentRefs.value[index]
    btn.contentHeight = content.scrollHeight
  } else {
    btn.contentHeight = 0
  }
}

const informations = ref([
  {
    title: 'Step 1: Submit an application',
    text: 'Submission of an application (document) for admission to the UMFT University is carried out online through the university website:',
    item: [
      'Go to the UMFT website through a computer or phone (https://umft.uz/reception)',
      'Click the “Submit an application” button for the program you have chosen',
      'Fill out the application form, click Send and confirm with SMS code',
    ],
  },
  {
    title: 'Step 2: Provide necessary documents',
    text: 'Once your application has been accepted, you will need to provide the following documents to the university admissions office:',
    item: [
      'Copy of passport or ID card;',
      'Copy of diploma or school certificate (if you haven`t finished school yet, take a certificate from your school);',
      'Photo of the applicant',
    ],
    firstReminder:
      'When filling out the application, choose the date of the entrance exam that suits you, and do not forget to come to the exam on that day.',
    secondReminder:
      'When your application and documents are accepted by the university admissions office, an SMS will be sent to the phone number indicated in your application.',
  },
  {
    title: 'Step 3: Attend the entrance exam',
    text: 'Admission to the university is carried out on the basis of a test exam. Entrance exams are held every 2 weeks from May to September. The time of participation in the entrance exam is chosen by the applicants when filling out the application.',
    programs: [
      {
        id: 1,
        program: 'Software Engineering',
        main: 'Math - 25 questions',
        additional: 'Informatics - 5 questions',
      },
      {
        id: 2,
        program: 'Infocommunication Engineering',
        main: 'Math - 25 questions',
        additional: 'Informatics - 5 questions',
      },
      {
        id: 3,
        program: 'Finance and financial technology',
        main: 'Math - 25 questions',
        additional: 'Informatics - 5 questions',
      },
      {
        id: 4,
        program: 'Computer Engineering',
        main: 'Math - 25 questions',
        additional: 'Informatics - 5 questions',
      },
      {
        id: 5,
        program: 'Finance and financial technology',
        main: 'Math - 25 questions',
        additional: 'Informatics - 5 questions',
      },
      {
        id: 6,
        program: 'Computer Engineering',
        main: 'Math - 25 questions',
        additional: 'Informatics - 5 questions',
      },
      {
        id: 7,
        program: 'Foreign language and literature',
        main: 'Foreign language - 25 questions',
        additional: 'Language and literature - 5 questions',
      },
      {
        id: 8,
        program: 'Psychology',
        main: 'Language and literature - 23 questions',
        additional: 'Biology - 7 questions',
      },
      {
        id: 9,
        program: 'Infocommunication Engineering',
        main: 'Math - 25 questions',
        additional: 'Informatics - 5 questions',
      },
      {
        id: 10,
        program: 'Infocommunication Engineering',
        main: 'Math - 25 questions',
        additional: 'Informatics - 5 questions',
      },
      {
        id: 11,
        program: 'Infocommunication Engineering',
        main: 'Math - 25 questions',
        additional: 'Informatics - 5 questions',
      },
      {
        id: 12,
        program: 'Infocommunication Engineering',
        main: 'Math - 25 questions',
        additional: 'Informatics - 5 questions',
      },
    ],
    firstAdditional:
      'In total, 30 questions will be asked at the entrance exam, and you will be given 90 minutes to solve them.',
    secondAddinional:
      'Based on the results of the entrance test, you can score a total of 100 points. One version of the test asks 20 easy questions (2.9 points), 7 medium questions (3.9 points) and 3 difficult questions (4.9 points).',
    firstReminder:
      'When filling out the application, choose the date of the entrance exam that suits you, and do not forget to come to the exam on that day.',
  },
  {
    title: 'Step 4: Become a Student',
    text: 'After passing the entrance exams, contracts are drawn up with applicants who entered based on the test results.',
    secondText:
      'The applicant will be admitted to the university after paying at least half (50 percent) of the tuition fee in accordance with the contract.',
    item: [
      'Copy of passport or ID card;',
      'Copy of diploma or school certificate (if you haven`t finished school yet, take a certificate from your school);',
      'Photo of the applicant',
    ],
    firstReminder:
      'When forming an agreement, an SMS message will be sent to the phone number specified in the applicant`s application. You can download the contract at the address indicated in the message and make the payment.',
  },
])

const readMore = ref([
  {
    title: 'Student Team Wins International Robotics Competition',
    date: '10 AUG 2024',
    image: new URL('@/assets/img/people.jpg', import.meta.url).href,
  },
  {
    title: 'Student Team Wins International Robotics Competition',
    date: '10 AUG 2024',
    image: new URL('@/assets/img/people.jpg', import.meta.url).href,
  },
  {
    title: 'Student Team Wins International Robotics Competition',
    date: '10 AUG 2024',
    image: new URL('@/assets/img/people.jpg', import.meta.url).href,
  },
  {
    title: 'Student Team Wins International Robotics Competition',
    date: '10 AUG 2024',
    image: new URL('@/assets/img/people.jpg', import.meta.url).href,
  },
])

const show = ref(false)

import { Bars3CenterLeftIcon } from '@heroicons/vue/24/outline'

import asideAdmission from '@/support/asideAdmission.vue'
</script>
