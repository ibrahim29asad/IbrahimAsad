import React from 'react';
import logo from './logo.svg';
import nyu from './images/nyu.png';
import cmg from './images/cmg.png'; 
import schulich from './images/schulich.png'; 
import toronto from './images/toronto.png';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import { motion } from "motion/react"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='Page-div'>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* Header for Name and stuff */}
          <div>
            <b style={{ fontSize: 'calc(14px + 2vmin)' }}>
            Ibrahim B. Asad
            </b>
            <small style={{ fontSize: 'calc(2px + 1.5vmin)' }}>
              <br />
              Software Engineer, Biomedical Engineer
              <br />
              C/C++, Python, Java, TypeScript, JavaScript, AWS
            </small>
          </div>
          

          <div className='container'>
            <div className='bodyText'>
              <text>
                

                <br /><br />
                <b style={{ fontSize: 'calc(10px + 2vmin)' }}>
                  About:
                </b>
                <ul>
                  <li>I am based in <b>New York City</b></li>          
                  <li>I am <b>Canadian</b> and was born in Toronto, ON but I grew up in Alberta having lived in Fort McMurray (6 years), and Calgary (13 years)</li>
                  <li> Researchers I am currently interested in are Rupam Mahmood, Dale Eric Schuurmans, Richard Sutton for their work on Reinforcement Learning and Machine Learning </li>
                  <li> I am interested in a Variety of Topics from Deep Learning, Reinforcement Learning, Machine Learning, Web Applications, Health Tech, Wearables, Cloud Systems, and AR/VR </li>
                  <li> I also cook and have been able to enhance my abilites from the skills learned in Engineering </li>
                  <li> I am an avid runner and love to watch and play a variety of sports from Football, Soccer, Basketball and Golf </li>
                </ul>
                <br />

                <b style={{ fontSize: 'calc(10px + 2vmin)' }}>
                  Background & Experiences:
                </b>

                <ul>
                  <li>I completed a <b>BSc in Software Engineering and Biomedical Engineering</b> from the <b>University of Calgary</b></li>
                  <li>I am currently a <b>MSc Student</b> at <b>NYU</b> for <b>Computer Science in AI/ML 
                (Artificial Intelligence/Machine Learning)</b></li>
                  <li>I completed a 16-month long internship at 
                      {' '}  <a
                      className="App-link"
                      href="https://www.cmgl.ca/"
                      target="_blank"
                      rel="noopener noreferrer"> 
                      Computer Modelling Group 
                      </a> {' '}          
                      where I worked on building/testing/reporting on Various Simulation Models</li>            
                  <li>At <b>Computer Modelling Group</b>, I received the <b>Extreme Ownership Award</b> - an honor given
                      through peer and management recognition and becoming the <b>Youngest Employee and Only Intern</b> ever to win
                      a quartly company award - for buidling the company's first CI/CD pipelines and
                      taking sole responsibility for release testing during a key product release, ensuring smooth 
                      delivery of simulation products
                  </li>
                </ul>

              </text>
            </div>
            <div className= 'pictures'>
              <div className='box'>
                <img src={nyu} />
              </div>
            </div>
          </div>

          <div className= 'projects'>
  
    
          </div>
          
          <div className= 'Contact'>
          <b style={{ fontSize: 'calc(5px + 2vmin)' }}>
                Contact:
          </b> 
          <br />
          
          <small>
            <a
                        className="App-link"
                        href="https://www.linkedin.com/in/iibrahimasad/"
                        target="_blank"
                        rel="noopener noreferrer"> 
                        LinkedIn
            </a>
          </small>
          
          </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
