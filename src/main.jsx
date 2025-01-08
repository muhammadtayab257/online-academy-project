import { createRoot } from 'react-dom/client'
import './index.css'
// bootstrap files
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js"
import App from './App.jsx'

createRoot(document.getElementById('mainDiv')).render(
    <App />
)
