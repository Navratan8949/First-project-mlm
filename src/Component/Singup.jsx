import './Singup.css'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()

  return (
    <div id='singup-main-div'>

      <div id="stars" />
      <div id="stars2"> </div>
      <div id="stars3" />



      <div id="main-box">
        <div id="left-div">
          <h1 id='Heading'>Join the</h1>
          <h1 id='Heading'>T A Trading</h1>

          <ul>
            <li>1. Sign Up</li>
            <li>2. Email Verification</li>
            <li>3. Login</li>
            <li>4. Get Purchease datails via details</li>
            <li>5. See transation History via Deshboard</li>
          </ul>

        </div>

        <div id="right-div">
          <h1 id='Right-Heading'>Sign up</h1>

          <div id="two-input-1">
            <input type="text" placeholder='Sponser ID' />
            <input type="text" placeholder='Sponser Name' />
          </div>

          <div id="button-in-input">
            <input type="Email" placeholder='E-Mail' />
            <button>Verify</button>
          </div>

          <div id="two-input-2">
            {/* <input type="text" placeholder='Name' /> */}
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='User Name' />
          </div>

          <div id="two-input-3">
            <input type="text" placeholder='Password' />
            <input type="text" placeholder='Confirm Password' />
          </div>

          <div id="two-input-4">
            <input type="Phone number" placeholder='Phone Number' />
          </div>

          <label htmlFor="101">
            <div id="checkbox"  >
              <input type="checkbox" id='101' />I agree all statement in <a href=""  >Terms of service</a>
            </div>
          </label>

          <div id="sign-up">
            <button id='Signup'>Sign up</button>
          </div>

          <div id="last">
            <p >Already have an account?</p><a href="" onClick={() => navigate('/Login')}>Login Now</a>
          </div>



        </div>
      </div>
    </div>
  )
}

export default Signup;
