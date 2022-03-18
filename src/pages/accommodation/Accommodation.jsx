import React from 'react'
import './accommodation.css'
import {BsSearch} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import APIService from '../../apiservice/APIService'


const Accommodation = () => {

  const[accommodations, setAccommodation] = useState('')
  const[loading, setLoading] = useState(false)

  useEffect (() => {
    APIService.getAccommodation()
    .then(resp => setAccommodation(resp.data))
    .catch(error =>{
      console.log(error)
    })
  },[])

  return (
    <div className='accommodation'>
        <div className="content">
          <div className="accomHeader">
            <h2>Accommodation</h2>
            <ul class="breadcrumb">
              <li><a href="#">Home</a></li>
              <li><a href="#">Accommodation</a></li>
            </ul>
          </div>
          <div className="accomDetails">
            <div className="detailsHeader">
              <h4>List of Accommodation</h4>

              <div className='insideHeader'>
                <div className="search">
                  <label>
                    <input type="text" placeholder='Search here' />
                    <BsSearch className='ion-icon' />
                  </label>
                </div>
                <Link to="add_accommodation" className='btn'>Add + </Link>
              </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Address</td>
                        <td>Province</td>
                        <td>city</td>
                        <td>Accommodation Type</td>
                        <td>Rent/month</td>
                        <td>Available</td>
                        <td>Update</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {accommodations && accommodations.map((accom) => {
                      return(
                        <tr>
                      <td>{accom.name}</td>
                      <td>{accom.name}</td>
                      <td>{accom.province}</td>
                      <td>{accom.city}</td>
                      <td>{accom.accommodation_type}</td>
                      <td>{accom.id}</td>
                      <td>
                        <select name="is_available" id="is_available_id">
                          <option value="volvo">Select</option>
                          <option value="saab">True</option>
                          <option value="mercedes">False</option>
                        </select>
                      </td>
                      <td><Link className='btn' to="1">Update</Link></td>
                      <td><a className='btn' href="">Delete</a></td>
                  </tr>
                      )
                    })}
                </tbody>
                <RotatingLines width="100" strokeColor="#FF5733" strokeWidth="1" />
            </table>
            <div class="pagination">
              <a href="#">&laquo;</a>
              <a href="#">1</a>
              <a href="#" class="active">2</a>
              <a href="#">3</a>
              <a href="#">4</a>
              <a href="#">5</a>
              <a href="#">6</a>
              <a href="#">&raquo;</a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Accommodation