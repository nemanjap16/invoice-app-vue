import { defineStore } from "pinia";

export const useInvoiceStore = defineStore("invoice", {
  state: () => ({
    invoices: [],
    filteredInvoices: [],
    currentInvoice: {},
    formOpen: false,
    modalOpen: false,
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
    toggleModal() {
      this.modalOpen = !this.modalOpen;
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
    async deleteInvoice(id) {
      this.filteredInvoices = this.filteredInvoices.filter(
        (invoice) => invoice.id !== id
      );
      try {
        const res = await fetch(`http://localhost:3000/invoices/${id}`, {
          method: "DELETE",
        });

        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
    async markAsPaid(id) {
      const invoice = this.filteredInvoices.find((el) => el.id === id);
      invoice.status = "paid";
      this.currentInvoice.status = "paid";

      try {
        const res = await fetch(`http://localhost:3000/invoices/${id}`, {
          method: "PATCH",
          body: JSON.stringify({ status: "paid" }),
          headers: { "Content-Type": "application/json" },
        });
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
