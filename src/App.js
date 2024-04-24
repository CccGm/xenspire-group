import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Auth } from "./components/auth";
import { DashBoard } from "./components/dashboard";
import { Admin } from "./components/admin";
import { useState } from "react";
import { ContextProvider } from "./components/context";

function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");

  return (
    <BrowserRouter>
      <ContextProvider>
        {user === "" ? (
          <Auth setUser={setUser} setEmail={setEmail} />
        ) : user === "admin" ? (
          <Admin setUser={setUser} email={email} />
        ) : (
          <DashBoard setUser={setUser} email={email} />
        )}
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
