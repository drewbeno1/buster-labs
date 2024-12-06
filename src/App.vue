<script setup>
</script>

<template>
  <div class="flex flex-col mx-12 my-6 space-y-4 lg:space-y-20">
    <div class="flex flex-row items-center space-x-4">
      <router-link to="/">
        <img class="cursor-pointer h-8 w-auto sm:h-12" src="./assets/logo.png" alt="" />
      </router-link>
      <div class="text-white font-bold text-4xl">
        Buster Labs
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
