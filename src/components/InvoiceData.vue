<template>
  <div
    class="mb-3 flex w-[730px] items-center justify-between rounded-md border-2 border-solid border-transparent bg-white p-4 hover:border-purple-light dark:bg-nav-dark"
  >
    <div class="flex items-center gap-5">
      <div class="flex items-center">
        <span class="text-moon-color">#</span>
        <p class="font-bold text-title-color dark:text-white">
          {{ invoice.id }}
        </p>
      </div>
      <p class="text-moon-color">Due {{ invoice.paymentDue }}</p>
      <h3 class="text-moon-color dark:text-moon-hover">
        {{ invoice.clientName }}
      </h3>
    </div>
    <div class="flex items-center gap-5">
      <p class="text-xl font-bold text-title-color dark:text-white">
        &#163;{{ invoice.total }}
      </p>
      <div
        class="flex min-w-[108px] items-center justify-center gap-2 rounded-md py-2 px-4"
        :class="statusColorBg()"
      >
        <span class="h-2 w-2 rounded-full" :class="statusColorDot()"></span>
        <p class="font-semibold capitalize" :class="statusColor()">
          {{ invoice.status }}
        </p>
      </div>
      <IconArrowRight />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import IconArrowRight from "./icons/IconArrowRight.vue";

const props = defineProps({
  invoice: {
    type: Object,
  },
});

let status = ref(props.invoice.status);

const statusColor = () => {
  switch (status.value) {
    case "paid":
      return "green-text";
    case "pending":
      return "orange-text";
    case "draft":
      return "gray-text";
    default:
      return "orange-text";
  }
};

const statusColorDot = () => {
  switch (status.value) {
    case "paid":
      return "dot-paid";
    case "pending":
      return "dot-pending";
    case "draft":
      return "dot-draft";
    default:
      return "dot-pending";
  }
};

const statusColorBg = () => {
  switch (status.value) {
    case "paid":
      return "paid-bg";
    case "pending":
      return "pending-bg";
    case "draft":
      return "draft-bg";
    default:
      return "pending-bg";
  }
};
</script>
