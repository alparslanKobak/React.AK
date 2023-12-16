import React from 'react';
import Hero from "../components/Hero";

const Cart = ({ cart, setCart }) => {
    const removeFromCart = (productId) => {
        const newCart = cart.filter(item => item.product.id !== productId);
        setCart(newCart);
    };

    const updateQuantity = (productId, quantity) => {
        const newCart = cart.map(item => {
            if (item.product.id === productId) {
                return { ...item, quantity: quantity };
            }
            return item;
        });
        setCart(newCart);
    };

    const calculateTotal = () => {
        return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    };

    return (
        <>
            <Hero title="Cart" subtitle="Here is your shopping cart" />
            <main role="main">
                <div className="container">
                    <div className="row">
                        <div className="mt-3 mb-2 ms-1 col-3">
                           
                                {cart.length > 0 ? (
                                    cart.map((item) => (
                                        <div key={item.product.id} className="card">
                                            <div key={item.product.id} className="cart-item">
                                                <div className="__image">
                                                    <img src={item.product.image} className='card-img-top' alt={item.product.productName} />
                                                </div>
                                                <div className="__name">{item.product.productName}</div>
                                                <div className="__price">${item.product.price.toFixed(2)}</div>
                                                <div className="__quantity">
                                                    <input
                                                        type="number"
                                                        value={item.quantity}
                                                        className='form-control'
                                                        onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value))}
                                                        min={1}
                                                    />
                                                </div>
                                                <div className="__total">${(item.product.price * item.quantity).toFixed(2)}</div>
                                                <div className="__remove">
                                                    <button className='btn btn-danger' onClick={() => removeFromCart(item.product.id)}>Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p>Your cart is empty.</p>
                                )}
                         
                        </div>
                    </div>
                    <div className="cart-total">
                        <strong>Total: ${calculateTotal().toFixed(2)}</strong>
                    </div>
                </div>
                <button className="checkout-button">Proceed to Checkout</button>
            </main>
        </>
    );
};

export default Cart;
