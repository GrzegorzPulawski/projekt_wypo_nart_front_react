import React from "react";
import axios from "../../axios/axios";
import classes from "./KlientForm.module.css";
import {Link} from "react-router-dom";

function KlientForm () {


    const submit = () => {
        let nazwisko = document.getElementById('input-nazwisko').value;
        let imie = document.getElementById('input-imie').value;
        let nrDowodu = document.getElementById('input-nrDowodu').value;
        let nrTelefonu = document.getElementById('input-nrTelefonu').value;

        console.log(nazwisko +" "+imie + " "+ nrDowodu+" "+nrTelefonu+" ")

        let createKlient = {
            'nazwisko': nazwisko,
            'imie': imie,
            'nrDowodu': nrDowodu,
            'nrTelefonu': nrTelefonu
        }

        axios.post("/api/klient", createKlient)
            .then((response)=>{
                console.log(response)
            })
            .catch((error)=>{
                console.log(error)
            });
    }
    return (
        <div className={classes.KlientForm}>
            <div className={"container"}>
                <label>Nazwisko</label>
                <input id={'input-nazwisko'}/>
                <label>Imię</label>
                <input id={'input-imie'}/>
                <label>Numer dowodu</label>
                <input id={'input-nrDowodu'}/>
                <label>Numer telefonu</label>
                <input id={'input-nrTelefonu'}/>

            </div>
            <button className={classes.FormConfirm} onClick={submit}>Zatwierdź</button>
        <div/>
            <Link to={"/klient-list"}>
                <div>Lista Klientów</div>
            </Link>
        </div>
    );
}
export default KlientForm;