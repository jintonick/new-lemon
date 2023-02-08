import React from "react";
import '../AditionalCss/herocomp.css'
import { HStack, Button } from "@chakra-ui/react";

const HeroSection = () => {
    return (
        <div className="maindiv">
            <div className="subdiv1">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <HStack>
                    <Button colorScheme='teal' size='lg'>Reserve a Table</Button>
                </HStack>
            </div>
            <div>
                <img alt="heroimg" src="https://i.postimg.cc/YjyZph5n/restauranfood.jpg"/>
            </div>
        </div>
    )
}

export default HeroSection;