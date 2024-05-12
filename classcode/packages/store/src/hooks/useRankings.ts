import { useRecoilValue } from "recoil"
import { rankingAtom } from "../atoms/ranking"

export const useRanking = () => {
    const value = useRecoilValue(rankingAtom);
    return value;
}