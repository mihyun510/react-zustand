import { Shared } from "@components";
import { useBearsStore } from "@stores";

export default function RemoveBearsButton() {
  const removeAllBears = useBearsStore((state) => state.removeAllBears);
  return <Shared.Button onClick={removeAllBears}>remove</Shared.Button>;
}

/**
 * 241117
 * 1. 형태가 비슷한 컴포넌트화., features..
 * 2. 재사용성 고려,.
 * 3. zustand
 * 아키텍처에 관련된 내용입니다...
 * *** 4. es script 모둘에서 네이밍을 다는 방식, default로 내보내는 방식, 모듈을 통합하는 방법 정리
 * *** 5. 컴포넌트를 다룰시 비즈니스로직을 가지고 있는 features 컴포넌트와 재사용성을 가지고 있는 shared 컴포넌트를 구분하는 방식과 기준 정리
 * 6. 절대경로 를 선언하는 방식 정리 : tsconfig에 paths옵션 사용방법, 절대경로 호출을 위해서 tsconfig-paths 플러그인 사용방법 정리
 */
