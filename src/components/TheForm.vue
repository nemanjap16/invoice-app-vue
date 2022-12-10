<template>
  <div v-if="store.formOpen" class="absolute inset-0 z-10 bg-[#0d0f1780]">
    <form
      class="flex h-full w-[730px] flex-col gap-[48px] overflow-y-scroll rounded-tr-2xl rounded-br-2xl bg-white p-[56px] pl-[159px]"
      @submit.prevent
    >
      <div class="">
        <h1 v-if="store.editMode" class="text-2xl font-bold">
          Edit <span class="text-moon-color">#</span>{{ invoice.id }}
        </h1>
        <h1 v-else class="text-2xl font-bold">New Invoice</h1>
      </div>
      <!-- Bill From -->
      <div class="flex flex-col gap-[24px]">
        <h3 class="text-sm font-bold text-purple-base">Bill From</h3>
        <div class="flex flex-col gap-[10px] text-xs text-moon-color">
          <div class="flex justify-between">
            <label class="text-xs" for="address"> Street Address </label>
            <span class="text-[10px] text-red-500">{{
              errors.senderAddress
            }}</span>
          </div>
          <input
            class="h-[48px] rounded-md border-[1px] border-moon-color px-4"
            type="text"
            name="street"
            id="address"
            v-model.trim.trim="invoice.senderAddress.street"
            @keyup="validate('senderAddress', invoice.senderAddress.street)"
            @blur="validate('senderAddress', invoice.senderAddress.street)"
          />
        </div>
        <div class="grid grid-cols-3 gap-[10px]">
          <div class="flex flex-col gap-[10px] text-xs text-moon-color">
            <div class="flex justify-between">
              <label class="text-xs" for="city"> City </label>
              <span class="text-[10px] text-red-500">{{
                errors.senderCity
              }}</span>
            </div>
            <input
              class="h-[48px] rounded-md border-[1px] border-moon-color px-4"
              type="text"
              name="city"
              id="city"
              v-model.trim="invoice.senderAddress.city"
              @keyup="validate('senderCity', invoice.senderAddress.city)"
              @blur="validate('senderCity', invoice.senderAddress.city)"
            />
          </div>
          <div class="flex flex-col gap-[10px] text-xs text-moon-color">
            <div class="flex justify-between">
              <label class="text-xs" for="postCode"> Post Code </label>
              <span class="text-[10px] text-red-500">{{
                errors.senderPostCode
              }}</span>
            </div>
            <input
              class="h-[48px] rounded-md border-[1px] border-moon-color px-4"
              type="text"
              name="postCode"
              id="postCode"
              v-model.trim="invoice.senderAddress.postCode"
              @keyup="
                validate('senderPostCode', invoice.senderAddress.postCode)
              "
              @blur="validate('senderPostCode', invoice.senderAddress.postCode)"
            />
          </div>
          <div class="flex flex-col gap-[10px] text-xs text-moon-color">
            <div class="flex justify-between">
              <label class="text-xs" for="country"> Country </label>
              <span class="text-[10px] text-red-500">{{
                errors.senderCountry
              }}</span>
            </div>
            <input
              class="h-[48px] rounded-md border-[1px] border-moon-color px-4"
              type="text"
              name="country"
              id="country"
              v-model.trim="invoice.senderAddress.country"
              @keyup="validate('senderCountry', invoice.senderAddress.country)"
              @blur="validate('senderCountry', invoice.senderAddress.country)"
            />
          </div>
        </div>
      </div>
      <!-- Bill To -->
      <div class="flex flex-col gap-[24px]">
        <h3 class="text-sm font-bold text-purple-base">Bill To</h3>
        <div class="flex flex-col gap-[10px] text-xs text-moon-color">
          <div class="flex justify-between">
            <label class="text-xs" for="clientName"> Client's Name </label>
            <span class="text-[10px] text-red-500">{{
              errors.clientName
            }}</span>
          </div>
          <input
            class="h-[48px] rounded-md border-[1px] border-moon-color px-4"
            type="text"
            name="clientName"
            id="clientName"
            v-model.trim="invoice.clientName"
            @keyup="validate('clientName', invoice.clientName)"
            @blur="validate('clientName', invoice.clientName)"
          />
        </div>
        <div class="flex flex-col gap-[10px] text-xs text-moon-color">
          <div class="flex justify-between">
            <label class="text-xs" for="clientEmail"> Client's Email </label>
            <span class="text-[10px] text-red-500">{{
              errors.clientEmail
            }}</span>
          </div>
          <input
            class="h-[48px] rounded-md border-[1px] border-moon-color px-4"
            type="text"
            name="clientEmail"
            id="clientEmail"
            v-model.trim="invoice.clientEmail"
            @keyup="validate('clientEmail', invoice.clientEmail)"
            @blur="validate('clientEmail', invoice.clientEmail)"
          />
        </div>
        <div class="flex flex-col gap-[10px] text-xs text-moon-color">
          <div class="flex justify-between">
            <label class="text-xs" for="clientEmail"> Street Address </label>
            <span class="text-[10px] text-red-500">{{
              errors.clientAddress
            }}</span>
          </div>
          <input
            class="h-[48px] rounded-md border-[1px] border-moon-color px-4"
            type="text"
            name="clientAddress"
            id="clientAddress"
            v-model.trim="invoice.clientAddress.street"
            @keyup="validate('clientAddress', invoice.clientAddress.street)"
            @blur="validate('clientAddress', invoice.clientAddress.street)"
          />
        </div>
        <div class="grid grid-cols-3 gap-[10px]">
          <div class="flex flex-col gap-[10px] text-xs text-moon-color">
            <div class="flex justify-between">
              <label class="text-xs" for="clientCity"> City </label>
              <span class="text-[10px] text-red-500">{{
                errors.clientCity
              }}</span>
            </div>
            <input
              class="h-[48px] rounded-md border-[1px] border-moon-color px-4"
              type="text"
              name="clientCity"
              id="clientCity"
              v-model.trim="invoice.clientAddress.city"
              @keyup="validate('clientCity', invoice.clientAddress.city)"
              @blur="validate('clientCity', invoice.clientAddress.city)"
            />
          </div>
          <div class="flex flex-col gap-[10px] text-xs text-moon-color">
            <div class="flex justify-between">
              <label class="text-xs" for="clientPostCode"> Post Code </label>
              <span class="text-[10px] text-red-500">{{
                errors.clientPostCode
              }}</span>
            </div>
            <input
              class="h-[48px] rounded-md border-[1px] border-moon-color px-4"
              type="text"
              name="clientPostCode"
              id="clientPostCode"
              v-model.trim="invoice.clientAddress.postCode"
              @keyup="
                validate('clientPostCode', invoice.clientAddress.postCode)
              "
              @blur="validate('clientPostCode', invoice.clientAddress.postCode)"
            />
          </div>
          <div class="flex flex-col gap-[10px] text-xs text-moon-color">
            <div class="flex justify-between">
              <label class="text-xs" for="clientCountry"> Country </label>

              <span class="text-[10px] text-red-500">{{
                errors.clientCountry
              }}</span>
            </div>
            <input
              class="h-[48px] rounded-md border-[1px] border-moon-color px-4"
              type="text"
              name="clientCountry"
              id="clientCountry"
              v-model.trim="invoice.clientAddress.country"
              @keyup="validate('clientCountry', invoice.clientAddress.country)"
              @blur="validate('clientCountry', invoice.clientAddress.country)"
            />
          </div>
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
            placeholder="dd/mm/yyyy"
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
            v-model.trim="invoice.paymentTerms"
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
            <div class="flex flex-col gap-[10px] text-xs text-moon-color">
              <div class="flex justify-between">
                <label class="text-xs" for="itemName"> Item Name </label>
                <span class="text-[10px] text-red-500">{{
                  errors[`itemName${i}`]
                }}</span>
              </div>
              <input
                class="h-[48px] rounded-md border-[1px] border-moon-color px-4"
                type="text"
                name="itemName"
                id="itemName"
                v-model.trim="invoice.items[i].name"
                @keyup="validate(`itemName${i}`, invoice.items[i].name)"
                @blur="validate(`itemName${i}`, invoice.items[i].name)"
              />
            </div>
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
                v-model.trim.number="invoice.items[i].quantity"
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
                v-model.trim.number="invoice.items[i].price"
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
      <div>
        <div
          v-if="store.editMode"
          class="flex h-[100px] w-full justify-end gap-6"
        >
          <TheButton
            name="Cancel"
            btnClass="cancel"
            @click="store.toggleForm()"
          />
          <TheButton
            name="Save Changes"
            btnClass="paid"
            @click="handleForm(invoice)"
          />
        </div>
        <div v-else class="flex items-center justify-between">
          <div>
            <TheButton
              name="Discard"
              btnClass="cancel"
              @click="store.toggleForm()"
            />
          </div>
          <div class="flex items-center gap-6">
            <TheButton name="Save as Draft" btnClass="draft" />
            <TheButton
              name="Save & Send"
              btnClass="paid"
              @click="addNewInvoice(invoice)"
            />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useInvoiceStore } from "../stores/invoice";
import TheButton from "./TheButton.vue";
import IconDelete from "./icons/IconDelete.vue";
import { v4 as uuidv4 } from "uuid";
import useFormValidation from "@/modules/useFormValidation.js";

const store = useInvoiceStore();

const invoice = reactive({
  id: store.currentInvoice.id || uuidv4(),
  createdAt:
    store.currentInvoice.createdAt || new Date().toISOString().split("T")[0],
  paymentDue: store.currentInvoice.paymentDue,
  description: store.currentInvoice.description,
  paymentTerms: store.currentInvoice.paymentTerms,
  clientName: store.currentInvoice.clientName,
  clientEmail: store.currentInvoice.clientEmail,
  status: store.currentInvoice.status || "pending",
  senderAddress: {
    street: store.currentInvoice.senderAddress.street || "19 Union Terrace",
    city: store.currentInvoice.senderAddress.city || "London",
    postCode: store.currentInvoice.senderAddress.postCode || "E1 3EZ",
    country: store.currentInvoice.senderAddress.country || "United Kingdom",
  },
  clientAddress: {
    street: store.currentInvoice.clientAddress.street,
    city: store.currentInvoice.clientAddress.city,
    postCode: store.currentInvoice.clientAddress.postCode,
    country: store.currentInvoice.clientAddress.country,
  },
  items: store.currentInvoice.items,
  total: store.currentInvoice.total,
});

// form field validation
const { validateEmptyField, errors } = useFormValidation();
const validate = (fieldName, fieldValue) => {
  return validateEmptyField(fieldName, fieldValue);
};

let validForm = false;
const addNewInvoice = (invoice) => {
  validForm = true;

  for (const [key, value] of Object.entries(invoice)) {
    if (value === "") {
      validate(key, value);
      validForm = false;
    }
    if (key === "description" || key === "paymentDue") {
      validForm = true;
    }
  }

  for (const [key, value] of Object.entries(invoice.senderAddress)) {
    if (value === "") {
      if (key === "street") {
        validate("senderAddress", value);
      }
      if (key === "country") {
        validate("senderCountry", value);
      }
      if (key === "city") {
        validate("senderCity", value);
      }
      if (key === "postCode") {
        validate("senderPostCode", value);
      }
      validForm = false;
    }
  }

  for (const [key, value] of Object.entries(invoice.clientAddress)) {
    if (value === "") {
      if (key === "street") {
        validate("clientAddress", value);
      }
      if (key === "country") {
        validate("clientCountry", value);
      }
      if (key === "city") {
        validate("clientCity", value);
      }
      if (key === "postCode") {
        validate("clientPostCode", value);
      }
      validForm = false;
    }
  }

  invoice.items.map((item, i) => {
    if (item.name === "") {
      validate(`itemName${i}`, item.name);
      validForm = false;
    }
  });

  if (validForm) {
    store.addNewInvoice(invoice);
  }
};

const handleForm = (invoice) => {
  store.editInvoice(invoice);
};

const multiple = (a, b, i) => {
  let total = parseFloat(a * b).toFixed(2);
  invoice.items[i].total = Number(total);
  grandTotal();
  return total;
};

const grandTotal = () => {
  let sum = 0;
  invoice.items.forEach((el) => {
    sum += el.total;
  });
  store.currentInvoice.total = sum;
  invoice.total = sum;
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
</script>

<style scoped></style>
