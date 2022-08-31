import { Outlet ,Navigate} from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"

const Privat = () => {

//BURADA once isAu cagirdik sonra fals vey tru gire azar yaptik false lofine g;nderrir

/**burad fals eoldugundan hep logine gider
 * const { isAuthenticated } =useContext(UserContext)
  if(isAuthenticated){
    return <Outlet/>
  }

  return <Navigate to='/login'/>
 * 
 */


  const { isAuthenticated } =useContext(UserContext)
  if(isAuthenticated){
    return <Outlet/>
  }

  return <Navigate to='/login'/>

  
}

export default Privat