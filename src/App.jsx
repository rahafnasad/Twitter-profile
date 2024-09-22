import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Sidebar from './components/sidebar/Sidebar'
import ReactComponent from './components/reactComponent/ReactComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="Content">
      <div className="row rowContent">
        <div className="col-lg-3 sidebar">
          <Sidebar/>
        </div>
        <div className="col-lg-5 react">
          <ReactComponent/>
        </div>

      </div>

    </div>
  
    
  )
}

export default App
