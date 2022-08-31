import React,{useRef} from "react";

const Registerr = () => {


  const nameRef =useRef()
  const surnameRef =useRef()
  const emailRef =useRef()
  const passwordRef=useRef()













 // burada input ref icine atariz
  /** const inputRef =useRef({
        email:'',
        password:'',
        name:'',
        surname:''
    })
   *  */ 
 //biy burad degisikliklerde name ve value aliriy bunuda const atariy kolay olsun diye
 //burada dikkat etmek gereken namae ler onmeli 

 const handle =(e)=>{
e.preventDefault()
    console.log(
        nameRef.current.value,
        surnameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
        )

   
   /** const  name =e.target.value
    const value =e.target.value
    //inputef alifimiyda current gelir
    //curret yaptigim degisiklik burada name uyerinden cekeriz
    inputRef.current[name]= value
    //consol flase true cevir isAuthen
    //console.log(inputRef.current)
    *  */
      
    


 }
  

  return (
    <div>
      <div className="register">
        <div className="sol"></div>
        <div className="sag">
          <form onSubmit={handle}>
            <div className="formm">
              <div>
                <label>Name</label>
                <br />
                <input type="text"  ref={nameRef} onChange={handle}/>
              </div>
              <div>
                <label htmlFor=""> surname</label>
                <br />
                <input type="text" ref={surnameRef} onChange={handle}/>
              </div>
              <div>
                <label htmlFor="">email</label>
                <br />
                <input type="text"  ref={emailRef} onChange={handle}/>
              </div>
              <div>
                <label htmlFor="">Password</label>
                <br />
                <input type="text" ref={passwordRef} onChange={handle}/>
                <br />
                <br />
              </div>
             
            </div>
            <div className="ddd">
                <button type='submit' onC={handle}>Signup</button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registerr;
  