import React from 'react'
import './DashBoard.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Dashboard = () => {
    return (
        <div data-aos="fade-down" className='Dashboard'>
            <div className="mainheading">
                <div className="leftheading">
                    <div className="flex" style={{ display: 'flex', gap: '10px' }}>
                        <h1 style={{ color: 'white' }}>Welcome to</h1>
                        <h1 style={{ color: "#d8af72" }}> T D Trading</h1>
                    </div>

                </div>
                <div className="rightbutton">
                    <button>Deposite USDT</button>
                </div>
            </div>
            <div className="container1">
                <div className="leftcontainer1">
                    <h3>Earning Capping</h3>
                    <div className="YourInvestmentdiv">
                        <div className="YourInvestment">
                            Your Investment
                        </div>
                        <div className="rupee">
                            $100
                        </div>
                    </div>
                    <h3>$ 0 earned of $ 200</h3>
                    <div className="blankline"></div>
                </div>


                <div className="Rightcontainer1">
                    <h3>Reward Income</h3>
                    <div className="YourInvestmentdiv" >
                        <div className="YourInvestment">
                            Total Investment
                        </div>
                        <div className="rupee">
                            $100
                        </div>
                    </div>
                    <h3>$ 0 earned of $ 6000</h3>
                    <div className="blankline"></div>
                </div>
            </div>
            <div className="container2">
                <div className="row1">
                    <div className="container-inner-row1">
                        <p className='box-header'> General Detail</p>
                        <p>User ID:</p>
                        <p>Name:</p>
                        <p>Sponser ID:</p>
                        <p>Sponser Name:   <span style={{ marginLeft: '40px', color: 'white' }}>Unlimited</span>
                        </p>

                    </div>
                    <div className="container-inner-row1-in-1">
                        <div className="container-inner-row1-in-1-row1">

                            <h3 className='Referal-Heading'> Referal Link</h3>
                            <img src="https://650a60c5de9fe87c0350db76--lovely-maamoul-ab5114.netlify.app/QRCode.png" alt="" />
                        </div>
                        <div className="container-inner-row1-in-1-row2">
                            <h3 >Referral Link</h3>
                            <div className="linkscopy">
                                <div className="links">
                                    <p>https://deep.com/register?</p>
                                    <p>id=63be505e76bb22053eff15d7</p>
                                </div>
                                <div className="copy">
                                    <ContentCopyIcon />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="row2">
                    <div className="container-inner-row2">
                        <p className='box-header'> Member Detail</p>
                        <p>Total Menber: <span style={{ marginLeft: '74px', color: 'white' }}>NaN</span></p>
                        <p>Active Member: <span style={{ marginLeft: '58px', color: 'white' }}>NaN</span></p>
                        <p>In-Active Member: <span style={{ marginLeft: '40px', color: 'white' }}>NaN</span></p>
                        {/* <p>Sponser Name:   <span style={{ marginLeft: '40px', color: 'white' }}>Unlimited</span>
                        </p> */}

                    </div>

                    <div className="container-inner-row2-in-1">
                        <p className='box-header'> Member Detail</p>
                        <p>Total Withdraw :</p>


                    </div>
                </div>

                <div className="row3">
                    <div className="container-inner-row3">
                        <p className='box-header'> Income Detail</p>
                        <p>Today ROI Income:-</p>
                        <p>Total ROI Income:-</p>
                        <p>Leval Income:-</p>
                        <p>Total Income:-
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;