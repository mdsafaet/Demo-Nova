import { Routes, Route } from "react-router-dom";
import MainLayouts from "@/layouts/MainLayouts";
import Home from "@/pages/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayouts />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
