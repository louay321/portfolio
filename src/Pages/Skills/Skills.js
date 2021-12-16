import "./Skills.css";
import {Link} from "react-router-dom";
import ProgressBar from "./ProgressBars";
export default function Skills(){
    return(
        <div className="skills-container">
            <div className="right-container"> 
                <h2 className="title-right">Technical & Social: </h2>
                <ProgressBar />
            </div>
            <div className="left-container">
            <h2 className="title-left">Skills i'm proud of : </h2>
            <article className="badge" style={{"background-color":"darkorange"}}>
            <div className="rounded"><i className="fab fa-html5" style={{"color":"orange"}}></i></div>
            </article> 

            <article className="badge" style={{"background-color":"dodgerblue"}}>
                <div className="rounded"><i className="fab fa-css3-alt" style={{"color":"deepskyblue"}}></i></div>
            </article>

            <article className="badge" style={{"background-color":"gold"}}>
                <div className="rounded"><i className="fab fa-js-square" style={{"color":"gold"}}></i></div>
            </article>
  
            <article className="badge" style={{"background-color":"yellowgreen"}}>
            <div className="rounded"><i className="fab fa-node" style={{"color":"darkslategray"}}></i></div>
            </article>

            <article className="badge" style={{"background-color":"crimson"}}>
                <div className="rounded"><i className="fab fa-git-alt" style={{"color":"firebrick"}}></i></div>
            </article>

            <article className="badge" style={{"background-color":"steelblue"}}>
                <div className="rounded"><i className="fab fa-python" style={{"color":"gold"}}></i></div>
            </article>

            <article className="badge" style={{"background-color":"hotpink"}}>
                <div className="rounded"><i className="fab fa-sass" style={{"color":"palevioletred"}}></i></div>
            </article>

            <article className="badge" style={{"background-color":"#06bcee"}}>
                <div className="rounded"><i className="fab fa-react" style={{"color":"#61DAFB"}}></i></div>
            </article>

            <article className="badge" style={{"background-color":"#1166ED"}}>
                <div className="rounded"><i className="fab fa-docker" style={{"color":"#2496ED", "fontSize":"2.8em"}}></i></div>
            </article>

            <article className="badge" style={{"background-color":"rebeccapurple"}}>
                <div className="rounded"><i className="fab fa-figma" style={{"color":"rebeccapurple"}}></i></div>
            </article>
            <p style={{"margin-top":"20px", "fontSize":"0.8rem", "textAlign":"center"}}>Working on more to be added...</p>
             </div>
        </div>
    )
}