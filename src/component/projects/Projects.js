import classes from "./Projects.module.css"
import image from "../Images/images.png";
import { useState } from "react";
import ProjectsData from "../ProjectsData";
import { FaBalanceScale } from "react-icons/fa";



  
function Projects(props){

    
let [tru, setru] = useState(false)
    
function hove(){

  setru(true)
}


  function hov(){
    setru(false)
  }

  let sty = {
    transform: tru ?  'scale(1.01)' : "",
  boxShadow: "1.5px 1px 10px 1px black",
  borderRadius: "15px",
   // Transform: tru ?  "transformY(200px)" : "",

   
  }

  let bordershape ={
    borderBottomLeftRadius: tru ?  "0px" : "",
    borderBottomRightRadius: tru ? "0px" : "",
    color: tru ? "aqua" : "crimson"
  }

let transform ={
 

height: tru ? "fit-content" : "0px",
}

const slide ={
  width: tru ? "40%" : "0",

}

const slid ={
  width: tru ? "45%" : "0",

}


const bg={
  backgroundImage: `url(${props.image})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
backgroundPosition: "top",
  cursor: "Pointer",
}

return(
    <div style={sty}   className={classes.projects_container}>
      <div style={{ overflow: tru ? "visible" : "hidden"}} onMouseOver={hove} onMouseLeave={hov} className={classes.view_head}> <a href= {props.code} target = "_blank"><span style={slide} className={classes.left_slide}>The_Code </span></a> <a href ={props.page} target = "_blank" className={classes.link} > <span style={slid} className={classes.right_slide}> To_view</span> </a></div>

     <div style={bg} onMouseOver={hove} onMouseLeave={hov}   onClick={props.onclick} className={props.project_box}> 
     <div className={props.footer_header}>
<div className={classes.fit}>
       <p style={bordershape} className={classes.footer_about}>{props.title}</p> 
       <p style={transform} className={classes.footer_text}>{props.about}</p>
</div>
       </div> </div>
    </div>

)

}





export default Projects;