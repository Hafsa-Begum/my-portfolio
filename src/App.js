import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from "./Pages/About/About";
import ContactMe from "./Pages/ContactMe/ContactMe";
import Home from './Pages/Home/Home/Home';
import Portfolio from "./Pages/Portfolio/Portfolio";
import Services from "./Pages/Services/Services";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/home' element={<Home></Home>} />
          <Route path='/about' element={<About></About>} />
          <Route path='/services' element={<Services></Services>} />
          <Route path='/portfolio' element={<Portfolio></Portfolio>} />
          <Route path='/contactMe' element={<ContactMe></ContactMe>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
