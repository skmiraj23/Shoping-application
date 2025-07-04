import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './singlepost.css';
import { MyCart } from '../Context/CartContext';
import { toast } from 'react-toastify';

const SinglePost = () => {
  const { id } = useParams();
  const [data, setData] = useState("");

  const { item, setItem } = MyCart();

  const getPost = async (url) => {
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost(`https://fakestoreapi.com/products/${id}`);
  }, [id]);

  const handleclick = () => {
    const productId = Number(id);
    const existingItemIndex = item.findIndex(product => product.id === productId);

    if (existingItemIndex !== -1) {
      const updatedCart = [...item];
      updatedCart[existingItemIndex].quantity += 1;
      setItem(updatedCart);
    } else {
      setItem([...item, { id: productId, title: data.title, price: data.price, image: data.image, quantity: 1 }]);
      toast.success('Item added to cart');
    }
  };

  return (
    <div className="single-container">
      <div className="single-card">
        <div className="single-image">
          <img src={data.image} alt={data.title} />
        </div>
        <div className="single-details">
          <h2>{data.title}</h2>
          <p className="desc">{data.description}</p>
          <p className="category">Category: <span>{data.category}</span></p>
          <p className="price">Price: <span>${data.price}</span></p>
          <button className="add-btn" onClick={handleclick}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
