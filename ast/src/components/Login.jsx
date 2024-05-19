import React from 'react'
import { useContext,useState } from 'react'
import { DataContext } from '../context/DataProvider'
function Login() {
  const setAccount =useContext(DataContext);
  const [username,setUsername]=useState('');
  const handleSubmit=()=>{
    setAccount({username:username});
  }
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: '400px' }}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control" id="username" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary w-100" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Login