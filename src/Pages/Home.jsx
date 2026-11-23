import { useState } from 'react'
import Slider from '../Component/Slider'
import NowShowing from '../Component/NowShowing'
import ComingSoon from '../Component/ComingSoon'


function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <Slider/>
      <NowShowing/>
      <ComingSoon/>
      
   
    </>
  )
}

export default Home
