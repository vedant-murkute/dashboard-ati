import { atom } from "recoil";

export const companiesAtom= atom({
  key: 'companiesAtom', // unique ID (with respect to other atoms/selectors),
  default: [],
});