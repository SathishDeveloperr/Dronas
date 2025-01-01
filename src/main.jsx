import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { createBrowserRouter,RouterProvider,Route } from 'react-router-dom';
import ProductDetail from './Pages/PrductDetail.jsx'


AOS.init();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products",
    element: <ProductDetail />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
