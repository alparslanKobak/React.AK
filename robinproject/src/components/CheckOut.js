function CheckOut() {
    return (

        <>
            <>
                <div className="breadcrumb-area section-space--breadcrumb">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                {/*=======  breadcrumb wrapper  =======*/}
                                <div className="breadcrumb-wrapper">
                                    <h2 className="page-title">Checkout</h2>
                                    <ul className="breadcrumb-list">
                                        <li>
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li className="active">Checkout</li>
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
                    {/*=======  checkout page wrapper  =======*/}
                    <div className="checkout-page-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="checkout-form">
                                        {/* Checkout Form s*/}
                                        <form action="#">
                                            <div className="row row-40">
                                                <div className="col-lg-7">
                                                    {/* Billing Address */}
                                                    <div id="billing-form" className="billing-form">
                                                        <h4 className="checkout-title">Billing Address</h4>
                                                        <div className="row">
                                                            <div className="col-md-6 col-12">
                                                                <label>First Name*</label>
                                                                <input type="text" placeholder="First Name" />
                                                            </div>
                                                            <div className="col-md-6 col-12">
                                                                <label>Last Name*</label>
                                                                <input type="text" placeholder="Last Name" />
                                                            </div>
                                                            <div className="col-md-6 col-12">
                                                                <label>Email Address*</label>
                                                                <input type="email" placeholder="Email Address" />
                                                            </div>
                                                            <div className="col-md-6 col-12">
                                                                <label>Phone no*</label>
                                                                <input type="text" placeholder="Phone number" />
                                                            </div>
                                                            <div className="col-12">
                                                                <label>Company Name</label>
                                                                <input type="text" placeholder="Company Name" />
                                                            </div>
                                                            <div className="col-12">
                                                                <label>Address*</label>
                                                                <input type="text" placeholder="Address line 1" />
                                                                <input type="text" placeholder="Address line 2" />
                                                            </div>
                                                            <div className="col-md-6 col-12">
                                                                <label>Country*</label>
                                                                <select className="nice-select">
                                                                    <option>Bangladesh</option>
                                                                    <option>China</option>
                                                                    <option>country</option>
                                                                    <option>India</option>
                                                                    <option>Japan</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-md-6 col-12">
                                                                <label>Town/City*</label>
                                                                <input type="text" placeholder="Town/City" />
                                                            </div>
                                                            <div className="col-md-6 col-12">
                                                                <label>State*</label>
                                                                <input type="text" placeholder="State" />
                                                            </div>
                                                            <div className="col-md-6 col-12">
                                                                <label>Zip Code*</label>
                                                                <input type="text" placeholder="Zip Code" />
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="check-box">
                                                                    <input type="checkbox" id="create_account" />
                                                                    <label htmlFor="create_account">
                                                                        Create an Acount?
                                                                    </label>
                                                                </div>
                                                                <div className="check-box">
                                                                    <input
                                                                        type="checkbox"
                                                                        id="shiping_address"
                                                                        data-shipping=""
                                                                    />
                                                                    <label htmlFor="shiping_address">
                                                                        Ship to Different Address
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Shipping Address */}
                                                    <div id="shipping-form" className="shipping-form">
                                                        <h4 className="checkout-title">Shipping Address</h4>
                                                        <div className="row">
                                                            <div className="col-md-6 col-12">
                                                                <label>First Name*</label>
                                                                <input type="text" placeholder="First Name" />
                                                            </div>
                                                            <div className="col-md-6 col-12">
                                                                <label>Last Name*</label>
                                                                <input type="text" placeholder="Last Name" />
                                                            </div>
                                                            <div className="col-md-6 col-12">
                                                                <label>Email Address*</label>
                                                                <input type="email" placeholder="Email Address" />
                                                            </div>
                                                            <div className="col-md-6 col-12">
                                                                <label>Phone no*</label>
                                                                <input type="text" placeholder="Phone number" />
                                                            </div>
                                                            <div className="col-12">
                                                                <label>Company Name</label>
                                                                <input type="text" placeholder="Company Name" />
                                                            </div>
                                                            <div className="col-12">
                                                                <label>Address*</label>
                                                                <input type="text" placeholder="Address line 1" />
                                                                <input type="text" placeholder="Address line 2" />
                                                            </div>
                                                            <div className="col-md-6 col-12">
                                                                <label>Country*</label>
                                                                <select className="nice-select">
                                                                    <option>Bangladesh</option>
                                                                    <option>China</option>
                                                                    <option>country</option>
                                                                    <option>India</option>
                                                                    <option>Japan</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-md-6 col-12">
                                                                <label>Town/City*</label>
                                                                <input type="text" placeholder="Town/City" />
                                                            </div>
                                                            <div className="col-md-6 col-12">
                                                                <label>State*</label>
                                                                <input type="text" placeholder="State" />
                                                            </div>
                                                            <div className="col-md-6 col-12">
                                                                <label>Zip Code*</label>
                                                                <input type="text" placeholder="Zip Code" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5">
                                                    <div className="row">
                                                        {/* Cart Total */}
                                                        <div className="col-12">
                                                            <h4 className="checkout-title">Cart Total</h4>
                                                            <div className="checkout-cart-total">
                                                                <h4>
                                                                    Product <span>Total</span>
                                                                </h4>
                                                                <ul>
                                                                    <li>
                                                                        Cillum dolore tortor nisl X 01 <span>$25.00</span>
                                                                    </li>
                                                                    <li>
                                                                        Auctor gravida pellentesque X 02{" "}
                                                                        <span>$50.00</span>
                                                                    </li>
                                                                    <li>
                                                                        Condimentum posuere consectetur X 01{" "}
                                                                        <span>$29.00</span>
                                                                    </li>
                                                                    <li>
                                                                        Habitasse dictumst elementum X 01{" "}
                                                                        <span>$10.00</span>
                                                                    </li>
                                                                </ul>
                                                                <p>
                                                                    Sub Total <span>$104.00</span>
                                                                </p>
                                                                <p>
                                                                    Shipping Fee <span>$00.00</span>
                                                                </p>
                                                                <h4>
                                                                    Grand Total <span>$104.00</span>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        {/* Payment Method */}
                                                        <div className="col-12">
                                                            <h4 className="checkout-title">Payment Method</h4>
                                                            <div className="checkout-payment-method">
                                                                <div className="single-method">
                                                                    <input
                                                                        type="radio"
                                                                        id="payment_check"
                                                                        name="payment-method"
                                                                        defaultValue="check"
                                                                    />
                                                                    <label htmlFor="payment_check">Check Payment</label>
                                                                    <p data-method="check">
                                                                        Please send a Check to Store name with Store
                                                                        Street, Store Town, Store State, Store Postcode,
                                                                        Store Country.
                                                                    </p>
                                                                </div>
                                                                <div className="single-method">
                                                                    <input
                                                                        type="radio"
                                                                        id="payment_bank"
                                                                        name="payment-method"
                                                                        defaultValue="bank"
                                                                    />
                                                                    <label htmlFor="payment_bank">
                                                                        Direct Bank Transfer
                                                                    </label>
                                                                    <p data-method="bank">
                                                                        Please send a Check to Store name with Store
                                                                        Street, Store Town, Store State, Store Postcode,
                                                                        Store Country.
                                                                    </p>
                                                                </div>
                                                                <div className="single-method">
                                                                    <input
                                                                        type="radio"
                                                                        id="payment_cash"
                                                                        name="payment-method"
                                                                        defaultValue="cash"
                                                                    />
                                                                    <label htmlFor="payment_cash">
                                                                        Cash on Delivery
                                                                    </label>
                                                                    <p data-method="cash">
                                                                        Please send a Check to Store name with Store
                                                                        Street, Store Town, Store State, Store Postcode,
                                                                        Store Country.
                                                                    </p>
                                                                </div>
                                                                <div className="single-method">
                                                                    <input
                                                                        type="radio"
                                                                        id="payment_paypal"
                                                                        name="payment-method"
                                                                        defaultValue="paypal"
                                                                    />
                                                                    <label htmlFor="payment_paypal">Paypal</label>
                                                                    <p data-method="paypal">
                                                                        Please send a Check to Store name with Store
                                                                        Street, Store Town, Store State, Store Postcode,
                                                                        Store Country.
                                                                    </p>
                                                                </div>
                                                                <div className="single-method">
                                                                    <input
                                                                        type="radio"
                                                                        id="payment_payoneer"
                                                                        name="payment-method"
                                                                        defaultValue="payoneer"
                                                                    />
                                                                    <label htmlFor="payment_payoneer">Payoneer</label>
                                                                    <p data-method="payoneer">
                                                                        Please send a Check to Store name with Store
                                                                        Street, Store Town, Store State, Store Postcode,
                                                                        Store Country.
                                                                    </p>
                                                                </div>
                                                                <div className="single-method">
                                                                    <input type="checkbox" id="accept_terms" />
                                                                    <label htmlFor="accept_terms">
                                                                        I’ve read and accept the terms &amp; conditions
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <button className="theme-button place-order-btn">
                                                                PLACE ORDER
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=======  End of checkout page wrapper  =======*/}
                </div>
            </>



        </>
    );
}

export default CheckOut;