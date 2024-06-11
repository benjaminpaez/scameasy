import { create } from "zustand";

interface DataState {
  value: string;
  setValue: (value: string) => void;
  error: boolean;
  setError: (error: boolean) => void;
  account: string;
  setAccount: (account: string) => void;
}

export const useData = create<DataState>()((set) => ({
  value: "",
  setValue: (value) => set({ value }),
  error: false,
  setError: (error) => set({ error }),
  account: "",
  setAccount: (account) => set({ account }),
}));
