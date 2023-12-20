import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


function Header() {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Sepeti yükle
        const loadCart = async () => {
            try {
                const response = await axios.get('http://localhost:3000/cart');
                console.log(response.data); // Veriyi konsola yazdır
                setCartItems(response.data);
            } catch (error) {
                console.error("Sepet yüklenirken hata oluştu:", error);
            }
        };


        loadCart();
    });

    const loadCart = async () => {
        try {
            const response = await axios.get('http://localhost:3000/cart');
            console.log(response.data); // Veriyi konsola yazdır
            setCartItems(response.data);
        } catch (error) {
            console.error("Sepet yüklenirken hata oluştu:", error);
        }
    };

    const removeFromCart = async (itemId) => {
        try {
            await axios.delete(`http://localhost:3000/cart/${itemId}`);
            loadCart(); // Sepeti güncelle
        } catch (error) {
            console.error("Sepetten ürün silinirken hata oluştu:", error);
        }
    };



    return (
        <>
            <div class="header-area header-area--default header-area--default--white header-sticky">


                <div class="header-navigation-top">
                    <div class="container wide">
                        <div class="row align-items-center">
                            <div class="col-lg-8 col-md-12">

                                <div class="header-top-content-wrapper justify-content-center justify-content-lg-start">

                                    <div class="header-top-dropdown">
                                        <a href="#">English <i class="pe-7s-angle-down"></i></a>

                                        <ul class="header-top-dropdown__list">
                                            <li><a href="#">Français</a></li>
                                            <li><a href="#">Deutsch</a></li>
                                        </ul>
                                    </div>

                                    <div class="header-top-dropdown border-left-0">
                                        <a href="#">USD <i class="pe-7s-angle-down"></i></a>

                                        <ul class="header-top-dropdown__list">
                                            <li><a href="#">EUR</a></li>
                                            <li><a href="#">GBP</a></li>
                                        </ul>
                                    </div>

                                    <div class="header-contact-info-wrapper d-none d-lg-block">
                                        <ul class="header-contact-info__list">
                                            <li><i class="pe-7s-phone"></i> <a href="tel://12452456012">(1245) 2456 012 </a></li>
                                            <li><i class="pe-7s-mail-open"></i> <a href="mailto:alparslankobak@gmail.com">alparslankobak@gmail.com</a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div class="col-lg-4 d-none d-lg-block">
                                <div class="header-top-content-wrapper justify-content-end">

                                    <div class="header-top-dropdown border-left-0">
                                        <a href="#">Login / Register <i class="pe-7s-angle-down"></i></a>

                                        <ul class="header-top-dropdown__list">
                                            <li><a href="my-account.html">My account</a></li>
                                            <li><a href="cart.html">Shopping cart</a></li>
                                            <li><a href="checkout.html">Checkout</a></li>
                                            <li><a href="order-tracking.html">Order Tracking</a></li>
                                        </ul>
                                    </div>

                                    <div class="header-contact-info-wrapper">
                                        <ul class="header-contact-info__list">
                                            <li><i class="fa fa-envelope-o"></i> <a href="#">Newsletter Signup</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="header-navigation-area header-navigation-area--white header-navigation-area--extra-space d-none d-lg-block">
                    <div class="container wide">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="header-info-wrapper header-info-wrapper--alt-style">

                                    <div class="header-logo">
                                        <a href="index.html">
                                            <img src="assets/img/logo.png" class="img-fluid" alt="" />
                                        </a>
                                    </div>

                                    <div class="header-navigation-wrapper">
                                        <nav>
                                            <ul>
                                                <li class="has-children">
                                                    <Link to="/Home">HOME</Link>

                                                </li>
                                                <li class="has-children">
                                                    <Link to="/Contact">Contact Us</Link>

                                                </li>
                                                <li class="has-children">
                                                    <Link to="/AboutUs">About Us</Link>

                                                </li>
                                                <li class="has-children">
                                                    <Link to="/Blogs">Blogs</Link>

                                                </li>
                                                <li class="has-children">
                                                    <Link to="/Shop">SHOP</Link>

                                                </li>
                                            </ul>
                                        </nav>
                                    </div>

                                    <div class="header-icon-area">
                                        <div class="account-dropdown">
                                            <a href="my-account.html">Login / Register <i class="pe-7s-angle-down"></i></a>

                                            <ul class="account-dropdown__list">
                                                <li><a href="my-account.html">My account</a></li>
                                                <li><a href="cart.html">Shopping cart</a></li>
                                                <li><a href="checkout.html">Checkout</a></li>
                                                <li><a href="order-tracking.html">Order Tracking</a></li>
                                            </ul>
                                        </div>

                                        <div class="header-icon d-flex align-items-center">
                                            <ul class="header-icon__list">
                                                <li><a href="javascript:void(0)" id="search-icon"><i class="fa fa-search"></i></a></li>
                                                {/* <li>
                                                    <a href="wishlist.html"><i class="fa fa-heart-o"></i><span class="item-count">1</span></a>
                                                    <div class="minicart-wrapper">
                                                        <p class="minicart-wrapper__title">WISHLIST</p>

                                                        <div class="minicart-wrapper__items ps-scroll">
                                                            <div class="minicart-wrapper__items__single">
                                                                <a href="javascript:void(0)" class="close-icon"><i class="pe-7s-close"></i></a>
                                                                <div class="image">
                                                                    <a href="product-details-basic.html">
                                                                        <img src="assets/img/products/product-1-90x100.jpg" class="img-fluid" alt="" />
                                                                    </a>
                                                                </div>
                                                                <div class="content">
                                                                    <p class="product-title"><a href="product-details-basic.html">Atelier Fuji NC Chair</a></p>
                                                                    <p class="product-calculation"><span class="price">$900</span></p>
                                                                    <a href="javascript:void(0)" class="wishlist-cart-icon"><i class="fa fa-shopping-basket"></i> ADD TO CART</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="minicart-wrapper__buttons mb-0">
                                                            <a href="wishlist.html" class="theme-button theme-button--minicart-button mb-0">VIEW WISHLIST</a>
                                                        </div>
                                                    </div>
                                                </li> */}
                                                <li>
                                                    <a href="cart.html"><i class="fa fa-shopping-basket"></i><span class="item-count">
                                                        {cartItems.reduce((total, item) => total + item.quantity, 0)}
                                                    </span></a>
                                                    <div class="minicart-wrapper">
                                                        <p class="minicart-wrapper__title">CART</p>

                                                        <div class="minicart-wrapper__items ps-scroll">
                                                            {cartItems.map((item) => (
                                                                <div key={item.id} class="minicart-wrapper__items__single">

                                                                    <div class="image">
                                                                        <Link to={`/Products/${item.slug}`}>
                                                                            <img src={item.image} class="img-fluid" alt={item.title} />
                                                                        </Link>
                                                                    </div>
                                                                    <div class="content">
                                                                        <p class="product-title"><Link to={`/Products/${item.slug}`}>{item.title}</Link></p>
                                                                        <p class="product-calculation"><span class="count">{item.quantity}</span> x <span class="price">${item.price}</span></p>
                                                                        <button class="btn btn-danger" onClick={() => removeFromCart(item.id)}>
                                                                            <i class="fa fa-times"></i> {/* Çarpı ikonu */}
                                                                        </button>
                                                                    </div>

                                                                </div>
                                                            ))}
                                                        </div>

                                                        <p class="minicart-wrapper__subtotal">SUBTOTAL: <span>${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</span></p>

                                                        <div class="minicart-wrapper__buttons">
                                                            <a href="cart.html" class="theme-button theme-button--minicart-button">VIEW CART</a>
                                                            <Link to="/CheckOut" class="theme-button theme-button--alt theme-button--minicart-button theme-button--minicart-button--alt mb-0">CHECKOUT</Link>
                                                        </div>

                                                        <p class="minicart-wrapper__featuretext">Free Shipping on All Orders Over $100!</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="header-mobile-navigation d-block d-lg-none">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-6 col-md-6">
                                <div class="header-logo">
                                    <a href="index.html">
                                        <img src="assets/img/logo.png" class="img-fluid" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div class="col-6 col-md-6">
                                <div class="mobile-navigation text-end">
                                    <ul class="header-icon__list header-icon__list">
                                        <li>
                                            <a href="wishlist.html"><i class="fa fa-heart-o"></i><span class="item-count">1</span></a>
                                        </li>
                                        <li>
                                            <a href="cart.html"><i class="fa fa-shopping-basket"></i><span class="item-count">3</span></a>
                                        </li>
                                        <li><a href="javascript:void(0)" class="mobile-menu-icon" id="mobile-menu-trigger"><i class="fa fa-bars"></i></a></li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}

export default Header;