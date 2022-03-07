import React from 'react'
import './addaccommodation.css'

const AddAccommodation = () => {
  return (
    <div className='accommodationAdd'>
        <div className="content">
            <div className="accomHeader">
                <h2>Create Accommodation</h2>
                <ul class="breadcrumb">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Accommodation</a></li>
                  <li><a href="#">Add</a></li>

                </ul>
            </div>
            <div className="accomFormArea">
                <h4>Fill the form correctly</h4>
                <div className="formArea">
                    <div className="part">
                        <div className="area1">
                            <form action="">
                                <table>
                                    <tr>
                                        <td>
                                            <label htmlFor="accomName_id">Accommodation Name:</label>
                                            <br />
                                            <input id='accomName_id' type="text" placeholder="Enter name.."/>
                                        </td>
                                        <td>
                                            <label htmlFor="accomType_id">Accommodation Type:</label>
                                            <br />
                                            <select name="accomType" id="accomType_id">
                                                <option value="volvo">Select</option>
                                                <option value="saab">Saab</option>
                                                <option value="mercedes">Mercedes</option>
                                                <option value="audi">Audi</option>
                                            </select>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label htmlFor="province_id">Province:</label>
                                            <br />
                                            <select name="province_id" id="street_id">
                                                <option value="volvo">Select</option>
                                                <option value="saab">Saab</option>
                                                <option value="mercedes">Mercedes</option>
                                                <option value="audi">Audi</option>
                                            </select>

                                        </td>
                                        <td>
                                            <label htmlFor="province_id">City:</label>
                                            <br />
                                            <select name="province_id" id="street_id">
                                                <option value="volvo">Select</option>
                                                <option value="saab">Saab</option>
                                                <option value="mercedes">Mercedes</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td>
                                            <label htmlFor="zip_id">Zip Code:</label>
                                            <br />
                                            <input id='zip_id' type="number" placeholder="Enter zip code.."/>
                                        </td>
                                        <td>
                                            <label htmlFor="address_id">Address Line:</label>
                                            <br />
                                            <input id='address_id' type="text" placeholder="Enter address.." />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <label htmlFor="street_id">Street:</label>
                                            <br />
                                            <input id='street_id' type="text" placeholder="Enter street.." />
                                        </td>
                                        <td>
                                            <label htmlFor="rent_id">Phone number:</label>
                                            <br />
                                            <input id='rent_id' type="number" placeholder="Enter phone num.." />
                                        </td>
                                    </tr>
                                    <tr>
                                    <td>
                                        <label htmlFor="zip_id">Beds Available:</label>
                                        <br />
                                        <input id='zip_id' type="number" placeholder="Enter"/>
                                    </td>
                                    <td>
                                        <label htmlFor="zip_id">Beds Available:</label>
                                        <br />
                                        <input id='zip_id' type="number" placeholder="Enter"/>
                                    </td>
                                    </tr>

                                </table>
                            </form>
                        </div>
                        <div className="area2">
                            <table>
                                <tr>
                                        <td>
                                            <label htmlFor="rent_id">Rent/month:</label>
                                            <br />
                                            <input id='rent_id' type="number" placeholder="Enter amount.." />
                                        </td>
                                </tr>
                                <tr>
                                        <td>
                                            <label htmlFor="">Services:</label>
                                        </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" id="parking_id" name="parking" value="HTML"/>
                                        <label className='services' htmlFor="parking_id">Parking</label>
                                    </td>
                                    
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" id="parking_id" name="parking" value="HTML"/>
                                        <label className='services' htmlFor="parking_id">Smoking</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" id="heating" name="parking" value="HTML"/>
                                        <label className='services' htmlFor="heating_id">Heating</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" id="wifi_id" name="parking" value="HTML"/>
                                        <label className='services' htmlFor="wifi_id">Wifi</label>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="area3">
                        <label>Pictures :</label>
                        <div className="pictureUpload">
                            <div className="picture">
                                <label htmlFor="img1_id">Choose a cover image</label>
                                <input className='inputfile' type="file" id="img1_id" name="img" accept="image/*"/>
                            </div>
                            <div className="picture">
                                <label htmlFor="img2_id">Choose a image</label>
                                <input className='inputfile' type="file" id="img2_id" name="img" accept="image/*"/>
                            </div>
                            <div className="picture">
                                <label htmlFor="img3_id">Choose a image</label>
                                <input className='inputfile' type="file" id="img3_id" name="img" accept="image/*"/>
                            </div>
                            <div className="picture">
                                <label htmlFor="img4_id">Choose a image</label>
                                <input className='inputfile' type="file" id="img4_id" name="img" accept="image/*"/>
                            </div>
                            <div className="picture">
                                <label htmlFor="img5_id">Choose a image</label>
                                <input className='inputfile' type="file" id="img5_id" name="img" accept="image/*"/>
                            </div>
                        </div>
                    </div>
                    <div className="area4">
                        <a className='btn' href="">Cancel</a>
                        <a className='btn' href="">Save</a>
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default AddAccommodation