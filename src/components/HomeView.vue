<script setup>
import { BookOpenIcon, CircleStackIcon, } from '@heroicons/vue/20/solid'

const cards = [
  {
    name: 'File Storage',
    icon: CircleStackIcon,
    href: '/storage',
  },
  {
    name: 'Blog',
    icon: BookOpenIcon,
    href: '/blog',
  },
]
</script>


<template>
  <div class="pt-10 sm:pt-8 lg:overflow-hidden lg:pb-14 lg:pt-0">
    <div class="mx-auto max-w-7xl lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8">
        <div class="mx-auto max-w-md px-6 sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
          <div class="lg:py-24">
            <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:mt-6 xl:text-6xl">
              <span class="block">Web Hosting</span>
              <span class="block text-indigo-400">For Fun</span>
            </h1>
            <p class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">Click below for more information!</p>
            <div v-for="card in cards" :key="card.name" class="mt-3 sm:mt-4 flex flex-col space-y-2">
              <router-link :to="card.href">
                <div class="rounded-xl bg-white/5 hover:bg-black cursor-pointer p-6 ring-1 ring-inset ring-white/10 flex flex-row space-x-3">
                  <component :is="card.icon" class="h-7 w-5 flex-none text-indigo-400" aria-hidden="true" />
                  <h3 class="font-semibold text-white">{{ card.name }}</h3>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="-mb-16 mt-12 sm:-mb-48 lg:relative lg:m-0">
          <div class="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0">
            <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
            <img class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="https://tailwindui.com/plus/img/component-images/cloud-illustration-indigo-400.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
