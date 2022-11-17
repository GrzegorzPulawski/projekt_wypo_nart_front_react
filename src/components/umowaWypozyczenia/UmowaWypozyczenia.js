import React, {useState} from "react";
import axios from "../../axios/axios";
import classes from "./UmowaWypozyczenia.module.css";
import {Grid} from "@mui/material";
import moment from "moment";
import {Button, Form} from "react-bootstrap";


function UmowaWypozyczenia() {

    const [count, setCount] = useState(0)
    const [showWypozyczenie, setterWypozyczenieShow] = useState([]);

    const sendForm = () => {
        axios.get("/api/wypozyczenie/show?", {params: {idWypozyczenie: count}})
            .then((response) => {
                console.log("OK! ");
                console.log(response);

                setterWypozyczenieShow(response.data);
            })
            .catch((errorResponse) => {
                console.log("ErRoR: " + errorResponse);
            });
    }

    const changeCount = (event) => {
        const {data} = event.nativeEvent;
        setCount(data)
    }

    return (<div>

            <Form>
                <Form.Group className={classes.Label}>
                    <Form.Label>Podaj nr Umowy</Form.Label>
                    <Form.Control  type={'number'} onChange={changeCount}/>
                    <Form.Text className={'text-bg-dark'}>Formularz przekieruję Cię do Umowy wypożyczenia</Form.Text>
                </Form.Group>
                <Button className={classes.FormButtonSubmit}
                        variant={'dark'}
                        onClick={sendForm}>
                    Wyślij
                </Button>
            </Form>
            {
                showWypozyczenie.map(value => {
                    //Formatuję datę wypozyczenia
                    let dataWypo = value.dataWypozyczenia
                    let dataWypoGrid = moment(dataWypo).format('DD/MM/YY HH:MM')
                    //Formatuję datę zwrotu
                    let dataZwro = value.dataZwrotu
                    let dataZwroGrid = moment(dataZwro).format('DD/MM/YY HH:MM')

                    return (
                        <Grid key={value.idWypozyczenie} container className={classes.TableRow}>
                            <Grid item xs={50} justifyContent={"center"}><h4>Umowa wypożyczenia o nr: {value.idWypozyczenie} </h4></Grid>
                            <Grid item xl={0}>Została zawarta z datą:  {dataWypoGrid} godzina.</Grid>
                            <Grid item xs={0}>Od firmy: Mandragora Grzegorz Puławski NIP 9531028160: </Grid>
                            <Grid item xs={0}>Pani/Pan:  {value.nazwisko}</Grid>
                            <Grid item xs={0}>Nr telefonu kontaktowego: {value.nrTelefonu}</Grid>
                            <Grid item xl={0}> wypożycza komplet zimowy o nr: {value.idKomplet}</Grid>
                            <Grid item xs={0}>W cenie za dobę: {value.cenaWypozyczenia} zł</Grid>
                            <Grid item xs={0}>Data zwrotu: {dataZwroGrid}  </Grid>
                            <Grid item xs={0}>Wartość całego wypozyczenia wynosi: {value.cenaOstateczna} zł</Grid>
                            <Grid>Klient zobowiązuję się zwrócić sprzęt w stanie niepogorszonym. W przypadku uszkodzenia, kradzieży zobowiązuje się do prokrycia kosztów odtworzenia </Grid>
                            <Grid item xs={0} justifyContent={"flex-end"}>CZYTELNY PODPIS KLIENTA:</Grid>
                        </Grid>
                    )
                })
            }
        </div>
    );

}

export default UmowaWypozyczenia;



