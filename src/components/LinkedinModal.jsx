import { Button, Modal, Form, FormText } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import {
  SET_FORM_AREA,
  SET_FORM_BIO,
  SET_FORM_EMAIL,
  SET_FORM_NAME,
  SET_FORM_SURNAME,
  SET_FORM_TITLE,
  SET_FORM_USERNAME,
  SET_PROFILE_MODAL_OFF,
  changeMyProfile,
} from "../redux/actions"

function LinkedinModal() {
  const dispatch = useDispatch()
  const active = useSelector((state) => state.profileModal.active)
  const formName = useSelector((state) => state.profileModal.name)
  const formSurname = useSelector((state) => state.profileModal.surname)
  const formEmail = useSelector((state) => state.profileModal.email)
  const formUsername = useSelector((state) => state.profileModal.username)
  const formBio = useSelector((state) => state.profileModal.bio)
  const formTitle = useSelector((state) => state.profileModal.title)
  const formArea = useSelector((state) => state.profileModal.area)
  const myProfile = useSelector((state) => state.profile.content)

  return (
    <>
      <Modal className='dark-modal' show={active} onHide={() => dispatch({ type: SET_PROFILE_MODAL_OFF })}>
        <Modal.Header closeButton closeVariant='white'>
          <Modal.Title>Modifica presentazione</Modal.Title>
        </Modal.Header>
        <Modal.Body className='overflow-y-scroll' style={{ height: "700px" }}>
          <Form id='profileModal'>
            <Form.Text muted>
              <p className='mb-3'>* Indica che è obbligatorio</p>
            </Form.Text>
            <Form.Group className='mb-3' controlId='nameControlInput'>
              <Form.Label>Nome*</Form.Label>
              <Form.Control
                type='text'
                required
                value={formName && formName}
                onChange={(e) => dispatch({ type: SET_FORM_NAME, payload: e.target.value })}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='surnameControlInput'>
              <Form.Label>Cognome*</Form.Label>
              <Form.Control
                type='text'
                required
                value={formSurname && formSurname}
                onChange={(e) => dispatch({ type: SET_FORM_SURNAME, payload: e.target.value })}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='titleControlInput'>
              <Form.Label>Titolo*</Form.Label>
              <Form.Control
                type='text'
                required
                value={formTitle && formTitle}
                onChange={(e) => dispatch({ type: SET_FORM_TITLE, payload: e.target.value })}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='emailControlInput'>
              <Form.Label>Email*</Form.Label>
              <Form.Control
                type='email'
                required
                value={formEmail && formEmail}
                onChange={(e) => dispatch({ type: SET_FORM_EMAIL, payload: e.target.value })}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='usernameControlInput'>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type='text'
                value={formUsername && formUsername}
                onChange={(e) => dispatch({ type: SET_FORM_USERNAME, payload: e.target.value })}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='bioTextArea'>
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                value={formBio && formBio}
                onChange={(e) => dispatch({ type: SET_FORM_BIO, payload: e.target.value })}
              />
            </Form.Group>
            <FormText>
              <h4>Località</h4>
            </FormText>
            <Form.Group className='mb-3' controlId='areaControlInput'>
              <Form.Label>Paese/Area geografica*</Form.Label>
              <Form.Control
                type='text'
                value={formArea && formArea}
                onChange={(e) => dispatch({ type: SET_FORM_AREA, payload: e.target.value })}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='capControlInput'>
              <Form.Label>CAP</Form.Label>
              <Form.Control type='text' disabled />
            </Form.Group>
            <Form.Group className='mb-3' controlId='cityControlnput'>
              <Form.Label>Città</Form.Label>
              <Form.Control type='text' disabled />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            id='saveBtn'
            type='button'
            className='px-3'
            onClick={() =>
              dispatch(
                changeMyProfile({
                  _id: myProfile._id,
                  name: formName,
                  surname: formSurname,
                  email: formEmail,
                  username: formUsername,
                  title: formTitle,
                  bio: formBio,
                  area: formArea,
                })
              )
            }
          >
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default LinkedinModal
