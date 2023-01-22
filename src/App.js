import './App.css';
// import Body from './body';
import {Footer} from './footer';
import {Login} from './login';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
// import Products from './products-UI';


function App() {
  return (
<>
<Navbar/>

<Outlet/>
<Footer/>




</>
  );
}

export default App;
