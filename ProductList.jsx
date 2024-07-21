import React from 'react';

export default function ProductList({ products }) {
  console.log('Products:', products); 

  return (
    <ul>
      {products.map(product => (
        <li style={{ listStyleType: 'circle' }} key={product.id}> {}
          <h3>{product.name}</h3> {}
          <p>Price: ₪{product.price}</p> {}
          {product.description && <p>Description: {product.description}</p>} {}
          {product.brand && <p>Brand: {product.brand}</p>} {}
          <p style={{textDecoration:'underline'}}>Category: {product.category}</p> {}
        </li>
      ))}
    </ul>
  );
}
