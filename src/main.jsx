import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Projects from './pages/Projects';
import Menu from './pages/Menu';
import Navbar from './components/Navbar';


const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "projects",
    element: <Projects/>
  },

  {
    path: "about",
    element: <About />
  },

  {
    path: "contact",
    element: <Contact />
  },

  {
    path: "menu",
    element: <Menu />
  }


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
