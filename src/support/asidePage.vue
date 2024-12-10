<template>
  <TransitionRoot as="template" :show="show">
    <Dialog as="div" class="relative z-50" @close="showFalse">
      <TransitionChild
        as="template"
        enter="transition-opacity ease-linear duration-700"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-linear duration-700"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-900/80" />
      </TransitionChild>

      <div class="fixed inset-0 flex justify-end">
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-700 transform"
          enter-from="translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-700 transform"
          leave-from="translate-x-0"
          leave-to="translate-x-full"
        >
          <DialogPanel class="relative flex w-full max-w-xl sm:max-w-xs flex-1 bg-cGreen">
            <TransitionChild
              as="template"
              enter="ease-in-out duration-500"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in-out duration-500"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <button
                class="absolute right-5 top-5 border border-cGray/10 size-10 sm:size-8 sm:top-6 flex items-center justify-center"
                @click="showFalse"
              >
                <span class="sr-only">Close sidebar</span>
                <XMarkIcon class="size-6 text-white" aria-hidden="true" />
              </button>
            </TransitionChild>
            <!-- Sidebar component, swap this element with another sidebar if you like -->
            <section class="h-full p-5 flex flex-col gap-10 w-full">
              <div class="flex items-center gap-3">
                <img src="@/assets/img/logo.svg" alt="" class="object-cover size-10" />
                <img src="@/assets/img/logoWords.svg" alt="" class="w-[90px] object-cover" />
              </div>

              <nav class="flex flex-1 flex-col">
                <ul role="list" class="flex flex-col gap-y-2">
                  <li v-for="item in mainMenu" :key="item.name" @click="showFalse">
                    <router-link
                      :to="{ name: item.name }"
                      :class="[
                        item.name == route.name ? 'bg-cTextGreen' : 'hover:bg-cTextGreen',
                        'group flex gap-x-3 p-2 text-white',
                      ]"
                    >
                      <component :is="item.meta?.icon" class="size-6 shrink-0" aria-hidden="true" />
                      {{ item.meta?.title }}
                    </router-link>
                  </li>
                </ul>
              </nav>
            </section>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script setup>
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
const emit = defineEmits(['asideClose'])
const showFalse = () => {
  emit('asideClose')
}
defineProps(['show'])

import { mainMenu } from '@/router/nav/menu'

import { useRoute } from 'vue-router'
const route = useRoute()
</script>
