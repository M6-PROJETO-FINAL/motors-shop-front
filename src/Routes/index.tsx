import { Navigate, Route, Routes } from "react-router";

import HomePage from "../Pages/Home";
import LoginPage from "../Pages/Login";
import RegisterPage from "../Pages/Register";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate replace to={"home"} />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
