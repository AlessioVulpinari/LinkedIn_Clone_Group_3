import { Container, Button } from "react-bootstrap"
import AddPostModal from "./AddPostModal"
import { useSelector } from "react-redux"

function AddPostSection() {
  const myProfile = useSelector((state) => state.profile.content)
  return (
    <>
      <Container id='addPostSection' className='rounded bg-dark p-3 d-flex flex-column'>
        <div className='d-flex gap-2'>
          <div>
            <img className='rounded-circle smallPic' src={myProfile && myProfile.image} />
          </div>
          <div className='w-100'>
            <Button id='addPostBtn'>Avvia un post</Button>
          </div>
        </div>
        <div className='d-flex justify-content-between mt-3'>
          <div>
            <Button className='addContentBtn'>
              <i className='bi bi-card-image'></i> Contenuti multimediali
            </Button>
          </div>
          <div>
            <Button className='addContentBtn'>
              <i className='bi bi-calendar2-week'></i> Evento
            </Button>
          </div>
          <div>
            <Button className='addContentBtn'>
              <i className='bi bi-layout-text-window-reverse'></i> Scrivi un articolo
            </Button>
          </div>
        </div>
      </Container>
      <AddPostModal />
    </>
  )
}

export default AddPostSection
