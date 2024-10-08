import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import PreHeader from "./components/PreHeader";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import Billing from "./pages/Billing";
function App() {
  return (
    <div className="App overflow-hidden ">
      <PreHeader />
      <Header />
      <Billing />
      {/* <Routes>
        <Route
          path="*"
          element={
            <>
              <h2>NOT FOUND 404</h2>
            </>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/favourits" element={<WishList />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
