import React from "react";
import '../App.css';
import { HStack, Button, Image, Box } from "@chakra-ui/react";

function Header() {
    return (
        <div className="header">
            <div className="header2">
                <div className="subdiv1">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist </p>
                    <button colorScheme='blue' className="button1">Reserve a Table</button>
                </div>
            <div className="subdiv2">
                <Box boxSize='400px'>
                    <Image  alt="heroimg" src="https://i.ibb.co/x1wzDKy/restauranfood2.jpg" className="image1"/>
                </Box>
            </div>
            </div>
        </div>
    )
}

export default Header;