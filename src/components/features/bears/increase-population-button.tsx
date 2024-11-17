import { Shared } from "@components";
import { useBearsStore } from "@stores";

/**
 * npm install -D vite-tsconfig-paths
 * vite-tsconfig-paths 를 사용하면 package.json의 dev에 설지가 됨.,.
 * vite.config.ts애 import 후 tsconfig.app.json파일에 baseUrl과 paths를 설정해줘요.,.,,
 * 그러면 설정한 paths로 절대경로를 사용할 수 있음.,.,.,,.
 */

export default function IncreasePopulationButton() {
  const increasePopulation = useBearsStore((state) => state.increasePopulation);
  return <Shared.Button onClick={increasePopulation}>increse</Shared.Button>;
}
