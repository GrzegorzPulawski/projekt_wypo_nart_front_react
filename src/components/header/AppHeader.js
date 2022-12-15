import React from "react";
import classes from "./AppHeader.module.css";
import {Link} from "react-router-dom";
import { Container, Button, ButtonGroup, Dropdown} from "react-bootstrap";
const AppHeader = () => {
    return (
        <div  className={classes.AppHeader}>

            <div  className={classes.HeaderLeft}>
                <img src={"https://picsum.photos/id/146/110/60"}/>
                    <h5>Mały Wypożycza Narty</h5>
            </div>

            <Container className={classes.HeaderRight} >
                <Link to={"/"}>
                    <div>Home</div>
                </Link>
                <Link to={"/formKlient"}>
                    <div>Formularz klienta</div>
                </Link>
                <Link to={"/zestaw-form"}>
                    <div>Formularz zestawu</div>
                </Link>
                <Link to={"/rent"}>
                    <div>Wypożycz</div>
                </Link>
                <Dropdown as={ButtonGroup}>
                    <Button variant="success">Magazyn</Button>

                    <Dropdown.Toggle split variant="outline-success" id="dropdown-split-basic" />

                    <Dropdown.Menu>
                        <Dropdown.Item href="/list">Narty listuj</Dropdown.Item>
                        <Dropdown.Item href="/butyList">Buty listuj</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </div>
    );

}
export default AppHeader;