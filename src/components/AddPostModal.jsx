import { Button, Modal, Form, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { SET_MODAL_TEXT, SET_POST_MODAL_OFF, newPost } from "../redux/actions";

function AddPostModal() {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.postModal.active);
  const text = useSelector((state) => state.postModal.text);
  return (
    <>
      <Modal
        id="addPostModal"
        className="dark-modal"
        show={active}
        onHide={() => dispatch({ type: SET_POST_MODAL_OFF })}
      >
        <Modal.Header closeButton closeVariant="white" className="align-items-start">
          <Dropdown className="mt-3">
            <Dropdown.Toggle
              variant="outline"
              id="dropdown-basic"
              className="d-flex align-items-center gap-2 text-light modalDropdown"
            >
              <div className="d-flex gap-2 align-items-center">
                <img
                  className="profilePicPost rounded-circle"
                  src="https://www.donnad.it/sites/default/files/styles/r_visual_d/public/201936/Sognare-gattini-piccoli.jpg?itok=yX04jVWk"
                  alt="profile image"
                />
                <div className="textAlign">
                  <h5> Nome Cognome</h5>
                  <p>Pubblica: Chiunque</p>
                </div>
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
              <Dropdown.Item href="#">Chi può vedere i tuoi post?</Dropdown.Item>
              <Dropdown.Item href="#">Controllo dei commenti</Dropdown.Item>
              <Dropdown.Item href="#">Partnership del brand</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Modal.Header>
        <Modal.Body style={{ height: "400px" }}>
          <div className="d-flex flex-column justify-content-between">
            <Form className="text-light">
              <Form.Group className="mb-3" controlId="addPostControlTextarea">
                <Form.Control
                  className="textArea"
                  as="textarea"
                  autoFocus
                  placeholder="Di cosa vorresti parlare?"
                  rows={9}
                  value={text}
                  onChange={(e) => dispatch({ type: SET_MODAL_TEXT, payload: e.target.value })}
                />
              </Form.Group>
            </Form>
            <div>
              <a href="#a">
                <i className="bi bi-emoji-dizzy"></i>
              </a>
            </div>
            <div className="d-flex gap-5">
              <a href="#b">
                <i className="bi bi-card-image"></i>
              </a>
              <a href="#c">
                <i className="bi bi-calendar2-week"></i>
              </a>
              <a href="#d">
                <i className="bi bi-award"></i>
              </a>
              <a href="#e">
                <i className="bi bi-plus-lg"></i>
              </a>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="rounded-circle" id="addBtn">
            <i className="bi bi-clock"></i>
          </Button>
          <Button id="saveBtn" className="px-3" onClick={() => dispatch(newPost({ text: text }))}>
            Pubblica
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddPostModal;
