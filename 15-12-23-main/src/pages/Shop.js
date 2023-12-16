import React from 'react';
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Categories from "../components/Categories";

const Shop = ({ categories, products, getCategoryName, addToCart, setProducts }) => {
    return (
        <>
            <Hero title="Shop" subtitle="The point of using is that it has a more-or-less normal distribution of letters, as opposed to using Content here content here making it look"/>
            <main role="main">
                <section className="section">
                    <div className="container">
                        <div className="goods-catalog">
                            <div className="row">
                                <div className="col-12 col-md-4 col-lg-3">
                                    <aside className="sidebar goods-filter">
                                        <span className="goods-filter-btn-close js-toggle-filter"><i className="fontello-cancel"/></span>
                                        <div className="goods-filter__inner">
                                            <h4 className="goods-filter__title">Filter</h4>
                                            <Categories categories={categories} setProducts={setProducts} />
                                        </div>
                                    </aside>
                                </div>
                                <div className="col-12 col-md-8 col-lg-9">
                                    {/* Diğer içerikler ve ProductCard bileşenlerinin render edildiği yer */}
                                    <div className="goods goods--style-1">
                                        <div className="__inner">
                                            <div className="row">
                                                {products.map(product => (
                                                    <ProductCard key={product.id} product={product} getCategoryName={getCategoryName} addToCart={addToCart} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    {/* Sayfalama ve diğer içerikler */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Shop;
