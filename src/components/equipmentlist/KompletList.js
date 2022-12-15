import classes from "./KompletList.module.css";
import React, {useEffect, useState} from "react";
import {Grid} from "@mui/material";
import axios from "../../axios/axios";



const KompletList = () => {
    //Deklaracja nowej zmiennej
    const [nazwaZmiennej, setterDoKolekcji] = useState([]);

    useEffect(() => {
        axios.get("/api/komplet")
            .then((response) => {
                console.log(response);
                setterDoKolekcji(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return(
        <div>
        <Grid container className={classes.TableHeader}>
                <Grid item xs={1}>Id</Grid>
                <Grid item xs={2}>Nazwa kompletu</Grid>
                <Grid item xs={1}>Cena za dobę</Grid>
                <Grid item xs={2}>Nazwa nart</Grid>
                <Grid item xs={2}>Nazwa butów</Grid>
                <Grid item xs={2}>Rodzaj sprzętu</Grid>
            </Grid>

            {
                nazwaZmiennej.map(value => {
                    return (<Grid container className={classes.TableRow}>
                        <Grid item xs={1}>{value.idKomplet}</Grid>
                        <Grid item xs={2}>{value.nazwaKomplet}</Grid>
                        <Grid item xs={1}>{value.cenaDoba}</Grid>
                        <Grid item xs={2}>{value.nazwaNart}</Grid>
                        <Grid item xs={2}>{value.nazwaButow}</Grid>
                        <Grid item xs={2}>{value.rodzajNart}</Grid>
                    </Grid>)
                })
            }
        </div>
    );
}
export default KompletList;