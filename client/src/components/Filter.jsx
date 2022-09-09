import React from 'react'
//butona seracj getProducts calismasini istiyoruz
//burada getproducts cekmeyi unutma
const Filter = ({payload,getProducts}) => {


const handleChange =(e)=>{
  //burada dikkat et name unutuyoesun
  const name =e.target.name
  payload[name] =e.target.value

}


  return (



    <div >

     <h1>Filter </h1> 
      <p>Category</p>
      <select name='taxonomy_id'  onChange={handleChange}>
        <option selected disabled> Category</option>
        <option value="">Alle Catogry</option>
        <option value="1">Accessories</option>
        <option value="2">Art & Collectibles</option>
        <option value="3"> Bags & Purses</option>
        <option value="4">Bath & Movies </option>
        <option value="5"> Books, Movies & Music</option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <p>Price</p>
      <div className='num'>
      <input style={{width:'50px'}} type="Number"  placeholder='Min' name='min_price' onChange={handleChange}/> -
      <input  style={{width:'50px'}} type='Number' placeholder='Max' name='max_price' onChange={handleChange}></input>
      </div>
      
      <button style={{margin:'5px'}} onClick={getProducts}>Search</button>
     


    </div>
  )
}

export default Filter