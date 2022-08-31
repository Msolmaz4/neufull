// burda once temel yaoyi kurariy
//1
import { createContext, useEffect, useState } from "react";
//1
export const UserContext = createContext()

//1
export const UserProvider = ({children})=>{
 // 4 burda genel yapiyi kurmus oluruy
 //burada kendimiz kontrol edecegiy basta manuel
 //buradan privar router gideriz ve isAuth cekeriz
 const [ isAuthenticated,setIsAuthenticated] = useState(true)

    //2 bunu temel olarka yaz sonra useeffrct kur tokenui cagir
    //tokenle gonderirirz cunku backende kontrol yapmak icin
    const checkAuth = (token)=>{


    }
  //3  token && checkAuth(token) flase gleirse kontrol yapilmaz
  useEffect(()=>{
    
    const token =localStorage.getItem('token')
     token && checkAuth(token)


  },[])



//1
    return(
        <UserContext.Provider value={{ isAuthenticated }}>
            {children}
        </UserContext.Provider>
    )
}