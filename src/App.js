
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";

import Categories from "./components/Categories/Categories";
import Product from "./components/Product/Product";
import Offer from "./components/Offer/Offer";
import Banner from "./components/Banner/Banner";
import Services from "./components/services/Services";
import Featured from "./components/featured/Featured";
import { Collection } from "./components/collection/Collection";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
         <Navbar />
          {/* <Routes>
            <Route path="/categories" element={<Categories/>}></Route>
            <Route path="/product" element={< Product/>}></Route>
           <Route path="/services" element={<Services />}></Route>
           <Route path="offer" element={<Offer />}></Route>
          </Routes> */}

          <Banner/>
          <Collection/>

          <Product/>
          <Categories/>

          <Offer/>
          <Featured/>
          <Services/>
          <Footer />

        </div>
      </Router>

    </div>
  );
}

export default App;
