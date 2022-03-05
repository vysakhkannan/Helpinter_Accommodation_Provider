import React from 'react'
import './dashboard.css'
import Cards from '../../components/cards/Cards'
import Recent from '../../components/recentBooking/Recent'

const Dashboard = () => {
  return (
    <>
      <Cards />
      {/* Booking details */}
      <Recent />

    </>

  )
}

export default Dashboard