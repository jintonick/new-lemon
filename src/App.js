import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Header from './Components/Header';
import Reviews from './Components/Reviews'
import About from './Components/About'
import { ChakraProvider } from "@chakra-ui/react";
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Nav />
        <Header/>
        <Main/>
        <Reviews/>
        <About/>
        <Footer/>
      </div>
    </ChakraProvider>
  );
}

export default App;
