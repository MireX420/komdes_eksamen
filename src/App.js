import "./css/main.css"
import './App.css';
import Avocado from "./components/Avocado";
import BloodDonation from "./components/BloodDonation";
import Colourblindness from "./components/Colourblindness";
import Caffeine from "./components/Caffeine";
import { Route, Routes } from "react-router-dom";
import Navpage from "./components/Navpage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Navpage />} />
      <Route path="/avocado" element={<Avocado />}/>
      <Route path="/caffeine" element={<Caffeine />}/>
      <Route path="/blood-donation" element={<BloodDonation />}/>
      <Route path="/colourblindness" element={<Colourblindness />}/>
    </Routes>
    </>
  );
}

export default App;
