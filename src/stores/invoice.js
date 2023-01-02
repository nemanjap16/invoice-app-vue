import { defineStore } from "pinia";

export const useInvoiceStore = defineStore("invoice", {
  state: () => ({
    invoices: [],
    filteredInvoices: [],
    paidInvoices: [],
    pendingInvoices: [],
    draftInvoices: [],
    currentInvoice: {},
    editMode: false,
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
    setEditModeTrue() {
      this.editMode = true;
    },
    setEditModeFalse() {
      this.editMode = false;
      this.currentInvoice = {
        id: "",
        createdAt: "",
        paymentDue: "",
        description: "",
        paymentTerms: 1,
        clientName: "",
        clientEmail: "",
        status: "",
        senderAddress: {
          street: "",
          city: "",
          postCode: "",
          country: "",
        },
        clientAddress: {
          street: "",
          city: "",
          postCode: "",
          country: "",
        },
        items: [
          {
            name: "",
            quantity: 1,
            price: 1,
            total: 1,
          },
        ],
        total: 1,
      };
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
    setPaidInvoices(paid) {
      this.paidInvoices = paid;
    },
    setPendingInvoices(pending) {
      this.pendingInvoices = pending;
    },
    setDraftInvoices(draft) {
      this.draftInvoices = draft;
    },
    async deleteInvoice(id) {
      this.filteredInvoices = this.filteredInvoices.filter(
        (invoice) => invoice.id !== id
      );
      this.invoices = this.filteredInvoices;
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
    async editInvoice(invoice) {
      this.filteredInvoices[
        this.filteredInvoices.findIndex((inv) => inv.id === invoice.id)
      ] = invoice;

      try {
        const res = await fetch(
          `http://localhost:3000/invoices/${invoice.id}`,
          {
            method: "PATCH",
            body: JSON.stringify(invoice),
            headers: { "Content-Type": "application/json" },
          }
        );
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
    async addNewInvoice(invoice) {
      this.filteredInvoices.push(invoice);
      this.invoices = this.filteredInvoices;
      try {
        const res = await fetch(`http://localhost:3000/invoices/`, {
          method: "POST",
          body: JSON.stringify(invoice),
          headers: { "Content-Type": "application/json" },
        });
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
  persist: true,
});
