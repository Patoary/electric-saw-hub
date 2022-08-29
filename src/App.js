import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import Header from './Pages/Shared/Header/Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/deshboard'></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='signup' element={<SignUp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
