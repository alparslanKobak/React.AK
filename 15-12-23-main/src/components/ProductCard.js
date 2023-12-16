import React from 'react';
import { Link } from "react-router-dom";

const ProductCard = ({ product, getCategoryName, addToCart }) => {
    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="col-12 col-sm-6 col-lg-4">
            <div className="__item">
                <figure className="__image">
                    <img width={188} src={product.image} alt={product.productName} />
                </figure>
                <div className="__content">
                    <h4 className="h6 __title">
                        <Link to={`/product/${product.slug}`}>
                            {product.productName}
                        </Link>
                    </h4>
                    <div className="__category">
                        <Link to={`/category/${product.categoryId}`}>
                            {getCategoryName(product.categoryId)}
                        </Link>
                    </div>
                    <div className="product-price">
                        <span className="product-price__item product-price__item--new">${product.price}</span>
                    </div>
                    <button 
                        className="custom-btn custom-btn--medium custom-btn--style-1" 
                        onClick={handleAddToCart}>
                        <i className="fontello-shopping-bag"/>
                        Add to cart
                    </button>
                </div>
                <span className="product-label product-label--sale">Sale</span>
            </div>
        </div>
    );
};

export default ProductCard;
