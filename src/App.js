import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import Header from './Pages/Shared/Header/Header';
import Blogs from './Pages/Blogs/Blogs';
import Reviews from './Pages/Home/Reviews/Reviews';
import Products from './Pages/Products/Products';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Purchase from './Pages/Purchase/Purchase';
import AllUsers from './Pages/Dashboard/AllUsers';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Payment from './Pages/Dashboard/Payment/Payment';
import Profile from './Pages/Dashboard/Profile/Profile';
function App() {
  return (
    <div>
      <Header>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='blogs' element={<Blogs />}></Route>
          <Route path='reviews' element={<Reviews />}></Route>
          <Route path='products' element={<Products />}></Route>
          <Route path='purchase/:id' element={<RequireAuth><Purchase /></RequireAuth>}></Route>
          <Route path='dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
            <Route index element={<MyOrders />}></Route>
            <Route path='add-review' element={<AddReview />}></Route>
            <Route path='all-users' element={<AllUsers />}></Route>
            <Route path='payment/:id' element={<Payment/>}></Route>
            <Route path='profile' element={<Profile/>}></Route>
          </Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='signup' element={<SignUp />}></Route>
        </Routes>
      </Header>
      <ToastContainer/>
    </div>
  );
}

export default App;
