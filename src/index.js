import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Body from './body';
import BoilersSpares from './Boilers-spares';
import Boiler from './Boiler';
import Hardware from './Hardware';
import Industrial from './Industrial';
import Grocery from './Grocery';
import { Login } from './login';
import { UserRegister } from './register';
const root = ReactDOM.createRoot(document.getElementById('root'));
const routing=createBrowserRouter([ 
{
    path:"/",
    element:<App/>,  
    children:[
        {
        path:"/",
        element:<Body/>
    },
        {
        path:"/boilerS",
        element:<BoilersSpares/>
    },
        {
        path:"/Boiler",
        element:<Boiler/>
    },
        {
        path:"/hardware",
        element:<Hardware/>
    },
        {
        path:"/industrial",
        element:<Industrial/>
    },
        {
        path:"/grocery",
        element:<Grocery/>
    },
        {
        path:"/login",
        element:<Login/>
    },
        {
        path:"/signUp",
        element:<UserRegister/>
    },

]
}

])

root.render(
    <RouterProvider router={routing}/>
);









