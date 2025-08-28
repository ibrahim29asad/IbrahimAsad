import React from 'react';
import nyu from './images/nyu.png';
import Shopify from './images/Shopify.png'
import Uni from './images/uni.png'
import Pokemon from './images/Pokemon.png'
import './App.css';
import ProjectButtonPage from './Button';


function App() {

  const UofC = "Developed a Web Application that can read any researcher's biography from any source and continuously finds grants globally from a single database that relates to any professor’s line of research using Machine Learning. Developed a Support Vector Model (SVM) using tools such as Keybert, created the Front End of the Project, which was later connected to the Model for the University of Calgary Research Funding Department."
  const Shops = "Developed a Shopify Application that can read the customers cart information, current products, and overall store’s history to create personalized experiences and offers to increase pre checkout sales by utilizing JavaScript, Python, Machine Learning, and GraphQL on a cloud-based serverless AWS architecture."
  const PokemonAgent = "Currently Developing an Agent that learns and behaves using Reinforcement Learning to complete Pokemon Red and Blue. The Agent has no history on what actions are correct and will have to learn them through Reinforcement Learning utilizing OpenAI's Gymnasium."
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
              < br />
               <a
                      className="App-link"
                      href="https://github.com/ibrahim29asad"
                      target="_blank"
                      rel="noopener noreferrer"> 
                      GitHub
                  </a> 
            </small>
          </div>
          

          <div className='container'>
            <div className='bodyText' style={{marginRight: '2%'}}>
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
                  <li>I am currently a <b>MSc Student</b> at <b>NYU</b> for <b>Computer Science in AI/ML 
                (Artificial Intelligence/Machine Learning)</b></li>
                  <li>I completed a <b>BSc in Software Engineering and Biomedical Engineering</b> from the <b>University of Calgary</b></li>              
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

          <div className= 'projects-tab'>
            
              <text>
                <br /><br />
                <b style={{ fontSize: 'calc(10px + 2vmin)' }}>
                  Projects:
                </b>                
                <br />
                <br />
              </text>

           
                <div style={{ display: "flex", flexDirection: 'row', gap: '7rem'}}>
                <ProjectButtonPage OuterText={"UofC x IFARM"} OuterColour={"#FFFFCC"} OuterImage={Uni} InnerText={UofC} />
                <ProjectButtonPage OuterText={"Shopify"} OuterColour={"#a1e02c"} OuterImage={Shopify}  InnerText={Shops} />
                <ProjectButtonPage OuterText={"Machine Learning "} OuterColour={"#e12626ff"} OuterImage={Pokemon}  InnerText={PokemonAgent}/>
                {/* <ProjectButtonPage OuterText={"Pokemon"} /> */}
                </div>
                
            
    
          </div>

          <div className= 'Contact' style={{marginBottom: '3%'}}>
          <br />
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
