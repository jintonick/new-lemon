import React from "react";
import './AditionalCss/navigation.css'
import '../App.css'
import NavigationMenu from "./Nav";
import BookingForm from "./BookingForm";
import Footer from "./Footer";


const BookingPage = () => {
    return (
        <div>
            <BookingForm />
            <Footer />
        </div>
    )
}

export default BookingPage;