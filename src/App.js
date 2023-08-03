import Product from "./mainPages/Product";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./sectionPages/Navbar";
import Home from "./mainPages/Home";
import Footer from "./sectionPages/Footer";
import SignUp from "./mainPages/SignUp";
import LogIn from "./mainPages/LogIn";
import Profile from "./mainPages/Profile";
import EditDetails from "./mainPages/EditDetails";
import Cart from "./mainPages/Cart";
import Summary from "./mainPages/Summary";
import Buy from "./mainPages/Buy";


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit" element={<EditDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
