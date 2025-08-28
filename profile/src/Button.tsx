import React, {useState} from 'react';

import './App.css';
import Shopify from './images/image.png'

interface ProjectButtonPageProps{
    OuterText: string;
    OuterColour: string;
    OuterImage: string;
    InnerText: string;

}
// function Button({OuterbuttonColour, OuterText, InerbuttonColour, InnerText, Symbol }) {
function ProjectButtonPage({OuterText, OuterColour, OuterImage, InnerText}: ProjectButtonPageProps) {
    const [isHover, setisHover] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const handleMouseEnter = () => {
        if (!isClicked) setisHover(true);
    };

    const handleMouseLeave = () => {
        if (!isClicked) setisHover(false);
    };

    const Clicked = () =>{
        setIsClicked(true)
        setisHover(false)
    }

    const ProjectContent =  isClicked || isHover ? (
        <div>
            {InnerText}
        </div>
        
    ):
    (
        <div>

            <img src={OuterImage} style= { {width: "90%", height: "auto", paddingLeft: "2vh"} } />        
             {OuterText}
        </div>
    ); 

    const HeaderProject =  isClicked || isHover ? (""):
    (
        <div className='wave'>
                <text style={{color: "black", display: "flex", 
                            alignItems: "center", justifyContent: "center",
                            fontFamily: "Arial", fontWeight: "bold"}}>Hover/Click Me</text>
            </div>
    ); 
    return(
        <div>
            {HeaderProject}
            
            <button 
            className="ProjectButton" 
            style={ {backgroundColor: OuterColour}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={Clicked} 
            >
                
                {ProjectContent}
            </button>

        
        </div>

    );
}

export default ProjectButtonPage;

