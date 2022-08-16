import { click } from "@testing-library/user-event/dist/click";
import React, {useEffect, useState} from "react"
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Drawer from './component/Drawer';
import Intro from './component/Intro';
import Projects from "./component/projects/Projects";
import ProjectsData from "./component/ProjectsData";
import About from "./component/About";
import WelcomePage from './component/WelcomePage';

function App() {

  
  const [toggleOpen, setToggleOpen] = useState(false)

  const [togle, setTogle] = useState(false)

function toggled(){
setToggleOpen(pre => !pre)
setTogle(prev => !prev)
}

const [change, setchange] = useState(false)

const [istrue, setistrue] = React.useState(true)

const [colored, setcolored] = React.useState(false)

  const  style ={
      color:  colored ? "red" : "blue",
    }
    const styl ={
      color: colored ? "yellow" : ""
    }

    const [project, setprojects] = useState(ProjectsData.data.projects)

    
    
      function clck(e) {
  
        setprojects(pre =>{
const boxed = [];
          for(let i in project){
            const pro = project[i];
            if(pro.id === e ){
             const updates ={
              ...pro,
              istrue: !pro.istrue
             } 
             boxed.push(updates)
            }else{
              boxed.push(pro)
            }
          }

          return boxed
        })
    }
    
   // project.map(i =>  i.id === e ?   color.push({...i, istrue: !i.istrue })  : color.push(i)  ) 

   console.log(project)

  const projects = project.map(i => <Projects    id={i.id}   footer_header={"footer_header"} onclick={() => clck(i.id)} title={i.title}  project_box={"project_box"} about={i.about} image={i.image} footer={i.button} istrue={i.istrue}  /> )


  const [toggle, setToggle] = useState(false);

  function toggled(){

    setToggle(pre => !pre);
  }


        const stylish ={
         backgroundColor: "whiteGhost"
        }

  return (
    
<div className={toggle ? "heads": "heads1"}>

<div className='center'> 


<BrowserRouter>
<div className= {toggle  ? "toggle" : "tog"}>  <button onClick={toggled} className={toggle ? "press" : "switch" }>{ toggle ? "LightsON" : "LightsOFF"}</button></div>
 <div className="colight"> { toggle ? <img className="offlight" src= {process.env.PUBLIC_URL+"/images/buulbs/bulboff.png"} alt="bulb-on"/> : <img className="colo"  src={process.env.PUBLIC_URL+"/images/buulbs/bulbon.png"} alr="bulb-off"/> } </div>

<Drawer colo={colored} change={change} toggle={toggleOpen} toggl={togle}  onclick={toggled}/> 
<Routes>
  <Route   path="/" element={<Intro toggle={toggle} />} />
  <Route   path="/projects" element={<div className="projects_container">{projects}</div>} />
  <Route   path="/about" element={<About light={toggle} />} />
</Routes>
</BrowserRouter>

</div>

</div>

  );

  }
export default App;
