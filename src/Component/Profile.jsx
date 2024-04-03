import React, { useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import './Profile.css'

const Profile = () => {
    const [button1, setButton1] = useState(true)
    const [button2, setButton2] = useState(false)
    const [button3, setButton3] = useState(false)

    return (
        <div className='Profile'>
            <div className="Black-box">
                <h1 className='Prfile-heading'>My Profile</h1>
                <div className="underline"></div>
                <div className="button-div1">
                    <div className="button-3">

                        <button onClick={() => {
                            setButton1(true);
                            setButton2(false);
                            setButton3(false);
                        }}>Personal Data</button>
                        <button onClick={() => {
                            setButton1(false);
                            setButton2(true);
                            setButton3(false);
                        }}>Refereal Link</button>
                        <button onClick={() => {
                            setButton1(false);
                            setButton2(false);
                            setButton3(true);
                        }}>Change Password</button>
                        <div className="underline-1"></div>

                    </div>

                    <div className="inner-container-div">
                        {button1 && (
                            <div className="Personal-Data">
                                <p className='Personal-heading'>Personal Details</p>
                                <div className="inputs">
                                    <h3>User ID</h3>
                                    <input className='personal-input' type="text" />
                                    <h3 >Expiry Date</h3>
                                    <input className='personal-input' type="text" placeholder="Unlimited" />
                                    <h3>Full Name</h3>
                                    <input className='personal-input' type="text" />
                                    <h3>Email</h3>
                                    <input className='personal-input' type="text" />
                                    <h3>Mobile Number</h3>
                                    <input className='personal-input' type="text" />
                                </div>
                                <button className='personal-button'>Edit Name</button>

                            </div>
                        )}
                    </div>


                    {button2 && (
                        <div className="Black-box-1">
                            <div className="button-div2">
                                <div className="Personal-Data-1">
                                    <h3 className='Referral-heading'>Referral Link</h3>
                                    <div className="link-1">https://deep.com/register?id=63be505e76bb22053eff15d7 <ContentCopyIcon sx={{ color: 'skyblue', cursor: 'pointer' }} /> </div>
                                </div>
                            </div>
                        </div>


                    )}

                    {button3 && (
                        <div className='Profile-1'>

                            <div className="Personal-Data-2">
                                <p className='Personal-heading-1'>Change Password</p>
                                <div className="inputs">
                                    <h3 className='change-password-heading'>Old Password :</h3>
                                    <input className='personal-input-1' type="text" placeholder='Old Password' />
                                    <h3 className='change-password-heading' > New Password :</h3>
                                    <input className='personal-input-1' type="text" placeholder="New Password" />
                                    <h3 className='change-password-heading'>Confirm Password :</h3>
                                    <input className='personal-input-1' type="text" placeholder='Confirm Password' />

                                </div>
                                <button className='personal-button-1'>Edit Name</button>

                            </div>
                        </div>

                    )}
                </div>
            </div>
        </div>
    )
}

export default Profile
