import { defineStore } from "pinia";

export const useInvoiceStore = defineStore("invoice", {
  state: () => ({
    invoices: [],
    filteredInvoices: [],
    formOpen: false,
    filterOpen: false,
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
    async getFilteredInvoices() {
      this.filteredInvoices = this.invoices;
    },
  },
  actions: {
    toggleForm() {
      this.formOpen = !this.formOpen;
    },
    toggleFilter() {
      this.filterOpen = !this.filterOpen;
    },
    // set filter
    setFilter(checkedCheckboxes) {
      let state = this.invoices.filter((invoice) =>
        checkedCheckboxes.includes(invoice.status)
      );
      this.filteredInvoices = [...state];
    },
    // set initial state
    setFilteredInvoices() {
      this.filteredInvoices = this.invoices;
    },
  },
});
