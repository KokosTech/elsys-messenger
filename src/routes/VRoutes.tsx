import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import NotFound from "../error/NotFound";

import SingIn from "../pages/SignIn";
import Chat from "../pages/Chat";

const VRoutes = () => (
  <Routes>
    <Route element={<ProtectedRoutes />}>
      <Route path="/" element={<Chat />} />
    </Route>
    <Route path="/signin" element={<SingIn />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default VRoutes;
