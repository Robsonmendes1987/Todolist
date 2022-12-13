import "./App.css";
import Home from "./components/pages/Home";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "./components/pages/Login";

function App() {
  return (
    <Routes>
      <Route element={<Login/>} path="/" exact />
      <Route element={<Home/>} path="/newtodo" exact />
    </Routes>
  );
}

export default App;
