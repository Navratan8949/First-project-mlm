import React, { useState, useRef } from 'react'
import './AllDeposite.css'
import RotateLeftIcon from '@mui/icons-material/RotateLeft';

const AllDeposite = () => {
    const [input1, setInput1] = useState(true)
    const [input2, setInput2] = useState(true)
    const [input3, setInput3] = useState(true)

    const [Search1, setSearch1] = useState()
    const [Search2, setSearch2] = useState()




    const handleReset = (event) => {
        event.preventDefault();
        setInput1(false);
        setInput2(false);
        setInput3(false);

    }

    const handleSearch = () => {
        setSearch1(input1)
        setSearch2(input2)
    }

    return (
        <div className='AllDeposite'>
            <h2 className='heading'>All Deposite</h2>
            <div className="Table-div">
                <div className="input-first-row">
                    <div className="input-first">
                        <h1>Pick a start date:</h1>
                        <input type="date"
                            value={input1} onChange={(e) => setInput1(e.target.value)}
                        />
                    </div>
                    <div className="input-first">
                        <h1>Pick a end date:</h1>
                        <input type="time" value={input2} onChange={(e) => setInput2(e.target.value)} />
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

                    <button className='Search' onClick={handleSearch}>Search Now</button>
                    <button className='Reset'
                        onClick={handleReset}
                    >Reset <RotateLeftIcon /> </button>
                </div>

                <div className="Four-button">
                    <button className='Radius-button1'>PDF</button>
                    <button className=''>Excel</button>
                    <button className=''>CSV</button>
                    <button className='Radius-button2'>Print</button>
                </div>
                <div className="table">
                    <table >
                        <tr>
                            <th>SR. No.</th>
                            <th>Amount</th>
                            <th>Image</th>
                            <th>Status</th>
                            <th>Message</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>

                        <tr>
                            <td >{Search1}</td>
                            <td>100</td>
                            <td>Image1.jpg</td>
                            <td>Active</td>
                            <td>Sample message 1</td>
                            <td>26/9/23</td>
                            <td>{Search2}</td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>100</td>
                            <td>Image2.jpg</td>
                            <td>InActive</td>
                            <td>Sample message 2</td>
                            <td>27/9/23</td>
                            <td>5:00:00 PM</td>
                        </tr>



                    </table>
                </div>
            </div>
        </div>
    )
}

export default AllDeposite
