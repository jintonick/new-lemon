import BookingPage from "./Components/BookingPage";
import { ChakraProvider } from "@chakra-ui/react";
import './App.css';
import './Components/AditionalCss/navigation.css'
import HomePage from "./Components/HomePage";
import Nav from "./Components/Nav";
import { HStack } from "@chakra-ui/react";
import { Link, Route, Routes } from "react-router-dom";

function App() {

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
    <ChakraProvider>
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
            </div>
        </div>
        <Routes>
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
    </ChakraProvider>
  );
}

export default App;
