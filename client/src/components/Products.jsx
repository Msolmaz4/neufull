import React from 'react'
import Cart from './Cart'



    
    function Products({data,page,decreas,increas}) {
    

  
   
  return(
    <div>
      <div>
      {
        data?.map((el)=>(
          <div>
            
            <Cart
           data={el} />
          </div>
        ))
      }
      </div>
     

      <div> 
         <button onClick={increas}>ileri</button>
        {page}
        <button onClick={decreas}>geri</button>
        </div>
    </div>

  )
}
    
    
    
    
   


export default Products