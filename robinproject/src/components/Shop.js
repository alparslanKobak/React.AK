import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function Shop() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      
        const loadProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/products');
                setProducts(response.data);
            } catch (error) {
                console.error("Ürünler yüklenirken bir hata oluştu:", error);
            }
        };

    
        loadProducts();
    }, []);


    const addToCart = async (product) => {
        try {
            
            const response = await axios.get('http://localhost:3000/cart');
            const cartItems = response.data;

       
            let productExists = false;
            cartItems.forEach(item => {
                if (item.id === product.id) {
                    productExists = true;
                    axios.put(`http://localhost:3000/cart/${product.id}`, {
                        ...product,
                        quantity: item.quantity + 1 
                    });
                }
            });

           
            if (!productExists) {
                await axios.post('http://localhost:3000/cart', {
                    ...product,
                    quantity: 1 
                });
            }

        } catch (error) {
            console.error("Ürün sepete eklenirken bir hata oluştu:", error);
        }
    };


    return (
        <>

            <>
                <div className="breadcrumb-area section-space--breadcrumb">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                {/*=======  breadcrumb wrapper  =======*/}
                                <div className="breadcrumb-wrapper">
                                    <h2 className="page-title">Shop</h2>
                                    <ul className="breadcrumb-list">
                                        <li>
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li className="active">Shop</li>
                                    </ul>
                                </div>
                                {/*=======  End of breadcrumb wrapper  =======*/}
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of breadcrumb area  ====================*/}
                {/*====================  page content wrapper ====================*/}
                <div className="page-content-wrapper">
                    <div className="shop-page-area">
                        <div className="container wide">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="shop-content-wrapper">
                                        <div className="shop-product-wrap shop-product-wrap--fullwidth row grid">
                                            {products.map((product) => (
                                                <div key={product.id} className="col-lg-3 col-lg-is-6 col-md-6 col-sm-6 col-12">
                                                    {/*=======  Ürünlerin Gösterimi  =======*/}
                                                    <div className="single-grid-product">
                                                        <div className="single-grid-product__image">
                                                            <a href="product-details-basic.html" className="image-wrap">
                                                                <img src={product.image} className="img-fluid" alt={product.name} />
                                                            </a>
                                                            {/* ...diğer içerikler... */}
                                                        </div>
                                                        <div className="single-grid-product__content">
                                                            <h3 className="title">
                                                                <a href="product-details-basic.html">{product.title}</a>
                                                            </h3>
                                                            <div className="price">
                                                                <span className="main-price">${product.price}</span>
                                                            </div>
                                                            <div className="single-grid-product__cart">
                                                                <Link to={`/product/${product.id}`} className="lezada-button lezada-button--medium">View Details</Link>
                                                            </div>

                                                            <span className="single-icon single-icon--add-to-cart">
                                                                <a
                                                                    href="#"
                                                                    data-tippy="Add to cart"
                                                                    data-tippy-inertia="true"
                                                                    data-tippy-animation="shift-away"
                                                                    data-tippy-delay={50}
                                                                    data-tippy-arrow="true"
                                                                    data-tippy-theme="sharpborder"
                                                                >
                                                                    <i className="fa fa-shopping-basket" />{" "}
                                                                    <button onClick={() => addToCart(product)} className='btn btn-warning'>ADD TO CART</button>
                                                                </a>
                                                            </span>

                                                        </div>
                                                    </div>
                                                    {/* ...list view product içeriği... */}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>


        </>
    );
}

export default Shop;