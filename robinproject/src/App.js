import Header from './layout/Header';
import './App.css';
import Footer from './layout/Footer';
import Contact from './components/Contact';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Blogs from './components/Blogs';
import CheckOut from './components/CheckOut';
import Shop from './components/Shop';
import BlogOne from './components/BlogOne';
import ProductOne from './components/ProductOne';

function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/CheckOut" element={<CheckOut />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Products/:slug" element={<ProductOne/>} />
        <Route path="/Blogs/:slug" element={<BlogOne />} />

      
        <Route path="*" element={<Navigate replace to="/Home" />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
