import { Container, Button } from "react-bootstrap";
import AddPostModal from "./AddPostModal";

function AddPostSection() {
  return (
    <>
      <Container id="addPostSection" className="rounded bg-dark my-5 p-3 d-flex flex-column">
        <div className="d-flex gap-2">
          <div>
            <img
              className="rounded-circle smallPic"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJBSetR7qpei5_qAWAdynAQxq_aYTpzLywSBTVc4MgTg&s"
            />
          </div>
          <div>
            <Button id="addPostBtn">Avvia un post</Button>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <div>
            <Button className="addContentBtn">
              <i className="bi bi-card-image"></i> Contenuti multimediali
            </Button>
          </div>
          <div>
            <Button className="addContentBtn">
              <i className="bi bi-calendar2-week"></i> Evento
            </Button>
          </div>
          <div>
            <Button className="addContentBtn">
              <i className="bi bi-layout-text-window-reverse"></i> Scrivi un articolo
            </Button>
          </div>
        </div>
      </Container>
      <AddPostModal />
    </>
  );
}

export default AddPostSection;
