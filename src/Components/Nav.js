import React from "react";
import '../App.css';
import './AditionalCss/navigation.css'
import { Routes, Route, Link } from "react-router-dom";
import BookingPage from "./BookingPage";
import { HStack } from "@chakra-ui/react";
import App from "../App";


function Nav() {

    const handleClick = (anchor) => {
        const id = `${anchor}-section`;
        console.log(id)
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };

    return (
        <div className="navbar">
            <div className="section">
                <div className="maindiv">
                <img src="https://i.ibb.co/5TyTXRr/Logo.jpg" className="image" alt="logo"/>
                    <HStack className="links" spacing="50">
                    <Link to="/">Home</Link>
                    <a href="#about" onClick={() => handleClick("about")}>About</a>
                    <a href="#menu" onClick={() => handleClick("menu")}>Menu</a>
                    <Link to="/booking" >Reservation</Link>
                    <a href="">Orger Online</a>
                    <a href="">Login</a>
                    </HStack>
                </div>
                <Routes>
                    <Route path="/booking" element={<BookingPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default Nav;
