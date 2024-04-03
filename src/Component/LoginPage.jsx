import './LoginPage.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  return (
    <div id='Main-login-1'>
      <div id="stars" />
      <div id="stars2"> </div>
      <div id="stars3" />
      <div id="Login-box-1">
        <h1 id='Login-heading'>User Panel</h1>
        <div id="flex-input-1">
          <input type="Address" placeholder='Enter Email' required autoComplete='off'/>
          <input type="password" placeholder='Enter Password'required autoComplete='off' />
        </div>
        <div id="Forget-1">Forget Password</div>
        <button id='Button'>Submit</button>
        <div id="Sing-up-1">

          <p id='Account'>Don't Have an Account ?  </p>
          <p id='color' onClick={() => navigate('/Signup')}> Sing Up</p>
        </div>

      </div>

    </div>
  )
}

export default Login;