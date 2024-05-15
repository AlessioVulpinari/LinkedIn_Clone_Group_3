import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const NewsSidebar = () => {
  return (
    <Card className="bg-dark text-light news-container">
      <Card.Body className="p-0 pt-3 pb-3">
        <Card.Title className="d-flex justify-content-between px-4">
          <h1 className="fs-5">LinkedIn notizie</h1>
          <span>
            <i className="bi bi-info-square-fill" style={{ fontSize: "smaller" }}></i>
          </span>
        </Card.Title>
        <h3 className="fs-6 px-4 text-secondary">Storie principali</h3>
        <div className="card-text">
          <ul className="mt-2 mb-1 list-unstyled ">
            <li className="d-flex py-1 px-4">
              <span style={{ fontSize: "smaller" }} className="text-truncate">
                <div className="m-0 fw-semibold">Top Voices Lavoro: 6 temi da approfondire</div>
                <div className="text-secondary">17 ore fa</div>
              </span>
            </li>
            <li className="d-flex py-1 px-4">
              <span style={{ fontSize: "smaller" }} className="text-truncate">
                <div className="m-0 fw-semibold">Aziende che assumono nel 2024</div>
                <div className="text-secondary">20 ore fa</div>
              </span>
            </li>
            <li className="d-flex py-1 px-4">
              <span style={{ fontSize: "smaller" }} className="text-truncate">
                <div className="m-0 fw-semibold">Come migliorare il proprio profilo LinkedIn</div>
                <div className="text-secondary">1 giorno fa </div>
              </span>
            </li>
            <li className="d-flex py-1 px-4">
              <span style={{ fontSize: "smaller" }} className="text-truncate">
                <div className="m-0 fw-semibold">Nuove competenze richieste nel mercato del lavoro</div>
                <div className="text-secondary">2 giorni fa</div>
              </span>
            </li>
            <li className="d-flex py-1 px-4">
              <span style={{ fontSize: "smaller" }} className="text-truncate">
                <div className="m-0 fw-semibold">Eventi di networking da non perdere</div>
                <div className="text-secondary">3 giorni fa</div>
              </span>
            </li>
          </ul>
        </div>
        <div className="d-flex justify-content-center">
          <Button variant="outline-secondary" className="border-0">
            Vedi altro <i className="bi bi-arrow-down-short"></i>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default NewsSidebar;
