import React from 'react'
import {
    BrowserRouter, 
    Routes,
    Route
} from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import Booking from './pages/booking/Booking'
import Settings from './pages/settings/Settings'
import Messenger from './pages/messenger/Messenger'
import Accommodation from './pages/accommodation/Accommodation'

const Routers = () => {
  return (
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/booking' element={<Booking/>}/>
            <Route path='/messenger' element={<Messenger/>}/>
            <Route path='/settings' element={<Settings/>}/>
            <Route path='/accommodation' element={<Accommodation/>}/>
        </Routes>
  )
}

export default Routers