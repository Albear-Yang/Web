import "./blog.css";
import "./Header.css";
import { useState } from 'react';


function Header(){
  const [date, setDate] = useState(new Date());
  return <div className="container">
  <header className = "top">
      <text>
        {date.toDateString()}
      </text>

      <div>
        <a className = "top-child" id = "top-title" href = "https://albear-yang.github.io/Web/">[  Albear Network  ]</a>
      </div>
      <div>
          Search
      </div>
      
  </header> </div>
    
}

export default Header;