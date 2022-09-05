// burda once temel yaoyi kurariy
//1
import { createContext, useEffect, useState } from "react";
//5
import {useNavigate} from 'react-router-dom'

import axios from 'axios'
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


const navi = useNavigate()
//7

const [users,setUsers] = useState()
const [favs,setFavs] = useState([])


  //3  token && checkAuth(token) flase gleirse kontrol yapilmaz
  useEffect(()=>{
    
    const token =localStorage.getItem('token')
     token && checkAuth(token)


  },[])

//4 registeri kurduk simdi bunu axios indirdik sonra axuiosla baglanti kuracagiy backend
      //burada backende register kayit uyantisina dikkat et yoksa hata verir
      //burad obje gonderriy bunuda regisdter gonderriy

      const register = (e,user)=>{
        //e yapariy sayfa yenilenmesin ,comsoldan korol yapariy gelip geledigini
        console.log('register',user)
        e.preventDefault()
        axios.post('http://localhost:8006/user/register',user)
      //respons da gonderip komntrol ederiz
        .then(res=>{
          console.log('response',res)
          navi('/')
        })
        .catch(err=>{
          console.log('error',err)
          alert('register front')
        })

      }


//6 login

const login =(e,user)=>{
  e.preventDefault()
  axios.post('http://localhost:8006/user/login',user)
  .then(res=>{
    console.log('response',res)
    //isAuth burada truaza ceyirebiliry token vare cunku 
    //datadan  goruyoruy ne gonderildigini bunlarui burada turtmak icin usrver favs const acalim
    setIsAuthenticated(true)
    setUsers(res.data)
    setFavs(res.data.favs)
    //tokeni gomerim
    localStorage.setItem('token',res.data.token)
    navi('/')
  })
}



//1
    return(
        <UserContext.Provider value={{ isAuthenticated ,register,login,users,favs}}>
            {children}
        </UserContext.Provider>
    )
}