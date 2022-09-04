
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Deatil from "./pages/Deatil";
import Favorite from "./pages/Favorite";
import Home from './pages/Home'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Privat from "./routes/Privat";
import Public from "./routes/Public";
import { UserProvider } from "./context/UserContext";



//sistemi kurraken once plan yaptim
//gerekli olan comprent srouter context ve route dosyasuactim
//once sayfalar yaptim
// router olusturuy 
//public be privat kullanici zonlendirmek icin login olzsa veya primer olmazsa dieger yerlere giremi\
//privat router icn contex zpisini kuracagiy
//usercontex kurduk





function App() {
  return (

  
    <Router>
      <UserProvider>
     
   <Routes>

   <Route path='/detail/:id' element={<Deatil/>}/>
   <Route path="/" element={<Home/>}/>

   <Route element={<Public/>}>
   <Route path="/login" element={<Login/>}/>
   <Route path='/register' element={<Register/>}/>
   </Route>
   
   
   <Route  element ={<Privat/>}>
   <Route path='/favorites/:id' element={<Favorite/>}/>
   <Route path='/profile' element={<Profile/>}/>
   <Route path='/cart' element={<Cart/>}/>
   </Route>
   </Routes>
   </UserProvider>
    </Router>
   
  );
}

export default App;
