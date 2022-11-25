import { defineStore } from "pinia";

export const useInvoiceStore = defineStore("invoice", {
  state: () => ({
    invoices: [],
    filteredInvoices: [],
    currentInvoice: {},
    formOpen: false,
    filterOpen: false,
    isLoading: false,
  }),
  getters: {},
  actions: {
    async getInvoices() {
      this.isLoading = true;
      const res = await fetch("http://localhost:3000/invoices");
      const data = await res.json();
      this.invoices = data;
      this.isLoading = false;
      this.filteredInvoices = this.invoices;
    },
    async getInvoice(id) {
      const res = await fetch(`http://localhost:3000/invoices/${id}`);
      const data = await res.json();
      this.currentInvoice = data;
    },
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
