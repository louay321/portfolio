import "./Landing.css"
import { Link } from "react-router-dom";

export default function Landing(){
    return (
        <div className="wrapper">
            <div className="container">
            <iframe src='https://my.spline.design/macbookprocopy-316a7bf4ecffb9de4cbb1e20edfdc5af/' frameborder='0' width='100%' height='100%'></iframe>
            </div>
            <div className="text-container">
                <p>loading 3D laptop...</p>
                <h1>Have a look around</h1>
                <div className="button"><Link to="/home"><p>Proceed</p></Link></div>
            </div>
            <div className="phone-container">
                <iframe src='https://my.spline.design/spline13copy-b9c416d19009b01a3fa7139a30c32745/' frameborder='0' width='100%' height='100%'></iframe>
            </div>
        </div>
    )
}