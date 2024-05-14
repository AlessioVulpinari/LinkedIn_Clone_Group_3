import { useState } from "react";
import { Button, Modal, Form, FormText } from "react-bootstrap";

function LinkedinModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      <i className='bi bi-pencil'></i>Prof
      </Button>
      <Modal className="dark-modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica presentazione</Modal.Title>
        </Modal.Header>
        <Modal.Body className="overflow-y-scroll" style={{height:"700px"}}>
          <Form id="profileModal">
            <Form.Text muted>
              <p className="mb-3">* Indica che è obbligatorio</p>
            </Form.Text>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nome*</Form.Label>
              <Form.Control type="text" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Cognome*</Form.Label>
              <Form.Control type="text" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email*</Form.Label>
              <Form.Control type="email" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Bio</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <FormText>
              <h4>Località</h4>
            </FormText>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Paese/Area geografica*</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>CAP</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Città*</Form.Label>
              <Form.Control type="text" required/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button id='saveBtn' className="px-3" onClick={handleClose}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LinkedinModal;
