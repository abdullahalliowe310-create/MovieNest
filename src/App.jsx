import { useState } from 'react'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Slider from './Component/Slider'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Slider/>
      <Footer/>
   
    </>
  )
}

export default App
