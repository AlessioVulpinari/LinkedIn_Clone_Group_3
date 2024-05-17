import { Button, Modal, Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { SET_MODAL_TEXT, SET_POST_MODAL_OFF, newPost } from "../redux/actions"

function AddPostModal() {
  const dispatch = useDispatch()
  const active = useSelector((state) => state.postModal.active)
  const text = useSelector((state) => state.postModal.text)
  return (
    <>
      <Modal id='addPostModal' className='dark-modal' show={active} onHide={() => dispatch({ type: SET_POST_MODAL_OFF })}>
        <Modal.Header closeButton closeVariant='white'></Modal.Header>
        <Modal.Body style={{ height: "400px" }}>
          <div className='d-flex flex-column justify-content-between'>
            <Form className='text-light'>
              <Form.Group className='mb-3' controlId='addPostControlTextarea'>
                <Form.Control
                  as='textarea'
                  placeholder='Di cosa vorresti parlare?'
                  rows={5}
                  value={text}
                  onChange={(e) => dispatch({ type: SET_MODAL_TEXT, payload: e.target.value })}
                />
              </Form.Group>
            </Form>
            <div>
              <a href='#a'>
                <i className='bi bi-emoji-dizzy'></i>
              </a>
            </div>
            <div className='d-flex gap-5'>
              <a href='#b'>
                <i className='bi bi-card-image'></i>
              </a>
              <a href='#c'>
                <i className='bi bi-calendar2-week'></i>
              </a>
              <a href='#d'>
                <i className='bi bi-award'></i>
              </a>
              <a href='#e'>
                <i className='bi bi-plus-lg'></i>
              </a>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className='rounded-circle' id='addBtn'>
            <i className='bi bi-clock'></i>
          </Button>
          <Button id='saveBtn' className='px-3' onClick={() => dispatch(newPost({ text: text }))}>
            Pubblica
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddPostModal
