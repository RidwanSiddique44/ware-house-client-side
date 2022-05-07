
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/sharedPages/Header/Header';
import Home from './components/mainPages/Home/Home';
import Notfound from './components/mainPages/Notfound/Notfound';
import SignIn from './components/registerPages/SignIn/SignIn';
import SignUp from './components/registerPages/SignUp/SignUp';
import Blogs from './components/mainPages/Blogs/Blogs';
import Footer from './components/sharedPages/Footer/Footer';
import Loading from './components/sharedPages/Loading/Loading';
import RequireAuth from './components/registerPages/RequireAuth/RequireAuth';
import Inventory from './components/mainPages/Inventory/Inventory';
import Details from './components/mainPages/ProductDetails/Details';
import AddProducts from './components/mainPages/AddProducts/AddProducts';
import Myproducts from './components/mainPages/Myproducts/Myproducts';
import Allitem from './components/mainPages/Allitem/Allitem';

function App() {
  return (
    <div className="App">
      {/* --------header component------------- */}
      <Header></Header>
      {/*----------- All routes --------------- */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/loading" element={<Loading></Loading>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/allitem' element={<Allitem></Allitem>}></Route>
        <Route path="/inventory" element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path="/inventory/:inventoryId" element={
          <RequireAuth>
            <Details></Details>
          </RequireAuth>
        }></Route>
        <Route path="/addproduct" element={
          <RequireAuth>
            <AddProducts></AddProducts>
          </RequireAuth>
        }></Route>
        <Route path="/myproduct" element={
          <RequireAuth>
            <Myproducts></Myproducts>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
      {/*---------- footer component -------------- */}
      <Footer></Footer>
    </div>
  );
}

export default App;
