import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductCard() {
    const {id}=useParams();
    const [product,setProduct]=useState('');
    function getProducts(id){
        fetch(`http://localhost:3004/products/${id}`)
      .then((response)=>{
        if(!response.ok){
            throw new Error("Unexpected Server Response");
        }
        response.json()})
      .then((data)=>{
        setProduct(data);
      })
      .catch((error)=>console.log(error)
    );
    }
  return (
    <div className="card" style="width: 18rem;">
  <div className="card-body">
    <h5 className="card-title">{product.name}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{product.price}</h6>
    <p className="card-text">{product.description}</p>
  </div>
</div>
  )
}

export default ProductCard