import React, { useRef } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Registerr = () => {
 //burada userContexden caguirdik 
 //form on submitte biy register gondeririy yaten oda obje
 //onSubmit={()=>register(inputRef.curent)}
  const {register} = useContext(UserContext)




  /**
 *  const nameRef =useRef()
  const surnameRef =useRef()
  const emailRef =useRef()
  const passwordRef=useRef()
 */

  // burada input ref icine atariz
  const inputRef = useRef({
    name: "",
    surname: "",
    email: "",
    password: ""
    
    
  });

  //biy burad degisikliklerde name ve value aliriy bunuda const atariy kolay olsun diye
  //burada dikkat etmek gereken namae ler onmeli

  const handle = (e) => {
    /** burda genelde kullanilan ama
 * ref vermeyi unutmq
 *  console.log(
        nameRef.current.value,
        surnameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
        )
 */
//burada nameyi dikkat et cunku burda input taki nameleri alizoruz
    const name = e.target.name;
    const value = e.target.value;
    //inputef alifimiyda current gelir
    //curret yaptigim degisiklik burada name uyerinden cekeriz
    inputRef.current[name] = value;
    //consol flase true cevir isAuthen
    //console.log(inputRef.current)
    //console.log(inputRef.current);
  };

  return (
    <div>
      <div className="register">
        <div className="sol"></div>
        <div className="sag">
          <form onSubmit={(e)=>register(e,inputRef.current)} >
            <div className="formm">
              <div>
                <label>Name</label>
                <br />
                <input type="text" /*ref={nameRef}*/ name="name" onChange={handle}/>
              </div>
              <div>
                <label htmlFor=""> surname</label>
                <br />
                <input type="text" name="surname" onChange={handle} />
              </div>
              <div>
                <label htmlFor="">email</label>
                <br />
                <input type="email" name="email" onChange={handle} />
              </div>
              <div>
                <label htmlFor="">Password</label>
                <br />
                <input type="password" name="password" onChange={handle} />
                <br />
                <br />
              </div>
              <div className="ddd">
                <button type="submit" onSubmit={(e)=>register(e,inputRef.current)}>
                  Signup
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registerr;
