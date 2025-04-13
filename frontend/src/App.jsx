import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Form } from 'react-router-dom'
import Home from './views/Home'
import Contact from './views/contact'
import About from './views/About'
import Collections from './views/collections'
import Product from './views/product'
import Cart from './views/cart'
import Login from './views/Login'
import PlaceOrder from './views/placeOrder'
import Orders from './views/orders'
import Navbar from './components/Navbar'
import Footer from './components/footer'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collections' element={<Collections/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product/:productId ' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
        <Route path='/orders' element={<Orders/>}/>
      </Routes>
      <Footer />

    </div>
  )
}

export default App
