import React from 'react'
import './AllDeposite.css'
import InvestmentDialog from './InvestmentDialog';

const MyInvestment = () => {
    return (
        <div className='AllDeposite'>
            <h2 className='heading'>Investment </h2>
            <div className="Table-div-1" style={{height:'70vh', marginBottom:'20px', borderRadius:'0px'}}>

                <div className="input-first-1" style={{ color: 'white', fontSize:'15px' }}>
                    <h3>Avialable Balance</h3>
                    <div className="black-div1" style={{ width: '100%', height: '44px', fontSize:'17px', paddingLeft:'5px', paddingTop:'10px',background:'#E9ECEF',color:'black', alignItems:'center' }}>0</div>
                </div>
                <div className="input-second-2" style={{ color: 'white', fontSize:'15px' }}>
                    <h3>Wallet Address/Username</h3>
                    <input type="text" placeholder='Enter Your Wallet Address or Username' style={{ width: '100%', height: '44px', fontSize:'15px', paddingLeft:'5px' }} />
                </div>
                <div className="input-third-3" style={{ color: 'white', fontSize:'15px' }}>

                    <h3>Amount $</h3>
                    <input type="number" placeholder='Amount' style={{ width: '100%', height: '44px', fontSize:'17px', borderRadius:'5px', paddingLeft:'5px' }} />
                </div>

                <div className="center-button" style={{ marginBottom: '30px' }}>


                    {/* <button className='Reset'>Process Request  </button> */}
                    <InvestmentDialog/>
                    {/* <div className="searchnow"></div> */}
                </div>
            </div>



        </div>
    )
}

export default MyInvestment;
