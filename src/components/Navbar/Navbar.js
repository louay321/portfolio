import { useState } from "react";
import { MenuItems } from "./MenuItems";
import {Button} from "../Button";
import "./Navbar.css";
import {Link} from "react-router-dom";

export default function Navbar(){
  const [clicked, setClicked] = useState(false);
  return (
    <nav className="NavbarItems">
    <Link to="/"><h1 className="navbar-logo">&lt;<span style={{"color":"#00FFBB"}}>/</span>ouay&gt;</h1></Link>
    <div className="menu-icon" onClick={()=> setClicked(!clicked)}>
      <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
    </div>
    <ul className={clicked ? 'nav-menu active':'nav-menu'}>
      {MenuItems.map((item, index) =>{
        return (
          <Link to={item.url}><li key={index} className={item.cName}>
            {item.title}
          </li></Link>
        )
      })}
      
    </ul>
      <Link to='contact'><Button>Contact</Button></Link>
  </nav>
  )
}