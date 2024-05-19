import React from 'react';

function ProductForm() {
    const handle=(event)=>{
        const formData=new FormData(event.target);
        const product=Object.fromEntries(formData.entries());
        product.createdAt=new Date().toISOString().slice(0,10);
        fetch("http://localhost:3004/products",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                
            },
            body:JSON.stringify(product)

        })

        .then((data)=> console.log(data))
        .catch((error)=>{
            console.error("Error: ",error);
        })

    }
  return (
    <form className="row g-5" style={{"padding": "20px"}}>
      <div className="col-md-2">
        <label htmlFor="id" className="form-label">ID</label>
        <input type="text" className="form-control" id="id"/>
      </div>
      <div className="col-md-6">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name"/>
      </div>
      <div className="col-md-6">
        <label htmlFor="brand" className="form-label">Brand</label>
        <input type="text" className="form-control" id="brand"/>
      </div>
      <div className="col-md-4">
        <label htmlFor="category" className="form-label">Category</label>
        <select id="category" className="form-control">
          <option>Phone</option>
          <option>Laptop</option>
        </select>
      </div>
      <div className="col-md-2">
        <label htmlFor="inputprice" className="form-label">Price</label>
        <input type="text" className="form-control" id="inputprice"/>
      </div>
      <div className="col-md-6">
        <label htmlFor="description" className="form-label">Description</label>
        <input type="text" className="form-control" id="description"/>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary" onSubmit={handle}>Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
