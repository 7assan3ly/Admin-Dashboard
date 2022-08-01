import Sidebar from "./components/sidebar/Sidebar";
import Topnav from "./components/topnav/Topnav";
import './app.css'
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Users from "./pages/users/Users";
import EditUser from "./pages/editUser/EditUser";
import NewUser from "./pages/newUser/NewUser";
import Products from "./pages/products/Products";
import NewProduct from "./pages/newProduct/NewProduct";
import ProductInfo from "./pages/productInfo/ProductInfo";

function App() {
  return (
    <Router className="App">
      <Topnav />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/users" element={<Users/>}/>
          <Route path="/editUser/:userId" element={<EditUser/>}/>
          <Route path="/newUser" element={<NewUser/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/productInfo/:productId" element={<ProductInfo/>}/>
          <Route path="/newProduct" element={<NewProduct/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
