import { create } from "zustand";

//custom hook
/**
 * react에서는 라이프사이클에 연관된 상태를 바꾸는 custom hook의 경우에는 use를 사용한다.
 */
//type를 지정해주어야 됩니다. 인지할수있게요..정적분석
interface BearStore {
  bears: number;
  increasePopulation: () => void; //return이 없는 함수
  removeAllBears: () => void;
}

const useBearsStore = create<BearStore>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

export default useBearsStore;

/* 20241109
1.vite 으로 프로젝트 셋팅 방법
npm create vite@latest react-zustand -- --template react-tx
2. react router dom 복습
3. esm 실무적으로 활용하면 방법
4. 실무적인 (기본적인) 아키텍처 
5. zustand 기본 셋팅
*/
