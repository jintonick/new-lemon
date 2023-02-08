import React from "react";
import '../AditionalCss/navigation.css'
import { HStack } from '@chakra-ui/react'

const NavigationMenu = () => {

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
      <div className="section">
        <div className="maindiv">
          <img src="https://i.ibb.co/5TyTXRr/Logo.jpg" className="image" alt="logo"/>
          <HStack className="links" spacing="50">
            <a>Home</a>
            <a href="#about" onClick={() => handleClick("about")}>About</a>
            <a>Menu</a>
            <a>Reservation</a>
            <a>Orger Online</a>
            <a>Login</a>
          </HStack>
        </div>
      </div>
    )
}

export default NavigationMenu;