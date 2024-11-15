<script setup>
import { CodeBracketSquareIcon, CircleStackIcon, PhotoIcon, VideoCameraIcon } from '@heroicons/vue/20/solid'
import TrustedBy from './TrustedBy.vue';

const cards = [
  {
    name: 'Applications',
    icon: CodeBracketSquareIcon,
  },
  {
    name: 'Data',
    icon: CircleStackIcon,
  },
  {
    name: 'Photo',
    icon: PhotoIcon,
  },
  {
    name: 'Video',
    icon: VideoCameraIcon,
  },
]

</script>


<template>
  <main>
    <div class="pt-10 sm:pt-8 lg:overflow-hidden lg:pb-14 lg:pt-0">
      <div class="mx-auto max-w-7xl lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-8">
          <div class="mx-auto max-w-md px-6 sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
            <div class="lg:py-24">
              <div class="hidden sm:mb-5 sm:flex sm:justify-center lg:justify-start">
                <a href="#" class="flex items-center rounded-full bg-black p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base">
                  <span class="rounded-full bg-indigo-500 px-3 py-0.5 text-sm font-semibold text-white">Onboarding Now</span>
                  <span class="ml-4 text-sm">Let's Get in Touch!</span>
                  <ChevronRightIcon class="ml-2 size-5 text-gray-500" aria-hidden="true" />
                </a>
              </div>
              <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:mt-6 xl:text-6xl">
                <span class="block">Web Hosting</span>
                <span class="block text-indigo-400">For Small Businesses</span>
              </h1>
              <p class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">Stuck in between Big Tech's grips and the complication of self hosting? That's where we come in. Buster Labs is the local, affordable web hosting solution that you can trust.</p>
              <p class="mt-1 text-base text-gray-300 sm:mt-5 sm:text-2xl lg:text-xl xl:text-2xl font-semibold">Service Includes:</p>
              <div class="mt-3 sm:mt-4 grid grid-cols-2 gap-4">
                <div v-for="card in cards" :key="card.name" class="rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10 flex flex-row space-x-3">
                  <component :is="card.icon" class="h-7 w-5 flex-none text-indigo-400" aria-hidden="true" />
                  <h3 class="font-semibold text-white">{{ card.name }}</h3>
                </div>
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
      <TrustedBy />
    </div>
  </main>
</template>
