import React, {useEffect, useState} from "react";
import classes from "./EquipmentForm.module.css";
import axios from "../../axios/axios";
import {Link} from "react-router-dom";

function EquipmentForm() {
    const [narty, setNarty] = useState([]);
    const [buty, setButy] = useState([]);

    useEffect(() => {
        axios.get("/api/buty")
            .then((response) => {
                console.log(response);
                setButy(response.data)
            })
            .catch((error) => {
                console.log(error);
            });

        axios.get("/api/narty")
            .then((response) => {
                console.log(response);
                setNarty(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const submit = () => {
        let nazwa = document.getElementById('input-nazwa').value;
        let cenaDoba = document.getElementById('input-cena-doba').value;
        let narty = document.getElementById('input-narty').value;
        let buty = document.getElementById('input-buty').value;

        console.log(nazwa + " " + cenaDoba + " " + narty+ " " + buty)

        let createZestaw = {
            'idNarty': narty,
            'idButy': buty,
            'nazwa': nazwa,
            'cenaDoba': cenaDoba
        }

        axios.post("/api/komplet", createZestaw)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            });

    }

    return (
        <div className={classes.Form}>
            <div className={"container"}>
                <div className={classes.FormRow}>
                    <label className={'form-input-label'}>Nazwa kompletu:</label>
                    <input id={'input-nazwa'} placeholder={'Nazwa'} className={'form-input-field'}/>
                </div>
                <div className={classes.FormRow}>
                    <label className={'form-input-label'}>Cena doba:</label>
                    <input type={'number'} id={'input-cena-doba'} placeholder={'Cena doba'} className={'form-input-field'}/>
                </div>
                <div className={classes.FormRow}>
                    <label className={'form-input-label'}>Wybierz narty:</label>
                    <select id={'input-narty'} placeholder={'Narty'} className={'form-input-field'}>
                        {
                            narty.map(kompletNart => {
                                return (<option key={kompletNart.idNart} value={kompletNart.idNart}>{kompletNart.nazwaNart}</option>)
                             })
                        }
                    </select>
                </div>

                <div className={classes.FormRow}>
                    <label className={'form-input-label'}>Wybierz buty:</label>
                    <select id={'input-buty'} placeholder={'Buty'} className={'form-input-field'}>
                        {
                            buty.map(kompletButow => {
                                return (<option key={kompletButow.idButy} value={kompletButow.idButy}>{kompletButow.nazwaButow}</option>)
                            })
                        }
                    </select>
                </div>
                <button className={classes.FormConfirm} onClick={submit}>Confirm</button>
            </div>
            <div className={classes.ListujKomplet}>
                <Link to={"/kompletList"}>
                    <div>Listuj komplety</div>
                </Link>
            </div>
        </div>

    );
}

export default EquipmentForm;