import { Container, Button, Form, InputGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

function AddCommentSection() {
  const myProfile = useSelector((state) => state.profile.content);
  return (
    <>
      <Container className="rounded bg-dark p-3 d-flex flex-column mb-3">
        <div className="d-flex gap-1 align-items-center">
          <div>
            <img className="rounded-circle commentPic" src={myProfile && myProfile.image} />
          </div>
          <div className="w-100 d-flex gap-1 align-items-center justify-content-between">
            <InputGroup variant="dark">
              <Form.Control className="addComment" type="text" placeholder="Aggiungi un commento..." />
              <Button className="commentBtns">
                <i className="bi bi-emoji-dizzy"></i>
              </Button>
              <Button className="commentBtns">
                <i className="bi bi-card-image"></i>
              </Button>
            </InputGroup>
          </div>
        </div>
      </Container>
    </>
  );
}

export default AddCommentSection;
