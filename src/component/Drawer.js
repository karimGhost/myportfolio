import React, {useState} from "react"
import { useNavigate, Routes, Route,BrowserRouter as Router, NavLink } from "react-router-dom";
import drawer from "./Drawer.module.css";
function Drawer(props){
    

const [setT, setSetT] = React.useState(false)
function clic() {
   setSetT(pre => !pre)
}

const stylish ={
    transform: setT ? "rotate(80deg)" : "" ,
    transitionDelay: "3s",
    transition:  "2s",
     opacity: setT ? "0.3" : ""
}


const skew ={
    transform: setT ? "rotate(-45deg)" : " ",
}
const [tH, settH] = React.useState(false);



function onclic(){
    settH(true)
}
function onCl(){
    settH(false)

}

const pro ={
 
   
  transition: "0.35s",
  transitionDuration: "0.32s",
  transform:"translateY()",
  transitionDelay: "0.10s",
  height: tH ? "100% " : "",
  width: "300px",
      
  
   
   margin: "auto",
   
}

const active = (navigate, path) =>{;
    if(navigate.location.pathname === path) {
        return {color: "red"}
    }
}

       

 const calls = ({isActive}) => (isActive ? "active_link": "")
    return(

        <div className={drawer.drawer_container}>


        <div  onClick={!tH ? onclic : onCl} onClic={props.onclic} >  <p   className={tH ? drawer.left_times : drawer.left_toggle}>  {tH  ?  <span onClick={clic} style={skew}>&times;</span> : <span> &#9776;</span>}   </p> </div>

        <div  className={drawer.pro}  style={pro}>

        <NavLink   to={process.env.PUBLIC_URL + "/"} onClick={onCl} id={drawer.a}   className={drawer.drawer_display}
      
        style={({ isActive }) => 
        (isActive ? {color: 'red'} : {color: "grey"})}
>
        Home
        </NavLink>


        
        <NavLink onClick={onCl} id={drawer.an} className={drawer.drawer_display}
        to="/projects"
        style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'grey'})}
>
        Projects
        </NavLink>

        <NavLink onClick={onCl} id={drawer.anc} className={drawer.drawer_display}
        to="/about"
        style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'grey'})}
>
        about
        </NavLink>


        </div>

        </div>

       
    )

}

export default Drawer;