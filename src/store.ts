import { create } from "zustand";

// Define the shape of your store
type Store = {
  cardHolderName: string;
  cardNumber: string;
  ExpirationMonth: string;
  ExpirationYear: string;
  Cvc: string;
  setCardHolderName: (value: string) => void;
  setCardNumber: (value: string) => void;
  setExpirationMonth: (value: string) => void;
  setExpirationYear: (value: string) => void;
  setCvc: (value: string) => void;
  restoreDefaultValues: () => void;
};

// Define your store
export const useFormStore = create<Store>((set) => ({
  cardHolderName: "",
  cardNumber: "",
  ExpirationMonth: "",
  ExpirationYear: "",
  Cvc: "",
  setCardHolderName: (value) => set({ cardHolderName: value }),
  setCardNumber: (value) => set({ cardNumber: value }),
  setExpirationMonth: (value) => set({ ExpirationMonth: value }),
  setExpirationYear: (value) => set({ ExpirationYear: value }),
  setCvc: (value) => set({ Cvc: value }),
  restoreDefaultValues: () =>
    set({
      cardHolderName: "",
      cardNumber: "",
      ExpirationMonth: "",
      ExpirationYear: "",
      Cvc: "",
    }),
}));
