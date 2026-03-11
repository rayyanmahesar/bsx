import { createBrowserRouter } from "react-router";
import LandingPage from "./pages/LandingPage";
import BuyPage from "./pages/BuyPage";
import SellPage from "./pages/SellPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/buy",
    Component: BuyPage,
  },
  {
    path: "/sell",
    Component: SellPage,
  },
]);
