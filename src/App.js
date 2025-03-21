// App.js
import './index.css';
import BgVideo from './components/BgVideo';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom';

// Create a layout component that includes elements common to all routes

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true, // This makes it the default route for "/"
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "about",
          element: <AboutMe />,
        },
        {
          path: "skills",
          element: <Skills />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

function Root() {
  const location = useLocation();

  // Check if the current path is home to conditionally render the video background
  const isHomePage = location.pathname === "/" || location.pathname === "/home";

  return (
    <div>
      {isHomePage && <BgVideo />} {/* Render BgVideo only on the Home page */}
      {isHomePage && <Navbar />}
      <Outlet /> {/* This is where the child route components will render */}
    </div>
  );
}

export default App;
