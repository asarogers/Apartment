import { Route, Routes } from "react-router-dom";
import './App.css';
import Map from "./frontend/pages/Map";

function App() {
  return (
    <>
      <Routes>
        { /* This is the home route*/}
        <Route path="/" />
        { /* This is the map route*/}
        <Route path="/map" element={<Map />} />
      </Routes>
    </>
  );
}

export default App;
