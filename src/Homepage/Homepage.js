import React from 'react';
// import ParticleBackground from '../ParticleBackground';
import my from '../picture/my.jpg';
import '../css/default.css';
import About from '../AboutPage/About';
import Project from '../ProjectPage/Project';
import Contact from '../ContactPage/Contact';
import Education from '../EducationPage/Education';
import ParticleBackground from '../ParticleBackground';



function Homepage(props) {
    return (
       
        <div className="page">
           <ParticleBackground></ParticleBackground>
            <section className="s1">
            
            

                <div className="main-container">
                
                    <div className="greeting-wallpaper">
                       <h1></h1>
                    </div>
                    <div className="intro-wrapper">
                        <div className="nav-wrapper">
                            <div className="dots-wrapper">
                                <div id="dot-1" className="browser-dot"></div>
                                <div id="dot-2" className="browser-dot"></div>
                                <div id="dot-3" className="browser-dot"></div>
                            </div>
                        </div>
                        <div class="left-column">
                            <img id="profile-pic" src={my} alt="profile-pic" />
                            <div class="text-typing">
                                <p>Hello, I'm Maitri Mistri</p>
                            </div>
                        </div>

                        <div class="right-column">
                            <div id="preview-shadow">
                                <div id="preview">
                                    <h3 className="mystyle">Status</h3>
                                    <p>Organised, Motivated, Hardworker, Team Player, AI Nerd are some of the qualities I carry.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </section>
            
            <About />
            <Project/>
            <Education/>
            <Contact/>
            

        </div>




    )


};
export default Homepage;