import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Sidebar from './components/sidebar/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="Content">
      <Sidebar/>

    </div>
  
    
  )
}

export default App
