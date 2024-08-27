import { createBrowserRouter, Navigate } from "react-router-dom";
import AllFoodpage from "../pages/AllFoodPages";
import Lunch from "../pages/LunchPage";
import Dinner from "../pages/DinnerPage";
import Breakfast from "../pages/BreakfastPage";


export const router = createBrowserRouter([
  { path: "/", element: <Navigate to="AllFoodpage" /> },
  { path: "AllFoodpage", element: <AllFoodpage /> },
  { path: "Breakfast", element: <Breakfast/> },
  { path: "Lunch", element: <Lunch /> },
  { path: "Dinner", element: <Dinner /> },
]);
