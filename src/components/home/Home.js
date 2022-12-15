import React from "react";
import {Card, Col, Row} from "react-bootstrap";

function Home() {
    return(
        <Row>
            <Col>
        <Card style={{ width: '18rem',  }}>
                <Card.Img src={"https://picsum.photos/id/1036/1200/800"}/>
                <Card.Header>Instrukcja - Mały wypożycza narty</Card.Header>
                <Card.Body>
                    <Card.Title>
                        Magazyn
                    </Card.Title>
                    <Card.Text>
                        Narty listuj - listuje wszystkie dostępne narty w magazynie.
                        Dodaj narty - możesz dodać nowe narty.
                        Buty listuj - listuje wszystkie dostępne buty w magazynie.
                        Dodaj buty - możesz dodać nowe buty.

                    </Card.Text>
                </Card.Body>
            <Card.Footer className="text-muted">Wskazówka: edycję w magazynie na wielu rekordach przeprowadzamy za pomocą dołączonego programu HeidiSQL </Card.Footer>
        </Card>
            </Col>
            <Col>
    <Card style={{ width: '18rem',  }}>
        <Card.Img src={"https://picsum.photos/id/177/1200/800/"}/>
        <Card.Header>Instrukcja - Mały wypożycza narty</Card.Header>
        <Card.Body>
                    <Card.Title>
                        Klient
                    </Card.Title>
                    <Card.Text>
                        Wprowadź dane klienta: nazwisko, imię, nr dowodu, nr telefonu.
                        Zatwierdź zmiany.
                        Wylistuj listę klientów.
                    </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">Wskazówka: Możesz zapisać na kartce Id klienta czyli jego numer, będzie Ci potrzebny do zrobienia wypożyczenia.</Card.Footer>

    </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem',  }}>
                    <Card.Img src={"https://picsum.photos/id/491/1200/800"}/>
                    <Card.Header>Instrukcja - Mały wypożycza narty</Card.Header>
                    <Card.Body>
                    <Card.Title>
                        Formularz zestawu
                    </Card.Title>
                    <Card.Text>
                        Utwórz zestaw wprowadzając nazwę zestawu (może być dowolna)
                        Z listy Narty wybierz narty/snowboard, które wypożyczasz
                        Z listy Buty wybierz buty, które wypożyczasz

                    </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">Wskazówka: Możesz zapisać na kartce Id zestawu czyli jego numer, będzie Ci potrzebny do zrobienia wypożyczenia. </Card.Footer>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem',  }}>
                <Card.Img src={"https://picsum.photos/id/655/1200/800"}/>
                <Card.Header>Instrukcja - Mały wypożycza narty</Card.Header>
                <Card.Body>
                    <Card.Title>
                        Wypożycz
                    </Card.Title>
                    <Card.Text>
                        Wprowadź Id, czyli numer zestawu, oraz Id, czyli numer klienta.
                        Zatwierdź wypożyczenie
                        Wylistuj wypożyczenia. Zapamiętaj numer wypożyczenia, które utworzyłeś.
                        Wróć do zakładki Wypożycz i kliknij Umowa wypożyczenia.

                    </Card.Text>
                </Card.Body>
                    <Card.Footer className="text-muted">Wskazówka: możesz w tym miejscu opcjonalnie zmienić cenę za dobę</Card.Footer>
                </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem',  }}>
                <Card.Img src={"https://picsum.photos/id/403/1200/800/?blur"}/>
                <Card.Header>Instrukcja - Mały wypożycza narty</Card.Header>
                <Card.Body>
                    <Card.Title>
                        Umowa wypożyczenia
                    </Card.Title>
                    <Card.Text>
                        Wprowadź numer umowy wypożyczenia i zatwierdź przyciskiem Wyślij.
                        Po wyświetleniu się Umowy wypożyczenia kliknij przycisk Drukuj.

                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">Wskazówka: możesz wybrać drukarkę na której umowa będzie drukowana lub pdf jeżeli chcesz drukować do pliku.</Card.Footer>
            </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem',  }}>
                    <Card.Img src={"https://picsum.photos/id/357/1200/800"}/>
                    <Card.Header>Instrukcja - Mały wypożycza narty</Card.Header>
                    <Card.Body>
                    <Card.Title>
                        Zwrot wypożyczenia
                    </Card.Title>
                    <Card.Text>
                        Wprowadź numer umowy wypożyczenia i zatwierdź zmiany
                        Wróć do listowania wypożyczenia. Tam zobaczysz jaki okres był wypożyczony sprzęt i ile się należy za wypożyczenie


                    </Card.Text>
                </Card.Body>
                    <Card.Footer className="text-muted">Wskazówka: możesz wydrukować umowę z kwotą należności</Card.Footer>
            </Card>
            </Col>
        </Row>
    )
}
export default Home;