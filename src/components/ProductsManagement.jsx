import React, { useState, useEffect } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]); 
    
    const mockProducts = [
        { id: 1, name: 'Product 1', category: 'Category A', price: 10, stock: 20 },
        
    ];

    useEffect(() => {
        
        
    }, []); 

    const handleAddProduct = (newProduct) => {

        setProducts([...products, newProduct]);
    };

    const handleEditProduct = (productId, updatedProduct) => {

        const updatedProducts = products.map((product) =>
            product.id === productId ? updatedProduct : product
        );
        setProducts(updatedProducts);
    };

    const handleDeleteProduct = (productId) => {

        const filteredProducts = products.filter((product) => product.id !== productId);
        setProducts(filteredProducts);
    };

    return (
        <div className="products">
            <h2>Products Management</h2>
            <p>List of Products</p>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <span>{product.name}</span>
                        <span>({product.category})</span>
                        <span>${product.price}</span>
                        <span>{product.stock}</span>
                        <button onClick={() => handleEditProduct(product.id, /* updated product data */)}>Edit</button>
                        <button onClick={() => handleDeleteProduct(productId)}>Delete</button>
                    </li>
                ))}
            </ul>
            <form onSubmit={(e) => {
                e.preventDefault();
                const newProduct = { /* create new product object from form data */ };
                handleAddProduct(newProduct);
            }}>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default Products;
