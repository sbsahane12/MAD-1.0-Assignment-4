import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import PageNotFound from './views/404/404';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path:'/about',
    element: <About />
  },
  {
    path:'/contact',
    element:<Contact/>
  },
  {
    path:"*",
    element:<PageNotFound/>
  }
])


root.render(<RouterProvider router={router}/>)
