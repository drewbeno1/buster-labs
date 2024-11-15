<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

import Hero from './components/Hero.vue'
</script>

<template>
  <div class="relative overflow-hidden">
    <Popover as="header" class="relative">
      <div class="mt-6 relative mx-auto flex max-w-7xl items-center justify-between px-6" aria-label="Global">
        <div class="flex flex-1 items-center">
          <div class="flex w-full items-center md:w-auto">
            <a href="/">
              <span class="sr-only">Buster Labs</span>
              <img class="h-8 w-auto sm:h-12" src="./assets/logo.png" alt="" />
            </a>
            <div class="ml-6 font-mono font-bold text-white text-3xl">Buster Labs</div>
          </div>
        </div>
      </div>
      <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
        <PopoverPanel focus class="absolute inset-x-0 top-0 z-10 origin-top transform p-2 transition md:hidden">
          <div class="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black/5">
            <div class="flex items-center justify-between px-5 pt-4">
              <div>
                <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="" />
              </div>
              <div class="-mr-2">
                <PopoverButton class="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                  <span class="absolute -inset-0.5" />
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="size-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="pb-6 pt-5">
              <div class="space-y-1 px-2">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
              </div>
              <div class="mt-6 px-5">
                <a href="#" class="block w-full rounded-md bg-indigo-600 px-4 py-3 text-center font-medium text-white shadow hover:bg-indigo-700">Start free trial</a>
              </div>
              <div class="mt-6 px-5">
                <p class="text-center text-base font-medium text-gray-500">Existing customer? <a href="#" class="text-gray-900 hover:underline">Login</a></p>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>

    <Hero />

  </div>
</template>
