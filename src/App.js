import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Auth } from "./components/auth";
import { DashBoard } from "./components/dashboard";
import { Admin } from "./components/admin";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");

  return (
    <BrowserRouter>
      {user === "" ? (
        <Auth setUser={setUser} setEmail={setEmail} />
      ) : user === "admin" ? (
        <Admin setUser={setUser} email={email} />
      ) : (
        <DashBoard setUser={setUser} email={email} />
      )}
    </BrowserRouter>
  );
}

export default App;
