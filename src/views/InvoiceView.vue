<template>
  <div class="flex">
    <TheNavbar />
    <div class="mx-auto mt-[64px] flex w-[730px] flex-col">
      <button
        class="mb-[32px] flex items-center gap-6"
        @click="
          router.back();
          store.setFilteredInvoices();
        "
        aria-label="Go back"
      >
        <span><ArrowLeft /></span>
        <p class="text-sm font-bold dark:text-white">Go back</p>
      </button>
      <div
        class="mb-[24px] flex items-center justify-between rounded-lg bg-white px-[32px] py-[24px] dark:bg-nav-dark"
      >
        <div class="flex items-center gap-5">
          <span class="text-xs text-moon-color dark:text-white">Status</span>
          <StatusBtn :invoice="store.currentInvoice" />
        </div>
        <div class="flex gap-2">
          <TheButton name="Edit" btnClass="edit" />
          <TheButton name="Delete" btnClass="delete" />
          <TheButton name="Mark as Paid" btnClass="paid" />
        </div>
      </div>
      <div
        class="min-h-[630px] w-[730px] rounded-lg bg-white p-[48px] dark:bg-nav-dark"
      >
        <div class="flex justify-between">
          <div class="flex flex-col gap-2">
            <p class="font-bold dark:text-white">
              <span class="text-moon-color dark:text-muted-color">#</span
              >{{ store.currentInvoice.id }}
            </p>
            <p class="text-xs text-moon-color dark:text-white">
              {{ store.currentInvoice.description }}
            </p>
          </div>
          <div
            class="mb-[22px] flex flex-col gap-1 text-right text-xs text-moon-color dark:text-white"
          >
            <p>{{ store.currentInvoice.senderAddress.street }}</p>
            <p>{{ store.currentInvoice.senderAddress.city }}</p>
            <p>{{ store.currentInvoice.senderAddress.postCode }}</p>
            <p>{{ store.currentInvoice.senderAddress.country }}</p>
          </div>
        </div>
        <div class="flex dark:text-white">
          <div class="flex w-1/3 flex-col justify-between">
            <div class="flex flex-col gap-2">
              <p class="text-sm text-moon-color dark:text-white">
                Invoice Date
              </p>
              <p class="text-base font-bold">
                {{ formatDate(store.currentInvoice.createdAt) }}
              </p>
            </div>
            <div class="flex flex-col gap-2">
              <p class="text-sm text-moon-color dark:text-white">Payment Due</p>
              <p class="text-base font-bold">
                {{ formatDate(store.currentInvoice.paymentDue) }}
              </p>
            </div>
          </div>
          <div class="flex w-full justify-evenly">
            <div class="flex flex-col gap-2">
              <div class="flex flex-col gap-2">
                <p class="text-sm text-moon-color dark:text-white">Bill To</p>
                <p class="text-base font-bold">
                  {{ store.currentInvoice.clientName }}
                </p>
              </div>
              <div
                class="flex flex-col gap-1 text-left text-xs text-moon-color dark:text-white"
              >
                <p>{{ store.currentInvoice.clientAddress.street }}</p>
                <p>{{ store.currentInvoice.clientAddress.city }}</p>
                <p>{{ store.currentInvoice.clientAddress.postCode }}</p>
                <p>{{ store.currentInvoice.clientAddress.country }}</p>
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <p class="text-sm text-moon-color dark:text-white">Sent To</p>
              <p class="text-base font-bold">
                {{ store.currentInvoice.clientEmail }}
              </p>
            </div>
          </div>
          <!-- invoice details & total -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import ArrowLeft from "../components/icons/ArrowLeft.vue";
import StatusBtn from "../components/StatusBtn.vue";
import TheButton from "../components/TheButton.vue";
import TheNavbar from "../components/TheNavbar.vue";
import { useInvoiceStore } from "../stores/invoice";
import { formatDate } from "../utilities/FormatDate";

let router = useRouter();
const store = useInvoiceStore();
</script>
