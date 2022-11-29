<template>
  <div class="absolute inset-0 bg-[#0d0f1780]">
    <form
      class="flex h-full w-[616px] flex-col gap-[48px] rounded-tr-2xl rounded-br-2xl bg-white p-[56px] pl-[159px]"
      @submit.prevent="handleForm"
    >
      <div class="">
        <h1 class="text-2xl font-bold">New Invoice</h1>
      </div>
      <!-- Bill From -->
      <div class="flex flex-col gap-[24px]">
        <h3 class="text-sm font-bold text-purple-base">Bill From</h3>

        <label
          class="flex flex-col gap-[10px] text-xs text-moon-color"
          for="address"
        >
          Street Address
          <input
            class="h-[48px] rounded-md border-[1px] border-moon-color px-4"
            type="text"
            name="street"
            id="address"
            placeholder="street"
          />
        </label>
        <div class="grid grid-cols-3 gap-[10px]">
          <label
            class="flex flex-col gap-[10px] text-xs text-moon-color"
            for="city"
          >
            City
            <input
              class="h-[48px] rounded-md border-[1px] border-moon-color px-4"
              type="text"
              name="city"
              id="city"
              placeholder="city"
            />
          </label>
          <label
            class="flex flex-col gap-[10px] text-xs text-moon-color"
            for="postCode"
          >
            Post Code
            <input
              class="h-[48px] rounded-md border-[1px] border-moon-color px-4"
              type="text"
              name="postCode"
              id="postCode"
              placeholder="post code"
            />
          </label>
          <label
            class="flex flex-col gap-[10px] text-xs text-moon-color"
            for="country"
          >
            Country
            <input
              class="h-[48px] rounded-md border-[1px] border-moon-color px-4"
              type="text"
              name="country"
              id="country"
              placeholder="country"
            />
          </label>
        </div>
      </div>
      <!-- Bill To -->
      <div class="flex flex-col gap-[24px]">
        <h3 class="text-sm font-bold text-purple-base">Bill To</h3>

        <label
          class="flex flex-col gap-[10px] text-xs text-moon-color"
          for="clientName"
        >
          Client's Name
          <input
            class="h-[48px] rounded-md border-[1px] border-moon-color px-4"
            type="text"
            name="clientName"
            id="clientName"
            placeholder="client name"
          />
        </label>
        <label
          class="flex flex-col gap-[10px] text-xs text-moon-color"
          for="clientEmail"
        >
          Client's Email
          <input
            class="h-[48px] rounded-md border-[1px] border-moon-color px-4"
            type="text"
            name="clientEmail"
            id="clientEmail"
            placeholder="client email"
          />
        </label>
        <label
          class="flex flex-col gap-[10px] text-xs text-moon-color"
          for="clientEmail"
        >
          Street Address
          <input
            class="h-[48px] rounded-md border-[1px] border-moon-color px-4"
            type="text"
            name="clientAddress"
            id="clientAddress"
            placeholder="client address"
          />
        </label>
        <div class="grid grid-cols-3 gap-[10px]">
          <label
            class="flex flex-col gap-[10px] text-xs text-moon-color"
            for="clientCity"
          >
            City
            <input
              class="h-[48px] rounded-md border-[1px] border-moon-color px-4"
              type="text"
              name="clientCity"
              id="clientCity"
              placeholder="client city"
            />
          </label>
          <label
            class="flex flex-col gap-[10px] text-xs text-moon-color"
            for="clientPostCode"
          >
            Post Code
            <input
              class="h-[48px] rounded-md border-[1px] border-moon-color px-4"
              type="text"
              name="clientPostCode"
              id="clientPostCode"
              placeholder="post code"
            />
          </label>
          <label
            class="flex flex-col gap-[10px] text-xs text-moon-color"
            for="clientCountry"
          >
            Country
            <input
              class="h-[48px] rounded-md border-[1px] border-moon-color px-4"
              type="text"
              name="clientCountry"
              id="clientCountry"
              placeholder="client country"
            />
          </label>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
const handleForm = () => {
  console.log("working");
};
</script>

<style scoped></style>
