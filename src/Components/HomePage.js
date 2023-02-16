import Footer from './Footer';
import Nav from './Nav';
import Main from './Main';
import Header from './Header';
import Reviews from './Reviews'
import About from './About'
import '../App';
import './AditionalCss/navigation.css'


const HomePage = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Reviews/>
            <About/>
            <Footer/>
      </div>
    )
}

export default HomePage;