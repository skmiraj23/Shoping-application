import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './product.css';

const Product = () => {
    const [allData, setAllData] = useState([]);
    const [myData, setMyData] = useState([]);
    const [status, setStatus] = useState("");
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const ITEMS_PER_PAGE = 4;
    const { categoryName } = useParams();

    const getData = async () => {
        const url = "https://fakestoreapi.com/products";
        try {
            setLoading(true);
            const response = await axios.get(url);
            setAllData(response.data);
        } catch (error) {
            console.error(error.message);
            setStatus(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if (!categoryName || categoryName === 'all') {
            setMyData(allData);
        } else {
            const filtered = allData.filter(item => item.category === categoryName);
            setMyData(filtered);
        }
        setPage(1);
    }, [categoryName, allData]);

    const goToPreviousPage = () => {
        if (page > 1) setPage(page - 1);
    };

    const goToNextPage = () => {
        if (page < Math.ceil(myData.length / ITEMS_PER_PAGE)) setPage(page + 1);
    };

    const paginatedData = myData.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
    const totalPages = Math.ceil(myData.length / ITEMS_PER_PAGE);

    return (
        <>
            <div className='buttons'>
                <NavLink className='filter-btn' to="/products/category/all">All</NavLink>
                <NavLink className='filter-btn' to="/products/category/men's clothing">Men's Clothing</NavLink>
                <NavLink className='filter-btn' to="/products/category/women's clothing">Women's Clothing</NavLink>
                <NavLink className='filter-btn' to="/products/category/jewelery">Jewelry</NavLink>
                <NavLink className='filter-btn' to="/products/category/electronics">Electronics</NavLink>
            </div>

            {loading ? (
                <div className="loading">Loading...</div>
            ) : status ? (
                <div className="error">{status}</div>
            ) : (
                <>
                    <div className="product-grid">
                        {paginatedData.map(({ title, category, image, price, id }) => (
                            <div className="product-card" key={id}>
                                <NavLink to={`/products/${id}`}>
                                    <div className="card-img-container">
                                        <img src={image} alt={title} className="product-img" />
                                    </div>
                                    <div className="card-content">
                                        <h5 className="product-title">{title}</h5>
                                        <p className="product-category">{category}</p>
                                        <p className="product-price">$ {price}</p>
                                    </div>
                                </NavLink>
                            </div>
                        ))}
                    </div>

                    <div className="pagination">
                        <button onClick={goToPreviousPage} disabled={page <= 1}>⬅ Prev</button>
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                className={page === i + 1 ? "active" : ""}
                                onClick={() => setPage(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button onClick={goToNextPage} disabled={page >= totalPages}>Next ➡</button>
                    </div>
                </>
            )}
        </>
    );
};

export default Product;
