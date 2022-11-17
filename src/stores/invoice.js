import { defineStore } from "pinia";

export const useInvoiceStore = defineStore("invoice", {
  state: () => ({
    invoices: [],
    formOpen: false,
    isLoading: false,
  }),
  getters: {
    async getInvoices() {
      this.isLoading = true;
      const res = await fetch("http://localhost:3000/invoices");
      const data = await res.json();
      this.invoices = data;
      this.isLoading = false;
    },
  },
  actions: {
    toggleForm() {
      this.formOpen = !this.formOpen;
    },
  },
});
