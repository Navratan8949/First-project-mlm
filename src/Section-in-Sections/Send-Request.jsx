import React, { useState } from 'react'
import './AllDeposite.css'
import RotateLeftIcon from '@mui/icons-material/RotateLeft';

const SendRequest = () => {

    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')

    const handleReset = (event) => {
        event.preventDefault();
        setInput1('');
        setInput2('');
    }

    return (
        <div className='AllDeposite' style={{ height: '100vh' }}>
            <h2 className='heading'>Withdraw Amount (Available Balance : 0)</h2>
            <div className="Table-div">
                <div className="input-first-row">
                    <div className="input-first">
                        <h1>Amount:</h1>
                        <input type="text" placeholder='0' value={input1} onChange={(e) => setInput1(e.target.value)} />
                    </div>
                    <div className="input-first">
                        <h1>Crpto wallet Address:</h1>
                        <input type="text" placeholder='Enter Correct Wallet Address Here' value={input2} onChange={(e) => setInput2(e.target.value)} />
                    </div>
                </div>

                {/* <div className="Second-input">
                    <h1>Genral Search </h1> */}
                {/* <select >
                        <option value="Select">---Select---</option>
                        <option >Pending</option>
                        <option >Reject</option>
                        <option >Apporve</option>
                    </select> */}
                {/* <input type="Address" placeholder='Name , User ID.' />
                </div> */}
                <div className="center-button" style={{ marginBottom: '80px' }}>

                    <button className='Search'>Withdraw</button>
                    <button className='Reset' onClick={handleReset}>Reset <RotateLeftIcon /> </button>
                    {/* <div className="searchnow"></div> */}
                </div>

                {/* <div className="Four-button">
                    <button className='Radius-button1'>PDF</button>
                    <button className=''>Excel</button>
                    <button className=''>CSV</button>
                    <button className='Radius-button2'>Print</button>
                </div> */}
                {/* <div className="table" style={{background:'#C3A177', paddingBottom:'9vh'}}>
                    <table >
                        <tr>
                            <th>SR. No.</th>
                            <th style={{paddingLeft:'0px'}}>From</th>
                            <th>To User Name</th>
                            <th>To User ID</th>
                            <th>Amount</th>
                            <th>Date</th>

                        </tr>

                        <tr>
                            <td>No Result Found</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                       
                    </table>
                </div> */}
            </div>
        </div>
    )
}

export default SendRequest;
