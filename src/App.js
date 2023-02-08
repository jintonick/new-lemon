import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Header from './Components/Header';
import Reviews from './Components/Reviews'
import About from './Components/About'
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header/>
      <Main/>
      <Reviews/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
