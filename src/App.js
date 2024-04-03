// import Profile from './Component/Profile';
// import logo from './logo.svg';
// import './App.css'


// import Login from './UserPage/LoginPage';
// import Signup from './UserPage/Singup';
// import { Dashboard } from '@mui/icons-material';
import Layout from './Component/Layout';
import Sidebar from './Component/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllDeposite from './Section-in-Sections/AllDeposite';
import ApprovedDeposite from './Section-in-Sections/ApprovedDeposite';
import RejectDeposite from './Section-in-Sections/RejectDeposite';
import InvestmentHistory from './Section-in-Sections/InvestmentHistory';
import AdminInvestmentHistory from './Section-in-Sections/AdminInvestmentHistory';
import MyInvestment from './Section-in-Sections/MyInvestment';
import FundTransfers from './Section-in-Sections/FundTransfers';
import UserTransferHistroy from './Section-in-Sections/UserTransferHistroy';
import AdminTransferHistory from './Section-in-Sections/AdminTransferHistory';
import AllUser from './Section-in-Sections/AllUser';
import ActiveUser from './Section-in-Sections/ActiveUser';
import InActiveUser from './Section-in-Sections/In-ActiveUser';
import BlockUser from './Section-in-Sections/BlockUser';
import MyDirectTeam from './Section-in-Sections/MyDirectTeam';
import ROIIncome from './Section-in-Sections/ROI-Income';
import LevelIncome from './Section-in-Sections/Level-Income';
import TotalIncome from './Section-in-Sections/Total-Income';
import RewardIncome from './Section-in-Sections/Reward-Income';
import WalletHistory from './Section-in-Sections/Wallet-History';
import SendRequest from './Section-in-Sections/Send-Request';
import Transation from './Sections/Transaction';
import Profile from './Component/Profile';
import PendingDeposite from './Section-in-Sections/PendingDeposite';
import AuthLayout from './Component/AuthLayout';
import Dashboard from './Component/DashBoard';
import Login from './Component/LoginPage';
import Signup from './Component/Singup';


// function isAuthenticated() {
//   const storedAccessToken = localStorage.getItem('access_token');
//   const expirationDate = new Date(localStorage.getItem('access_token_expiration'));
//   const date = new Date();

//   console.log(date);
//   console.log(expirationDate > date);
//   if (storedAccessToken && expirationDate > date) {

//       return true;
//   } else {

//       return false;
//   }
// }


function App() {
  return (
    <div>
      {/* <Backdrop/> */}

      <BrowserRouter>

        <Routes>

          <Route exact path={`/*`} element={<AuthLayout />} >
            <Route path='Login' element={<Login />} />
            <Route exa path='Signup' element={<Signup />} />
          </Route>


          <Route exact path='/*' element={<Layout />} >

            {/* <Route path='' element={<Dashboard />} /> */}
            <Route path='' element={<Dashboard />} />
            <Route path='Dashboard' element={<Dashboard />} />
            <Route path='AllDeposite' element={<AllDeposite />} />
            <Route path='ApprovedDeposite' element={<ApprovedDeposite />} />
            <Route path='PendingDeposite' element={<PendingDeposite />} />
            <Route path='RejectDeposite' element={<RejectDeposite />} />
            <Route path='InvestmentHistory' element={<InvestmentHistory />} />
            <Route path='AdminInvestmentHistory' element={<AdminInvestmentHistory />} />
            <Route path='MyInvestment' element={<MyInvestment />} />
            <Route path='FundTransfers' element={<FundTransfers />} />
            <Route path='UserTransferHistroy' element={<UserTransferHistroy />} />
            <Route path='AdminTransferHistory' element={<AdminTransferHistory />} />
            <Route path='AllUser' element={<AllUser />} />
            <Route path='ActiveUser' element={<ActiveUser />} />
            <Route path='InActiveUser' element={<InActiveUser />} />
            <Route path='BlockUser' element={<BlockUser />} />
            <Route path='MyDirectTeam' element={<MyDirectTeam />} />
            <Route path='ROIIncome' element={<ROIIncome />} />
            <Route path='LevelIncome' element={<LevelIncome />} />
            <Route path='TotalIncome' element={<TotalIncome />} />
            <Route path='RewardIncome' element={<RewardIncome />} />
            <Route path='alletHistory' element={<WalletHistory />} />
            <Route path='SendRequest' element={<SendRequest />} />
            <Route path='Transation' element={<Transation />} />
            <Route path='Profile' element={<Profile />} />

          </Route>

        </Routes>

      </BrowserRouter>

      {/* <Login/> */}
      {/* <Signup /> */}





      {/* <Profile/> */}




    </div >
  );
}

export default App;