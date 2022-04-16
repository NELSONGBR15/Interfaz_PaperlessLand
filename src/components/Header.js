import React, {Component} from "react";
import Imagenes from "../Images/Imagenes";
import '../Styles/Header.css'

export default class Header extends Component{
    
render(){
    return(
        <header>
            <div className='logo_palmera'>   <img src={Imagenes.LogoPLL }/>  </div>
            <div className="LogoPaper" > <img src={Imagenes.LogoPL} />  </div>   
        </header>      
        )
    }
}