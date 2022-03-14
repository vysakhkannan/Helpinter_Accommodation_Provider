import React from 'react'
import {
    Routes,
    Route
} from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import Booking from './pages/booking/Booking'
import Settings from './pages/settings/Settings'
import Messenger from './pages/messenger/Messenger'
import Accommodation from './pages/accommodation/Accommodation'
import AddAccommodation from './pages/addAccommodation/AddAccommodation'
import EditAccommodation from './pages/editAccommodation/EditAccommodation'

const Routers = () => {
  return (
        <Routes>
            <Route path='/' element={<Dashboard />}/>
            <Route path='/booking' element={<Booking />}/>
            <Route path='/messenger' element={<Messenger />}/>
            <Route path='/settings' element={<Settings />}/>
            <Route path='/accommodation' element={<Accommodation />} />
            <Route path='/accommodation/:accomID' element={<EditAccommodation />} />
            <Route path='/accommodation/add_accommodation' element={<AddAccommodation/>} />
            <Route/>
        </Routes>
  )
}

export default Routers