import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Auth } from "./components/auth";
import { DashBoard } from "./components/dashboard";
import { Admin } from "./components/admin";

function App() {
  return (
    <BrowserRouter>
      {/* <Auth /> */}
      {/* <DashBoard /> */}
      <Admin />
    </BrowserRouter>
  );
}

export default App;
