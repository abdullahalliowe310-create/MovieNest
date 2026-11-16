import { useState } from 'react'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Slider from './Component/Slider'
import NowShowing from './Component/NowShowing'
import ComingSoon from './Component/ComingSoon'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Slider/>
      <NowShowing/>
      <ComingSoon/>
      <Footer/>
   
    </>
  )
}

export default App
