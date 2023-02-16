import { Button } from "@chakra-ui/react";
import React from "react";
import "./AditionalCss/form.css"
import { useState } from "react";

const BookingForm = () => {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guest, setGuest] = useState("");
    const [event, setEvent] = useState("occasion");

    const clearFrom = () => {
        setDate("");
        setTime("");
        setGuest("");
        setEvent("occasion");
    };

    const handleSumbit = (e) => {
        e.perventDefault();
        alert("Tabel reserved!");
        clearFrom();
    };

    return (
        <div className="formdiv">
            <form className="form" onSubmit={handleSumbit}>
                <label htmlFor="res-date">Choose date</label>
                    <input
                        type="date"
                        id="res-date"
                        value={date}
                        onChange={(e) => {
                            setDate(e.target.value)
                        }}/>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time " value={time} onChange={e => setTime(e.target.value)}>
                    <option value="17">17:00</option>
                    <option value="18">18:00</option>
                    <option value="19">19:00</option>
                    <option value="20">20:00</option>
                    <option value="21">21:00</option>
                    <option value="22">22:00</option>
                 </select>
                <label htmlFor="guests">Number of guests</label>
                    <input
                        type="number"
                        placeholder={1}
                        min={1}
                        max={10}
                        id="guests"
                        value={guest}
                        onChange={(e) => {
                            setGuest(e.target.value)
                        }}/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={event} onChange={e => setEvent(e.target.value)}>
                    <option value="occasion">Occasion</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                </select>
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default BookingForm;