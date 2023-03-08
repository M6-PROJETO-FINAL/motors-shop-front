
import { useContext } from "react";
import { Navigate, Outlet, useLocation  } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const ProtectedRoutes = () => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <div>Carregando...</div>;

  return user ? <Outlet /> : <Navigate to="/login" replace state={{ from: location }} />;
};

export default ProtectedRoutes;