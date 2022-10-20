import React from 'react';
import axios from "../../axios/axios";
import classes from "./FormNarty.module.css";

function FormNarty() {
    const submitNarty = () => {
        let nazwa = document.getElementById('input-nazwa').value;
        let dlugosc = document.getElementById('input-dlugosc').value;
        let rodzaj = document.getElementById('input-rodzaj').value;

        console.log(nazwa + " " + dlugosc + " " + rodzaj)

        let createNarty = {
            'nazwaNart': nazwa,
            'dlugoscNart': dlugosc,
            'rodzajNart': rodzaj
        }
        axios.post("/api/narty", createNarty)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            });
    }
    return (
        <div className={classes.FormNarty}>
            <div className={"container"}>
                <label>Nazwa Nart</label>
                <input id={'input-nazwa'}/>
                <label>Długość nart</label>
                <input id={'input-dlugosc'}/>
                <label>Wybierz rodzaj</label>
                <select id={'input-rodzaj'}>
                    <option value={'NARTY'}>Narty</option>
                    <option value={"SNOWBOARD"}>Snowboard</option>
                </select>
            </div>
            <button className={classes.Confirm} onClick={submitNarty}>Zatwierdź</button>
        </div>
    );

}

export default FormNarty;