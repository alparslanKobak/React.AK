import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';


const Categories = ({ categories, setProducts }) => {

    const fetchProducts = async (categoryId) => {
        let url = "http://localhost:3000/products";
        if (categoryId) {
            url += "?categoryId=" + categoryId;
        }
        const response = await axios.get(url);
        setProducts(response.data);
    };

    return (
        <div className="widget widget--categories">
            <h4 className="h6 widget-title">Categories</h4>
            <ul className="list">
                {categories.map((category, index) => (
                    <li className="list__item" key={index}>
                        <Link className="list__item__link" to={`/Categories?categoryName=${categories.find(item => item.id === category.id).categoryName
                            }`} onClick={() => fetchProducts(category.id)}>
                            {category.categoryName}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
