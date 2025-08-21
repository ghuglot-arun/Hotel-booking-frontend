import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import AllRooms from './pages/AllRooms'
import RoomDetail from './pages/RoomDetail'
import MyBookings from './pages/MyBookings'

const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner")

  return (
    <>
      {!isOwnerPath && <Navbar />}
      <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/rooms' element={<AllRooms />}/>
          <Route path='/rooms/:id' element={<RoomDetail />} />
          <Route path='/my-booking' element={<MyBookings />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
