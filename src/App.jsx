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
<div className="d-flex rowContent">
<div className="sidebar">
<Sidebar />

</div>
<div className="react">
<ReactComponent className=""/>

</div>
</div>


    

    </div>
  
    
  )
}

export default App
