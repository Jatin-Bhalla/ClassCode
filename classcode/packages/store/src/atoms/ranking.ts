import { atom } from "recoil";

export const rankingAtom = atom<number>({
    key: "ranking",
    default: 0,
})