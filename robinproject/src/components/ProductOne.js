

function ProductOne() {
    // Slider ayarlarınızı burada yapılandırın
    

    return (
        <>
            <div className="page-content-wrapper">
                <div className="single-product-slider-details-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <img src="" alt="ürün image gelecek" />
                            </div>
                            <div className="col-lg-6">
                                {/*=======  product details description area  =======*/}
                                <div className="product-details-description-wrapper">
                                    <h2 className="item-title">Atelier Ottoman Takumi Series</h2>
                                    <p className="price">
                                        <span className="main-price discounted">$360.00</span>
                                        <span className="discounted-price">$300.00</span>
                                    </p>
                                    <p className="description">
                                        Upholstered velvet ottoman with antique stud detailing. Invite
                                        restrained glamour and on-trend colour into your design scheme
                                        with the Eichholtz Ponti Ottoman. Inspired by the neo-classical
                                        influences of Italian icon, Gio Ponti, this contemporary ottoman
                                        collection is presented in a choice of velvet and linen
                                        colourways.
                                    </p>
                                    <div className="pro-qty d-inline-block">
                                        <a href="#" className="dec qty-btn">
                                            <i className="pe-7s-less" />
                                        </a>
                                        <input type="text" defaultValue={1} />
                                        <a href="#" className="inc qty-btn">
                                            <i className="pe-7s-plus" />
                                        </a>
                                    </div>
                                    <div className="add-to-cart-btn d-inline-block">
                                        <button className="theme-button theme-button--alt">
                                            ADD TO CART
                                        </button>
                                    </div>
                                </div>
                                {/*=======  End of product details description area  =======*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductOne;
