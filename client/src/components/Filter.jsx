import React from 'react'

const Filter = () => {
  return (
    <div >

     <h1>Filter </h1> 
      <p>Category</p>
      <select >
        <option selected disabled> Category</option>
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
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <p>Price</p>
      <div className='num'>
      <input style={{width:'50px'}} type="Number" /> -
      <input  style={{width:'50px'}} type='Number'></input>
      </div>
      <button style={{margin:'5px'}}>Search</button>
     


    </div>
  )
}

export default Filter