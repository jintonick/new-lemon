import React from "react";
import '../App.css';

function About() {
    return(
        <div className="about" id="about-section">
            <div className="about2">
                <div className="aboutcontent">
                    <h1>Litle Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                </div>
                <div className="aboutimage">
                    <img src="https://i.ibb.co/YDCWhv1/restaurant2.jpg" alt="restaurant2" border="0" className="image2"/>
                    <img src="https://i.ibb.co/Yc37kPR/restaurant-chef-2.jpg" alt="restaurant-chef-2" border="0" className="image3"/>
                </div>
            </div>
        </div>
    )
}

export default About;