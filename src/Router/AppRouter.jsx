import React from "react";
import Layout from "../Components/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/Home/HomePage";
import Gastronomia from "../Pages/Gastronomia/Gastronomia";
import ComercioLocal from "../Pages/ComercioLocal/ComercioLocal";
import Diversion from "../Pages/Diversion/Diversion";
import Admin from "../Pages/Admin/Admin";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="Gastronomia" element={<Gastronomia />} />
          <Route path="ComercioLocal" element={<ComercioLocal />} />
          <Route path="Diversion" element={<Diversion />} />
          <Route path="Admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
