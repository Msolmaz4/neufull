import React from 'react'
import {Link} from 'react-router-dom'

const Header = ({payload,getProducts}) => {
  
const handle =(e)=>{
  const name =e.target.name
  payload[name] = e.target.value
}

  return (
    <div className='header'>

  <div className='search'>
    <input type="search"  name='keyword' onChange={handle} />
    <button onClick={getProducts}>Search</button>

  </div>
  <div className='log'>
  <Link to='/login' style={{padding:'10px'}}>
    <button>
    Login
    </button>
    
   </Link>
  <Link to='/register' style={{padding:'10px'}}>  <button>
    Register
    </button></Link>
  </div >
 



    </div>
  )
}


export default Header
