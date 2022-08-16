import classes from "./Intro.module.css"
import image from "./Images/images.png";
import Drawer  from "./Drawer";
import  {FaEnvelope, FaEnvelopeOpen, FaEnvelopeSquare, FaInstagram, FaInstagramSquare, FaLinkedin, FaLinkedinIn, FaMailBulk, FaMailchimp, FaTwitter} from "react-icons/fa"
import { Link } from "react-router-dom";
import { useState } from "react";




function Intro(props){
    

const [tru, setTru] = useState(false)


function swit(){
   
  
        setTru(true)
 

}


function switout(){
    setTru(false)
}
    return(

   
      
       
        <div className={classes.intro_container}>
          {props.val}
                     <img className={classes.profile}  src={ process.env.PUBLIC_URL+"/images/images2.png" } alt="my-pic"/> 

        <h1      id={props.toggle ? classes.intro_h_colo: ""} className={ classes.Intro_header }><span className={classes.spaned}> <span className={classes.h}>H</span><span className={classes.ii}>I</span><span className={classes.ii}>I</span><span className={classes.h}>,</span><span className={classes.h}> </span><span className={classes.ii}>I</span><span className={classes.h}>'</span><span className={classes.im}>M</span><span> </span><span className={classes.A}>A</span><span className={classes.B}>B</span><span className={classes.D}>D</span><span className={classes.u}>U</span><span className={classes.L}>L</span><span className={classes.k}>K</span><span className={classes.AR}>A</span><span className={classes.R}>R</span><span className={classes.I}>I</span><span className={classes.M}>M </span></span></h1>
        <p   id={props.toggle ? classes.intro_p_colo: ""} className={ classes.intro_p}> <u className={classes.U}><u className=" colormix pcolor-1">:Welcome</u> <u className="colormix pcolor-2">to</u> <u className="colormix pcolor-3">my</u> <u className={"colormix pcolor-4"}>portfolio:</u> </u> I'm a FRONTEND  web developer  with a passion of finding the right solution
         for the project,
         with a strong sense of empathy and creativity. I also have excellent technical skills and am always eager to help others in any way that I can. 
        I believe in the right solution,  it's never what you expect, it's beyond that. 
        My passion for web design and development is matched only by my love for coffee.</p>

        <button className={classes.btn_intro}><Link className={classes.btn_intro_link} to="/projects">Check out Some of my projects</Link></button>
        
        <div>
        <div className={classes.contact}>
           
            <a className={classes.insta} href="http://www.instagram.com"><FaInstagram /></a>
            <a className={classes.linked} href="http://www.linkedin.com"><FaLinkedinIn /></a>
            <a className={classes.twitter} href="http://www.twitter.com"><FaTwitter/></a>
            <a className={classes.mail} href="http://www.twitter.com" onMouseOver={swit} onMouseLeave={switout} onMouseOut={switout}> {tru ?   <FaEnvelopeOpen/> : <FaEnvelope/>}</a>
            
        </div>
        <span className={classes.spa}></span>
        <p className={classes.outer}><span className={classes.find}>find</span> <span> </span> <span className={classes.me}>me</span> <span></span><span className={classes.on}>on</span> </p>
        </div>
        </div>

        
    )

}

export default Intro;