import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import VehicleFleet from "./pages/VehicleFleet/VehicleFleet";
import AboutUs from "./pages/AboutUs/AboutUs";
import Service from "./pages/Service/Service";
import ScrollBtn from "./components/ScrollToTop/ScrollBtn";
import SecondPart from "./pages/home/SecondPart";
import Transport from "./pages/ServicesPages/Transport/Transport";
import Logistic from "./pages/ServicesPages/Logistic/Logistic";
import Passenger from "./pages/ServicesPages/Passenger/Passenger";
import TowServices from "./pages/ServicesPages/TowServices/TowServices";
import VehicleService from "./pages/VehicleService/VehicleService";
import Stroage from "./pages/ServicesPages/Stroage/Stroage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/contact" Component={Contact} />
          <Route path="/vehiclefleet" Component={VehicleFleet} />
          <Route path="/about" Component={AboutUs} />
          <Route path="/service" Component={Service} />
          <Route path="/second" Component={SecondPart} />
          <Route path="/transport" Component={Transport} />
          <Route path="/logistic" Component={Logistic} />
          <Route path="/passanger" Component={Passenger} />
          <Route path="/towservices" Component={TowServices} />
          <Route path="/vehicleservice" Component={VehicleService} />
          <Route path="/stroage" Component={Stroage} />
        </Routes>
        <ScrollBtn/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
