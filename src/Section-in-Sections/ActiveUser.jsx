import React, { useState } from 'react'
import './AllDeposite.css'
import RotateLeftIcon from '@mui/icons-material/RotateLeft';

const ActiveUser = () => {
    const [input1, setInput1] = useState(true)
    const [input2, setInput2] = useState(true)
    const [input3, setInput3] = useState(true)

    const handleReset = (event) => {
        event.preventDefault();
        setInput1(false);
        setInput2(false);
        setInput3(false);
    }

    return (
        <div className='AllDeposite'>
            <h2 className='heading'>Active User</h2>
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

                <div className="Second-input">
                    <h1>Search By status</h1>
                    <select value={input3} onChange={(e) => setInput3(e.target.value)}>
                        <option value="Select">---Select---</option>
                        <option >Pending</option>
                        <option >Reject</option>
                        <option >Apporve</option>
                    </select>
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
                            <th>User Name</th>
                            <th>User ID</th>
                            <th>Mobile Number</th>
                            <th>Email ID </th>
                            <th>Direct Member </th>
                            {/* <th>Total Member </th>
              <th>Sponsor ID </th>
              <th>Sponsor Name </th>
              <th> Joined Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Block/UnBlock No results found</th> */}


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

export default ActiveUser
