import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Home = () => {
 
const payload ={

}


  const getProducts = ()=>{

    axios.post('http://localhost:8006/products',payload)
    .then(res=>console.log(res))
  
   }

  useEffect(()=>{
    getProducts()
  },[])



  return (
     <div>jjjjj



</div>

)
    
    
  
}

export default Home