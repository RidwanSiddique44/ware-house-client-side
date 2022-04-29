
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/sharedPages/Header/Header';
import Home from './components/mainPages/Home/Home';
import Notfound from './components/mainPages/Notfound/Notfound';
import SignIn from './components/registerPages/SignIn/SignIn';
import SignUp from './components/registerPages/SignUp/SignUp';
import Blogs from './components/mainPages/Blogs/Blogs';
import Footer from './components/sharedPages/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* --------header component------------- */}
      <Header></Header>
      {/*----------- All routes --------------- */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
      {/*---------- footer component -------------- */}
      <Footer></Footer>
    </div>
  );
}

export default App;
