import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import axios from "../../axios/axios";
import classes from "./KlientList.module.css";
import {Grid} from "@mui/material";

const KlientList = () => {
    const [klientList, setterKlientList] = useState([]);

    useEffect(() =>{
        axios.get("/api/klient")
            .then((response)=>{
                console.log(response);
                setterKlientList(response.data)
            })
            .catch((error)=>{
                console.log(error);
            });
    },[]);
    return(
        <div>
            <Container className={classes.FormRow}>
            <div>Id</div>
            <div>Nazwisko</div>
            <div>Imię</div>
            <div>Numer dowodu</div>
            <div>Numer telefonu</div>
            </Container>

        {
         klientList.map(value => {
             return(

                <Container className={classes.FormRow}>
                <row>
                    <Col md={3}>{value.idKlient}</Col>
                    <Col md={3}>{value.nazwisko}</Col>
                    <Col md={3}>{value.imie}</Col>
                    <Col md={3}>{value.nrDowodu}</Col>
                    <Col md={3}>{value.nrTelefonu}</Col>
                </row>
                </Container>

            )
             })
         }
        </div>
    );
}
export default KlientList;