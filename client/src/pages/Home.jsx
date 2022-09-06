import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import Filter from '../components/Filter'
import Products from '../components/Products'

const Home = () => {
 
const payload ={

}


  const getProducts = ()=>{
//burada dikkat edilecek sy karsi ratadafta post onmeli yoks ahata aliriy
    axios.post('http://localhost:8006/products',payload)
    .then(res=>console.log(res))
  
   }

  useEffect(()=>{
    getProducts()
  },[])



  return (
     <div>
      <Header/>
      <div className='grid'>
      < Filter/>
      <Products/>
      </div>
     



</div>

)
    
    
  
}

export default Home