import { create } from "zustand";


export const useNameStore = create((set) => ({
  name: "",
  setName: (value) => set({name: value}),
  deleteName: () => set({name: ""})
}))
