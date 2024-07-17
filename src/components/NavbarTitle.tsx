import './NavbarTitle.css'
import {Link} from "react-router-dom"
import Pdf from './Pages/resume.pdf'
function TitleNav(){
    return (
        <div className = "container">
    <div className="nav-title">
        <nav className="nav-title">
            <Link to ="/" className="link">Home</Link>
            <div className="vl"></div>
            <Link to ="/About" className="link">About</Link>
            <div className="vl"></div>
            <a href = "https://albear-yang.github.io/" className="link">Projects</a>
            <div className="vl"></div>
            <a className = "link" href = {Pdf} target = "_blank">Resume</a>


        </nav>
    
  </div>
  </div>)
}
/*           <Link to ="/Resume" className="link">Food Reviews</Link>
<Link to ="/Resume" className="link">Recipes</Link>
<Link to ="/Resume" className="link">Misc</Link>
<Link to ="/Resume" className="link">Contact</Link>*/
export default TitleNav;