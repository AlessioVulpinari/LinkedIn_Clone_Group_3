import { Card, Button, ListGroup, Container } from "react-bootstrap";

function LinkedinAside() {
  return (
    <Container id='aside' className="py-5">
      <Card className="bg-dark text-light" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Persone che potresti conoscere</Card.Title>
          <Card.Text>Dalla tua scuola o università</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className="bg-dark text-light">
            <div className="d-flex gap-2">
              <div>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/006/732/119/non_2x/account-icon-sign-symbol-logo-design-free-vector.jpg"
                  alt="profile picture"
                />
              </div>
              <div>
                <a href="#">Nome Cognome</a>
                <p>TUTTECOSE</p>
                <Button className='addBtn'>
                  <i className="bi bi-person-plus-fill"></i> Collegati
                </Button>
              </div>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark text-light">
            <div className="d-flex gap-2">
              <div>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/006/732/119/non_2x/account-icon-sign-symbol-logo-design-free-vector.jpg"
                  alt="profile picture"
                />
              </div>
              <div>
                <a href="#">Nome Cognome</a>
                <p>TUTTECOSE</p>
                <Button className='addBtn'>
                  <i className="bi bi-person-plus-fill"></i> Collegati
                </Button>
              </div>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark text-light">
            <div className="d-flex gap-2">
              <div>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/006/732/119/non_2x/account-icon-sign-symbol-logo-design-free-vector.jpg"
                  alt="profile picture"
                />
              </div>
              <div>
                <a href="#">Nome Cognome</a>
                <p>TUTTECOSE</p>
                <Button className='addBtn'>
                  <i className="bi bi-person-plus-fill"></i> Collegati
                </Button>
              </div>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark text-light">
            <div className="d-flex gap-2">
              <div>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/006/732/119/non_2x/account-icon-sign-symbol-logo-design-free-vector.jpg"
                  alt="profile picture"
                />
              </div>
              <div>
                <a href="#">Nome Cognome</a>
                <p>TUTTECOSE</p>
                <Button className='addBtn'>
                  <i className="bi bi-person-plus-fill"></i> Collegati
                </Button>
              </div>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark text-light">
            <div className="d-flex gap-2">
              <div>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/006/732/119/non_2x/account-icon-sign-symbol-logo-design-free-vector.jpg"
                  alt="profile picture"
                />
              </div>
              <div>
                <a href="#">Nome Cognome</a>
                <p>TUTTECOSE</p>
                <Button className='addBtn'>
                  <i className="bi bi-person-plus-fill"></i> Collegati
                </Button>
              </div>
            </div>
          </ListGroup.Item>
        </ListGroup>
        <div>
          <Button className="showBtn">Mostra tutto</Button>
        </div>
      </Card>
    </Container>
  );
}

export default LinkedinAside;
