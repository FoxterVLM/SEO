import "./index.css";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Booking from "./pages/Booking.tsx";
import Services from "./pages/Services.tsx";
import Page404 from "./pages/Page404.tsx";
import {useCanonicalStore} from "./store/canonicalStore.ts";
import {useEffect} from "react";

function App() {

    const { setServices, setBooking} = useCanonicalStore();
    useEffect(() => {
        setServices();
        setBooking();
    }, [])


    return (
    <Router>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path="/booking" element={<Booking />} />
          <Route path='*' element={<Page404 />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
