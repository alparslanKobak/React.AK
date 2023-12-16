import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import axios from 'axios';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import About from "./pages/About";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
    const [categories, setCategories] = useState([]);
    const [blog, setBlog] = useState([]);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]); 

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await axios.get('http://localhost:3000/categories');
            setCategories(response.data);
        };

        const fetchBlog = async () => {
            const response = await axios.get('http://localhost:3000/blog');
            setBlog(response.data);
        };

        const fetchProducts = async (categoryId) => {
            let url = "http://localhost:3000/products";
            if (categoryId) {
                url += "?categoryId=" + categoryId;
            }
            const response = await axios.get(url);
            setProducts(response.data);
        };

        fetchCategories();
        fetchBlog();
        fetchProducts();
    }, []);

    const addToCart = (product) => {


        if (!cart.find(item => item.id === product.id)) {


            setCart(currentCart => [...currentCart, { product, quantity: 1 }]);
        }
        else {
            setCart(currentCart => currentCart.map(item => {
                if (item.product.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    };
                }
                else {
                    return item;
                }
            }));
        }



    };

    const getBlogBySlugs = (slug) => {
        return blog.filter(item => item.slug === slug);
    };

    const getCategoryName = (categoryId) => {
        const category = categories.find(item => item.id === categoryId);
        return category ? category.categoryName : '';
    };

    const getProductBySlug = (slug) => {
        return products.find((product) => product.slug === slug);
    };

    return (
        <>
            <Header cart={cart} categories={categories} setProducts={setProducts} />
            <Routes>
                <Route path="/"
                    element={<Shop categories={categories} products={products} getCategoryName={getCategoryName} addToCart={addToCart} setProducts={setProducts} />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog/:slug" element={<BlogDetail getBlogBySlugs={getBlogBySlugs} />} />
                <Route path="/blog" element={<BlogList blog={blog} />} />
                <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
                <Route path="/product/:slug" element={<ProductDetail getProductBySlug={getProductBySlug} />} />

                <Route path="*" element={<Shop categories={categories} products={products} getCategoryName={getCategoryName} addToCart={addToCart} setProducts={setProducts} />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;