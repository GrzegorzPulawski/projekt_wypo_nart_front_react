import React, {useEffect, useState} from "react";
import axios from "../../axios/axios";
import {Grid} from "@mui/material";
import classes from "./WypozyczenieList.module.css"
import {Button} from "react-bootstrap";


const WypozyczenieList = () => {
    const [listWypozyczenie, setterWypozyczenieList] = useState([]);

    useEffect(()=>{
        axios.get("/api/wypozyczenie/list")
            .then((response)=>{
                console.log(response);
                setterWypozyczenieList(response.data)
            })
            .catch((error)=>{
                console.log(error);
            });
    },[]);

    return(
        <div>

            <Grid container  className={classes.TableHeader}>
                <Grid item xs={1}>Id</Grid>
                <Grid item xs={2}>Data wypożyczenia</Grid>
                <Grid item xs={2}>Data zwrotu</Grid>
                <Grid item xs={2}>Cena za dobę</Grid>
                <Grid item xs={2}>Do zapłaty</Grid>
            </Grid>
            {
                listWypozyczenie.map(value => {
                    return (<Grid container className={classes.TableRow}>
                        <Grid item xs={1}>{value.idWypozyczenie}</Grid>
                        <Grid item xs={2}>{value.dataWypozyczenia}</Grid>
                        <Grid item xs={2}>{value.dataZwrotu}</Grid>
                        <Grid item xs={2}>{value.cenaWypozyczenia}</Grid>
                        <Grid item xs={2}>{value.cenaOstateczna}</Grid>
                    </Grid>)
                })
            }
            <div>
                <Button  onClick={window.print}>drukuj</Button>
            </div>

        </div>
    );
}
export default WypozyczenieList;