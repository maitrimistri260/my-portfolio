import React from 'react';
import '../css/default.css';
import Github from '../assets/logo/github.png';
import Instagram from '../assets/logo/instagram.png';
import LinkedIn from '../assets/logo/linkedin.png';
import Twitter from '../assets/logo/twitter.png';

// import Docker from '../assets/tech/docker.png';
import Flask from '../assets/tech/flask.png';
import Js from '../assets/tech/js.png';
// import Kubernetes from '../assets/tech/kubernetes.png';
import Linux from '../assets/tech/linux.png';
import Mysql from '../assets/tech/mysql.png';
import Node from '../assets/tech/node.png';
import Python from '../assets/tech/python.png';
import Reactjs from '../assets/tech/reactjs.png';
import Tensorflow from '../assets/tech/tensorflow.png';




function About() {
    return (
        <div className="about">
            <section className="s2">
                <div className="main_container">
                    <div className="about_wrapper">
                        <div className="about_me">
                            <h2>A little about me</h2>
                            <p>I'm a 21 year old developer from Mumbai, India.<br />Stack = [react, flask, javascript, python, docker, tensorflow, github]</p>
                            <p>Also I'm familiar with linux and Deep Learning/Machine Learning.</p>

                            <h3>Get in touch</h3>
                            <div id="social_links">
                                <ul>
                                    <li><a href="https://github.com/maitrimistri260" target="_blank" rel="noreferrer"><img className="social_links_ul_li" src={Github} alt="Github" /></a></li>
                                    <li><a href="https://www.linkedin.com/in/maitri-mistri-3bb878189" target="_blank" rel="noreferrer"><img className="social_links_ul_li" src={LinkedIn} alt="Github" /></a></li>
                                    <li><a href="https://twitter.com/Maitri_26" target="_blank" rel="noreferrer"><img className="social_links_ul_li" src={Twitter} alt="Github" /></a></li>
                                    <li><a href="https://www.instagram.com/maitri__mistri" target="_blank" rel="noreferrer"><img className="social_links_ul_li" src={Instagram} alt="Github" /></a></li>
                                </ul>

                            </div>


                            <p>Resume - <a target="blank" href="https://github.com/maitrimistri260/My-Resume">View Resume</a></p>

                        </div>

                        <div id="skills">
                            <h2>
                                I have worked with quite a bit
                            </h2>
                            <br />
                            <br />
                            <div className="images-space">
                                <img id="my-skills" src={Python} alt="Python" title="Python" />
                                <img id="my-skills" src={Js} alt="Javascript" title="Javascript" />
                                <img id="my-skills" src={Reactjs} alt="Reactjs" title="Reactjs" />
                                {/* <img id="my-skills" src={Kubernetes} alt="Kubernetes" title="Kubernetes" />
                                <img id="my-skills" src={Docker} alt="Docker" title="Docker" /> */}
                                <img id="my-skills" src={Node} alt="Node" title="Node" />

                                <img id="my-skills" className="flask" src={Flask} alt="Flask" title="Flask" />
                                <img id="my-skills" className="linux" src={Linux} alt="Linux" title="Linux" />


                                <img id="my-skills" className="mysql" src={Mysql} alt="Mysql" title="Mysql" />

                                <img id="my-skills" src={Tensorflow} alt="Tensorflow " title="Tensorflow " />
                            </div>


                        </div>
                    </div>
                </div>
            </section>

        </div>)


}

export default About;