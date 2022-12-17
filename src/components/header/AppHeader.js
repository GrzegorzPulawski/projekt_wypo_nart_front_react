import React from "react";
import classes from "./AppHeader.module.css";
import { Container, Button, ButtonGroup, Dropdown, Navbar, Nav} from "react-bootstrap";
const AppHeader = () => {
    return (
        <div  className={classes.AppHeader}>

            <Navbar fixed="top" expand="md"   bg="light" variant="light">
                <Container>
                <Navbar.Brand>
                        <img
                            src="/logo-main.png"
                            width="170"
                            height="50"
                            alt="React Bootstrap logo"
                        />{' '}
                    Mały Wypożycza Narty
                </Navbar.Brand>
                </Container>
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/formKlient">Formularz klienta</Nav.Link>
                        <Nav.Link href="/zestaw-form">Formularz zestawu</Nav.Link>
                        <Nav.Link href="/rent">Wypożycz</Nav.Link>
                    </Nav>
                </Container>

                <Dropdown as={ButtonGroup}>
                    <Button variant="success">Magazyn</Button>

                    <Dropdown.Toggle split variant="outline-success" id="dropdown-split-basic" />

                    <Dropdown.Menu>
                        <Dropdown.Item href="/list">Narty listuj</Dropdown.Item>
                        <Dropdown.Item href="/butyList">Buty listuj</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar>
        </div>
    );

}
export default AppHeader;