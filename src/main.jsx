import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShopContext from './Context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <ShopContext>
    <App />
  </ShopContext>,
)
