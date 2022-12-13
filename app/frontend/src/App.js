import "./App.css";
import Home from "./pages/Home";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "./pages/Login";
import Register  from './pages/Register'

function App() {
  return (
    <Routes>
      <Route element={<Register/>} path="/register" exact />
      <Route element={<Login />} path="/" exact />
      <Route element={<Home />} path="/newtodo" exact />
    </Routes>
  );
}

export default App;
