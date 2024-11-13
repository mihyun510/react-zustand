import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layouts } from "../components";
import { BearsPage, MainPage } from "../pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layouts.RootLayout />}>
      {/** 최상위 첫번째 경로  */}
      <Route index element={<MainPage />} />
      <Route path="bears" element={<BearsPage />} />
    </Route>
  )
);

export default router;
