import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NowShowingPage from './Pages/NowShowingPage'
import ComingSoonPage from './Pages/ComingSoonPage'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Cinema from './Pages/Cinema'
import Services from './Pages/Services'
import BookTickets from './Pages/BookTickets'
import ShowTime from './Pages/ShowTime'

const App = () => {
  return (
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/nowshowing' element={<NowShowingPage />} />
    <Route path='/comingsoon' element={<ComingSoonPage />} />
    <Route path='/cinema' element={<Cinema />} />
    <Route path='/services' element={<Services />} />
    <Route path='/booktickets' element={<BookTickets />} />
    <Route path='/showtime' element={<ShowTime />} />

   </Routes>
   <Footer />
   </BrowserRouter>
  )
}

export default App