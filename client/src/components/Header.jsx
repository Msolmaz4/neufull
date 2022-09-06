import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>

  <div className='search'>
    <input type="search" />
    <button>Search</button>

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
