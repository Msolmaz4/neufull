import React from 'react'
import { useState } from 'react'

function Register() {


  const [name,setName]= useState('')
  const [surname,setSurname] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [pascon,setPascon] = useState('')

  const submit =(e)=>{
    e.preventDefault()

    if(password === pascon){
      console.log({
        name:name,
        surname:surname,
        email:email,
        password:password,
        pascon:pascon
  
      })
    }else{
      alert('password pascon aesit degil;')
    }
  
  }






  return (
    <div>

    <form onSubmit={submit}>
        <label > name</label>
        <input type="text" 
        value={name} 
        onChange={(e)=>setName(e.target.value)}  />

        <label > surname</label>    
        <input type="text" 
        value={surname} 
        onChange={(e)=>setSurname(e.target.value)} 
        />

        <label >email </label>
        <input type="email" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)} 

        />

        <label >password</label>
        <input type="password" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)} 

        />

        <label> password control</label>
        <input type="password" 
        value={pascon}
        onChange={(e)=>setPascon(e.target.value)} 

        />

         <button onClick={submit}> Signup</button>
       
     


    </form>




    </div>
  )
}

export default Register