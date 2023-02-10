import React from "react";
import '../App.css';
import Card from '../Components/Subcomp/Card'

function Main() {
    return (
        <div className="main" id="menu-section">
            <div className="main2">
                <div className="textsec">
                    <h1>This weeks specials!</h1>
                    <button className="button2">Online Menu</button>
                </div>
                <div className="cardsec">
                    <Card
                        src="https://i.ibb.co/YpqhxwR/greek-salad.jpg"
                        name="Greek salad"
                        price="$ 12.99"
                        discription="The famous greek salad of crispy lettuse, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                    />
                    <Card
                        src="https://i.ibb.co/mhWLXYz/bruchetta.jpg"
                        name="Bruchetta"
                        price="$ 5.99"
                        discription="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
                    />
                    <Card
                        src="https://i.ibb.co/9qJymjw/lemon-dessert.jpg"
                        name="Lemon dessert"
                        price="$ 5.00"
                        discription="This comes straight from grandma's recipe book, every last ingridient has ben sourced and is as authentic as can de imagined."
                    />
                </div>
            </div>
        </div>
    )
}

export default Main;