import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./frontend/pages/Home";

function App() {
  return (
    <>
      <Routes>
        { /* This is the home route*/}
        <Route path="/" element={<Home />} />
        { /* This is the map route*/}
        <Route path="/home"  />
      </Routes>
    </>
  );
}

export default App;
