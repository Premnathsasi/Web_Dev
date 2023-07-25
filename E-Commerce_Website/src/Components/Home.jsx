import React from 'react'
import Navbars from './Pages/Navbar'
import Announcement from './Pages/Announcement'
import Slider from './Pages/Slider'
import Categories from './Pages/Categories'
import Products from './Pages/Products'
import NewsLetter from './Pages/NewsLetter'
import Footer from './Pages/Footer'

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbars />  
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default Home