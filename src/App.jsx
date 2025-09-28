import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
// import Fleet from "./routes/Fleet";
// import CarDetails from "./routes/CarDetails";
// import Booking from "./routes/Booking";
// import Profile from "./routes/Profile";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/fleet" element={<Fleet />} />
          <Route path="/car/:id" element={<CarDetails />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
