<template>
  <div v-if="store.formOpen" class="absolute inset-0 z-10 bg-[#0d0f1780]">
    <form
      class="flex h-full w-[730px] flex-col gap-[48px] overflow-y-scroll rounded-tr-2xl rounded-br-2xl bg-white p-[56px] pl-[159px]"
      @submit.prevent="handleForm(invoice)"
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
            v-model="invoice.senderAddress.street"
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
              v-model="invoice.senderAddress.city"
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
              v-model="invoice.senderAddress.postCode"
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
              v-model="invoice.senderAddress.country"
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
            v-model="invoice.clientName"
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
            v-model="invoice.clientEmail"
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
            v-model="invoice.clientAddress.street"
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
              v-model="invoice.clientAddress.city"
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
              v-model="invoice.clientAddress.postCode"
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
              v-model="invoice.clientAddress.country"
            />
          </label>
        </div>
      </div>
      <!-- invoice date -->
      <div class="grid grid-cols-2 gap-[10px]">
        <label
          class="flex flex-col gap-[10px] text-xs text-moon-color"
          for="invoiceDate"
        >
          Invoice Date
          <input
            class="h-[48px] rounded-md border-[1px] border-moon-color px-4"
            type="date"
            name="invoiceDate"
            id="invoiceDate"
            v-model="invoice.createdAt"
          />
        </label>
        <label
          class="flex flex-col gap-[10px] text-xs text-moon-color"
          for="PaymentTerms"
        >
          Payment Terms
          <select
            class="h-[48px] rounded-md border-[1px] border-moon-color px-4"
            name="paymentTerms"
            id="paymentTerms"
            v-model="invoice.paymentTerms"
          >
            <optgroup>
              <option value="1">Net 1 Day</option>
              <option value="7">Net 7 Days</option>
              <option value="15">Net 15 Days</option>
              <option value="30">Net 30 Days</option>
            </optgroup>
          </select>
        </label>
      </div>
      <div>
        <h2 class="text-md mb-[16px] font-bold text-muted-color">Item List</h2>
        <div>
          <div
            v-for="(item, i) in invoice.items"
            class="mb-[24px] grid w-full grid-cols-[200px_50px_90px_90px_30px] gap-[10px]"
            :key="i"
          >
            <label
              class="flex flex-col gap-[10px] text-xs text-moon-color"
              for="itemName"
            >
              Item Name
              <input
                class="h-[48px] rounded-md border-[1px] border-moon-color px-4"
                type="text"
                name="itemName"
                id="itemName"
                v-model="invoice.items[i].name"
              />
            </label>
            <label
              class="flex flex-col gap-[10px] text-xs text-moon-color"
              for="ItemQty"
            >
              QTY.
              <input
                class="h-[48px] rounded-md border-[1px] border-moon-color px-4"
                autocomplete="of"
                min="1"
                inputmode="numeric"
                type="number"
                name="itemQty"
                id="itemQty"
                v-model.number="invoice.items[i].quantity"
              />
            </label>
            <label
              class="flex flex-col gap-[10px] text-xs text-moon-color"
              for="itemPrice"
            >
              Price
              <input
                class="h-[48px] rounded-md border-[1px] border-moon-color px-4"
                autocomplete="of"
                min="1"
                inputmode="numeric"
                type="number"
                name="itemPrice"
                id="itemPrice"
                v-model.number="invoice.items[i].price"
              />
            </label>
            <label
              class="flex flex-col gap-[10px] text-xs text-moon-color"
              for="itemTotal"
            >
              Total
              <div
                class="grid h-[48px] place-content-center rounded-md border-[1px] border-moon-color px-4"
                type="number"
                name="itemTotal"
                id="itemTotal"
              >
                {{ multiple(item.price, item.quantity, i) }}
              </div>
            </label>
            <button
              type="button"
              aria-label="Delete item"
              class="grid place-content-center pt-6 text-xs"
            >
              <IconDelete
                class="text-moon-color hover:text-red-500"
                @click="deleteItem(i)"
              />
            </button>
          </div>
        </div>
        <button
          type="button"
          aria-label="Add new item"
          class="h-[48px] w-full rounded-full bg-[#DFE3FA] text-sm font-bold text-[#7E88C3]"
          @click="addItem"
        >
          + Add New Item
        </button>
      </div>
      <div class="flex h-[100px] w-full justify-end gap-6">
        <TheButton
          name="Cancel"
          btnClass="cancel"
          @click="store.toggleForm()"
        />
        <TheButton name="Save Changes" btnClass="paid" />
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useInvoiceStore } from "../stores/invoice";
import TheButton from "./TheButton.vue";
import IconDelete from "./icons/IconDelete.vue";

const store = useInvoiceStore();

const handleForm = (invoice) => {
  console.log(invoice);
};

const multiple = (a, b, i) => {
  let total = parseFloat(a * b).toFixed(2);
  invoice.items[i].total = Number(total);
  return total;
};

const parse = (num) => {
  return parseFloat(num).toFixed(2);
};

const deleteItem = (i) => {
  invoice.items.splice(i, 1);
};

const addItem = () => {
  invoice.items.push({
    name: "",
    quantity: 1,
    price: parse(1),
    total: parse(1),
  });
};

const invoice = reactive({
  id: "XM9141",
  createdAt: "2021-08-21",
  paymentDue: "2021-09-20",
  description: "Graphic Design",
  paymentTerms: 30,
  clientName: "Alex Grim",
  clientEmail: "alexgrim@mail.com",
  status: "paid",
  senderAddress: {
    street: "19 Union Terrace",
    city: "London",
    postCode: "E1 3EZ",
    country: "United Kingdom",
  },
  clientAddress: {
    street: "84 Church Way",
    city: "Bradford",
    postCode: "BD1 9PB",
    country: "United Kingdom",
  },
  items: [
    {
      name: "Banner Design",
      quantity: 1,
      price: parse(156),
      total: 156,
    },
    {
      name: "Email Design",
      quantity: 2,
      price: parse(200),
      total: 400,
    },
  ],
  total: 556,
});
</script>

<style scoped></style>
