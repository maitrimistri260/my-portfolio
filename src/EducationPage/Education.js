import React from 'react';
import Degree from '../assets/degree/degree.png';
import Certifiication from '../assets/degree/certification.png'

function Education() {
    return (
        <div className="education">

            <section className="s1">
                <h2>Education and Certifications</h2>

                <div className="tile">
                    <div className="title_content">
                        <img className="degree" src={Degree} alt="" />
                        <p className="degree_name">BSc. Computer Science, Mumbai University (S.K. Somaiya)</p>
                    </div>
                    <div className="title_content">
                        <img className="degree" src={Certifiication} alt="" />
                        <p className="degree_name">Neural Networks and Deep Learning - DeepLearning.AI (Coursera)

                        </p>
                    </div>
                    <div className="title_content">
                        <img className="degree" src={Certifiication} alt="" />
                        <p className="degree_name"> Machine Learning and Data Science Zero to Mastery (Udemy)</p>
                    </div>
                    <div className="title_content">
                        <img className="degree" src={Certifiication} alt="" />
                        <p className="degree_name">Flutter Development Bootcamp with Dart(Udemy)</p>
                    </div>
                    <div className="title_content">
                        <img className="degree" src={Certifiication} alt="" />
                        <p className="degree_name">Modern React with Redux (Udemy)  </p>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Education;