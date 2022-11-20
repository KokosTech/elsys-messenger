import { Outlet, Navigate } from "react-router-dom";

import { useUserContext } from "../contexts/userContext";

const ProtectedRoutes = () => {
  const { user }: any = useUserContext();

  return user.id ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoutes;
