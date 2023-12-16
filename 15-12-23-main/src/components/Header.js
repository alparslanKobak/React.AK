import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

const Header = ({ cart, categories, setProducts }) => {
    const [totalItemsInCart, setTotalItemsInCart] = useState(0)

    useEffect(() => {
        let total = 0
        cart.forEach(item => {
            total += 1
        })
        setTotalItemsInCart(total)
    }, [cart, totalItemsInCart]) // Burada cart ve totalItemsInCart değişkenlerini izliyoruz. Bu değişkenlerden biri değiştiğinde useEffect fonksiyonu çalışacak.

    const fetchProducts = async (categoryId) => {
        let url = "http://localhost:3000/products";
        if (categoryId) {
            url += "?categoryId=" + categoryId;
        }
        const response = await axios.get(url);
        setProducts(response.data);
    };


    return (
        <header id="top-bar" className="top-bar top-bar--style-2">
            <div className="top-bar__bg" style={{
                backgroundColor: '#FFF',
                backgroundImage: 'url(img/top_bar_bg-2.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center bottom'
            }} />
            <div className="container position-relative">
                <div className="row justify-content-between no-gutters">
                    <Link to="/" className="top-bar__logo site-logo">
                        <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/site_logo.png"} alt="demo" />
                    </Link>
                    <a id="top-bar__navigation-toggler"
                        className="top-bar__navigation-toggler top-bar__navigation-toggler--dark"
                        href="/"><span /></a>
                    <div id="top-bar__inner" className="top-bar__inner text-lg-right">
                        <div>
                            <div className="d-lg-flex flex-lg-column-reverse align-items-lg-end">
                                <nav id="top-bar__navigation" className="top-bar__navigation navigation"
                                    role="navigation">
                                    <ul>
                                        <li className="has">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/about">About</Link>
                                        </li>
                                        <li className="has-submenu">
                                            <a href="/">Categories</a>
                                            <ul className="submenu">
                                                {categories.map((category) => (
                                                    <li className="submenu__item" key={category.id}>
                                                        <Link className="submenu__item__link" to={`/Categories?categoryName=${categories.find(item => item.id === category.id).categoryName
                                                            }`} onClick={() => fetchProducts(category.id)}>
                                                            {category.categoryName}
                                                        </Link>
                                                    </li>
                                                ))

                                                }

                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="/blog">Blog</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Contacts</Link>
                                        </li>
                                        <li className="li-cart">
                                            <Link to="/cart">
                                                <i className="fontello-shopping-bag" />
                                                <span className="total">{totalItemsInCart}</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="top-bar__contacts">
                                    <span>523 Sylvan Ave, 5th Floor Mountain View, CA 940 USA</span>
                                    <span>
                                        <a href="tel:+123456789">+1 (234) 56789</a>,
                                        <a href="tel:+19876543210"> +1 987 654 3210</a>
                                    </span>
                                    <span>
                                        <a href="mailto:support@agrocompany.com">support@agrocompany.com</a>
                                    </span>
                                    <div className="social-btns">
                                        <a className="fontello-twitter" href="https://twitter.com/">Twitter</a>
                                        <a className="fontello-facebook" href="https://www.facebook.com/">Facebook</a>
                                        <a className="fontello-linkedin-squared" href="https://www.linkedin.com/">LinkedIn</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
