import { create } from "zustand";

// Define the shape of your store
export type FormState = {
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
export const useFormStore = create<FormState>((set) => ({
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
