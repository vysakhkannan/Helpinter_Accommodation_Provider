import React from 'react'
import './recent.css'
import Customers from '../../components/recentCustomers/Customers'

const Recent = () => {
  return (
    <div className="details">
        <div className="recentOrders">
            <div className="cardHeader">
                <h2>Recent Booking</h2>
                <a href="#" className='btn'>View All</a>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Accommodation</td>
                        <td>Amount</td>
                        <td>Method</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>User1</td>
                        <td>Blue Dine</td>
                        <td>$1200</td>
                        <td>Paypal</td>
                    </tr>
                    <tr>
                        <td>User1</td>
                        <td>Blue Dine Blue Dine</td>
                        <td>$1200</td>
                        <td>Paypal</td>
                    </tr>
                    <tr>
                        <td>User1</td>
                        <td>Blue Dine</td>
                        <td>$1200</td>
                        <td>Paypal</td>
                    </tr>
                    <tr>
                        <td>User1</td>
                        <td>Blue Dine</td>
                        <td>$1200</td>
                        <td>Paypal</td>
                    </tr>
                    <tr>
                        <td>User1</td>
                        <td>Blue Dine</td>
                        <td>$1200</td>
                        <td>Paypal</td>
                    </tr>
                    <tr>
                        <td>User1</td>
                        <td>Blue Dine</td>
                        <td>$1200</td>
                        <td>Paypal</td>
                    </tr>
                    <tr>
                        <td>User1</td>
                        <td>Blue Dine</td>
                        <td>$1200</td>
                        <td>Paypal</td>
                    </tr>
                    <tr>
                        <td>User1</td>
                        <td>Blue Dine</td>
                        <td>$1200</td>
                        <td>Paypal</td>
                    </tr>
                    <tr>
                        <td>User1</td>
                        <td>Blue Dine</td>
                        <td>$1200</td>
                        <td>Paypal</td>
                    </tr>
                    <tr>
                        <td>User1</td>
                        <td>Blue Dine</td>
                        <td>$1200</td>
                        <td>Paypal</td>
                    </tr>
                    <tr>
                        <td>User1</td>
                        <td>Blue Dine</td>
                        <td>$1200</td>
                        <td>Paypal</td>
                    </tr>

                </tbody>
            </table>
        </div>

        {/* Recent Customers */}
        <Customers/>
    </div>
  )
}

export default Recent