import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Auth } from "./components/auth";

function App() {
  return (
    <BrowserRouter>
      <Auth />
    </BrowserRouter>
  );
}

export default App;
