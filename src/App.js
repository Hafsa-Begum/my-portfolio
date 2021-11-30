import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import ContactMe from "./Pages/ContactMe/ContactMe";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import Home from './Pages/Home/Home/Home';
import Portfolio from "./Pages/Portfolio/Portfolio";
import Services from "./Pages/Services/Services";
import WebsiteDetails from "./Pages/WebsiteDetails/WebsiteDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/home' element={<Home></Home>} />
          <Route path='/about' element={<About></About>} />
          <Route path='/services' element={<Services></Services>} />
          <Route path='/blogs' element={<Blogs></Blogs>} />
          <Route path='/portfolio' element={<Portfolio></Portfolio>} />
          <Route path='/portfolio/:id' element={<WebsiteDetails></WebsiteDetails>} />
          <Route path='/contactMe' element={<ContactMe></ContactMe>} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
