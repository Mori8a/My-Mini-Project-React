import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';

export default function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        if (!data || !data.products) {
          throw new Error('No products found in response');
        }
        
        console.log('Fetched data:', data);
        setProducts(data.products);
        
        const uniqueCategories = ['all', ...new Set(data.products.map(product => product.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  let filteredProducts;
  if (selectedCategory === 'all') {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter(product => product.category === selectedCategory);
  }

  return (
    <div>
      <h1 style={{ color: 'orange' }}>Product List:</h1>
      <label htmlFor="category-filter" style={{ color: 'yellow' }}>Filter by category:</label>
      <select
        id="category-filter"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map(category => (
          <option key={category} value={category} style={{ color: 'yellow' }}>
            {category}
          </option>
        ))}
      </select>
      <ProductList products={filteredProducts} />
    </div>
  );
}
