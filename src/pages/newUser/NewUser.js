import React from 'react'
import './newUser.css'

export default function NewUser() {
  return (
    <div className='newUser'>
        <h1 className='newUserTitle'>Add New User</h1>
        <form className='newUserForm'>
            <div className='userFormData'>
                <label>User Name</label>
                <input type='text' placeholder='Enter User Name' />
            </div>
            <div className='userFormData'>
                <label>Full Name</label>
                <input type='text' placeholder='Enter Full Name' />
            </div>
            <div className='userFormData'>
                <label>Email</label>
                <input type='text' placeholder='Enter Email' />
            </div>
            <div className='userFormData'>
                <label>Password</label>
                <input type='password' placeholder='Enter Password' />
            </div>
            <div className='userFormData'>
                <label>Phone</label>
                <input type='text' placeholder='Enter Phone' />
            </div>
            <div className='userFormData'>
                <label>Address</label>
                <input type='text' placeholder='Enter Address' />
            </div>


            <div className='userFormData'>
                <label>Gender</label>
                <div className='userGender'>
                    <input type='radio' name='gender' id='male' value='male' />
                    <label for='male'>Male</label>
                    <input type='radio' name='gender' id='female' value='female' />
                    <label for='female'>Female</label>
                </div>
            </div>


            <div className='userFormData'>
                <label>Active</label>
                <select className='userActive' name='active' id='active'>
                    <option value='yes'>yes</option>
                    <option value='no'>no</option>
                </select>
            </div>

            <button className='userFormBtn'>Add User</button>

        </form>
    </div>
  )
}
