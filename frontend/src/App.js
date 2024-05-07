import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from "./Components/Assets/banner_mens.png"
import women_banner from "./Components/Assets/banner_women.png"
import kid_banner from "./Components/Assets/banner_kids.png"
import axios from 'axios'
import { useEffect } from 'react';
 

function App() {

  useEffect(()=>{
    axios.get('https://shopping-website-0bz9.onrender.com/')
    .then((response)=>console.log(response))
  })

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/electronics' element={<ShopCategory category="electronics"/>}/>
        <Route path='/groceries' element={<ShopCategory category="groceries"/>}/>
        <Route path='/clothes' element={<ShopCategory banner={kid_banner} category="clothes"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
