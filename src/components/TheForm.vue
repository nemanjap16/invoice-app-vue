<template>
  <div class="absolute inset-0 bg-[#0d0f1780]">
    <form
      class="h-full w-[730px] rounded-tr-2xl rounded-br-2xl bg-white"
      @submit.prevent="handleForm"
    ></form>
  </div>
</template>

<script setup>
const handleForm = () => {
  console.log("working");
};
</script>

<style scoped></style>
