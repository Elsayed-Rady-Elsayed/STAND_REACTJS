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
import About from "./pages/About";
import Error404 from "./pages/Error404";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop";
import Notification from "./components/Notification";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase";
import { fetchUserInfo, updateUserInfoCartAndList } from "./store/userSlice";
import Orders from "./pages/Orders";
function App() {
  const userInfo = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(fetchUserInfo(user.uid));
        window.localStorage.setItem("uid", user.uid);
      } else {
        dispatch(fetchUserInfo(null));
      }
    });

    return () => {
      unSub();
    };
  }, []);

  return (
    <div className="App overflow-hidden ">
      <Notification />
      <PreHeader />
      <Header />
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/favourits" element={<WishList />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/AboutUs" element={<About />} />
        <Route path="/ContactUs" element={<Contact />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/ShopAll" element={<Shop />} />
        <Route path="/ShopAll/:category" element={<Shop />} />
        <Route path="/ShopAll/search/:q" element={<Shop />} />
        <Route path="/Billing" element={<Billing />} />
        <Route path="/Orders" element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
