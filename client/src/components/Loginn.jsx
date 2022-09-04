import React,{useRef ,useContext}from 'react'
import { UserContext } from '../context/UserContext'

 const Loginn = () => {

const {login} =useContext(UserContext)

const inputRef =useRef({
    email:'',
    password:''
})

const handl =(e)=>{
    e.preventDefault()
    const name =e.target.name
    const value =e.target.value
    inputRef.current[name] =value
}





  return (
    <div>
<div className="register">
        <div className="sol"></div>
        <div className="sag">
          <form onSubmit={(e)=>login(e,inputRef.current)} >
            <div className="formm">
             
              <div>
                <label htmlFor="">email</label>
                <br />
                <input type="email" name="email" onChange={handl} />
              </div>

              <div>
                <label htmlFor="">Password</label>
                <br />
                <input type="password" name="password" onChange={handl} />
                <br />
                <br />
              </div>
              <div className="ddd">
                <button type="submit" onSubmit={(e)=>login(e,inputRef.current)}>
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>




 

  )
}
export default Loginn 