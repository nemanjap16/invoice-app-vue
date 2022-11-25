<template>
  <div>
    <button class="btn text-xs font-semibold" :class="btnClass">
      {{ name }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
  },
  btnClass: {
    type: String,
  },
});
</script>
