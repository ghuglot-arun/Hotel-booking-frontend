import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import AllRooms from './pages/AllRooms'
import RoomDetail from './pages/RoomDetail'
import MyBookings from './pages/MyBookings'
import HotelReg from './components/HotelReg'
import Layout from './pages/hotelOwner/Layout'
import Facilities from './pages/Facilities'
import Contact from './pages/Contact'

const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner")

  return (
    <>
      {!isOwnerPath && <Navbar />}
      {false && <HotelReg />}
      <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/rooms' element={<AllRooms />}/>
          <Route path='/rooms/:id' element={<RoomDetail />} />
          <Route path='/my-booking' element={<MyBookings />} />
          <Route path='/owner' element={<Layout />} />
          <Route path='/facilities' element={<Facilities />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
