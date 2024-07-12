import { useState } from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HooksDemo from "./components/HooksDemo";
import GetInput from "./components/GetInput";
import HideAndShow from "./components/HideAndShow";
import HandlingForm from "./components/HandlingForm";
import Login from "./components/Login";
import EmployeeForm from "./components/EmployeeForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/count" element={<HooksDemo />} />
          <Route path="/getvalue" element={<GetInput />} />
          <Route path="/hideandshow" element={<HideAndShow />} />
          <Route path="/handlingform" element={<HandlingForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<EmployeeForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
