import { Button, Container } from "react-bootstrap";

function SingleComment() {
  return (
    <>
      <Container>
        <div className="d-flex gap-1 align-items-start">
          <img
            className="rounded-circle commentPic"
            src="https://www.asiagofood.it/wp-content/uploads/2022/09/funghi-porcini-si-possono-coltivare-copertina-750x600-1.jpg"
            alt="profile image"
          />
          <div>
            <div className="comment rounded p-2 mb-1">
              <div className="d-flex justify-content-between">
                <a href="#">Nome Cognome</a>
                <p className="text-secondary">Data</p>
              </div>
              <p className="text-secondary">Ruolo</p>
              <p className="mt-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis excepturi atque incidunt saepe amet
                doloribus praesentium! Asperiores quod velit est?
              </p>
            </div>
            <Button className="commentBtn">Consiglia</Button>
            <Button className="commentBtn">Rispondi</Button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default SingleComment;
