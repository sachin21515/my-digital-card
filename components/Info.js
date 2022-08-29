import React from "react"
import ReactDOM from "react-dom"

export default function Info(){
    
    return (
        
        <div className= "main-info">
                <img className="my-image"src="./components/sachin.jpg"/>
                <h2>Sachin Chauhan</h2>
                <p>Frontend Developer</p>
                <small>Github.com/sachin21515</small>
            <div className="links-container">
             <a className="email-link" href="#"><img className="email-image"src="./components/email.png"/>Email</a>
             <a className="linkedin-link" href="#"><img className="linkedin-image" src="./components/linke.png"/>Linkedin</a>
            </div>
        </div>
        
    )
    
}