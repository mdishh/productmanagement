import React, { useState,useEffect,useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../context/DataProvider';
import ProductForm from './ProductForm';
function Product() {
    const account=useContext(DataContext);
    const [products,setProducts]=useState(null)
    function getProducts(){
        fetch("http://localhost:3004/products")
      .then((response)=>{
        if(!response.ok){
            throw new Error("Unexpected Server Response");
        }
        response.json()})
      .then((data)=>{
        setProducts(data);
      })
      .catch((error)=>console.log(error)
    );
    }
    function showForm(){
        // setContent(<ProductForm product={product}/>);
    }
    const viewProduct=(id)=>{
        <Link to={`/view/${id}`}></Link>
    }
    useEffect(() => getProducts(),[]);
    
  return (
    <div>
        <Link to='/create' type="button" className="btn btn-primary me-2">Create</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Created At</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {products ? (
            products.map((product, index) => (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.createdAt}</td>
                {account} =='admin' && {
                    <td style={{ width: "10px", whiteSpace: "nowrap" }}>
                    <button type="button" onClick={showForm} className="btn btn-primary btn-sm me-2">Edit</button>
                    <button type="button" className="btn btn-danger btn-sm">Delete</button>
                  </td>
                }
                <td style={{ width: "10px", whiteSpace: "nowrap" }}>
                    <button type="button" onClick={viewProduct(product.id)} className="btn btn-primary btn-sm me-2">View</button>
                  </td>
                
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">Loading...</td>
            </tr>
          )}
            </tbody>
        </table>
    </div>
  )
}

export default Product