import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Auth } from "./components/auth";
import { DashBoard } from "./components/dashboard";
import { Admin } from "./components/admin";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  console.log(user);
  return (
    <BrowserRouter>
      {user === "" ? (
        <Auth setUser={setUser} />
      ) : user === "admin" ? (
        <Admin />
      ) : (
        <DashBoard />
      )}
    </BrowserRouter>
  );
}

export default App;
