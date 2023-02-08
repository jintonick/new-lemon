import React from "react";
import '../App.css';
import { HStack, Button, Image } from "@chakra-ui/react";

function Header() {
    return (
        <div className="header">
            <div className="header2">
                <div className="subdiv1">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <HStack>
                        <Button colorScheme='blue'>Reserve a Table</Button>
                    </HStack>
                </div>
            <div className="subdiv2">
                <Image  alt="heroimg" src="https://i.postimg.cc/YjyZph5n/restauranfood.jpg" width={250} />
            </div>
            </div>
        </div>
    )
}

export default Header;