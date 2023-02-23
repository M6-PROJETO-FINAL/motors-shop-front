import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";

import HomePage from "../Pages/Home";
import LoginPage from "../Pages/Login";
import RegisterPage from "../Pages/Register";

export const RoutesMain = () => {

  let Navigate = useNavigate()
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate replace to={"home"} />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};
