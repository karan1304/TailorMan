import { useState } from 'react'
import './App.css'
import Topbar from './components/Topbar/Topbar'
import Hero from './components/Hero/Hero'
import Card from './components/Card/Card'
import BestSeller from './components/BestSeller/BestSeller'
import NewArrivals from './components/NewArrivals/NewArrivals'
import Video from './components/Video/Video'
import ShopByOccasion from './components/ShopByOccasion/ShopByOccasion'
import Newsletter from './components/Newsletter/Newsletter'
import Instashop from './components/InstaShop/Instashop'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Topbar/>
   <Hero/>
   <BestSeller/>
   <NewArrivals/>
   <Video/>
   <ShopByOccasion/>
   <Instashop/>
   <Newsletter/>
   <Footer/>  
   </>
  )
}

export default App
