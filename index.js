import React from "react"
import ReactDOM from "react-dom"
import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"



function App(){
    
    return (
        <div className="outside-container">
        <div className="main-app">
           <Info/>
           <About/>
           <Interests/>
           <Footer/>
        </div>
        </div>
        
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))