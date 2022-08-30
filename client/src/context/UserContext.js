// burda once temel yaoyi kurariy
//1
import { createContext, useEffect, useState } from "react";


//1
export const UseProvider = ({children})=>{
 // 4 burda genel yapiyi kurmus oluruy
 //burada kendimiz kontrol edecegiy basta manuel
 const [ isAuthenticated,setIsAuthenticated] = useState(false)

    //2 bunu temel olarka yaz sonra useeffrct kur tokenui cagir
    //tokenle gonderirirz cunku backende kontrol yapmak icin
    const checkAuth = ()=>{


    }
  //3  token && checkAuth(token) flase gleirse kontrol yapilmaz
  useEffect(()=>{
    
    const token =localStorage.getItem('token')
     token && checkAuth(token)


  },[])



//1
    return(
        <UserContext.Provide>
            {children}
        </UserContext.Provide>
    )
}