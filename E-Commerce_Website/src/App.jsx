import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import ProductList from './Components/ProductList'
import SingleProduct from './Components/SingleProduct'
import Register from './Components/Register'
import Cart from './Components/Cart'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SingleProduct />
    </>
  )
}

export default App
