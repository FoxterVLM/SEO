import "./index.css";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Booking from "./pages/Booking.tsx";
import Services from "./pages/Services.tsx";

function App() {

  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path="/booking" element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;
