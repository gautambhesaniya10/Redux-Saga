import './App.css';
import {  Routes, Route, } from 'react-router-dom';
import Home from './pages/Home';
import AddEditUser from './pages/AddEditUser';
import UserInfo from './pages/UserInfo';
import About from './pages/About';
import Header from './components/Header';
import { ToastContainer} from 'react-toastify';
import Login from './pages/Login';
import PrivateRoute from './service/PrivateRoute';


function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route  path='/addUser' element={<AddEditUser />} />
        <Route  path='/login' element={<Login />} />
        <Route  path='/editUser/:id' element={<AddEditUser />} />
        <Route  path='/userInfo/:id' element={<PrivateRoute><UserInfo /></PrivateRoute>} />
        <Route  path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
