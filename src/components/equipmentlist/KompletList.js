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
        <div className={classes.Komplet}>
            <div  className={classes.TableHeader}>
                <div className="one">Id</div>
                <div className="two">Nazwa kompletu</div>
                <div className="three">Cena doba</div>
            </div>

            {
                nazwaZmiennej.map(value => {
                    return (<Grid container className={classes.TableRow}>
                        <Grid item xs={2}>{value.idKomplet}</Grid>
                        <Grid item xs={2}>{value.nazwaKomplet}</Grid>
                        <Grid item xs={6}>{value.cenaDoba}</Grid>
                    </Grid>)
                })
            }

        </div>

    );
}
export default KompletList;