import './App.css'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
import Project from './Pages/Project'

function App(){
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Project/>}/>
        </Routes>
      </Router>
    )
    


}

export default App;