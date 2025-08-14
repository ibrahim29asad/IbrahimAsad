import React from 'react';
import logo from './logo.svg';

import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import { motion } from "motion/react"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='Page-div'>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <div>
            <text>
              <b style={{ fontSize: 'calc(14px + 2vmin)' }}>
                Ibrahim B. Asad
              </b>
              <small style={{ fontSize: 'calc(2px + 1.5vmin)' }}>
              <br />
              Software Engineer, Biomedical Engineer
              <br />
              C/C++, Python, Java, TypeScript, JavaScript, AWS
              </small>

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
                <li>I am currently <b>MSc Student</b> at <b>NYU</b> for <b>Computer Science in AI/ML 
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
    <CCarousel controls transition="crossfade">
      <CCarouselItem>
        <CImage className="d-block w-100" src={('../public/images/nyu.png')} alt="slide 1" />
      </CCarouselItem>
      {/* <CCarouselItem>
        <CImage className="d-block w-100" src={withPrefix('/images/vue.jpg')} alt="slide 2" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={withPrefix('/images/angular.jpg')} alt="slide 3" />
      </CCarouselItem> */}
    </CCarousel>
          </div>
          <div className= 'projects'>
            <div className='box'>
        <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            
        />
            </div>
    
          </div>
          <div className= 'Contact'></div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
