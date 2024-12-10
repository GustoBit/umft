<template>
  <TransitionRoot as="template" :show="show">
    <Dialog as="div" class="relative z-50" @close="showFalse">
      <TransitionChild
        as="template"
        enter="transition-opacity ease-linear duration-500"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-linear duration-500"
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
          <DialogPanel class="relative flex w-full max-w-xs flex-1 bg-cGreen">
            <TransitionChild
              as="template"
              enter="ease-in-out duration-500"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in-out duration-500"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div
                class="absolute right-5 top-5 border border-cGray/10 size-10 flex items-center justify-center"
              >
                <button type="button" class="" @click="showFalse">
                  <span class="sr-only">Close sidebar</span>
                  <XMarkIcon class="size-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </TransitionChild>
            <!-- Sidebar component, swap this element with another sidebar if you like -->
              <slot />
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
</script>
