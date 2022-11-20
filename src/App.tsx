import "./App.css";
import { BrowserRouter } from "react-router-dom";
import VRoutes from "./routes/VRoutes";
import UserProvider from "./contexts/userContext";

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <VRoutes />
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
