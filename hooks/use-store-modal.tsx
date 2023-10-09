import { create } from "zustand";

interface useStoreModelStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useStoreModal = create<useStoreModelStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
