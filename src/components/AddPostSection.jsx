import { Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { SET_POST_MODAL_ON } from "../redux/actions";

function AddPostSection() {
  const myProfile = useSelector((state) => state.profile.content);
  const dispatch = useDispatch();
  return (
    <>
      <Container id="addPostSection" className="rounded bg-dark p-3 d-flex flex-column mb-3">
        <div className="d-flex gap-2">
          <div>
            <img className="rounded-circle smallPic" src={myProfile && myProfile.image} />
          </div>
          <div className="w-100">
            <Button id="addPostBtn" type="button" onClick={() => dispatch({ type: SET_POST_MODAL_ON })}>
              Avvia un post
            </Button>
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
    </>
  );
}

export default AddPostSection;
