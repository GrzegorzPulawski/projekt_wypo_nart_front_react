import {useEffect, useState} from "react";
import axios from "../../axios/axios";
import classes from "./ButyList.module.css";
import {Grid} from "@mui/material";
import {Link} from "react-router-dom";

function ButyList() {
    //Deklaracja zmiennej
    const [butyListuj, setterButyListuj] = useState([]);

    useEffect(() =>{
        axios.get("/api/buty")
            .then((response)=>{
                console.log(response);
                setterButyListuj(response.data)
            })
            .catch((error)=>{
                console.log(error);
            });
    },[]);

    return(
        <div className={classes.Buty}>
            <div className={classes.ButyTableHeader}>
                <div>Id</div>
                <div>Nazwa butów</div>
                <div>Rozmiar</div>
                <div>NARTY/SNOWBOARD</div>
            </div>
            <div className={classes.DodajButy}>
                <Link to={"/form"}>
                    <div>Dodaj do listy</div>
                </Link>
            </div>
            {
                butyListuj.map(value => {
                    return (<Grid container={classes.ButyTableRow}>
                        <Grid item xs={2}>{value.idButy}</Grid>
                        <Grid item xs={2}>{value.nazwaButow}</Grid>
                        <Grid item xs={2}>{value.rozmiarButow}</Grid>
                        <Grid item xs={2}>{value.rodzajButow}</Grid>
                        <Grid item xs={2}></Grid>
                    </Grid> )
                })
            }

        </div>
    );
}
export default ButyList;
