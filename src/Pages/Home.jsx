import { useState } from 'react'

import NowShowing from '../Component/home/NowShowing'
import ComingSoon from '../Component/home/ComingSoon'
import Slider from '../Component/home/Slider'


function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <Slider />
      <NowShowing/>
      <ComingSoon/>
      
   
    </>
  )
}

export default Home
