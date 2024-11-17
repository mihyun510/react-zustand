import { useBearsStore } from "../stores";
import { Features } from "@components";
export default function BearsPage() {
  /**
   * {}없는 경우 : 한줄인경우.. 암시적 반환, return이 있다고 가정.....
   * 객체인 경우만 ({}) 로 표현
   * const bear = () => {}
   *
   *  callback 함수
   * (() => {return "";})
   */

  const bears = useBearsStore((state) => state.bears);
  return (
    <div>
      <h1>{bears} ... </h1>
      <Features.IncreasePopulationButton />
      <Features.RemoveBearsButton />
    </div>
  );
}
