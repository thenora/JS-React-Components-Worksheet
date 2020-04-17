import React from 'react';
import './Product.css';

const Product = (props) => {
  
  
  return (
    <img src={props.imgUrl} className="product_img" alt={props.name} />
    );
};

// imgUrl: 
// name: 
// price: 
// salePrice: 


export default Product;