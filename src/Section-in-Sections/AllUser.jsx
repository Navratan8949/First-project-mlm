import React, { useState } from 'react'
import './AllDeposite.css'
import RotateLeftIcon from '@mui/icons-material/RotateLeft';

const AllUser = () => {

    const [input1, setInput1] = useState(true)
    const [input2, setInput2] = useState(true)
    const [input3, setInput3] = useState('')
    const [input4, setInput4] = useState(true)

    const handleReset = (event) => {
        event.preventDefault();
        setInput1(false);
        setInput2(false);
        setInput3('');
        setInput4(false);
    }

    return (
        <div className='AllDeposite'>
            <h2 className='heading'>All User</h2>
            <div className="Table-div">
                <div className="input-first-row">
                    <div className="input-first">
                        <h1>Pick a start date:</h1>
                        <input type="date" value={input1} onChange={(e) => setInput1(e.target.value)} />
                    </div>
                    <div className="input-first">
                        <h1>Pick a end date:</h1>
                        <input type="date" value={input2} onChange={(e) => setInput2(e.target.value)} />
                    </div>
                </div>

                {/* <div className="Second-input">
                    <h1>Search By status</h1>
                    <select >
                        <option value="Select">---Select---</option>
                        <option >Pending</option>
                        <option >Reject</option>
                        <option >Apporve</option>
                    </select>
                </div> */}

                <div className="Second-input-1" style={{ display: 'flex' }}>
                    <div className="User-search">
                        <h1>User Name </h1>
                        {/* <select >
                        <option value="Select">---Select---</option>
                        <option >Pending</option>
                        <option >Reject</option>
                        <option >Apporve</option>
                    </select> */}
                        <input type="Email" placeholder='Name , User ID, Sponsor ID, Sponsor Name' value={input3} onChange={(e) => setInput3(e.target.value)} />
                    </div>
                    <div className="Second-input-2" style={{ marginLeft: '10px' }}>
                        <h1>Search By status</h1>
                        <select value={input4} onChange={(e) => setInput4(e.target.value)}>
                            <option value="Select">---Select---</option>
                            <option >Pending</option>
                            <option >Reject</option>
                            <option >Apporve</option>
                        </select>
                    </div>
                </div>
                <div className="center-button">

                    <button className='Search'>Search Now</button>
                    <button className='Reset' onClick={handleReset}>Reset <RotateLeftIcon /> </button>
                    {/* <div className="searchnow"></div> */}
                </div>

                <div className="Four-button">
                    <button className='Radius-button1'>PDF</button>
                    <button className=''>Excel</button>
                    <button className=''>CSV</button>
                    <button className='Radius-button2'>Print</button>
                </div>
                <div className="table" style={{ background: '#C3A177', height: '24vh' }}>
                    <table >
                        <tr>
                            <th>SR. No.</th>
                            <th style={{ paddingLeft: '0px' }}>From</th>
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
                </div>
            </div>
        </div>
    )
}

export default AllUser