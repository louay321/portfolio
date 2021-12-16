import { SkillItems } from "./SkillsList";

export default function ProgressBar(){

    return(     
                <ul>
                {SkillItems.map((item, index) =>{
                    let style = {animationName:item.value}
                    return (
                        <li className="skill">
                        <p> {item.title}</p>
                        <div className="progress">
                        
                        <div className="progress-value" style={style}></div>
                        </div>
                    </li> 
                    )
                })}
                         
                 </ul>
                         
        
    )
}