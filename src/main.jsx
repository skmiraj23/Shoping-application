import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartData } from './Context/CartContext.jsx'
import { ToastContainer} from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <CartData>
    <App />
    <ToastContainer />
  </CartData>
  </StrictMode>,
)
