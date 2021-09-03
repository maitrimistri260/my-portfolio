import React from 'react';
import Cancer from './Images/breast-cancer.jpg';
import LinkedIn from './Images/one.jpg';
import Weather from './Images/weather.jpg';
import Colour from './Images/colour-detection.png';
import Block from './Images/block.jpg';
import Facebook from './Images/facebooks.jpg'
import '../css/default.css';

function Project() {
    return (
        <div className="post">
            <section className="s1">
                <div className="main-container">
                    <h2 style={{ textAlign: "center" }}>Some of my projects</h2>

                    <div className="post-wrapper">
                        <div>
                            <div className="post-box">
                                <img className="thumbnail" src={LinkedIn} alt="project" />
                                <div className="post-preview">
                                    <h4>LINKEDIN with Redux & Firebase</h4>
                                    <p>The APP is created with the latest industry standards using React.js and Redux Toolkit. Firebase is used for the backend</p>
                                    <a href="https://github.com/maitrimistri260/LinkedIn-clone">My Github</a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="post">
                                <img className="thumbnail" src={Cancer} alt="project" />
                                <div className="post-preview">
                                    <h4>Breast Cancer Detection Using Machine Learning Classifier</h4>
                                    <p>Here ML algorithms helps to determine cells whether Malignant or Benign. ML algorithms can determine cancer cells more efficiently.</p>
                                    <a href="https://github.com/maitrimistri260/Breast-Cancer-Using-Supervised-Machine-Learning">My Github</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="post">
                                <img className="thumbnail" src={Colour} alt="project" />
                                <div className="post-preview">
                                    <h4>Colour Detection using Pandas & OpenCV</h4>
                                    <p>In this project, we have build an application through which we can automatically get the name of the color by clicking on them.</p>
                                    <a href="https://github.com/maitrimistri260/Colour-Detection-using-Pandas-OpenCV">My Github</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="post">
                                <img className="thumbnail" src={Block} alt="project" />
                                <div className="post-preview">
                                    <h4>Simple Block Game Using Javascript.0</h4>
                                    <p>Simple Block Game which has two buttons pause & play and has some great animation effects using HTML, CSS and JAVASCRIPT</p>
                                    <a href="https://github.com/maitrimistri260/BlockGame">My Github</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="post">
                                <img className="thumbnail" src={Weather} alt="project" />
                                <div className="post-preview">
                                    <h4>Weather App Project using ReactJS</h4>
                                    <p>A Weather Application is built using Open Weather Map API. It can dispay weather of every city, State & countries.</p>
                                    <a href="https://github.com/maitrimistri260/Weather-app">My Github</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="post">
                                <img className="thumbnail" src={Facebook} alt="project" />
                                <div className="post-preview">
                                    <h4>Facebook Clone with ReactJS and Firebase</h4>
                                    <p>It's a facebook clone app. Need to login first by google to see or add post. Simple design of facebook homepage Hosted in Firebase</p>
                                    <a href="https://github.com/maitrimistri260/facebook-clone">My Github</a>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </section>

        </div>

    )
}

export default Project;