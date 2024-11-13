//import { type ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";

/**
 *
 * type inly inports
 * import { type ReactNode } from "react";
 * --> named exports 모듈에 대한 개별 타입 인식
 * import type { ReactNode } from "react";
 * --> named exports 모듈에 대한 전체 타입 인식
 */
export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
