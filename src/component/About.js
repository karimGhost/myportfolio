import { FaAngular, FaBootstrap, FaCss3, FaDatabase, FaGift, FaGit, FaGitAlt, FaGitSquare, FaHtml5, FaJs, FaJsSquare, FaNodeJs, FaReact, FaYoutube } from "react-icons/fa";
import clasess from "./About.module.css"
import Projects from "./projects/Projects";

function About(props){

    return(

        <div className={clasess.main_about}>
            <div  className={clasess.image_container}>
     
            <img className={clasess.about_image} src={process.env.PUBLIC_URL + "/images/me.png"}/>

</div>

            <div className={clasess.about_header}>
            <h1 className={clasess.header}>I'm AbdulKarim Kassim </h1>
            <h2 className={clasess.abt}>ℌ𝔢𝔯𝔢’𝔰 𝔞 𝔩𝔦𝔱𝔱𝔩𝔢 𝔞𝔟𝔬𝔲𝔱 𝔪𝔢 𝔦𝔫 𝔭𝔯𝔢𝔠𝔦𝔰</h2>
            </div>

<div className={clasess.about_about}>

<p id={props.light && clasess.color_light} className={clasess.Bio}>
I am a diligent, focused, and dedicated individual. I take pride in being the best at what I do and will continue to do so.
I took me long to decide on which path to take on programming because that has been my passion  since day 1, but  i was lost on the way; i was mystified on where to start ,although coding has been my passion for years; My Journey as a web developer was laborious,
for the reason that i started learning on my smart phone temporarily because i did't want to waste a time
, but after a while,  i  luckily got a laptop and thats when things got so much smoothly ,
 i started  taking 
 courses on: <u>fcc</u>/ <u>pluralsight</u>,  <u>Youtube</u> etc.etc... , learning has been my daily routine  always looking for new things to learn .  

</p>

</div>  

<div className={clasess.footer_header}>
<h3 id={clasess.items} className={clasess.abt}>What I've learned so far</h3>

<div className={clasess.footer_about}>
    <span className={clasess.js}><FaJs/> <p>JavaScript</p></span>
    <span className={clasess.nodejs}><FaNodeJs/><p>NodeJS</p></span>
     <span className={clasess.html}><FaHtml5/> <p>HTML5</p> </span> 
     <span className={clasess.css}> <FaCss3/><p>Css3</p></span>
     <span className={clasess.react}><FaReact/><p>ReactJS</p></span>
    <span className={clasess.bootstrap}><FaBootstrap/><p>Bootstrap</p></span>
     <span className={clasess.angular}><FaAngular/><p>AngularJs</p></span> 
     <span className={clasess.git}><FaGitAlt/><p>Git</p></span> 
     <span className={clasess.base}><img className={clasess.pic} src={process.env.PUBLIC_URL + "/images/google-firebase.svg"}/><p>Firebase</p></span> 
</div>
</div>
        </div>
    )


}

export default About;