import { Button, Modal, Form, FormText } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  RESET_FORM_EXPERIENCE_MODAL,
  SET_EXPERIENCE_AREA,
  SET_EXPERIENCE_COMPANY,
  SET_EXPERIENCE_DESCRIPTION,
  SET_EXPERIENCE_END_DATE,
  SET_EXPERIENCE_MODAL_OFF,
  SET_EXPERIENCE_ROLE,
  SET_EXPERIENCE_START_DATE,
  modifyProfileExperience,
  postProfileExperience,
} from "../redux/actions";

function ExpModal() {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.reducerModal.active);
  const selectedExperience = useSelector((state) => state.reducerModal);

  // const option = { dateStyle: "short" }

  const handleModalOnClose = () => {
    dispatch({ type: SET_EXPERIENCE_MODAL_OFF });
    dispatch({ type: RESET_FORM_EXPERIENCE_MODAL });
  };

  return (
    <>
      <Modal className="dark-modal" show={active} onHide={() => handleModalOnClose()}>
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title>Aggiungi esperienza</Modal.Title>
        </Modal.Header>
        <Modal.Body className="overflow-y-scroll" style={{ height: "700px" }}>
          <Form id="expModal">
            <Form.Text muted>
              <p className="mb-3 text-light">* Indica che è obbligatorio</p>
            </Form.Text>
            <Form.Group className="mb-3" controlId="roleExpInput">
              <Form.Label>Ruolo*</Form.Label>
              <Form.Control
                type="text"
                required
                value={selectedExperience && selectedExperience.role}
                onChange={(e) => dispatch({ type: SET_EXPERIENCE_ROLE, payload: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="companyExpInput">
              <Form.Label>Nome azienda*</Form.Label>
              <Form.Control
                type="text"
                required
                value={selectedExperience && selectedExperience.company}
                onChange={(e) => dispatch({ type: SET_EXPERIENCE_COMPANY, payload: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="startDateExpInput">
              <Form.Label>Data di inizio*</Form.Label>
              <Form.Control
                type="date"
                required
                value={selectedExperience && selectedExperience.startDate.split("T")[0]}
                onChange={(e) => dispatch({ type: SET_EXPERIENCE_START_DATE, payload: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="endDateExpInput">
              <Form.Label>Data di fine*</Form.Label>
              <Form.Control
                type="date"
                required
                value={selectedExperience && selectedExperience.endDate.split("T")[0]}
                onChange={(e) => dispatch({ type: SET_EXPERIENCE_END_DATE, payload: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="descriptionExpInput">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={selectedExperience && selectedExperience.description}
                onChange={(e) => dispatch({ type: SET_EXPERIENCE_DESCRIPTION, payload: e.target.value })}
              />
            </Form.Group>
            <FormText>
              <h4 className="text-light">Località</h4>
            </FormText>
            <Form.Group className="mb-3" controlId="areaExpInput">
              <Form.Label>Paese/Area geografica*</Form.Label>
              <Form.Control
                type="text"
                required
                value={selectedExperience && selectedExperience.area}
                onChange={(e) => dispatch({ type: SET_EXPERIENCE_AREA, payload: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="capExpInput">
              <Form.Label>CAP</Form.Label>
              <Form.Control type="text" disabled />
            </Form.Group>
            <Form.Group className="mb-3" controlId="cityExpInput">
              <Form.Label>Città*</Form.Label>
              <Form.Control type="text" disabled />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {selectedExperience.expId ? (
            <Button
              id="saveBtn"
              className="px-3"
              onClick={() => dispatch(modifyProfileExperience("6641c494167e530015fa697f", selectedExperience))}
            >
              Salva modifiche
            </Button>
          ) : (
            <Button
              id="saveBtn"
              className="px-3"
              onClick={() =>
                dispatch(
                  postProfileExperience("6641c494167e530015fa697f", {
                    role: selectedExperience.role,
                    company: selectedExperience.company,
                    startDate: selectedExperience.startDate,
                    endDate: selectedExperience.endDate,
                    description: selectedExperience.description,
                    area: selectedExperience.area,
                  })
                )
              }
            >
              Salva
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ExpModal;
