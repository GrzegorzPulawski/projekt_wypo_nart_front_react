import classes from "./NartyList.module.css";
import React, {useEffect, useState} from "react";
import {Grid} from "@mui/material";
import axios from "../../axios/axios";


const NartyList = () => {
    //Deklaracja nowej zmiennej
    const [nazwaZmiennej, setterDoKolekcji] = useState([]);

    useEffect(() => {
        axios.get("/api/narty")
            .then((response) => {
                console.log(response);
                setterDoKolekcji(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return(
        <div className={classes.Narty}>
            <div  className={classes.NartyTableHeader}>
                <div className="one">Id</div>
                <div className="two">Długość nart</div>
                <div className="three">Nazwa</div>
                <div className="four">NARTY/SNOWBOARD</div>
                <div className="five"></div>
            </div>
            {
                nazwaZmiennej.map(value => {
                    return (<Grid container className={classes.NartyTableRow}>
                        <Grid item xs={2}>{value.idNart}</Grid>
                        <Grid item xs={2}>{value.dlugoscNart}</Grid>
                        <Grid item xs={2}>{value.nazwaNart}</Grid>
                        <Grid item xs={2}>{value.rodzajNart}</Grid>
                        <Grid item xs={2}></Grid>
                    </Grid>)
                })
            }

        </div>

    );
}
export default NartyList;