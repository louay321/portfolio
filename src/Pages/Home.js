import Backgroundvideo from "../assets/backgroundVideo.mp4"
import "./Home.css";
import Herotext from '../components/Herotext';
import Avatar from '../assets/Avatar.svg';

export default function Home(){
    return (
        <div className="screen">

        <div className="home-container">          
            <Herotext />
            <div className="side-img-box">
            <img src={Avatar} className="avatar" />
            </div>
            <div className="img-back">
            
            </div>
        </div>
        
        <div className="shape1"></div>  
        <div className="shape2"></div>
        <div className="shape3"></div>
        <div className="shape4"></div>
        <div className="shape5"></div>
        <div className="shape6"></div>
        <div className="shape7"></div>
        <div className="shape9"></div>
        </div>
    )
}