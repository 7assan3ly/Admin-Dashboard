import React from 'react'
import './editUser.css'
import { PersonOutline, CalendarMonth, PhoneIphone, Mail, LocationOn, FileUpload } from '@mui/icons-material';
import { Link } from 'react-router-dom'


export default function EditUser() {
    return (
        <div className='editUser'>
            <div className='editUserHeads'>
                <h2 className='editUserTitle'>
                    Edit User
                </h2>
                <Link to="/newUser">
                    <button className='userAddBtn'>
                        Add User
                    </button>
                </Link>
            </div>

            <div className='editUserSections'>
                <div className='editUserShow'>
                    <div className='userShowTop'>
                        <img className='userShowImg' src='https://via.placeholder.com/50' alt='' />
                        <div className='userShowTopInfo'>
                            <span className='userInfoName'>Hassan ALy</span>
                            <span className='userInfoTitle'>Frontend Developer</span>
                        </div>
                    </div>


                    <div className='userShowBtm'>
                        <h3 className='userBtmTitle'>
                            Account Details
                        </h3>

                        <div className='userBtmDet'>
                            <PersonOutline className='userBtmIcon' />
                            <span className='userBtmDetI'>7assan3ly</span>
                        </div>

                        <div className='userBtmDet'>
                            <Mail className='userBtmIcon' />
                            <span className='userBtmDetI'>7assan@3ly.com</span>
                        </div>

                        <h3 className='userBtmTitle'>
                            Personal Information
                        </h3>
                        <div className='userBtmDet'>
                            <CalendarMonth className='userBtmIcon' />
                            <span className='userBtmDetI'>1 Sep 97</span>
                        </div>
                        <div className='userBtmDet'>
                            <PhoneIphone className='userBtmIcon' />
                            <span className='userBtmDetI'>+201064583993</span>
                        </div>
                        <div className='userBtmDet'>
                            <LocationOn className='userBtmIcon' />
                            <span className='userBtmDetI'>Egypt</span>
                        </div>

                    </div>
                </div>



                <div className='editUserEdit'>
                    <h2 className='userEditTitle'>Edit User</h2>

                    <div className='userEditContainer'>
                        <div className='userEditleft'>
                            <form className='editUserForm'>
                                <div className='userFormItem'>
                                    <label>Username</label>
                                    <input type='text' placeholder='7assan3ly' />
                                </div>
                                <div className='userFormItem'>
                                    <label>Full Name</label>
                                    <input type='text' placeholder='Hassan ALy' />
                                </div>
                                <div className='userFormItem'>
                                    <label>Email</label>
                                    <input type='text' placeholder='7assan@3ly.com' />
                                </div>
                                <div className='userFormItem'>
                                    <label>phone</label>
                                    <input type='number' placeholder='+201064583993' />
                                </div>
                                <div className='userFormItem'>
                                    <label>Address</label>
                                    <input type='text' placeholder='Egypt' />
                                </div>
                            </form>
                        </div>

                        <div className='userEditRight'>
                            <div className='userRightTop'>
                                <img className='userRightImg' src='https://via.placeholder.com/150' alt='' />
                                <label htmlFor='file'>
                                    <FileUpload className='userFile' />
                                </label>
                                <input type='file' id='file' style={{ display: 'none' }} />
                            </div>

                            <div className='userRightBtm'>
                                <button className='userRightBtn'>Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
